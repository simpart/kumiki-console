# mofron-comp-text
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

text component for mofron


# Install
```
npm install mofron mofron-comp-text
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
</setting>
<Text size="0.4rem" font="serif" space="0.1rem">text component</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: text value |
| | | | undefined: call as getter |
| | toString | ||| | size | mixed | string (size): text size |
| | | | undefined: call as getter |
| | | key-value | style option [not required] |
| | height | mixed | string (size): text size |
| | | | undefined: call as getter |
| | | key-value | style option [not required] |
| | mainColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option [not required] |
| | font | mixed | string: font name (variable arguments) |
| | | | undefined: call as getter |
| | space | mixed | string(size): spacing size |
| | | | undefined: call as getter |
| | | key-value | style option [not required] |
| | weight | mixed | number: thickness value [100-900] |
| | | | null: delete thickness |
| | | | undefined: call as getter |
| | | key-value | style option [not required] |

