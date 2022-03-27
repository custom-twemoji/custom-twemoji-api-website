+++
title = "GET /faces"
weight = 2
[dataset2]
  fileLink = "content/docs/faces/GET faces.csv"
  columnTitles = ["Name", "Required", "Type", "Default"]
  # number of column the chart(s) and graph should be drawn from
  # can be overridden directly via shortcode parameter
  # it's therefore optional
  baseChartOn = 2
  title = "GET /faces arguments"
+++

Use this endpoint to find which Twemojis are supported as faces. Knowing whether a Twemoji is supported as a face can help you submit other requests that don't fail.

## Arguments

{{< block >}}
  {{< chart "dataset2" "table,noFilter" >}}
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
