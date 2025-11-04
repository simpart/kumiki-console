# mofron-effect-border
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

border effect for mofron

set border style to target component


# Install
```
npm install mofron mofron-effect-border
```

# Sample
```html
<require>
    <tag load="mofron-effect-border">Border</tag>
</require>
<div size=(1rem,1rem) effect=Border()></div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | width | string | css value of border width |
| | style | string | css value of border style (default is 'solid') |
| | | | 'none', 'hidden', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'dashed', 'dotted' |
| | position | string | border target position (default is 'all') |
| | | | 'all', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right' |
| ◯  | color | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |

