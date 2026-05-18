# mofron-event-mouseover
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

mous-over event for mofron

this event notifies when the mouse hovers on the component.

## event function parameter

- component: event target component object

- event: "mouseover" event object by addEventListener

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-mouseover
```

# Sample
```html
<require>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-event-mouseover">Mover</tag>
</require>
<script name=mevt run=init>
    console.log("mouse over");
</script>

<Frame event=Mover:@mevt></Frame>
```
