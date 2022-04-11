---
title: Live Demo
weight: 1
---

{{< display-spinner >}}

{{% center %}}
Endpoint: <code id="endpoint"></code>
{{% /center %}}

<br>

<div
  id="random-twemoji"
  style="width:100%; height:500px"
  onload="loadRandomFace();"
></div>

<br>

{{% center %}}
  Output: <code id="output"></code>
{{% /center %}}

{{% center %}}
<p>
  <a
    href=""
    class="button secondary"
    onClick="
      getRandomFace();
      return false;
    ">
    🔄&nbsp;&nbsp;Generate Another
  </a>
</p>

or download this one as a PNG

<p style="text-align: center; display: inline-grid;">
  <a
    href=""
    class="button"
    onClick="
      downloadFaceAsPng(2000);
      return false;
    ">
    ✨&nbsp;&nbsp;High Resolution
  </a>
  <a
    href=""
    class="button primary"
    style="background-color: var(--theme); "
    onClick="
      downloadFaceAsPng();
      return false;
    ">
    #️⃣&nbsp;&nbsp;Sized for Slack
  </a>
</p>
{{% /center %}}
