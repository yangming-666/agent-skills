# Dota 2 Panorama XML Layout Reference

Panorama XML defines the UI structure. It uses a subset of standard HTML/XML but introduces many custom tags optimized for game UI.

## Root Structure

- `<root>`: The mandatory top-level tag.
- `<styles>`: Block for including CSS files via `<include src="..." />`.
- `<scripts>`: Block for including JS files via `<include src="..." />`.
- `<snippets>`: Definitions for reusable UI chunks (Templates).
- `<Panel>`: The default container, similar to `<div>`.

## Custom Dota 2 Tags

### General UI
- `Panel`: Base container. Use `hittest="false"` to make it click-through.
- `Label`: Text container. Use `text="#key"` for localization. Supports `html="true"`.
- `Image`: Displays textures. Supports `src="s2r://..."` or `src="file://{images}/..."`.
- `Button`: A panel that captures clicks. Common classes: `ButtonPrimary`, `ButtonSecondary`.
- `TextButton`: A button with a built-in label.
- `ToggleButton`: A checkbox-style button.

### Dota Specific
- `DOTAAvatarImage`: Displays player steam avatars. Needs `steamid`.
- `DOTAUserName`: Displays player steam names. Needs `steamid`.
- `DOTAHeroImage`: Displays hero portraits. Needs `heroname`.
- `DOTAAbilityImage`: Displays ability icons. Needs `abilityname`.
- `DOTAItemImage`: Displays item icons. Needs `itemname`.
- `DOTAScenePanel`: Renders a 3D scene (VPK map or model).
- `DOTAParticleScenePanel`: Renders particles in UI.
- `DOTACrownfallButton`: Modern styled buttons from Crownfall event.

## Attributes & Events

- `id`: Unique identifier for JS selection.
- `class`: CSS class.
- `hittest`: `true` (default) or `false`.
- `onactivate`: Dispatched on click/enter.
- `onmouseover` / `onmouseout`: Hover events.
- `onload`: Dispatched when the panel is created.

## Snippets & Dynamic Loading

Snippets allow you to define a template once and instantiate it many times.

```xml
<snippets>
    <snippet name="PlayerRow">
        <Panel class="PlayerRow">
            <DOTAAvatarImage id="Avatar" />
            <Label id="Name" text="{s:player_name}" />
        </Panel>
    </snippet>
</snippets>
```

In JS:
```javascript
var panel = $.CreatePanel("Panel", parent, "");
panel.BLoadLayoutSnippet("PlayerRow");
```
