#   mofron-comp-header
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 header component for mofron

This component for placing at the top of the page etc. and displaying the site title etc.

## Feature
 - A header's child components are placed horizontally since header has a horizon layout.
## Attention
 - it maybe needs a 'false' config at bind parameter that used as a child component.

# Install
```
npm install mofron   mofron-comp-header
```

# Sample
```html
<require>
    <tag load="mofron-comp-header">Header</tag>
    <tag load="mofron-comp-text">Text</tag>
</require>

<Header color2="#f0e6fa">
    <Text>Header</Text>
    <Text>Component</Text>
</Header>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | height | string (size) | header height (default is "0.5rem") |
| | | option | style option |
| | bind | boolean | true: header position is fixed. display header even if user scrolls. (default) |
| | | | false: header position is not fixed. |
| | mainColor | mixed (color) | string: border bottom color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | stye option |

