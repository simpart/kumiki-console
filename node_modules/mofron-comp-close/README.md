# mofron-comp-close
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

close component for mofron

## Feature
 - target component is invisible when a close component is clicked.

# Install
```
npm install mofron mofron-comp-close
```

# Sample
```html
<setting>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-comp-close">Close</tag>
    <tag load="mofron-effect-hrzpos">Hrzpos</tag>
</setting>

<Frame name=frame>
    <Close effect=Hrzpos:"right" close-tgt=@frame></Close>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | closeTgt | mixed | string: component object key |
| | | | mofron.class.Component: close target component |
| | | | undefined: call as getter |
| | closeComp | mofron.class.Component | close component |
| | | | undefined: call as getter |
| | height | string(size) | height size |
| | | | undefined: call as getter |
| | | key-value | style option  |
| | width | string(size) | width size |
| | | | undefined: call as getter |
| | | key-value | style option |
| | mainColor | mixed(color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: call as getter |
| | | key-value | style option |
| | accentColor | mixed(color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: call as getter |
| | | key-value | style option |

