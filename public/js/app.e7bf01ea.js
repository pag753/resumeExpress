(function(e){function a(a){for(var s,i,n=a[0],o=a[1],c=a[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(a);while(m.length)m.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],s=!0,i=1;i<t.length;i++){var n=t[i];0!==r[n]&&(s=!1)}s&&(l.splice(a--,1),e=o(o.s=t[0]))}return e}var s={},i={app:0},r={app:0},l=[];function n(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-74844165":"36e857ea","chunk-7491b110":"bcfa5c9f","chunk-749b35f4":"361aefc3","chunk-749e249d":"b76d6157","chunk-74beb37f":"e8e30cea","chunk-74c29113":"2e2fb218"}[e]+".js"}function o(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var a=[],t={"chunk-74844165":1,"chunk-7491b110":1,"chunk-749b35f4":1,"chunk-749e249d":1,"chunk-74beb37f":1,"chunk-74c29113":1};i[e]?a.push(i[e]):0!==i[e]&&t[e]&&a.push(i[e]=new Promise((function(a,t){for(var s="css/"+({}[e]||e)+"."+{"chunk-74844165":"c2dfc62e","chunk-7491b110":"51d9a3f0","chunk-749b35f4":"601f1334","chunk-749e249d":"d092ab57","chunk-74beb37f":"a407955e","chunk-74c29113":"77f9d9af"}[e]+".css",r=o.p+s,l=document.getElementsByTagName("link"),n=0;n<l.length;n++){var c=l[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===r))return a()}var m=document.getElementsByTagName("style");for(n=0;n<m.length;n++){c=m[n],d=c.getAttribute("data-href");if(d===s||d===r)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var s=a&&a.target&&a.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=s,delete i[e],u.parentNode.removeChild(u),t(l)},u.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){i[e]=0})));var s=r[e];if(0!==s)if(s)a.push(s[2]);else{var l=new Promise((function(a,t){s=r[e]=[a,t]}));a.push(s[2]=l);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=n(e);var m=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;m.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",m.name="ChunkLoadError",m.type=s,m.request=i,t[1](m)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},o.m=e,o.c=s,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)o.d(t,s,function(a){return e[a]}.bind(null,s));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var m=0;m<c.length;m++)a(c[m]);var u=d;l.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("3ca3"),t("ddb0");var s=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"text-center pt-2 pb-5"},[t("router-link",{attrs:{to:"/"}},[e._v("English")]),t("br"),t("router-link",{attrs:{to:"/spanish"}},[e._v("Spanish")]),t("br"),t("a",{attrs:{href:"/resume.pdf",target:"_blank"},on:{click:function(a){return e.mandar(3)}}},[t("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF English")]),t("br"),t("a",{attrs:{href:"/cv.pdf",target:"_blank"},on:{click:function(a){return e.mandar(4)}}},[t("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF Spanish")])],1),t("router-view"),t("footer",{staticClass:"footer text-center pt-2 pb-5"},[t("router-link",{attrs:{to:"/"}},[e._v("English")]),t("br"),t("router-link",{attrs:{to:"/spanish"}},[e._v("Spanish")]),t("br"),t("a",{attrs:{href:"/resume.pdf",target:"_blank"},on:{click:function(a){return e.mandar(3)}}},[t("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF English")]),t("br"),t("a",{attrs:{href:"/cv.pdf",target:"_blank"},on:{click:function(a){return e.mandar(4)}}},[t("i",{staticClass:"fa fa-file-pdf",attrs:{"aria-hidden":"true"}}),e._v(" PDF Spanish")])],1)],1)},r=[],l=t("1da1"),n=(t("96cf"),t("bc3a")),o=t.n(n),c={mandar:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var a,t=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:0,e.next=3,o.a.post("https://resumepablo.herokuapp.com/telegram",{tipo:a,device:navigator.userAgent},{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}});case 3:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},d={name:"app",components:{},methods:{mandar:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.mandar(a);case 2:case"end":return e.stop()}}),e)})));function a(a){return e.apply(this,arguments)}return a}()}},m=d,u=(t("034f"),t("2877")),p=Object(u["a"])(m,i,r,!1,null,null,null),v=p.exports,b=t("8c4f"),g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("HelloWorld")},f=[],h=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",{staticClass:"resume-wrapper text-center position-relative"},[t("div",{staticClass:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},[t("header",{staticClass:"resume-header pt-4 pt-md-0"},[t("div",{staticClass:"media flex-column flex-md-row"},[t("div",{staticClass:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},[t("div",{staticClass:"primary-info"},[t("h1",{staticClass:"name mt-0 mb-1 text-white text-uppercase text-uppercase"},[e._v("Pablo de Jesús")]),t("div",{staticClass:"title mb-3"},[e._v(e._s(e.arr[1]))]),e._m(0)]),e._m(1),e._m(2)])])]),t("div",{staticClass:"resume-body p-5"},[t("section",{staticClass:"resume-section summary-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[2]))]),t("div",{staticClass:"resume-section-content"},[t("p",{staticClass:"mb-0"},[e._v(e._s(e.arr[3]))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-9"},[t("section",{staticClass:"resume-section experience-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[4]))]),t("div",{staticClass:"resume-section-content"},[t("div",{staticClass:"resume-timeline position-relative"},[t("article",{staticClass:"resume-timeline-item position-relative pb-5"},[t("div",{staticClass:"resume-timeline-item-header mb-2"},[t("div",{staticClass:"d-flex flex-column flex-md-row"},[t("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[43]))]),t("div",{staticClass:"resume-company-name ml-auto"},[e._v(e._s(e.arr[49]))])]),t("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[50]))])]),t("div",{staticClass:"resume-timeline-item-desc"},[t("p",[e._v(e._s(e.arr[51]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),t("p",[e._v(e._s(e.arr[52]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(3)])]),t("article",{staticClass:"resume-timeline-item position-relative pb-5"},[t("div",{staticClass:"resume-timeline-item-header mb-2"},[t("div",{staticClass:"d-flex flex-column flex-md-row"},[t("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[43]))]),t("div",{staticClass:"resume-company-name ml-auto"},[e._v(e._s(e.arr[44]))])]),t("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[45]))])]),t("div",{staticClass:"resume-timeline-item-desc"},[t("p",[e._v(e._s(e.arr[46]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),t("p",[e._v(e._s(e.arr[47]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(4)])]),t("article",{staticClass:"resume-timeline-item position-relative pb-5"},[t("div",{staticClass:"resume-timeline-item-header mb-2"},[t("div",{staticClass:"d-flex flex-column flex-md-row"},[t("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[5]))]),t("div",{staticClass:"resume-company-name ml-auto"},[e._v("TecNM / Instituto Tecnológico de Tehuacán")])]),t("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[6]))])]),t("div",{staticClass:"resume-timeline-item-desc"},[t("p",[e._v(e._s(e.arr[7]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[8]))]),t("p",[e._v(e._s(e.arr[9]))]),t("ul",[t("li",[e._v(e._s(e.arr[10]))]),t("li",[e._v(e._s(e.arr[11]))]),t("li",[e._v(e._s(e.arr[12]))])]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(5)])]),t("article",{staticClass:"resume-timeline-item position-relative pb-5"},[t("div",{staticClass:"resume-timeline-item-header mb-2"},[t("div",{staticClass:"d-flex flex-column flex-md-row"},[t("h3",{staticClass:"resume-position-title font-weight-bold mb-1"},[e._v(e._s(e.arr[14]))]),t("div",{staticClass:"resume-company-name ml-auto"},[e._v("Lavados Especiales")])]),t("div",{staticClass:"resume-position-time"},[e._v(e._s(e.arr[15]))])]),t("div",{staticClass:"resume-timeline-item-desc"},[t("p",[e._v(e._s(e.arr[16]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[17]))]),t("p",[e._v(e._s(e.arr[18]))]),t("h4",{staticClass:"resume-timeline-item-desc-heading font-weight-bold"},[e._v(e._s(e.arr[13]))]),e._m(6)])])])])])]),t("div",{staticClass:"col-lg-3"},[t("section",{staticClass:"resume-section skills-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[19]))]),t("div",{staticClass:"resume-section-content"},[t("div",{staticClass:"resume-skill-item"},[t("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v(e._s(e.arr[20]))]),e._m(7)]),e._m(8),e._m(9),t("div",{staticClass:"resume-skill-item"},[t("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v(e._s(e.arr[21]))]),e._m(10)])])]),t("section",{staticClass:"resume-section education-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[22]))]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-degree font-weight-bold"},[e._v(e._s(e.arr[23]))]),e._m(11),t("div",{staticClass:"resume-degree-time"},[e._v("2014 - 2018")])])])])]),t("section",{staticClass:"resume-section education-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[41]))]),e._m(12),e._m(13)]),t("section",{staticClass:"resume-section reference-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[24]))]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled resume-awards-list"},[t("li",{staticClass:"mb-2 pl-4 position-relative"},[t("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),t("div",{staticClass:"resume-award-name"},[e._v(e._s(e.arr[25]))]),t("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[26])+" "),t("a",{attrs:{href:"http://www.itpuebla.edu.mx",target:"_blank"}},[e._v("IT of Puebla")]),e._v(" "+e._s(e.arr[48]))])])])]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled resume-awards-list"},[t("li",{staticClass:"mb-2 pl-4 position-relative"},[t("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),t("div",{staticClass:"resume-award-name"},[e._v(e._s(e.arr[39]))]),t("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[40]))])])])]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled resume-awards-list"},[t("li",{staticClass:"mb-2 pl-4 position-relative"},[t("i",{staticClass:"resume-award-icon fas fa-trophy position-absolute",attrs:{"data-fa-transform":"shrink-2"}}),t("div",{staticClass:"resume-award-name"},[e._v("ENEIT 2016")]),t("div",{staticClass:"resume-award-desc"},[e._v(e._s(e.arr[42]))])])])])]),t("section",{staticClass:"resume-section language-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[27]))]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled resume-lang-list"},[t("li",{staticClass:"mb-2"},[t("span",{staticClass:"resume-lang-name font-weight-bold"},[e._v(e._s(e.arr[28])+" ")]),e._v(" "),t("small",{staticClass:"text-muted font-weight-normal"},[e._v("("+e._s(e.arr[29])+")")])]),t("li",{staticClass:"mb-2 align-middle"},[t("span",{staticClass:"resume-lang-name font-weight-bold"},[e._v(e._s(e.arr[30]))]),e._v(" "),t("small",{staticClass:"text-muted font-weight-normal"},[e._v("("+e._s(e.arr[31])+")")])])])])]),t("section",{staticClass:"resume-section interests-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[32]))]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[33]))]),t("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[34]))]),t("li",{staticClass:"mb-1"},[e._v(e._s(e.arr[35]))])])])]),t("section",{staticClass:"resume-section education-section mb-5"},[t("h2",{staticClass:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},[e._v(e._s(e.arr[36]))]),t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-degree font-weight-bold"},[e._v(e._s(e.arr[37]))]),e._m(14),t("div",{staticClass:"resume-degree-time"},[e._v(e._s(e.arr[38]))])])])])])])])])])])},C=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("a",{attrs:{href:"mailto:pag753@gmail.com"}},[t("i",{staticClass:"far fa-envelope fa-fw mr-2",attrs:{"data-fa-transform":"grow-3"}}),e._v("pag753@gmail.com")])]),t("li",[t("a",{attrs:{href:"tel:+52 1 238 133 60 66"}},[t("i",{staticClass:"fas fa-mobile-alt fa-fw mr-2",attrs:{"data-fa-transform":"grow-6"}}),e._v("+52 1 238 133 60 66")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"secondary-info ml-md-auto mt-2"},[t("ul",{staticClass:"resume-social list-unstyled"},[t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://www.linkedin.com/in/pag753/",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-2"},[t("i",{staticClass:"fab fa-linkedin-in fa-fw"})]),e._v("linkedin.com/in/pag753")])]),t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://github.com/pag753/",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-2"},[t("i",{staticClass:"fab fa-github-alt fa-fw"})]),e._v("github.com/pag753")])]),t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://t.me/pa_753",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-1"},[t("i",{staticClass:"fab fa-telegram"})]),e._v("Telegram")])]),t("li",[t("a",{attrs:{href:"https://pag753.000webhostapp.com/",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-2"},[t("i",{staticClass:"fas fa-globe"})]),e._v("https://resumepablo.herokuapp.com/#/")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"secondary-info ml-md-auto mt-2"},[t("ul",{staticClass:"resume-social list-unstyled"},[t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"whatsapp://send?abid=+5212381336066&text=Hello%2C%20Pablo!",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-1"},[t("i",{staticClass:"fab fa-whatsapp"})])])]),t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://www.facebook.com/messages/t/PAdJGA",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-1"},[t("i",{staticClass:"fab fa-facebook-messenger"})])])]),t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://www.instagram.com/pag753",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-1"},[t("i",{staticClass:"fab fa-instagram"})])])]),t("li",{staticClass:"mb-3"},[t("a",{attrs:{href:"https://twitter.com/pa_753",target:"_blank"}},[t("span",{staticClass:"fa-container text-center mr-1"},[t("i",{staticClass:"fab fa-twitter"})])])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Node.js")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("AWS")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Docker")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Java")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v(".Net Core")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Java")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Spring boot")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Struts")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("JSP")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Vue.js")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("PHP 7")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Yii 2")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("MariaDB")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Bootstrap 4")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("PHP 7")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Codeigniter")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("MySQL")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("jQuery")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("HTML5")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Bootstrap 4")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-primary badge-pill"},[e._v("Data Tables")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-unstyled mb-4"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("JavaScript")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"85%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("PHP")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Python")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Java")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("C / C++ / C#")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Typescript")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-skill-item"},[t("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v("Frontend")]),t("ul",{staticClass:"list-unstyled mb-4"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("jQuery")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Bootstrap")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("HTML/CSS")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Vue.js")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-skill-item"},[t("h4",{staticClass:"resume-skills-cat font-weight-bold"},[e._v("Backend")]),t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("PHP Frameworks")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Node.js")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"70%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Python/Django")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-skill-name"},[e._v("Java/Spring Boot")]),t("div",{staticClass:"progress resume-progress"},[t("div",{staticClass:"progress-bar theme-progress-bar-dark",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},[t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("AWS")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("Docker")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("Intellij")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("Git")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("FontAwesome")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("Linux")])]),t("li",{staticClass:"list-inline-item"},[t("span",{staticClass:"badge badge-light"},[e._v("Jira")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-degree-org"},[t("a",{attrs:{href:"http://www.ittehuacan.edu.mx",target:"_blank"}},[e._v("TecNM / Instituto Tecnológico de Tehuacán")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-degree font-weight-bold"},[e._v("Microsoft Technology Associate")]),t("div",{staticClass:"resume-degree-org"},[e._v("Software Development Fundamentals")]),t("div",{staticClass:"resume-degree-time"},[e._v("2015")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-section-content"},[t("ul",{staticClass:"list-unstyled"},[t("li",{staticClass:"mb-2"},[t("div",{staticClass:"resume-degree font-weight-bold"},[e._v("Microsoft Technology Associate")]),t("div",{staticClass:"resume-degree font-weight-bold"}),t("div",{staticClass:"resume-degree-org"},[e._v("Database Fundamentals")]),t("div",{staticClass:"resume-degree-time"},[e._v("2015")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"resume-degree-org"},[t("a",{attrs:{href:"https://www.campomision.org.mx/",target:"_blank"}},[e._v("Misioneros Servidores de la Palabra")])])}],_={arr:["Curriculum Vitae Pablo de Jesús","Desarrollador Full Stack","Resúmen","Ingeniero de software con más dos años de experiencia en la parte de backend y frontend utilizando la tecnología PHP y sus frameworks Codeigniter y Yii2. Participando en proyectos de gestión de información en bases de datos. Estoy dispuesto a aprender más y usar otras tecnologías sobre todo en JavaScript, Python y Ruby.","Experiencia Laboral","Desarrollador Full Stack","Septiembre de 2018 - Diciembre de 2018","Responsable del desarrollo full stack y la base de datos del módulo 'Instrumentación didáctica' para uso de todos los docentes del Tecnológico Nacional de México.","Logros:",'Antes los docentes hacían la instrumentación didáctica en programas como "word", siguiendo normas y formatos específicos, pero ahora:',"El llenado de datos es rápido, intuitivo y eficaz.","Al final de la captura los docentes obtienen la instrumentación didáctica en un PDF cumpliendo las normas y formatos requeridos y la confianza de que todo lo que escribieron y guardaron se encuentra en una base de datos.","El documento una vez generado puede ser consultado o editado en la plataforma cuando y donde ellos quieran desde un navegador web y con una conexión a internet.","Tecnologías usadas:","Desarrollador Web","Febero de 2018 - Julio de 2018","Responsable del desarrollo full stack y de base de datos de la plataforma para la gestión del proceso de lavandería en la empresa 'Lavados Especiales' en la ciudad de Puebla.","Descripción","Plataforma para automatizar de manera eficiente el control de los procesos de lavado y la administración de la empresa con la implementación del proyecto para obtener un mejor control interno más rápido y eficaz.","Habilidades y Herramientas","Lenguajes","Otros","Educación","Ingeniería en Sistemas Computacionales","Reconocimientos","Concurso estatal de programación","En el","Idiomas","Español","Nativo","Inglés","Intermedio","Intereses","Leer","Nadar","Ver películas","Voluntariado","Misionero de Tiempo Completo","Abril de 2011 - Septiembre de 2013","Evento Nacional Estudiantil de Innovación Tecnológica (ENEIT) 2016",'Etapa nacional en el IT de Pachuca del 22 al 25 de noviembre de 2016 por el proyecto “Enerluz".',"Certificaciones","Etapa regional en el IT de Gustavo A. Madero en la Ciudad de México, del 20 al 23 de septiembre de 2016 por los proyectos “Enerluz” y “Autosilla”. Ganador con “Enerluz”.","Desarrollador Full Stack","Grupo Salinas","Marzo 2019 - Junio de 2020","Desarrollador full stack en Java, Vue.js y Python en la empresa.","Responsable de desarrollar servicios REST y portales web para la gestión de la empresa.","el 22 de Abril de 2016. Ganador del tercer lugar en la categoría intermedia.","Alphacredit","Julio 2020 - Presente","Desarrollador full stack en Node.js, Java y .Net Core en la empresa","Responsable de desarrollar en Node.js, Java y .Net Core procesos de la empresa."]},w={arr:["Resume Pablo de Jesús","Full Stack Developer","Career Summary","Software engineer with more of two years of experience in the backend part and frontend using PHP technology and its Codeigniter and Yii2 frameworks. Participating in information management projects in databases. I am willing to learn more and use other technologies especially in JavaScript, Python and Ruby.","Work Experience","Full Stack Developer","September 2018 - December 2018","Responsible for full stack development and database of the module 'didactic instrumentation' for use by all teachers of the National Technological Institute  of Mexico.","Achievements:",'Before the teachers made the didactic instrumentation in programs such as "word", following specific standards and formats, but now:',"Filling data is fast, intuitive and effective.","At the end of the capture the teachers obtain the didactic instrumentation in a PDF complying with the norms and formats required and the confidence that everything they wrote and saved is in a database.","The document once generated can be consulted or edited on the platform when and where they want from a web browser and with an internet connection.","Technologies used:","Web Developer","February 2018 - July 2018","Responsible for full stack development and database of platform for the management of laundry process in the company 'Lavados Especiales' from Puebla city.","Description","Platform for automate in efficiently way the control of laundry processes and the company administration with the implementation of the project to obtain a better fastest and internal control.","Skills and Tools","Languajes","Others","Education","Computer Systems Enginer","Awards","State programming competition","In the","Language","Spanish","Native","English","Intermediate","Interests","Reading","Swimming","Watching movies","Volunteer","Full Time Missioner","April 2011 - September 2013","National Student Event of Technological Innovation (ENEIT) 2016",'National stage in the IT of Pachuca from 22 to 25 November 2016 by the project "Enerluz".',"Certifications",'Regional stage in IT of Gustavo A. Madero in Mexico City, from 20 to 23 September 2016 by the projects “Enerluz” and "Autosilla”. Winner with “Enerluz” project.',"Full Stack Developer","Grupo Salinas","March 2019 - June 2020","Java, Vue.js and Python full stack developer in the company.","Responsible for developing REST services and web portals for the management of the company.","on April 22, 2016. Winner of the third place in the intermediate category.","Alphacredit","July 2020 - At present","Nodejs, Java and .Net Core developer in the company.","Responsible for developing Node.js, Java and .Net Core processes in the company."]},y={name:"HelloWorld",data:function(){return{arr:"/"==this.$route.path?w.arr:_.arr}}},k=y,x=Object(u["a"])(k,h,C,!1,null,"6b29dd6f",null),E=x.exports,S={name:"Spanish",components:{HelloWorld:E},beforeCreate:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.mandar(2);case 2:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},P=S,j=Object(u["a"])(P,g,f,!1,null,"bb003f32",null),T=j.exports,A=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("HelloWorld")},N=[],D={name:"English",components:{HelloWorld:E},beforeCreate:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.mandar(1);case 2:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()},M=D,J=Object(u["a"])(M,A,N,!1,null,"4d24db64",null),O=J.exports,I=Math.floor(6*Math.random())+1;t("5b67")("./pillar-".concat(I,".css")),s["a"].config.productionTip=!1,s["a"].use(b["a"]);var R=[{path:"/spanish",component:T},{path:"/",component:O}],F=new b["a"]({routes:R});new s["a"]({router:F,render:function(e){return e(v)}}).$mount("#app")},"5b67":function(e,a,t){var s={"./pillar-1.css":["62da","chunk-7491b110"],"./pillar-2.css":["98f1","chunk-74beb37f"],"./pillar-3.css":["5fbf","chunk-749b35f4"],"./pillar-4.css":["702e","chunk-749e249d"],"./pillar-5.css":["5559","chunk-74844165"],"./pillar-6.css":["8a6c","chunk-74c29113"]};function i(e){if(!t.o(s,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=s[e],i=a[0];return t.e(a[1]).then((function(){return t.t(i,7)}))}i.keys=function(){return Object.keys(s)},i.id="5b67",e.exports=i},"85ec":function(e,a,t){}});
//# sourceMappingURL=app.e7bf01ea.js.map