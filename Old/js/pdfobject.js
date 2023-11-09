/**
 *  PDFObject v2.2.4
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2020 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.PDFObject=t()}(this,function(){"use strict";if("undefined"==typeof window||window.navigator===undefined||window.navigator.userAgent===undefined||window.navigator.mimeTypes===undefined)return!1;let e="2.2.3",t=window.navigator,n=window.navigator.userAgent,o="ActiveXObject"in window,i=window.Promise!==undefined,r=t.mimeTypes["application/pdf"]!==undefined,d=t.platform!==undefined&&"MacIntel"===t.platform&&t.maxTouchPoints!==undefined&&t.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(n),s=!d&&t.vendor!==undefined&&/Apple/.test(t.vendor)&&/Safari/.test(n),a=!(d||!/irefox/.test(n))&&parseInt(n.split("rv:")[1].split(".")[0],10)>18,f=function(e){var t;try{t=new ActiveXObject(e)}catch(n){t=null}return t},l=!d&&(a||r||o&&function(){return!(!f("AcroPDF.PDF")&&!f("PDF.PdfCtrl"))}()),p=function(e){let t,n="";if(e){for(t in e)e.hasOwnProperty(t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");n&&(n=(n="#"+n).slice(0,n.length-1))}return n},u=function(e,t){return t||console.log("[PDFObject] "+e),!1},c=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},m=function(e){let t=document.body;return"string"==typeof e?t=document.querySelector(e):window.jQuery!==undefined&&e instanceof jQuery&&e.length?t=e.get(0):e.nodeType!==undefined&&1===e.nodeType&&(t=e),t},b=function(e,t,n,o,i,r){c(e);let d=o+"?file="+encodeURIComponent(t)+n,s=document.createElement("div"),a=document.createElement("iframe");return a.src=d,a.className="pdfobject",a.type="application/pdf",a.frameborder="0",i&&(a.id=i),r||(s.style.cssText="position: absolute; top: 0; right: 0; bottom: 0; left: 0;",a.style.cssText="border: none; width: 100%; height: 100%;",e.style.position="relative",e.style.overflow="auto"),s.appendChild(a),e.appendChild(s),e.classList.add("pdfobject-container"),e.getElementsByTagName("iframe")[0]},y=function(e,t,n,o,i,r,d,s,a){c(t);let f=document.createElement(e);if(f.src=o+i,f.className="pdfobject",f.type="application/pdf",s&&(f.id=s),!a){let t="embed"===e?"overflow: auto;":"border: none;";n&&n!==document.body?t+="width: "+r+"; height: "+d+";":t+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",f.style.cssText=t}return t.classList.add("pdfobject-container"),t.appendChild(f),t.getElementsByTagName(e)[0]},h=function(e,t,n){let o=t||!1,r=n||{},a="string"==typeof r.id?r.id:"",f=r.page||!1,c=r.pdfOpenParams||{},h=r.fallbackLink||!0,w=r.width||"100%",g=r.height||"100%",P="boolean"!=typeof r.assumptionMode||r.assumptionMode,v="boolean"==typeof r.forcePDFJS&&r.forcePDFJS,T="boolean"==typeof r.supportRedirect&&r.supportRedirect,D="boolean"==typeof r.omitInlineStyles&&r.omitInlineStyles,F="boolean"==typeof r.suppressConsole&&r.suppressConsole,j="boolean"==typeof r.forceIframe&&r.forceIframe,C=r.PDFJS_URL||!1,I=m(o),x="",A="",R="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";if("string"!=typeof e)return u("URL is not valid",F);if(!I)return u("Target element cannot be determined",F);if(f&&(c.page=f),A=p(c),v&&C)return b(I,e,A,C,a,D);if(l||P&&i&&!d){return y(j||T&&s?"iframe":"embed",I,t,e,A,w,g,a,D)}return C?b(I,e,A,C,a,D):(h&&(x="string"==typeof h?h:R,I.innerHTML=x.replace(/\[url\]/g,e)),u("This browser does not support embedded PDFs",F))};return{embed:function(e,t,n){return h(e,t,n)},pdfobjectversion:e,supportsPDFs:l}});