(this["webpackJsonplasa-schedules-editor"]=this["webpackJsonplasa-schedules-editor"]||[]).push([[0],{44:function(e,a,n){e.exports=n(63)},49:function(e,a,n){},60:function(e,a,n){},63:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),c=n(14),r=n.n(c),u=(n(49),n(28)),o=n(66),i=n(72),d=n(70),s=n(67),m=n(68),h=n(39),v=n(35),E=n.n(v),g=n(73),p=n(71),f=n(74),y=n(65),C=n(69),S=n(36);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Periods:"))};function k(e){var a=e.schedule.name?e.schedule.name:"Untitled";return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Header,null,l.a.createElement(p.a.Toggle,{as:h.a,variant:"link",eventKey:e.index.toString()},"#",e.index,": ",a,0===e.index?l.a.createElement(y.a,{variant:"primary",className:"ml-2"},"Default"):null)),l.a.createElement(p.a.Collapse,{eventKey:e.index.toString()},l.a.createElement(f.a.Body,null,0===e.index?l.a.createElement(g.a,{variant:"info"},"This schedule is the default schedule, so it's always used when a special schedule is not in place."):null,l.a.createElement(C.a,null,l.a.createElement(C.a.Group,{controlId:"name-".concat(e.index)},l.a.createElement(C.a.Label,null,"Schedule Name"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Enter a name",value:e.schedule.name,onChange:function(a){e.schedule.name=a.target.value,e.setSchedule(e.schedule)}})),l.a.createElement(C.a.Check,{checked:e.schedule.combinedAB||!1,label:"Combined A/B Periods?",onChange:function(a){e.schedule.combinedAB=a.target.checked,e.setSchedule(e.schedule)},type:"checkbox",id:"combined-".concat(e.index)}),l.a.createElement(C.a.Check,{checked:void 0!==e.schedule.applyDay,label:"Apply schedule on a certain day of the week?",type:"checkbox",id:"apply-on-".concat(e.index),onChange:function(a){e.schedule.applyDay=a.target.checked?1:void 0,e.setSchedule(e.schedule)}}),void 0!==e.schedule.applyDay?l.a.createElement(C.a.Control,{as:"select",value:e.schedule.applyDay,id:"apply-".concat(e.index),onChange:function(a){e.schedule.applyDay=parseInt(a.target.value),e.setSchedule(e.schedule)}},["Monday","Tuesday","Wednesday","Thursday","Friday"].map((function(e,a){return l.a.createElement("option",{value:(a+1).toString(),key:a},a+1," - ",e)}))):null,l.a.createElement("hr",null),l.a.createElement(w,{onChange:function(a){e.schedule.dates=a,e.setSchedule(e.schedule)},value:e.schedule.dates,index:e.index})),l.a.createElement("hr",null),l.a.createElement(b,{onChange:function(a){e.schedule.schedule=a,e.setSchedule(e.schedule)},value:e.schedule.schedule})))))}function w(e){function a(e){var a=new Date(e);return isNaN(a)?"":a.toISOString().split("T")[0]}function n(a,n){if(e.value){var t=n.target.valueAsDate.toLocaleDateString(void 0,{timeZone:"UTC"});a.length>1?e.value[a[0]][a[1]]=t:e.value[a[0]]=t,e.onChange(e.value)}}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"Dates:"),0===e.index?l.a.createElement(g.a,{variant:"secondary"},"Dates have no effect on the default schedule. Feel free to ignore."):null,e.value?e.value.map((function(t,c){return l.a.createElement("div",{key:c,className:"mb-2"},t instanceof Array?l.a.createElement(l.a.Fragment,null,a(t[1])<=a(t[0])?l.a.createElement(g.a,{variant:"warning"},"Your end date is before or on your start date."):null,l.a.createElement(C.a.Control,{type:"date",value:a(t[0]),className:"inline-auto",onChange:function(e){return n([c,0],e)}})," - ",l.a.createElement(C.a.Control,{type:"date",value:a(t[1]),className:"inline-auto",onChange:function(e){return n([c,1],e)}})):l.a.createElement(C.a.Control,{type:"date",value:a(t),className:"inline-auto",onChange:function(e){return n([c],e)}}),l.a.createElement(h.a,{variant:"danger",className:"ml-3",title:"Remove",onClick:function(){return a=c,void(e.value&&(e.value.splice(a,1),e.onChange(e.value)));var a}},"\xd7"))})):null,l.a.createElement(h.a,{variant:"primary",onClick:function(){return function(){var a;e.value&&e.value.push(""),e.onChange(null!==(a=e.value)&&void 0!==a?a:[""])}()}},"+ Add new date"),l.a.createElement(h.a,{variant:"primary",className:"ml-3",onClick:function(){return function(){var a;e.value&&e.value.push(["",""]),e.onChange(null!==(a=e.value)&&void 0!==a?a:[["",""]])}()}},"+ Add new date range"))}var N=function(e){var a="",n=[];try{n=Object(S.parse)(e.value)}catch(t){a=t.toString()}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Edit your schedules here."),a?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"danger"},l.a.createElement("p",null,"Sorry, your schedule could not be parsed. Please fix the JSON on the left to continue."),l.a.createElement("p",{className:"mb-0"},l.a.createElement("b",null,"Error Message:")),l.a.createElement("pre",null,a))):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement(h.a,{variant:"primary",onClick:function(a){n.push({name:"New Schedule",combinedAB:!1,dates:[],schedule:[]}),e.onChange(JSON.stringify(n,null,4))}},"+ Add New Schedule")),l.a.createElement(p.a,{defaultActiveKey:"0",className:"mb-3"},n.map((function(a,t){return l.a.createElement(k,{schedule:a,setSchedule:function(a){return function(a,t){n[a]=t,e.onChange(JSON.stringify(n,null,4))}(t,a)},key:t,index:t})}))),l.a.createElement("p",null,"Once you're done editing your schedules here, head back over to the JSON Code tab and copy and paste your newly-created schedules into the ",l.a.createElement("a",{href:"https://github.com/camtheman256/lasa-schedules-data"},"LASA Schedules Data repository"),".")))};n(59),n(60),n(61),n(62);function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{bg:"light",expand:"md"},l.a.createElement(i.a.Brand,null,"LASA Schedules Editor"),l.a.createElement(i.a.Toggle,{"aria-controls":"navbar"}),l.a.createElement(i.a.Collapse,{id:"navbar"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(d.a.Link,{href:"https://github.com/camtheman256/lasa-schedules-data/blob/master/README.md",target:"_blank"},"\u2197 Schedules Documentation")))))}function A(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h3",{style:{display:"inline"}},"Pick a view to edit your schedules:"),l.a.createElement(s.a,{toggle:!0,className:"ml-3"},[{name:"JSON Code",value:0},{name:"Graphical Editor",value:1}].map((function(a,n){return l.a.createElement(m.a,{key:n,type:"radio",variant:"primary",checked:e.visiblePane===a.value,value:a.value,onChange:function(){return e.changeView(a.value)}},a.name)})))))}function D(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Paste your schedules JSON here."),l.a.createElement("p",null,l.a.createElement(h.a,{variant:"link",onClick:function(a){e.downloadSchedule()}},"Or, download the live schedules from the LASA Schedules API.")),l.a.createElement(E.a,{mode:"json",theme:"github",value:e.value,onChange:function(a,n){e.onChange(a)},width:"auto",height:"750px",fontSize:14}))}var O=function(){var e=Object(t.useState)("[]"),a=Object(u.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(0),i=Object(u.a)(r,2),d=i[0],s=i[1];function m(e){c(e)}var h=[l.a.createElement(D,{onChange:m,value:n,downloadSchedule:function(){fetch("https://schedules-data.lasa2019.com/schedule.json").then((function(e){return e.text()})).then((function(e){return c(e)}))}}),l.a.createElement(N,{onChange:m,value:n})];return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(o.a,{className:"mt-3"},l.a.createElement(A,{changeView:function(e){s(e)},visiblePane:d}),l.a.createElement("hr",null),h[d]))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.35b545ff.chunk.js.map