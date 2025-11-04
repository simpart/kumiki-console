# mofron-event-link
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

enable link to target component

## event function parameter

- component: event target component object

- event: "click" event object by addEventListener

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-link
```

# Sample
```html
<setting>
    <tag load="mofron-comp-image">Image</tag>
    <tag load="mofron-event-link">Link</tag>
</setting>

<Image event=Link:("https://mofron.github.io/mofron/",true)>./logo.png</Image>

```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | url | string | jump url (default is './') |
| ◯  | newtab | boolean | true: jump to url by newtab (default) |
| | | | false: jump to url by current tab |

