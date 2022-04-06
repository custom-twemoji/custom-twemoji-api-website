---
title: Random Face
weight: 1
---

{{< display-spinner >}}

{{% center %}}
Endpoint: <code>/v1/faces/random?output=image&file_format=svg&background_color=transparent</code>
{{% /center %}}

<br>

<div
  id="random-twemoji"
  style="width:100%; height:500px"
  onload="loadRandomFace();"
></div>

<br>

<p style='text-align: center;'>
  Output: <code id="output"></code>
</p>

{{% center %}}
<p class="button_grid" style="text-align: center; display: inline-grid;"><a
  href=""
  class="button"
  onClick="
    downloadFaceAsPng(output);
    return false;
  ">
  💾&nbsp;&nbsp;Download PNG
</a><a
  href=""
  class="button"
  onClick="
    getRandomFace();
    return false;
  ">
  🔄&nbsp;&nbsp;Generate Another
</a></p>
{{% /center %}}
