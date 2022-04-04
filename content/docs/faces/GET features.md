+++
title = "GET `/faces/features`"
weight = 2
[arguments]
  fileLink = "content/docs/faces/csv/GET faces features.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "GET /faces/features arguments"
+++

Use this endpoint to view the layers of Twemojis that are supported as faces indexed by features.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

## Example

Request:

```curl
curl https://customtwemojiapi.com/v1/faces/features
```

Response:

```json
{
  ...
  "data": {
    "2639": {
      "head": [
        0
      ],
      "eyes": [
        1,
        2
      ],
      "mouth": [
        3
      ]
    },
    "1f383": {
      "head": [
        0
      ],
      "headwear": [
        1
      ],
      "nose": [
        2
      ],
      "mouth": [
        3
      ],
      "eyes": [
        4,
        5
      ]
    },
    ...
  },
  ...
}
```
