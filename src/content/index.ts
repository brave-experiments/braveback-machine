/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image404 from '../img/404-image.svg'

const image = chrome.extension.getURL(Image404)
var div = document.createElement('div')
div.className = 'banner-wayback-machine-banner'
div.innerHTML = `
  <div>
    <img class="image-wayback-machine-banner" src="${image}">
  </div>
  <div>
    <strong>${chrome.i18n.getMessage('bannerText')}</strong> ${chrome.i18n.getMessage('bannerTextDescription')}
  </div>
  <div>
    <button id='action' class="button-wayback-machine-banner">${chrome.i18n.getMessage('bannerButton')}</button>
    <button id='close' class="close-button-wayback-machine-banner">&times;</button>
  </div>
`
document.body.appendChild(div)

const button = document.getElementById('action') as HTMLElement
const close = document.getElementById('close') as HTMLElement

if (button) {
  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ authorizeRedirect: true })
  })
}

if (close) {
  close.addEventListener('click', () => {
    div.classList.add('hidden')
  })
}
