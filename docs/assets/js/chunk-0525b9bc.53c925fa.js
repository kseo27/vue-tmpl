(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0525b9bc"],{"0304":function(t,e,r){"use strict";r("ffd2")},"0c47":function(t,e,r){var n=r("da84"),o=r("d44e");o(n.JSON,"JSON",!0)},"1c45":function(t,e,r){},"23dc":function(t,e,r){var n=r("d44e");n(Math,"Math",!0)},"29fb":function(t,e,r){"use strict";r("9428")},"2ca0":function(t,e,r){"use strict";var n=r("23e7"),o=r("e330"),c=r("06cf").f,i=r("50c4"),a=r("577e"),u=r("5a34"),s=r("1d80"),l=r("ab13"),f=r("c430"),h=o("".startsWith),d=o("".slice),p=Math.min,v=l("startsWith"),b=!f&&!v&&!!function(){var t=c(String.prototype,"startsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!b&&!v},{startsWith:function(t){var e=a(s(this));u(t);var r=i(p(arguments.length>1?arguments[1]:void 0,e.length)),n=a(t);return h?h(e,n,r):d(e,r,r+n.length)===n}})},3410:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("7b0b"),i=r("e163"),a=r("e177"),u=o((function(){i(1)}));n({target:"Object",stat:!0,forced:u,sham:!a},{getPrototypeOf:function(t){return i(c(t))}})},"56e4":function(t,e,r){"use strict";r("1c45")},"5a34":function(t,e,r){var n=r("44e7"),o=TypeError;t.exports=function(t){if(n(t))throw o("The method doesn't accept regular expressions");return t}},"5c0f":function(t,e,r){},"7db0":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").find,c=r("44d2"),i="find",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(i)},9428:function(t,e,r){},"944a":function(t,e,r){var n=r("d066"),o=r("746f"),c=r("d44e");o("toStringTag"),c(n("Symbol"),"Symbol")},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ab36:function(t,e,r){var n=r("861d"),o=r("9112");t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},b0c0:function(t,e,r){var n=r("83ab"),o=r("5e77").EXISTS,c=r("e330"),i=r("9bf2").f,a=Function.prototype,u=c(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=c(s.exec),f="name";n&&!o&&i(a,f,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(t){return""}}})},b636:function(t,e,r){var n=r("746f");n("asyncIterator")},b980:function(t,e,r){var n=r("d039"),o=r("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},c770:function(t,e,r){var n=r("e330"),o=Error,c=n("".replace),i=function(t){return String(o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(i);t.exports=function(t,e){if(u&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=c(t,a,"");return t}},cccc:function(t,e,r){"use strict";r("5c0f")},cd56:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"vt-wrap"},c={key:1};function i(t,e,r,i,a,u){var s=Object(n["resolveComponent"])("Header"),l=Object(n["resolveComponent"])("Aside"),f=Object(n["resolveComponent"])("RouterView");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(s),Object(n["createVNode"])(l,{menus:i.menuList},null,8,["menus"]),Object(n["createElementVNode"])("main",null,[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["vt-content",i.flexible])},[Object(n["createVNode"])(n["Transition"],{name:"title",mode:"out-in",appear:""},{default:Object(n["withCtx"])((function(){return[i.title?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h2",{key:i.title},Object(n["toDisplayString"])(i.title),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",c))]})),_:1}),Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(e){var r=e.Component;return[Object(n["createVNode"])(n["Transition"],{name:"route",mode:"out-in",onEnter:i.onEnter,appear:""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createElementBlock"])("article",{class:Object(n["normalizeClass"])(i.flexible),key:t.$route.path},[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(r)))],2))]})),_:2},1032,["onEnter"])]})),_:1})],2)])])}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("d9e2"),r("3410"),r("159b"),r("b0c0"),r("fb6a");var a=r("53ca");function u(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,c=Object.create(o.prototype),i=new x(n||[]);return c._invoke=function(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return L()}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var a=j(i,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),c}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function d(){}function p(){}function v(){}var b={};s(b,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(C([])));y&&y!==e&&r.call(y,o)&&(b=y);var g=v.prototype=d.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,c,i,u){var s=f(t[o],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==Object(a["a"])(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function c(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(c,c):c()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return c.next=c}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v,s(g,"constructor",v),s(v,"constructor",p),p.displayName=s(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},k(O.prototype),s(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var i=new O(l(e,r,n,o),c);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(g),s(g,i,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(a&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function i(t){s(c,n,o,i,a,"next",t)}function a(t){s(c,n,o,i,a,"throw",t)}i(void 0)}))}}var f=function(t){return Object(n["pushScopeId"])("data-v-197019f2"),t=t(),Object(n["popScopeId"])(),t},h=f((function(){return Object(n["createElementVNode"])("div",{class:"vt-header"},[Object(n["createElementVNode"])("i",{class:"mi mi-logo mr-2"}),Object(n["createElementVNode"])("h1",null,"Vue Template")],-1)})),d=[h];function p(t,e,r,o,c,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",null,d)}var v={setup:function(){}},b=(r("0304"),r("6b0d")),m=r.n(b);const y=m()(v,[["render",p],["__scopeId","data-v-197019f2"]]);var g=y;function k(t,e,r,o,c,i){var a=Object(n["resolveComponent"])("RouterLinkTree");return Object(n["openBlock"])(),Object(n["createElementBlock"])("aside",null,[Object(n["createVNode"])(a,{class:"mt-4",route:o.mainRoute,routeClass:"vt-snb",activeClass:"vt-active"},null,8,["route"])])}r("7db0");function O(t,e,r,o,c,i){var a=Object(n["resolveComponent"])("RouterLinkTreeNode");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])("".concat(r.routeClass,"-wrap"))},[Object(n["createElementVNode"])("ul",{class:Object(n["normalizeClass"])(r.routeClass)},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.route.children,(function(t,e){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:e,route:t,depth:r.depth,rootPath:r.rootPath,routeClass:r.routeClass,activeClass:r.activeClass,selectedPath:o.selectedPath,transHooks:o.transHooks,onLinkClick:o.onLinkClick},null,8,["route","depth","rootPath","routeClass","activeClass","selectedPath","transHooks","onLinkClick"])})),128))],2)],2)}r("a9e3"),r("2ca0"),r("a15b"),r("ac1f"),r("1276");var j=r("6c02"),w=(r("99af"),["href"]);function E(t,e,r,o,c,i){var a=Object(n["resolveComponent"])("RouterLinkTreeNode",!0);return!1!==r.route.meta.exposure?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:0,class:Object(n["normalizeClass"])(["".concat(r.routeClass,"-item"),"".concat(r.routeClass,"-d").concat(r.depth),o.isActive&&r.activeClass])},[Object(n["createElementVNode"])("a",{href:o.href,class:Object(n["normalizeClass"])("".concat(r.routeClass,"-link")),onClick:e[0]||(e[0]=function(){return o.onLinkClick&&o.onLinkClick.apply(o,arguments)})},Object(n["toDisplayString"])(r.route.meta.title),11,w),o.childLinks?(Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],Object(n["mergeProps"])({key:0,name:"vr-link"},Object(n["toHandlers"])(r.transHooks)),{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("ul",{class:Object(n["normalizeClass"])("".concat(r.routeClass,"-list"))},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.childLinks,(function(t,e){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:e,route:t,depth:r.depth+1,rootPath:r.rootPath,routeClass:r.routeClass,activeClass:r.activeClass,selectedPath:r.selectedPath,transHooks:r.transHooks,onLinkClick:o.onChildLinkClick},null,8,["route","depth","rootPath","routeClass","activeClass","selectedPath","transHooks","onLinkClick"])})),128))],2),[[n["vShow"],o.selected]])]})),_:1},16)):Object(n["createCommentVNode"])("",!0)],2)):Object(n["createCommentVNode"])("",!0)}r("4de4");var x=r("2ef0"),C=r.n(x),L={name:"RouterLinkTreeNode",emits:["link-click"],props:{route:null,depth:Number,rootPath:String,selectedPath:String,routeClass:String,activeClass:String,transHooks:null},setup:function(t,e){var r=e.emit,o=Object(j["f"])({to:t.route}),c=o.route,i=o.href,a=o.isActive,u=o.navigate,s=Object(n["computed"])((function(){return C.a.startsWith(t.selectedPath,c.value.path)})),l=Object(n["computed"])((function(){var e=C.a.filter(t.route.children,(function(t){return!1!==t.meta.exposure}));return e.length?e:null})),f=function(t){t.preventDefault(),r("link-click",t,c.value,u)},h=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r.apply(void 0,["link-click"].concat(e))};return{linkRoute:c,href:i,isActive:a,navigate:u,childLinks:l,selected:s,onLinkClick:f,onChildLinkClick:h}}};const S=m()(L,[["render",E]]);var N=S,B={name:"RouterLinkTree",components:{RouterLinkTreeNode:N},props:{route:null,depth:{type:Number,default:1},rootPath:{type:String,default:"/"},routeClass:{type:String,default:"vr-linktree"},activeClass:{type:String,default:"vr-active"},transition:{type:Boolean,default:!0}},setup:function(t){var e=Object(j["g"])(),r=Object(n["ref"])(""),o=Object(n["computed"])((function(){return t.transition?{"before-enter":function(t){t.style.maxHeight="0px"},enter:function(t){t.style.maxHeight="".concat(t.scrollHeight,"px")},"after-enter":function(t){t.style.maxHeight=null},"before-leave":function(t){t.style.maxHeight="".concat(t.scrollHeight,"px")},leave:function(t){t.style.maxHeight="0px"},"after-leave":function(t){t.style.maxHeight=null}}:{}}));Object(n["watchEffect"])((function(){r.value=e.path}));var c=function(t,e,n){if(e.meta.leaf)return n();var o=C.a.startsWith(r.value,e.path);r.value=o?C.a.initial(e.path.split("/")).join("/"):e.path};return{selectedPath:r,transHooks:o,onLinkClick:c}}};r("56e4");const P=m()(B,[["render",O]]);var T=P,H={components:{RouterLinkTree:T},props:{menus:{type:null,default:null}},setup:function(){var t=Object(j["h"])(),e=C.a.find(t.options.routes,{name:"Main"});return{mainRoute:e}}};r("29fb");const _=m()(H,[["render",k]]);var V=_,R={name:"Home",components:{Header:g,Aside:V},beforeRouteEnter:function(t,e,r){console.log("[Main]: Entry point.","'".concat(t.path,"'")),r((function(t){var e=t.router.options.routes[0];t.menuList=e?e.children:[]}))},setup:function(){Object(n["onMounted"])(l(u().mark((function t(){return u().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))));var t=Object(j["g"])(),e=Object(j["h"])(),r=Object(n["ref"])([]),o=Object(n["ref"])(null),c=function(){o.value=t.meta.flexible?"vt-flexible":null};return{router:e,menuList:r,title:Object(n["computed"])((function(){return t.meta.title})),flexible:o,onEnter:c}}};r("cccc");const A=m()(R,[["render",i]]);e["default"]=A},d9e2:function(t,e,r){var n=r("23e7"),o=r("da84"),c=r("2ba4"),i=r("e5cb"),a="WebAssembly",u=o[a],s=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=i(t,e,s),n({global:!0,constructor:!0,arity:1,forced:s},r)},f=function(t,e){if(u&&u[t]){var r={};r[t]=i(a+"."+t,e,s),n({target:a,stat:!0,constructor:!0,arity:1,forced:s},r)}};l("Error",(function(t){return function(e){return c(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return c(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return c(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return c(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return c(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return c(t,this,arguments)}})),l("URIError",(function(t){return function(e){return c(t,this,arguments)}})),f("CompileError",(function(t){return function(e){return c(t,this,arguments)}})),f("LinkError",(function(t){return function(e){return c(t,this,arguments)}})),f("RuntimeError",(function(t){return function(e){return c(t,this,arguments)}}))},e391:function(t,e,r){var n=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e5cb:function(t,e,r){"use strict";var n=r("d066"),o=r("1a2d"),c=r("9112"),i=r("3a9b"),a=r("d2bb"),u=r("e893"),s=r("aeb0"),l=r("7156"),f=r("e391"),h=r("ab36"),d=r("c770"),p=r("b980"),v=r("83ab"),b=r("c430");t.exports=function(t,e,r,m){var y="stackTraceLimit",g=m?2:1,k=t.split("."),O=k[k.length-1],j=n.apply(null,k);if(j){var w=j.prototype;if(!b&&o(w,"cause")&&delete w.cause,!r)return j;var E=n("Error"),x=e((function(t,e){var r=f(m?e:t,void 0),n=m?new j(t):new j;return void 0!==r&&c(n,"message",r),p&&c(n,"stack",d(n.stack,2)),this&&i(w,this)&&l(n,this,x),arguments.length>g&&h(n,arguments[g]),n}));if(x.prototype=w,"Error"!==O?a?a(x,E):u(x,E,{name:!0}):v&&y in j&&(s(x,j,y),s(x,j,"prepareStackTrace")),u(x,j),!b)try{w.name!==O&&c(w,"name",O),w.constructor=x}catch(C){}return x}}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("e8b5"),c=r("68ee"),i=r("861d"),a=r("23cb"),u=r("07fa"),s=r("fc6a"),l=r("8418"),f=r("b622"),h=r("1dde"),d=r("f36a"),p=h("slice"),v=f("species"),b=Array,m=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,f,h=s(this),p=u(h),y=a(t,p),g=a(void 0===e?p:e,p);if(o(h)&&(r=h.constructor,c(r)&&(r===b||o(r.prototype))?r=void 0:i(r)&&(r=r[v],null===r&&(r=void 0)),r===b||void 0===r))return d(h,y,g);for(n=new(void 0===r?b:r)(m(g-y,0)),f=0;y<g;y++,f++)y in h&&l(n,f,h[y]);return n.length=f,n}})},ffd2:function(t,e,r){}}]);