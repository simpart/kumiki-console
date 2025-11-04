# mofron-effect-width
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

width effect for mofron


# Install
```
npm install mofron mofron-effect-width
```

# Sample
```html
<setting>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-effect-hrzpos">HrzPos</tag>
    <tag load="mofron-effect-width">eWidth</tag>
</setting>

<Frame size=(0%,0.03rem) base-color=[100,100,255]>
    <effect>
        <HrzPos>center</HrzPos>
        <eWidth eid=3 speed=500>0%,65%</eWidth>
    </effect>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | fromValue | size | start width |
| | toValue | size | end width |

