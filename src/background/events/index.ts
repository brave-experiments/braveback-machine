/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { shouldRedirectUsers } from '../actions'
import { statusCode } from '../../utils/statusUtils'

chrome.webRequest.onHeadersReceived.addListener(details => {
  if (!statusCode.includes(details.statusCode)) {
    return
  }

  chrome.tabs.query({}, tabs => {
    chrome.tabs.insertCSS(details.tabId, { file: 'css/banner.css' })
    chrome.tabs.executeScript(details.tabId, { file: 'js/content.bundle.js', runAt: 'document_end' }, () => {
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
