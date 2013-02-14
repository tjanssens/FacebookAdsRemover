// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
var hideAds = true;
chrome.browserAction.setBadgeBackgroundColor({ color: [0, 200, 0, 100] });
chrome.browserAction.setBadgeText({ text: String(0) });

chrome.browserAction.onClicked.addListener(function (tab) {
    hideAds = !hideAds;
    Hide()
});

window.setInterval(function () {
    Hide()
}, 1000);

function Hide() {
    if (hideAds) {

        chrome.tabs.executeScript(null, { file: "scripts/jquery-1.9.1.min.js" }, function () {
            chrome.tabs.executeScript(null, { file: "scripts/hideAds.js" }, function () {
                chrome.tabs.executeScript(null, { code: "HideAds(true);" }, function (data) {
                    if (data > 0) {
                        chrome.browserAction.setBadgeBackgroundColor({ color: [0, 200, 0, 100] });
                        chrome.browserAction.setBadgeText({ text: String(data) });
                    } else {
                        chrome.browserAction.setBadgeText({ text: String(0) });
                    }
                    
                })
            });
        });
    } else {
        chrome.tabs.executeScript(null, { file: "scripts/jquery-1.9.1.min.js" }, function () {
            chrome.tabs.executeScript(null, { file: "scripts/hideAds.js" }, function () {
                chrome.tabs.executeScript(null, { code: "HideAds(false);" }, function (data) {
                    chrome.browserAction.setBadgeBackgroundColor({ color: [200, 0, 0, 100] });
                    chrome.browserAction.setBadgeText({ text: String(0) });
                })
            });
        });
    }
}
