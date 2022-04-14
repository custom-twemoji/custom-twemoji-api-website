---
title: Live Demo
weight: 1
---

{{< display-spinner >}}

{{% center %}}
<b>Endpoint</b>
<pre tabindex="0" class="chroma single_line"><code id="endpoint" class="language-txt" data-lang="txt"></code></pre>
{{% /center %}}

<br><br>

<div
  id="random-twemoji"
  style="width:100%; height:500px"
  onload="loadRandomFace();"
></div>

<br><br>

{{% center %}}
<b>Output</b>
<pre tabindex="0" class="chroma single_line"><code id="output" class="language-txt" data-lang="txt"></code></pre>
{{% /center %}}

<br>

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
