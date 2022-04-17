+++
title = "GET `/custom_faces/mashup`"
weight = 3
[arguments]
  fileLink = "content/docs/custom-faces/csv/GET mashup.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "GET /custom_faces/mashup arguments"
+++

Use this endpoint to combine two or more face Twemojis.

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

Other arguments are available to all [`/custom_faces` endpoints](/docs/custom-faces/).

### Amount

Specify how many face Twemojis should be considered.

- If it is more than the number of `emojis` passed in, a random one is added
- If it is less than the number of `emojis` passed in, a random one is removed

### Use Every Feature

Specify if the mashup algorithm should maximize the number of features included.

#### Example

Combining two emojis. The first has a `head` and `eyes`. The second has a `mouth` and `nose`.

Case: `use_every_feature=true`

- The same face Twemoji will be output every time, containing the `head`, `eyes`, `mouth`, and `nose`; the two share none of the same features and all of the possible features are used

- If they both had `eyes`, then the output would randomly switch between the two `eyes` with all of the other features staying the same

Case: `use_every_feature=false`

- The output will vary as different features will be randomly included or excluded each time

### Facial Features

Specify the likelihood of each feature appearing in the output:

- `1.0` means it will be present if any emoji being mashed up has the feature
- `0.0` guarantees it will not be present

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/custom_faces/mashup?emojis=👽,😏
```

Response:

```json
{
  ...
  "data": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" width=\"100%\">\n  <rect width=\"100%\" height=\"100%\" fill=\"\"/>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"emoji\" height=\"100%\" width=\"100%\" x=\"0\" y=\"0\" viewBox=\"0 0 36 36\">\n  <path fill=\"#CCD6DD\" d=\"M35 17C35 26.389 21.777 36 18 36 14.222 36 1 26.389 1 17S8.611 0 18 0 35 7.611 35 17Z\" id=\"1f47d-head-0\" class=\"1f47d head\"/><path fill=\"#664500\" d=\"M24.327 23.622C24.174000000000003 23.49 23.959000000000003 23.463 23.776000000000003 23.553L19.776000000000003 25.553C17.905000000000005 26.488 13.049000000000003 26.5 13.000000000000004 26.5 12.724000000000004 26.5 12.500000000000004 26.724 12.500000000000004 27 12.500000000000004 27.185 12.601000000000004 27.347 12.750000000000004 27.433V27.434H12.751000000000003V27.435000000000002C12.822000000000003 27.475 12.904000000000003 27.498 12.991000000000003 27.500000000000004H19.999000000000002C22.657000000000004 27.500000000000004 24.088 25.315000000000005 24.474000000000004 24.158000000000005 24.538000000000004 23.966000000000005 24.480000000000004 23.755000000000006 24.327000000000005 23.622000000000003Z\" id=\"1f60f-mouth-1\" class=\"1f60f mouth\"/></svg>\n</svg>",
  "links": {
    "self": "https://customtwemojiapi.com/v1/custom_faces/1f47d?cheeks=&mouth=1f60f&nose=&eyes=&eyewear=&headwear=&other="
  },
  ...
}
```
