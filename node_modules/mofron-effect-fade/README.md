# mofron-effect-fade
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

fade effect for mofron


# Install
```
npm install mofron mofron-effect-fade
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-fade">Fade</tag>
</setting>

<Text size=1rem effect=Fade(true,1000)>
Fade Effect
</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | value | boolean | true: fade-in effect |
| | | | false: fade-out effect |

