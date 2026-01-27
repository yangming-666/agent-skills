---
name: dota2-panorama
description: Specialized guidance for creating and modifying Dota 2 Panorama UI. Use when the user asks to build UI components, styles, or logic for Dota 2 custom games. Covers XML layout, CSS styling (Dota 2 specific), and Javascript Panorama API.
---

# Dota 2 Panorama UI Skill

This skill provides specialized knowledge for developing UI in Dota 2 using the Panorama framework. Panorama is a XML/CSS/JS-based framework but has its own tags, properties, and APIs distinct from standard web development.

## Core Components

- **Layout (XML)**: Defines the hierarchy and structure of the UI.
- **Styles (CSS)**: Defines the visual appearance using Dota 2's specific CSS engine.
- **Scripts (JS)**: Handles logic and interaction using the Panorama Javascript API.

## Progressive Disclosure

For detailed information on specific areas, refer to:

- **XML Layout**: See [references/xml.md](references/xml.md) for custom tags and structural patterns.
- **CSS Styling**: See [references/css.md](references/css.md) for Dota 2 specific properties like `wash-color` and `flow-children`.
- **Javascript API**: See [references/js.md](references/js.md) for Panorama specific objects ($, GameEvents, CustomNetTables).
- **Best Practices**: See [references/best-practices.md](references/best-practices.md) for architecture, optimization, and project structure.

## Quick Start Template

Every Panorama XML should follow this basic structure:

```xml
<root>
    <styles>
        <include src="s2r://panorama/styles/dotastyles.vcss_c" />
        <include src="file://{resources}/styles/custom_game/my_style.css" />
    </styles>
    <scripts>
        <include src="file://{resources}/scripts/custom_game/my_script.js" />
    </scripts>
    <Panel class="MyRoot">
        <Label id="MyLabel" text="#my_localization_key" />
        <Button class="ButtonPrimary" onactivate="OnButtonClick()">
            <Label text="Click Me" />
        </Button>
    </Panel>
</root>
```

## Common Triggers

- "Create a new UI panel for X"
- "Add a button to the shop UI"
- "Change the color of this label when hovered"
- "Sync data from Lua to Panorama"
- "Make a list of players in the UI"
