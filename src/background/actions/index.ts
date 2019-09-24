/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { isEmpty } from '../../utils'
import { updateURL } from '../api'

export function shouldRedirectUsers (tabId: number, url: string) {
   const waybackMachineURL: string = `https://archive.org/wayback/available?url=${url}`
   window.fetch(waybackMachineURL)
     .then(response => response.json())
     .then(data => {
       if (!isEmpty(data.archived_snapshots)) {
        const closestArchivedUrl: string = data.archived_snapshots.closest.url
        updateURL(tabId, closestArchivedUrl)
       } else {
         // the wayback machine has no records of this website,
         // in this case we redirect to our custom URL
         // TODO: we need a proper spec for this
         const defaultPage: string = '../no-archive.html'
         updateURL(tabId, defaultPage)
         console.info('Redirected to Brave\'s 404 page: no archived version of this page is available')
       }
     })
     .catch(error => console.error('Unable to fetch the archived version of this page. Reason:', error))
 }
