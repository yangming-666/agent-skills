# Dota 2 Panorama CSS Styling Reference

Panorama CSS is a proprietary engine that supports a large subset of CSS3 plus game-specific extensions.

## Core Layout Properties

- **Flow**: `flow-children: down | right | right-wrap`. This is the primary way to stack children.
- **Alignment**:
  - `horizontal-align: left | center | right`.
  - `vertical-align: top | center | bottom`.
  - `align: center center`: Shorthand for both.
- **Sizing**: `width`, `height`, `min-width`, `max-height`.
- **Special Units**: `fill-parent-flow(weight)` (similar to flex-grow).

## Visual Effects (Game Specific)

Panorama provides powerful filters that don't exist in standard CSS.

- `wash-color: #RRGGBBAA`: Multiplies the color of the panel and all children.
- `saturation: 0.0 to 1.0`: Desaturates the panel.
- `brightness: 0.0 to X`: Adjusts brightness.
- `contrast: 0.0 to X`: Adjusts contrast.
- `blur: gaussian(1px, 1px, 1)`: Applies blur.
- `text-shadow`: `X offset, Y offset, Blur radius, Border width, Color`. Note the extra "Border width" parameter.

## Backgrounds & Borders

- `background-color: gradient(linear, 0% 0%, 0% 100%, from(#color1), to(#color2))`.
- `background-image: url("s2r://panorama/images/...")`.
- `border-radius: Xpx`.
- `box-shadow`: Supports `fill` keyword to fill the shadow inside.

## Transitions & Animations

- `transition-property`: `opacity, transform, wash-color, etc`.
- `transition-duration`: `0.2s`.
- `transition-timing-function`: `ease-in-out, linear`.
- `animation-name`: Standard keyframe animations.
- `animation-duration`, `animation-iteration-count`.

## Pseudo-classes

- `:hover`: Mouse over.
- `:active`: Mouse down.
- `:selected`: When `SetPanelSelected(true)` is called.
- `:disabled`: When `enabled="false"`.

## Best Practices

- Use `horizontal-align` and `vertical-align` instead of `margin: auto`.
- Use `flow-children` for lists instead of absolute positioning.
- Prefer `wash-color` for state changes (e.g., dimming a disabled button) instead of changing multiple properties.
