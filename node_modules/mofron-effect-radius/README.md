# mofron-effect-radius
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

radius effect for mofron

this effect makes the components of outside rounded style


# Install
```
npm install mofron mofron-effect-radius
```

# Sample
```html
<setting>
    <tag load="mofron-comp-button">Button</tag>
    <tag load="mofron-effect-radius">Radius</tag>
</setting>
<Button effect=Radius("0.1rem")>Radius Effect<Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | value | string (size) | radius size |
| | position | mixed | array: position list |
| | | | string: target position ("top-left","top-right","bottom-left","bottom-right") |

