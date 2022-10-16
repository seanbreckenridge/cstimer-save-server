// ==UserScript==
// @name           CSTimer Auto Download
// @namespace      https://greasyfork.org/en/users/96096
// @match          https://cstimer.net/*
// @grant          none
// @version        0.1
// @author         Sean Breckenridge
// @description    Companion script for cstimer-save-server to update a local file with my cstimer.net solves
// @license        GPL3
// ==/UserScript==

(() => {
  const PORT = 8553;

  async function runExport() {
    return storage.exportAll().then(function (exportObj) {
      exportObj["properties"] = mathlib.str2obj(localStorage["properties"]);
      return JSON.stringify(exportObj);
    });
  }

  runExport().then((data) =>
    fetch(`http://127.0.0.1:${PORT}`, { method: "post", body: data })
  );
})();
