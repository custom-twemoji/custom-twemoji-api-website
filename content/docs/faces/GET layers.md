+++
title = "GET `/faces/layers`"
weight = 3
[arguments]
  fileLink = "content/docs/faces/csv/GET faces layers.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  # number of column the chart(s) and graph should be drawn from
  # can be overridden directly via shortcode parameter
  # it's therefore optional
  baseChartOn = 2
  title = "GET /faces/layers arguments"
+++

Use this endpoint to view the features of Twemojis that are supported as faces indexed by layers.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/faces/layers
```

Response:

```json
{
  ...
  "data": {
    "2639": {
      "0": "head",
      "1": "eyes",
      "2": "eyes",
      "3": "mouth"
    },
    "1f383": {
      "0": "head",
      "1": "headwear",
      "2": "nose",
      "3": "mouth",
      "4": "eyes",
      "5": "eyes"
    },
    ...
  },
  ...
}
```
