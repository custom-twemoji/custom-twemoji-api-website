+++
title = "<img class='emoji' src='/icons/custom-cat.svg'></img>&nbsp;&nbsp;Custom Faces Endpoints"
weight = 2
[arguments]
  fileLink = "content/docs/custom-faces/csv/GET.csv"
  columnTitles = [
    "Name",
    ["Required", "center"],
    "Type",
    "Default"
  ]
  baseChartOn = 2
  title = "Arguments for /custom_faces endpoints"
[file_format_svg]
  fileLink = "content/docs/custom-faces/csv/GET file_format=svg.csv"
  columnTitles = ["Argument", "Default"]
  baseChartOn = 2
  title = "Defaults for file_format=svg"
[file_format_png]
  fileLink = "content/docs/custom-faces/csv/GET file_format=png.csv"
  columnTitles = ["Argument", "Default"]
  baseChartOn = 2
  title = "Defaults for file_format=png"
[background_color]
  fileLink = "content/docs/custom-faces/csv/GET background_color.csv"
  columnTitles = ["Type", "Example"]
  baseChartOn = 2
  title = "Accepted formats for background_color"
+++

Custom faces are Twemojis supported as faces that are combined to create new, unique emojis.

Learn more about supported faces via the [`/faces` endpoints](/docs/faces/).

## Arguments

{{< block >}}
  {{< chart "arguments" "table" >}}
{{< /block >}}

## Emoji Formats

A number of different formats are supported for passing in emojis to promote ease of use.

- glyph: 🙂
- case insensitive codepoint: `1f642` or `U+1f642`
- number representation: `128578`

## Facial Features

Facial feature are passed in as keys with emojis as their values. Each feature is a layer and the order in which they're stacked impacts what will be seen or hidden in its final visual form.

To specify a custom stacking order, pass in the key-value pair <span id="order">`order=manual`</span> anywhere in the request. The stacking will follow the order the parameters are passed in, with the first parameter being at the bottom.

## Example

Features:

- the eyes of [263a](https://unicode-table.com/en/263A) ☺️
- the mouth of [2639](https://unicode-table.com/en/2639/) ☹️
- the eyewear of [1f978](https://unicode-table.com/en/1F978/) 🥸
- everything else of [1f47f](https://unicode-table.com/en/1F47F/) 👿

Request:

```txt
/v1/custom_faces/1f47f?eyes=263a&mouth=2639&eyewear=1f978
```

A base emoji is required, but any feature can be excluded by passing in the parameter as `false` or empty.

```txt
# Head empty, no thoughts
/v1/custom_faces/1f47f?head=&mouth=2639

# Head false, headless horseman
/v1/custom_faces/1f47f?head=false&mouth=2639
```

To move the eyes to be above the eyewear, add in `order=manual` and move `eyes` before `eyewear` in the request.

```txt
/v1/custom_faces/1f47f?mouth=2639&eyewear=1f978&eyes=263a&order=manual
```

## Output

- JSON (`output=json`)
  - Main response listed under `data`
  - Licensing information and `links` are also included
- image (`output=image`)
- download (`output=download`)
  - The default name of the file returned is the emoji described in key-value pairs
  - The equals signs (`=`) and ampersands (`&`) are replaced with a minus sign (`-`) and these characters `_-_`

    Example Request:

    ```txt
    /v1/custom_faces/263a?file_format=png&output=download
    ```

    File returned: `base-263a.png`

  - To specify a custom filename on download, use the <span id="filename">`filename` argument</span>

    Example Request:

    ```txt
    /v1/custom_faces/263a?file_format=png&output=download&filename=amazing_emoji
    ```

    File returned: `amazing_emoji.png`

## File Format

File format refers to the type of image that is generated. Changing this argument changes other argument defaults.

### SVG (`file_format=svg`)

{{< block >}}
  {{< chart "file_format_svg" "table,noFilter" >}}
{{< /block >}}

### PNG (`file_format=png`)

{{< block >}}
  {{< chart "file_format_png" "table,noFilter" >}}
{{< /block >}}

## Renderer

When querying for a PNG, a renderer is used. The default is imagemagick, but canvg is also available for browser usage returning content-type `text/html`.

## Size

Specify the size of the output in pixels with an integer (e.g. `size=500`). It will always be a square so height and width are equal.

## Padding

Add padding between the emoji and the edge of the output. Specify the number of pixels of the padding with an integer (e.g. `padding=100`).

This reduces the size of the emoji, but not the `size` of the output. So in the case of `size=500&padding=100` the output will be 500px and the emoji 300px, since the padding is applied on all sides.

## Background Color

Specify a background color with a string (e.g. `background_color=red`). Formats supported:

{{< block >}}
  {{< chart "background_color" "table,noFilter" >}}
{{< /block >}}
