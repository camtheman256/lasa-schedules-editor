(this["webpackJsonplasa-schedules-editor"]=this["webpackJsonplasa-schedules-editor"]||[]).push([[0],{48:function(e,a,n){e.exports=n(67)},53:function(e,a,n){},64:function(e,a,n){},67:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(14),u=n.n(r),c=(n(53),n(32)),o=n(70),i=n(76),m=n(78),d=n(71),s=n(72),h=n(44),v=n(39),E=n.n(v),g=n(77),p=n(75),f=n(80),y=n(69),C=n(73),b=n(40),S=n(79),k=n(74);function w(e,a){var n=e.split(":"),t=a.split(":");return 2===n.length&&2===t.length?60*(parseInt(n[0])-parseInt(t[0]))+(parseInt(n[1])-parseInt(t[1])):0}function N(e){function a(a){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n?e.value.startTime=a.target.value:e.value.endTime=a.target.value,e.value.runTime=w(e.value.endTime,e.value.startTime).toString(),e.onChange(e.value)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a.Item,null,l.a.createElement(C.a,null,l.a.createElement(C.a.Group,{controlId:Object(k.a)()},l.a.createElement(C.a.Label,null,"Period Name"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Enter a name",value:e.value.name,onChange:function(a){e.value.name=a.target.value,e.onChange(e.value)}})),e.value.endTime<=e.value.startTime?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"warning"},"Your end time is before or equal to your start time.")):null,l.a.createElement(C.a.Group,null,l.a.createElement(C.a.Label,{style:{display:"block"}},"Period Start - End"),l.a.createElement(C.a.Control,{type:"time",value:e.value.startTime,className:"inline-auto time-width",onChange:function(e){return a(e,!0)}})," - ",l.a.createElement(C.a.Control,{type:"time",value:e.value.endTime,className:"inline-auto time-width",onChange:function(e){return a(e,!1)}})),l.a.createElement("p",null,"Period Run Time: ",e.value.runTime)),l.a.createElement(h.a,{variant:"danger",size:"sm",onClick:function(){return e.removePeriod()}},"\xd7 Delete Period")))}var T=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Periods:"),l.a.createElement(S.a,{className:"mb-2"},e.value.map((function(a,n){return l.a.createElement(N,{value:a,index:n,onChange:function(a){return t=n,l=a,e.value[t]=l,void e.onChange(e.value);var t,l},removePeriod:function(){return a=n,e.value.splice(a,1),void e.onChange(e.value);var a},key:n})}))),l.a.createElement(h.a,{variant:"primary",onClick:function(){return e.value.push({name:"New Period",startTime:"",endTime:"",runTime:"0"}),void e.onChange(e.value)}},"+ Add New Period"))};var A=function(e){function a(e){var a=new Date(e);return isNaN(a)?"":a.toISOString().split("T")[0]}function n(a,n){if(e.value){var t=n.target.valueAsDate.toLocaleDateString("en-US",{timeZone:"UTC"});a.length>1?e.value[a[0]][a[1]]=t:e.value[a[0]]=t,e.onChange(e.value)}}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"Dates:"),0===e.index?l.a.createElement(g.a,{variant:"secondary"},"Dates have no effect on the default schedule. Feel free to ignore."):null,e.value?e.value.map((function(t,r){return l.a.createElement("div",{key:r,className:"mb-2"},t instanceof Array?l.a.createElement(l.a.Fragment,null,a(t[1])<=a(t[0])?l.a.createElement(g.a,{variant:"warning"},"Your end date is before or on your start date."):null,l.a.createElement(C.a.Control,{type:"date",value:a(t[0]),className:"inline-auto",onChange:function(e){return n([r,0],e)}})," - ",l.a.createElement(C.a.Control,{type:"date",value:a(t[1]),className:"inline-auto",onChange:function(e){return n([r,1],e)}})):l.a.createElement(C.a.Control,{type:"date",value:a(t),className:"inline-auto",onChange:function(e){return n([r],e)}}),l.a.createElement(h.a,{variant:"danger",className:"ml-3",title:"Remove",onClick:function(){return a=r,void(e.value&&(e.value.splice(a,1),e.onChange(e.value)));var a}},"\xd7"))})):null,l.a.createElement(h.a,{variant:"primary",onClick:function(){return function(){var a;e.value&&e.value.push(""),e.onChange(null!==(a=e.value)&&void 0!==a?a:[""])}()}},"+ Add new date"),l.a.createElement(h.a,{variant:"primary",className:"ml-3",onClick:function(){return function(){var a;e.value&&e.value.push(["",""]),e.onChange(null!==(a=e.value)&&void 0!==a?a:[["",""]])}()}},"+ Add new date range"))};function x(e){var a=e.schedule.name?e.schedule.name:"Untitled";return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Header,null,l.a.createElement(p.a.Toggle,{as:h.a,variant:"link",eventKey:e.index.toString()},"#",e.index,": ",a,0===e.index?l.a.createElement(y.a,{variant:"primary",className:"ml-2"},"Default"):null),l.a.createElement(h.a,{className:"float-right",variant:"danger",onClick:function(){return e.removeSchedule()}},"\xd7")),l.a.createElement(p.a.Collapse,{eventKey:e.index.toString()},l.a.createElement(f.a.Body,null,0===e.index?l.a.createElement(g.a,{variant:"info"},"This schedule is the default schedule, so it's always used when a special schedule is not in place."):null,l.a.createElement(C.a,null,l.a.createElement(C.a.Group,{controlId:Object(k.a)()},l.a.createElement(C.a.Label,null,"Schedule Name"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Enter a name",value:e.schedule.name,onChange:function(a){e.schedule.name=a.target.value,e.setSchedule(e.schedule)}})),l.a.createElement(C.a.Check,{checked:e.schedule.combinedAB||!1,label:"Combined A/B Period Names?",onChange:function(a){e.schedule.combinedAB=a.target.checked,e.setSchedule(e.schedule)},type:"checkbox",id:Object(k.a)()}),l.a.createElement(C.a.Check,{checked:void 0!==e.schedule.applyDay,label:"Apply schedule on a certain day of the week?",type:"checkbox",id:Object(k.a)(),onChange:function(a){e.schedule.applyDay=a.target.checked?1:void 0,e.setSchedule(e.schedule)}}),void 0!==e.schedule.applyDay?l.a.createElement(C.a.Control,{as:"select",value:e.schedule.applyDay,id:Object(k.a)(),onChange:function(a){e.schedule.applyDay=parseInt(a.target.value),e.setSchedule(e.schedule)}},["Monday","Tuesday","Wednesday","Thursday","Friday"].map((function(e,a){return l.a.createElement("option",{value:(a+1).toString(),key:a},a+1," - ",e)}))):null,l.a.createElement("hr",null),l.a.createElement(A,{onChange:function(a){e.schedule.dates=a,e.setSchedule(e.schedule)},value:e.schedule.dates,index:e.index})),l.a.createElement("hr",null),l.a.createElement(T,{onChange:function(a){e.schedule.schedule=a,e.setSchedule(e.schedule)},value:e.schedule.schedule})))))}var O=function(e){var a="",n=[];try{n=Object(b.parse)(e.value)}catch(r){a=r.toString()}function t(e){return JSON.stringify(e,null,4)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Edit your schedules here."),a?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"danger"},l.a.createElement("p",null,"Sorry, your schedule could not be parsed. Please fix the JSON on the left to continue."),l.a.createElement("p",{className:"mb-0"},l.a.createElement("b",null,"Error Message:")),l.a.createElement("pre",null,a))):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement(h.a,{variant:"primary",onClick:function(a){n.push({name:"New Schedule",combinedAB:!1,dates:[],schedule:[]}),e.onChange(t(n))}},"+ Add New Schedule")),l.a.createElement(p.a,{defaultActiveKey:"0",className:"mb-3"},n.map((function(a,r){return l.a.createElement(x,{schedule:a,setSchedule:function(a){return function(a,l){n[a]=l,e.onChange(t(n))}(r,a)},key:r,index:r,removeSchedule:function(){return a=r,n.splice(a,1),void e.onChange(t(n));var a}})}))),l.a.createElement("p",null,"Once you're done editing your schedules here, head back over to the JSON Code tab and copy and paste your newly-created schedules into the ",l.a.createElement("a",{href:"https://github.com/camtheman256/lasa-schedules-data"},"LASA Schedules Data repository"),".")))};n(63),n(64),n(65),n(66);function D(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{bg:"light",expand:"md"},l.a.createElement(i.a.Brand,null,"LASA Schedules Editor"),l.a.createElement(i.a.Toggle,{"aria-controls":"navbar"}),l.a.createElement(i.a.Collapse,{id:"navbar"},l.a.createElement(m.a,{className:"ml-auto"},l.a.createElement(m.a.Link,{href:"https://github.com/camtheman256/lasa-schedules-data/blob/master/README.md",target:"_blank"},"\u2197 Schedules Documentation")))))}function P(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h3",{style:{display:"inline"}},"Pick a view to edit your schedules:"),l.a.createElement(d.a,{toggle:!0,className:"ml-3"},[{name:"JSON Code",value:0},{name:"Graphical Editor",value:1}].map((function(a,n){return l.a.createElement(s.a,{key:n,type:"radio",variant:"primary",checked:e.visiblePane===a.value,value:a.value,onChange:function(){return e.changeView(a.value)}},a.name)})))))}function F(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Paste your schedules JSON here."),l.a.createElement("p",null,l.a.createElement(h.a,{variant:"link",onClick:function(a){e.downloadSchedule()}},"Or, download the live schedules from the LASA Schedules API.")),l.a.createElement(E.a,{mode:"json",theme:"github",value:e.value,onChange:function(a,n){e.onChange(a)},width:"auto",height:"750px",fontSize:14}))}var j=function(){var e=Object(t.useState)("[]"),a=Object(c.a)(e,2),n=a[0],r=a[1],u=Object(t.useState)(0),i=Object(c.a)(u,2),m=i[0],d=i[1];function s(e){r(e)}window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=!0}));var h=[l.a.createElement(F,{onChange:s,value:n,downloadSchedule:function(){fetch("https://schedules-data.lasa2019.com/schedule.json").then((function(e){return e.text()})).then((function(e){return r(e)}))}}),l.a.createElement(O,{onChange:s,value:n})];return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,null),l.a.createElement(o.a,{className:"mt-3"},l.a.createElement(P,{changeView:function(e){d(e)},visiblePane:m}),l.a.createElement("hr",null),h[m]))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ba5c16ac.chunk.js.map