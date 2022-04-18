+++
title = "GET `/custom_faces/random`"
weight = 3
[arguments]
  fileLink = "content/docs/custom-faces/csv/GET random.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "GET /custom_faces/random arguments"
+++

Use this endpoint to randomly combine face Twemojis. This differs from `/mashup` in that it is feature-first and offers less control over emoji selection.

{{< tip >}}
Check out the [live demo](/live-demos/random-face/)
{{< /tip >}}

## Arguments

{{< block >}}
  {{< chart "arguments" "table,noFilter" >}}
{{< /block >}}

Other arguments are available to all [`/custom_faces` endpoints](/docs/custom-faces/).

### Facial Features

Specify the likelihood of each feature appearing in the output:

- `1.0` guarantees it will be present
- `0.0` guarantees it will not be present

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/custom_faces/random
```

Response:

```json
{
  ...
  "data": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" width=\"100%\">\n  <rect width=\"100%\" height=\"100%\" fill=\"\"/>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"emoji\" height=\"100%\" width=\"100%\" x=\"0\" y=\"0\" viewBox=\"0 0 36 36\">\n  <circle fill=\"#FFCC4D\" cx=\"18\" cy=\"18\" r=\"18\" id=\"1f913-head-0\" class=\"1f913 head\"/><circle cx=\"9.5\" cy=\"7.5\" r=\"3.5\" fill=\"#5B6876\" id=\"1f31a-cheeks-1\" class=\"1f31a cheeks\"/><circle cx=\"24.5\" cy=\"28.5\" r=\"3.5\" fill=\"#5B6876\" id=\"1f31a-cheeks-2\" class=\"1f31a cheeks\"/><circle cx=\"22\" cy=\"5\" r=\"2\" fill=\"#5B6876\" id=\"1f31a-cheeks-3\" class=\"1f31a cheeks\"/><circle cx=\"3\" cy=\"18\" r=\"1\" fill=\"#5B6876\" id=\"1f31a-cheeks-4\" class=\"1f31a cheeks\"/><circle cx=\"30\" cy=\"9\" r=\"1\" fill=\"#5B6876\" id=\"1f31a-cheeks-5\" class=\"1f31a cheeks\"/><circle cx=\"16\" cy=\"31\" r=\"1\" fill=\"#5B6876\" id=\"1f31a-cheeks-6\" class=\"1f31a cheeks\"/><circle cx=\"32\" cy=\"19\" r=\"2\" fill=\"#5B6876\" id=\"1f31a-cheeks-7\" class=\"1f31a cheeks\"/><circle cx=\"6\" cy=\"26\" r=\"2\" fill=\"#5B6876\" id=\"1f31a-cheeks-8\" class=\"1f31a cheeks\"/><path fill=\"#664500\" d=\"M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5S12.526 27.835 12.515 27.878999999999998C12.462 28.092 12.559000000000001 28.31 12.747 28.423 12.935 28.534999999999997 13.18 28.508999999999997 13.343 28.363 13.352 28.355 14.356 27.5 18 27.5 21.59 27.5 22.617 28.33 22.656 28.363 22.750999999999998 28.453 22.875 28.5 23 28.5 23.084 28.5 23.169 28.479 23.246 28.436 23.442 28.324 23.54 28.097 23.485 27.879Z\" id=\"1f626-mouth-3\" class=\"1f626 mouth\"/><ellipse fill=\"#664500\" cx=\"11.5\" cy=\"14.5\" rx=\"2.5\" ry=\"3.5\" id=\"2639-eyes-1\" class=\"2639 eyes\"/><ellipse fill=\"#664500\" cx=\"24.5\" cy=\"14.5\" rx=\"2.5\" ry=\"3.5\" id=\"2639-eyes-2\" class=\"2639 eyes\"/><circle fill=\"#F4F7F9\" cx=\"24.882\" cy=\"14.294\" r=\"6.882\" id=\"1f9d0-eyewear-2\" class=\"1f9d0 eyewear\"/><path fill=\"#292F33\" d=\"M32.824 36C32.239 36 31.764999999999997 35.526 31.764999999999997 34.941V14.824C31.764999999999997 14.239 32.239 13.765 32.824 13.765S33.882999999999996 14.239 33.882999999999996 14.824V34.942C33.882 35.526 33.409 36 32.824 36Z\" id=\"1f9d0-eyewear-4\" class=\"1f9d0 eyewear\"/><path fill=\"#67757F\" d=\"M32.824 12.706C32.769999999999996 12.706 32.719 12.718 32.666 12.722 31.933999999999997 9.094 28.722999999999995 6.353 24.881999999999998 6.353 20.503 6.353 16.941 9.915 16.941 14.294S20.503 22.235 24.881999999999998 22.235C28.349999999999998 22.235 31.298 19.997 32.378 16.892 32.522 16.923 32.67 16.941 32.823 16.941 33.993 16.941 34.941 15.992999999999999 34.941 14.822999999999999 34.941 13.653999999999998 33.993 12.706 32.824000000000005 12.706Z M24.881999999999998 20.118C21.671 20.118 19.058999999999997 17.506 19.058999999999997 14.293999999999999S21.671999999999997 8.469999999999999 24.881999999999998 8.469999999999999C28.092999999999996 8.469999999999999 30.705999999999996 11.081999999999999 30.705999999999996 14.293999999999999S28.092999999999996 20.118 24.881999999999998 20.118Z\" id=\"1f9d0-eyewear-5\" class=\"1f9d0 eyewear\"/><path d=\"M28.049 9.411C27.137 8.818 26.051 8.471 24.881999999999998 8.471 21.665999999999997 8.471 19.058 11.078 19.058 14.295 19.058 15.464 19.406 16.55 19.998 17.462L28.049 9.411Z\" fill=\"#BDDDF4\" id=\"1f9d0-eyewear-8\" class=\"1f9d0 eyewear\"/><path d=\"M22.397 19.555C23.151999999999997 19.912 23.991999999999997 20.118 24.881999999999998 20.118 28.098 20.118 30.705999999999996 17.511 30.705999999999996 14.293999999999999 30.705999999999996 13.403999999999998 30.499999999999996 12.562999999999999 30.142999999999997 11.809L22.397 19.555Z\" fill=\"#BDDDF4\" id=\"1f9d0-eyewear-9\" class=\"1f9d0 eyewear\"/></svg>\n</svg>",
  "links": {
    "self": "https://customtwemojiapi.com/v1/custom_faces/1f913?cheeks=1f31a&mouth=1f626&nose=&eyes=2639&eyewear=1f9d0&headwear=&other="
  },
  ...
}
```
