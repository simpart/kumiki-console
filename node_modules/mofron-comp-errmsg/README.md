# mofron-comp-errmsg
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

error message component

message component with default mainColor config


# Install
```
npm install mofron mofron-comp-errmsg
```

# Sample
```html
<setting>
    <tag load="mofron-comp-errmsg">ErrMsg</tag>
</setting>

<script run=after>
emsg.visible(true);
</script>

<ErrMsg name=@emsg>error message</ErrMsg>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: error message string |
| | | | moforn-comp-text: error message text component |
| | | | undefined: call as getter |

