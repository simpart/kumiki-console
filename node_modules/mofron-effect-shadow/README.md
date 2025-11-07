# mofron-effect-shadow
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

shadow effect for mofron

this effect makes the component has a shadow.

## Feature
 - the size changes according to the value of the 'value' parameter.
 - the blur percentage changes according to the value of the 'blur' parameter.

# Install
```
npm install mofron mofron-effect-shadow
```

# Sample
```html
<setting>
    <tag load="mofron-effect-shadow">Shadow</tag>
</setting>

<div size=(1rem,1rem)>
    <effect>
        <Shadow blur=0.05rem>0.02rem</Shadow>
    </effect>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | value | string (size) | shadow size (css value) |
| | blur | string (size) | blur size value |
| ◯  | color | string (size) | shadow color (css value) |

