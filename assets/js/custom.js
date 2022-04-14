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

let localApi = 'http://localhost';
let productionApi = 'https://customtwemojiapi.com';
let randomFaceEndpoint = '/v1/custom_faces/random?file_format=svg&background_color=transparent';

function getRandomFace() {
  toggleSpinner(true);
  document.getElementById('endpoint').innerHTML = randomFaceEndpoint;

  let apiEndpoint = `${productionApi}${randomFaceEndpoint}`;

  getJSON(
    apiEndpoint,
    function(error, response) {
      if (error !== null) {
        console.error(`Something went wrong: ${error}`);
      } else {
        let svgDiv = document.getElementById('random-twemoji');
        if (svgDiv !== null) svgDiv.innerHTML = response.data;

        let output = document.getElementById('output');
        if (output !== null) output.innerHTML = response.links.self.replace(productionApi, '');

        toggleSpinner(false);
      }
    }
  );
}

function downloadFaceAsPng(size) {
  toggleSpinner(true);

  let output = document.getElementById('output');
  if (output === null) {
    console.error('Output is empty');
    return;
  }

  let endpointUrl = output.innerText;
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

window.onload = function() {
  // document.getElementById('custom-faces-icon').src = '/icons/custom-cat.svg'
  if (window.location.href.includes('/random-face/')) {
    getRandomFace();
  }
}
