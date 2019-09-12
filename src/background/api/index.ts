/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Sets the badge text
 * @param {string} text - The text to put on the badge
 */
export function updateURL (tabId: number, url: string) {
  chrome.tabs.update(tabId, {
    url: chrome.extension.getURL(url)
  })
}
