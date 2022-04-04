+++
title = "GET `/faces`"
weight = 1
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

Use this endpoint to find which Twemojis are supported as faces. Knowing whether a Twemoji is supported as a face can help you submit other requests that don't fail.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

## Example

Request:

```curl
curl https://customtwemojiapi.com/v1/faces
```

Response:

```json
{
  ...
  "data": [
    "1f383",
    "1f479",
    "1f47b",
    ...
  ],
  ...
}
```
