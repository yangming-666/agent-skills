---
name: dota2-ability
description: Specialized guidance for creating and modifying Dota 2 hero abilities and modifiers in the DotA_Awaken project. Focuses on replicating original C++ skills in Lua, modifying mechanics/values, and adding unique effects. Trigger when the user asks to implement new abilities, modify existing ones, or needs help with the "awakening" packaging system.
---

# Dota 2 Ability Development (Lua Replication & Enhancement)

This skill provides guidance for developing hero abilities and modifiers within the `DotA_Awaken` project. The primary focus is replicating vanilla Dota 2 C++ skills in Lua to allow for deep modification of mechanisms, values, and the addition of custom special effects.

## Core Concepts

- **Lua Replication**: Many abilities are rewritten from C++ to Lua to enable custom logic that isn't possible through KV (KeyValues) alone.
- **Mechanism Modification**: Beyond just changing numbers, you can alter how skills function (e.g., making a single-target spell AOE, or adding new interaction logic).
- **Special Effects**: Adding unique visual or gameplay effects that aren't in the original game.
- **Awakening System**: In this project, "Awakening" serves as a packaging wrapper to provide progressive power-ups (enhanced values/mechanics) as game difficulty increases.

## Workflows

### Replicating & Modifying an Ability

1.  **Analyze the Original**: Understand the base behavior of the C++ ability.
2.  **Lua Implementation**: Create the ability and its modifiers in Lua.
3.  **Inject Enhancements**: Add custom effects or mechanism changes.
4.  **Wrap in Awakening**: Use the project's awakening system to provide scaled versions of these enhancements.

See [patterns.md](references/patterns.md) for Lua replication patterns and effect hooks.

### Implementing Enhancements (Awakening)

To "awaken" an ability (expose its enhancements):

1.  Inherit your modifier from `modifier_base_awakening`.
2.  Expose the enhanced values/mechanisms through `GetModifierOverrideAbilitySpecialValue`.
3.  Scale the power of these enhancements based on `GameRules:GetCustomGameDifficulty()`.

See [awakening.md](references/awakening.md) for details on using awakening as an enhancement wrapper.

## Reference Materials

- [Patterns & Replication](references/patterns.md) - Replicating C++ behavior, adding effects, and common logic.
- [Awakening Wrapper](references/awakening.md) - How to wrap and scale your enhancements.

## Tips for Claude

- **Deep Replication**: When replicating, ensure you handle all original events (cast, hit, unit-specific logic).
- **Effect Hooks**: Use modifier events (like `OnAttackLanded`, `OnAbilityExecuted`) to "hook" custom effects onto existing actions.
- **Scaling**: Always consider how your "new" mechanism should scale with difficulty via the awakening wrapper.
