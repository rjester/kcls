// Copyright (C) Microsoft Corporation. All rights reserved.
(function () {
    "use strict";

    // Start executing after the DOM is loaded.
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            document.getElementById("link").onclick = showAlert;
        }
    };

    function showAlert() {
        alert("Welcome to Pure HTML!");
    };
}());