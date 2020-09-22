(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(11),a(2)),u=a.n(s),m=a(5),o=a(1);a(13);var i=function(e){var t=e.city,a=e.loading,n=e.handleChange,c=e.handleSubmit;return r.a.createElement("form",{className:"form",onSubmit:c},r.a.createElement("label",{className:"form-label"},"City"),r.a.createElement("input",{type:"text",name:"city",className:"input",value:t,onChange:n}),r.a.createElement("button",{className:"button"},a?"Fetching weather data...":"Get Weather"))};var p=function(e){var t=e.weather;return r.a.createElement("div",{className:"weather-card"},r.a.createElement("h4",null,t.applicable_date),r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(t.weather_state_abbr,".svg"),alt:t.weather_state_name}),r.a.createElement("p",null,r.a.createElement("span",null,"Humidity:")," ",r.a.createElement("span",null,t.humidity,"\xb0C")),r.a.createElement("p",null,r.a.createElement("span",null,"Min:")," ",r.a.createElement("span",null,t.min_temp.toFixed(2),"\xb0C")),r.a.createElement("p",null,r.a.createElement("span",null,"Max:")," ",r.a.createElement("span",null,t.max_temp.toFixed(2),"\xb0C")))};var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),h=s[0],w=s[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),E=b[0],f=b[1],v=Object(n.useState)({}),g=Object(o.a)(v,2),x=g[0],y=g[1],j=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r,l,s,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a){e.next=3;break}return e.abrupt("return");case 3:return f(!0),e.next=6,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=".concat(a));case 6:return n=e.sent,e.next=9,n.json();case 9:if(r=e.sent,!(l=r[0])){e.next=21;break}return e.next=14,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(l.woeid));case 14:return s=e.sent,e.next=17,s.json();case 17:(m=e.sent)?(y(null),w(m.consolidated_weather),c("")):(y({message:"Could not fetch weather data"}),c(""),w([])),e.next=24;break;case 21:y({message:"Location Not Found"}),c(""),w([]);case 24:f(!1);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("main",null,r.a.createElement("h1",null,"Weather App"),r.a.createElement(i,{city:a,loading:E,handleChange:function(e){c(e.target.value)},handleSubmit:j}),x&&r.a.createElement("span",{className:"error-message"},x.message),!E&&r.a.createElement("div",{className:"weather-wrapper"},h.map((function(e){return r.a.createElement(p,{key:e.id,weather:e})}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.30abe972.chunk.js.map