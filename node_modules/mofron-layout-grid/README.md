# mofron-layout-grid
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

grid layout for mofron

it makes component size to a specified size, and positions by horizontal.

when it positioned at the horizontal end, it turns back on the left side and positions under its.

## Attention
 - please specify either the ratio parameter or the width parameter
 - it gives priority to ratio parameter if users specified both

# Install
```
npm install mofron mofron-layout-grid
```

# Sample
```html
<setting>
    <tag load="mofron-layout-grid">Grid</tag>
</setting>
<div>
    <layout>
        <Grid height=1rem>[25,40,35]</Grid>
    </layout>
    <div color2=[250,230,230]></div>
    <div color2=[230,250,230]></div>
    <div color2=[230,230,250]></div>
    <div color2=[240,220,220]></div>
    <div color2=[220,240,220]></div>
    <div color2=[220,220,240]></div>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | ratio | array | units width ratio [number,number,..] |
| | width | array | width size for grid target [string,string,..] |
| | height | string (size) | height size for grid target |

