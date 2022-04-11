+++
title = "GET `/faces`"
weight = 2
[arguments]
  fileLink = "content/docs/faces/csv/GET faces.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "GET /faces arguments"
+++

Use this endpoint to find which Twemojis are supported as faces. Knowing whether a Twemoji is supported as a face can help in formulating other requests that don't fail.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/faces
```

Response:

```json
{
  ...
  "data": {
    "14.0.0": {
      "1f979": {
        "0": "head",
        "1": "mouth",
        "2": "headwear",
        ...
      }
    },
    ...
  },
  ...
}
```
