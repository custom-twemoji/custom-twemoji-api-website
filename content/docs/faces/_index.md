+++
title = "🙂&nbsp;&nbsp;Faces Endpoints"
weight = 1
[arguments]
  fileLink = "content/docs/faces/csv/index.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "GET /faces arguments"
+++

Faces are a subset of Twemojis specifically supported by the API. To be supported, the Twemoji is broken down into discrete layers and each manually labelled as a feature.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

## Features

1. head
1. cheeks
1. mouth
1. nose
1. eyes
1. eyewear
1. headwear
1. other

## Labeling

Deciding which feature to label a layer is subjective, especially with the inclusion of an `other` feature. For example, a layer with dimples could be commonly classified as part of the cheeks or the mouth.

It's also relevant to consider how the layer looks when combined with other Twemojis. To continue with the same example, if the layer with dimples is often hidden behind other `cheeks` layers when labeled as `mouth`, then it might be better to label it `cheeks` instead so it can be used more.

Layers may also be intentionally separated to create more pieces for mixing and matching. For example, eyebrows may be labeled as `headwear` instead of `eyes` because someone may want to use the eyebrows with another set of eyes, which would not be possible if the eyebrows were grouped with the eyes.

Because of these considerations, features may not be intuitive for every Twemoji you encounter and potentially not consistent when comparing between Twemojis.

If you feel strongly about changing a label, feel free to [raise an issue](https://github.com/custom-twemoji/custom-twemoji-api/issues/new).

## Indexing

Faces can be described in terms of `layers` or `features`. The default is `layers`. To index by `features`, pass it in as as string to the `index_by` parameter.

### Layers

Request:

```txt
/v1/faces/1f47b
```

Response:

```json
{
  ...
  "data": {
    "1f47b": {
      "0": "head",
      "1": "eyes",
      "2": "eyes",
      "3": "eyes",
      "4": "mouth"
    }
  },
  ...
}
```

### Features

Request:

```txt
/v1/faces/1f47b?index_by=features
```

Response:

```json
{
  ...
  "data": {
    "1f47b": {
      "head": [
        0
      ],
      "eyes": [
        1,
        2,
        3
      ],
      "mouth": [
        4
      ]
    }
  },
  ...
}
```
