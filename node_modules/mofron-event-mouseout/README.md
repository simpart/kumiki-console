# mofron-event-mouseout
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

mouse-out event for mofron

this event notifies when the mouse out on the component.

## event function parameter

- component: event target component object

- event: "mouseout" event object by addEventListener

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-mouseout
```

# Sample
```html
<require>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-event-mouseout">Mout</tag>
</require>
<script name=mevt run=init>
    console.log("mouse out");
</script>

<Frame event=Mout:@mevt></Frame>
```

