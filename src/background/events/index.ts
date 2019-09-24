/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { shouldRedirectUsers } from '../actions'
import { statusCode } from '../../utils'

chrome.webRequest.onHeadersReceived.addListener(details => {
  // only proceed this call if header response is something
  // we care about
  if (!statusCode.includes(details.statusCode)) {
    return
  }

  chrome.tabs.query({}, tabs => {
    // insert the CSS for the modal by injecting a stylesheet
    chrome.tabs.insertCSS(details.tabId, { file: 'css/banner.css' })
    // insert the JS code that generates the HTML for the modal by injecting a script
    chrome.tabs.executeScript(details.tabId, { file: 'js/content.bundle.js', runAt: 'document_end' }, () => {
      // listen to the button click thta will send the message
      // authorizing the page redirect
      chrome.runtime.onMessage.addListener(message => {
        if (message.authorizeRedirect) {
          return shouldRedirectUsers(details.tabId, details.url)
        }
      })
    })
  })
},
{
  urls: [ '<all_urls>' ],
  types: ['main_frame']
},
['blocking']
)
