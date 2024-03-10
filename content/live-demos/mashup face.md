---
title: Mashup Face
weight: 1
---

{{< display-spinner >}}

<br>

{{% center %}}
<h2>Endpoint</h2>
<pre tabindex="0" class="chroma single_line"><code id="endpoint" class="language-txt" data-lang="txt"></code></pre>
<a href="/docs/custom-faces/get-mashup/"><small>Docs</small></a>
{{% /center %}}

<br><br>

<div
  id="mashup-twemoji"
  style="width:100%; height:500px"
></div>

<br><br>

{{% center %}}
<b>Output</b>
<p id="mashup-custom-face-output-description"></p>
<pre tabindex="0" class="chroma single_line"><code id="mashup-custom-face-output-url" class="language-txt" data-lang="txt"></code></pre>
{{% /center %}}

<br>

{{% center %}}
<p>
  <a
    href=""
    class="button secondary"
    onClick="
      getMashupFace();
      return false;
    ">
    🔄&nbsp;&nbsp;Generate Another
  </a>
</p>

or download this one

<p style="text-align: center; display: inline-grid; grid-template-columns: none !important;">
  <a
    href=""
    class="button"
    style="background-color: var(--theme); color: var(--light);"
    onClick="
      downloadFaceAsPng(2000);
      return false;
    ">
    ✨&nbsp;&nbsp;High Resolution PNG
  </a>
  <a
    href=""
    class="button primary"
    style="background-color: var(--theme); color: var(--light);"
    onClick="
      downloadFaceAsPng();
      return false;
    ">
    #️⃣&nbsp;&nbsp;Sized for Slack PNG
  </a>
  <a
    href=""
    class="button"
    style="background-color: var(--theme); color: var(--light);"
    onClick="
      downloadFaceAsSvg();
      return false;
    ">
    📐&nbsp;&nbsp;SVG
  </a>
</p>
{{% /center %}}

<script>
  let localApi = 'http://localhost';
  let productionApi = 'https://customtwemojiapi.com';
  let mashupFaceEndpoint =
    '/v1/custom_faces/mashup?file_format=svg&background_color=transparent&use_every_feature=true';

  // Source: https://stackoverflow.com/a/35970894/5988852
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  // Source: https://stackoverflow.com/a/15832662/5988852
  function downloadURI(uri) {
    var link = document.createElement("a");
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

  function toggleSpinner(show) {
    let display = show ? 'block' : 'none';
    document.getElementById('cover-spinner').style.display = display;
  }

  function getMashupFace() {
    toggleSpinner(true);
    document.getElementById('endpoint').innerHTML = mashupFaceEndpoint;

    let apiEndpoint = `${productionApi}${mashupFaceEndpoint}`;

    getJSON(
      apiEndpoint,
      function(error, response) {
        if (error !== null) {
          console.error(`Something went wrong: ${error}`);
        } else {
          let svgDiv = document.getElementById('mashup-twemoji');
          if (svgDiv !== null) svgDiv.innerHTML = response.data.output;

          let outputUrl = document.getElementById('mashup-custom-face-output-url');
          if (outputUrl !== null) {
            outputUrl.innerHTML = response.links.self.replace(productionApi, '');
          }

          let outputDescription = document.getElementById('mashup-custom-face-output-description');
          if (outputDescription !== null) {
            let faces = {};

            response.data.description.forEach(descriptor => {
              const feature = descriptor.feature;
              const codepoint = descriptor.codepoint;
              const glyph = descriptor.glyph;
              const image = `<img draggable="false" class="emoji" alt="${glyph}" src="/twemoji/svg/${codepoint}.svg">`

              let face = faces[codepoint];
              if (faces[codepoint] == null) {
                faces[codepoint] = {
                  features: [feature],
                  image: image,
                };
              } else {
                faces[codepoint].features.push(feature);
              }
            });

            let description = '';

            Object.values(faces).forEach(descriptor => {
              let features = descriptor.features;
              let lastFeature = '';

              const separator = descriptor.features.length === 2 ? ' & ' : ', ';
              if (features.length > 2) lastFeature = `, and ${features.pop()}`;

              features = descriptor.features.join(separator);
              const image = descriptor.image;

              description +=
                `${description === '' ? '' : ' + '}${features}${lastFeature} from ${image}`;
            });

            outputDescription.innerHTML = description;
          }

          toggleSpinner(false);
        }
      }
    );
  }

  function downloadFaceAsPng(size) {
    toggleSpinner(true);

    let outputUrl = document.getElementById('mashup-custom-face-output-url');
    if (outputUrl === null) {
      console.error('Output is empty');
      return;
    }

    let endpointUrl = outputUrl.innerText;
    if (endpointUrl === null || endpointUrl === '') {
      console.error('endpointUrl is empty');
      return;
    }

    let apiEndpoint = `${productionApi}${endpointUrl}&output=download`;
    if (size) apiEndpoint += `&size=${size}`
    apiEndpoint = apiEndpoint.replace('file_format=svg', 'file_format=png');

    downloadURI(apiEndpoint);

    // Spinner with a hardcoded wait time is better than no loading indicator
    // No easy way to tell when a file a file can be downloaded: https://stackoverflow.com/questions/1106377/detect-when-a-browser-receives-a-file-download
    setInterval(
      () => {toggleSpinner(false)},
      5000
    );
  }

  function downloadFaceAsSvg() {
    toggleSpinner(true);

    const svg = document.getElementById('emoji');

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    const uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    const a = document.createElement('a');
    a.href = uri;
    a.download = 'myAwesomeSVG.svg';
    a.innerHTML = 'Download';
    document.body.appendChild(a);
    a.click();

    // Spinner with a hardcoded wait time is better than no loading indicator
    // No easy way to tell when a file a file can be downloaded: https://stackoverflow.com/questions/1106377/detect-when-a-browser-receives-a-file-download
    setInterval(
      () => {toggleSpinner(false)},
      5000
    );
  }

  window.onload = function() {
    getMashupFace();
  }
</script>
