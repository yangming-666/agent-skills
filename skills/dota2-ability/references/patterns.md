# Dota 2 Ability Code Patterns (Replication & Enhancement)

Common code patterns for replicating C++ abilities in Lua and adding custom enhancements.

## Replicating C++ Behavior in Lua

When replicating a C++ skill, you must handle the ability lifecycle and its modifiers carefully.

### Ability Interface
```lua
axe_culling_blade = class({})

function axe_culling_blade:OnSpellStart()
    local caster = self:GetCaster()
    local target = self:GetCursorTarget()
    -- Replicate the instant kill logic from C++
    local threshold = self:GetSpecialValueFor("kill_threshold")
    if target:GetHealth() <= threshold then
        target:Kill(self, caster)
        -- Custom logic: reset cooldown on kill
        self:EndCooldown()
    else
        -- Standard damage logic
    end
end
```

## Hooking into Vanilla Events for Special Effects

Use modifier events to add "hooks" for custom effects.

### Example: OnAttackLanded
```lua
function m_modifier_custom_effect:DeclareFunctions()
    return {
        MODIFIER_EVENT_ON_ATTACK_LANDED
    }
end

function m_modifier_custom_effect:OnAttackLanded(keys)
    if not IsServer() then return end
    if keys.attacker == self:GetParent() then
        -- Add a custom special effect on every attack
        local pfx = ParticleManager:CreateParticle("particles/custom_spark.vpcf", PATTACH_ABSORIGIN_FOLLOW, keys.target)
        ParticleManager:ReleaseParticleIndex(pfx)
        
        -- Add a custom mechanism (e.g., mana drain)
        keys.target:ReduceMana(10)
    end
end
```

## Modifying Mechanisms

Instead of just changing values, change the *behavior*.

### Example: Making a Single-Target Ability AOE
```lua
function custom_ability:OnSpellStart()
    local caster = self:GetCaster()
    local target = self:GetCursorTarget()
    local radius = self:GetSpecialValueFor("aoe_radius")
    
    local units = FindUnitsInRadius(...)
    for _, unit in pairs(units) do
        -- Apply the original effect to everyone in the radius
        self:ApplyEffectToTarget(unit)
    end
end
```

## Common Modifier Helpers
- `Init_skill_modifier(data)`: For passive skill modifiers.
- `Init_buff_modifier(data)`: For positive status effects.
- `Init_debuff_modifier(data)`: For negative status effects.
