/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export const statusCode: Array<any> = [
  404, 408, 410, 451, 500,
  502, 503, 504, 509, 520,
  521, 523, 524, 525, 526
]





// function wmAvailabilityCheck (url, onsuccess, onfail) {
//   var xhr = new window.XMLHttpRequest()
//   var requestUrl = 'https://archive.org/wayback/available'
//   var requestParams = 'url=' + encodeURI(url)
//   xhr.open('POST', requestUrl, true)
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//   xhr.setRequestHeader('Wayback-Api-Version', 2)
//   xhr.onload = function () {
//     var response = JSON.parse(xhr.responseText)
//     var waybackURL = getWaybackUrlFromResponse(response)
//     if (waybackURL !== null) {
//       onsuccess(waybackURL, url)
//     } else if (onfail) {
//       onfail()
//     }
//   }
//   xhr.send(requestParams)
// }

// function isValidUrl (url) {
//   return ((typeof url) === 'string' &&
//     (url.indexOf('http://') === 0 || url.indexOf('https://') === 0))
// }

// // List of excluded Urls
// var excludedURLs = [
//   'localhost',
//   '0.0.0.0',
//   '127.0.0.1',
//   'chrome://',
//   'chrome://newtab',
//   'chrome.google.com/webstore',
//   'chrome-extension://'
// ]
// // Function to check whether it is a valid URL or not
// function isNotExcludedUrl (url) {
//   for (var i = 0, len = excludedURLs.length; i < len; i++) {
//     if (url.startsWith('http://' + excludedURLs[i]) || url.startsWith('https://' + excludedURLs[i]) || url.startsWith(excludedURLs[i])) {
//       return false
//     }
//   }
//   return true
// }

// function getWaybackUrlFromResponse (response) {
//   if (response.results &&
//     response.results[0] &&
//     response.results[0].archived_snapshots &&
//     response.results[0].archived_snapshots.closest &&
//     response.results[0].archived_snapshots.closest.available &&
//     response.results[0].archived_snapshots.closest.available === true &&
//     response.results[0].archived_snapshots.closest.status.indexOf('2') === 0 &&
//     isValidUrl(response.results[0].archived_snapshots.closest.url)) {
//     return response.results[0].archived_snapshots.closest.url.replace(/^http:/, 'https:')
//   } else {
//     return null
//   }
// }