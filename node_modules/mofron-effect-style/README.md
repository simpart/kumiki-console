# mofron-effect-style
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

style effect for mofron

it is possible to set style that work with some event by using 'eid' parameter.


# Install
```
npm install mofron mofron-effect-style
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-event-click">Click</tag>
    <tag load="mofron-effect-style">efStyle</tag>
</require>

<Text text="Style Effect">
    <effect>
        <efStyle eid=2>color:red;</efStyle>
    </effect>
    <event>
       <Click eid=2></Click>
    </event>
</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | style | mixed | string: style contents string |
| | | | key-value: style contents |
| ◯  | options | key-value | style option |

