---
title: Random Face
weight: 1
---

{{< display-spinner >}}

{{% center %}}
Endpoint: <code>{{< param randomFaceEndpoint >}}</code>
{{% /center %}}

<br><br>

<iframe
  id="random-twemoji"
  src="{{< param productionApi >}}{{< param randomFaceEndpoint >}}"
  title="Random Twemoji from Custom Twmoji API"
  width="100%"
  height="500px"
  frameBorder="0"
  onload="toggleSpinner(false)"
>
  Browser not compatible.
</iframe>

<br><br>

{{% center %}}
<a
  href=""
  class="button"
  onClick="
    document.getElementById('cover-spinner').style.display = 'block';
    document.getElementById('random-twemoji').src += '';
    return false;
  ">
  Again 🔄
</a>
{{% /center %}}
