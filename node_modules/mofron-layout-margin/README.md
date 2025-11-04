# mofron-layout-margin
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

margin layout of mofron

target child component is got margin style.


# Install
```
npm install mofron mofron-layout-margin
```

# Sample
```html
<setting>
    <tag load="mofron-layout-text">Text<tag>
    <tag load="mofron-layout-margin">Margin<tag>
</setting>

<div layout=Margin:(left,0.5rem)>
    <Text>Margin</Text>
    <Text>Layout</Text>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | type | string | margin type ('top', 'right', 'bottom', 'left') |
| | | | undefined: call as getter |
| ◯  | value | string(size) | margin size |
| | | | undefined: call as getter |

