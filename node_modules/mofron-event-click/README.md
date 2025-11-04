# mofron-event-click
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click event for mofron component

it executes an event function when the component is clicked

## event function parameter

- component: event target component object

- object: MouseEvent object of addEventListener

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-click
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-event-click">Click</tag>
</require>

<script name=clk run=init>
    alert("click");
</script>

<Text event=Click:@clk>Click</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | pointer | boolean | true: mouse-in cursor is pointer [default] |
| | | | false: mouse-in coursor is default |

