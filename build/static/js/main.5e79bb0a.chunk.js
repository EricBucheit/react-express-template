(this["webpackJsonpproject-planner"]=this["webpackJsonpproject-planner"]||[]).push([[0],{13:function(e,n,t){e.exports=t(37)},18:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(12),c=t.n(l),r=(t(18),t(2)),i=t.n(r);t(36);function u(){i.a.get("/generics/1").then((function(e){console.log(e.data)}))}function s(){i.a.get("/generics").then((function(e){console.log(e.data)}))}function E(){i.a.post("/generics",{data:"PUT DATA HERE"}).then((function(e){console.log(e.data)}))}function m(){i.a.put("/generics/1").then((function(e){console.log(e.data)}))}function f(){i.a.delete("/generics/1").then((function(e){console.log(e.data)}))}function g(e){return o.a.createElement("button",{onClick:e.onClick},e.label)}function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," Test Routes "),o.a.createElement(g,{onClick:u,label:"GET One"}),o.a.createElement(g,{onClick:s,label:"GET All"}),o.a.createElement(g,{onClick:E,label:"POST Call"}),o.a.createElement(g,{onClick:m,label:"PUT Call"}),o.a.createElement(g,{onClick:f,label:"DESTROY Call"}))}var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," GENERIC TEMPLAYER FOR REACT + EXPRESS "),o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.5e79bb0a.chunk.js.map