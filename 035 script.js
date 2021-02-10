"use strict";

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = "035.2 script.js";
    script.async = src;
    document.body.append(script);
}

loadScript("035.2 script.js");
