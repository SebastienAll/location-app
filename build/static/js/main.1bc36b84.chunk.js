(this["webpackJsonplocation-app"]=this["webpackJsonplocation-app"]||[]).push([[0],{23:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/statusOpen.d32ba602.svg"},43:function(e,t,a){e.exports=a.p+"static/media/statusClose.63cc75bc.svg"},52:function(e,t,a){e.exports=a.p+"static/media/01.a6d0f511.png"},53:function(e,t,a){e.exports=a.p+"static/media/02.5a8d5ad9.png"},54:function(e,t,a){e.exports=a.p+"static/media/03.178fa405.png"},55:function(e,t,a){e.exports=a.p+"static/media/04.20802446.png"},56:function(e,t,a){e.exports=a.p+"static/media/05.ef69e9f9.png"},57:function(e,t,a){e.exports=a.p+"static/media/06.90a3f2c5.png"},60:function(e,t,a){e.exports=a(79)},66:function(e,t,a){},72:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),s=a.n(r),c=(a(65),a(66),a(58)),i=a(25),o=a(15),u=a(27),m=a(26),d=a(28),f=a(3),p=a.n(f),h=a(39),v=a(38),E=a(40),b=a(45),g=a.n(b),y=(a(71),a(72),a(41),a(47)),S=a.n(y),N=a(48),w=a.n(N),k=a(19);a(23);function O(e){return Object(n.useEffect)((function(){var e=document.getElementById("canvas"),t=e.getContext("2d");t.imageSmoothingEnabled=!0,t.lineWidth=4,t.lineCap="round",t.strokeStyle="#272727";var a=!1;function n(e){a=!1,t.beginPath()}function l(e){a&&(t.lineTo(e.offsetX,e.offsetY),t.stroke(),t.beginPath(),t.moveTo(e.offsetX,e.offsetY))}function r(n){if(n.preventDefault(),a){var l=e.getBoundingClientRect(),r=n.changedTouches[0];t.lineTo(r.clientX-l.left,r.clientY-l.top),t.stroke(),t.beginPath(),t.moveTo(r.clientX-l.left,r.clientY-l.top)}}e.addEventListener("mousedown",(function(e){a=!0,l(e)})),e.addEventListener("mouseup",n),e.addEventListener("mouseleave",n),e.addEventListener("mousemove",l),e.addEventListener("touchstart",(function(e){e.preventDefault(),a=!0,r(e)})),e.addEventListener("touchmove",r),e.addEventListener("touchend",(function(e){a=!1,t.beginPath()})),document.querySelector(".btn-clear").addEventListener("click",(function(a){a.preventDefault(),t.clearRect(0,0,e.width,e.height)}))}),[]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"border-canvas"},l.a.createElement("canvas",{id:"canvas"})),l.a.createElement("div",{className:"btn-canvas"},l.a.createElement("a",{href:"false",className:"btn-clear"},"Effacer")))}var j=a(82),x=a(21),I=a.n(x);a(74);function A(e){var t=e.name,a=e.address,r=e.status,s=e.bikes;window.addEventListener("load",(function(){w()})),window.addEventListener("beforeunload",(function(){var e=I()();sessionStorage.setItem("logout",e),sessionStorage.setItem("minutes",C),sessionStorage.setItem("secondes",D)}));var c=Object(n.useState)(""),i=Object(k.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(""),d=Object(k.a)(m,2),f=d[0],p=d[1],h=Object(n.useState)(!1),v=Object(k.a)(h,2),E=v[0],b=v[1],g=Object(n.useState)(!1),y=Object(k.a)(g,2),S=y[0],N=y[1],w=function(){var e=I()(),t=sessionStorage.getItem("logout"),a=I.a.duration(e.diff(t));sessionStorage.getItem("reservation")&&(R(sessionStorage.getItem("minutes")-a._data.minutes),z(sessionStorage.getItem("secondes")-a._data.minutes),N(!0),F(!0),document.querySelector(".inputsurname").setAttribute("disabled",""),document.querySelector(".inputlastname").setAttribute("disabled",""),document.querySelector(".btnReserve").style.display="none")},x=function(e){e.preventDefault(),localStorage.setItem("surname",o),localStorage.setItem("lastname",f),sessionStorage.setItem("address",a),document.querySelector(".inputsurname").setAttribute("disabled",""),document.querySelector(".inputlastname").setAttribute("disabled",""),N(!0),F(!B),b(!1),document.querySelector(".btnReserve").style.display="none";var t=I()().add(20,"m").toDate();sessionStorage.setItem("endReservation",t)};!0===S&&sessionStorage.setItem("reservation",S);var A=Object(n.useState)(20),q=Object(k.a)(A,2),C=q[0],R=q[1],T=Object(n.useState)(0),P=Object(k.a)(T,2),D=P[0],z=P[1],L=Object(n.useState)(!1),U=Object(k.a)(L,2),B=U[0],F=U[1];return Object(n.useEffect)((function(){var e=null;if(B){if(D>0)return e=setInterval((function(){return z(D-1)}),1e3),function(){return clearInterval(e)};if(0===D&&C>=0)return e=setInterval((function(){R(C-1),z(59)}),1e3),function(){return clearInterval(e)};sessionStorage.clear(),document.querySelector(".btnReserve").style.display="block",document.querySelector(".inputsurname").removeAttribute("disabled",""),document.querySelector(".inputlastname").removeAttribute("disabled",""),F(!1),N(!1),u(""),p("")}}),[D,C,B]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"form"},l.a.createElement("div",null,l.a.createElement("h1",null,"Stations"),l.a.createElement("p",{className:"info"},t)),l.a.createElement("div",null,l.a.createElement("h1",null,"Adresse"),l.a.createElement("p",{className:"info"},a)),l.a.createElement("div",null,l.a.createElement("h1",null,"V\xe9los"),l.a.createElement("p",{className:"info"},s)),l.a.createElement("div",null,l.a.createElement("h1",null,"Status"),l.a.createElement("p",{className:"info"},"OPEN"===r?"OUVERTE":"CLOSE"===r?"FERMEE":null)),l.a.createElement("hr",null),l.a.createElement("div",{className:"infoUser"},l.a.createElement("h1",null,"Utilisateur"),l.a.createElement("input",{required:"required",className:"inputsurname",type:"text",placeholder:"Pr\xe9nom",value:o,onChange:function(e){var t=e.currentTarget.value;u(t)}}),l.a.createElement("input",{required:"required",className:"inputlastname",type:"text",placeholder:"Nom",value:f,onChange:function(e){var t=e.currentTarget.value;p(t)}})),l.a.createElement("a",{href:"false",className:"btnReserve",onClick:function(e){e.preventDefault(),b(null!=t&&s>0&&"OPEN"===r&&""!==o&&""!==f)}},"R\xe9server"),S?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"viewReserve"},l.a.createElement("p",null," Votre r\xe9servation au nom de ".concat(localStorage.getItem("lastname")," ").concat(localStorage.getItem("surname")," \xe0 l'adresse ").concat(sessionStorage.getItem("address")," \xe0 bien \xe9t\xe9 prise en compte. ")),l.a.createElement("p",{className:"viewTimer"}," Dur\xe9e restante : ".concat(C<10?"0"+C:C," : ").concat(D<10?"0"+D:D," ")),l.a.createElement("a",{href:"false",className:"btnCancelReserve",onClick:function(e){e.preventDefault(),sessionStorage.clear(),document.querySelector(".btnReserve").style.display="block",document.querySelector(".inputsurname").removeAttribute("disabled",""),document.querySelector(".inputlastname").removeAttribute("disabled",""),F(!1),N(!1),u(""),p("")}},"Annuler"))):l.a.createElement("span",null),l.a.createElement(j.a,{show:E,onHide:function(){return b(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",className:"modal"},l.a.createElement(j.a.Header,{closeButton:!0,className:"modal-header"},l.a.createElement(j.a.Title,{id:"example-custom-modal-styling-title"},"R\xe9servation")),l.a.createElement(j.a.Body,{className:"modal-body"},l.a.createElement(O,{state:E,handleValid:x}),l.a.createElement("a",{href:"false",className:"btnValidReserve",onClick:x},"Validez")))))}var q=p.a.icon({iconUrl:S.a,shadowUrl:w.a});p.a.Marker.prototype.options.icon=q;var C=new p.a.Icon({iconUrl:a(42),iconRetinaUrl:a(42),iconAnchor:[5,55],popupAnchor:[10,-44],iconSize:[50,50],shadowUrl:null,shadowSize:null,shadowAnchor:null}),R=new p.a.Icon({iconUrl:a(43),iconRetinaUrl:a(43),iconAnchor:[5,55],popupAnchor:[10,-44],iconSize:[50,50],shadowUrl:null,shadowSize:null,shadowAnchor:null}),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={stations:[],selectedStation:{}},a.editSelectedStation=function(e){a.setState({selectedStation:{name:e.name.substring(8),address:e.address,available_bikes:e.available_bikes,status:e.status}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"addMarker",value:function(){var e=this;return this.props.stations.map((function(t,a){return"OPEN"===t.status&&t.available_bikes>0?l.a.createElement(h.a,{position:t.position,key:a,icon:C,onClick:function(){return e.editSelectedStation(t)}}):l.a.createElement(h.a,{position:t.position,key:a,icon:R,onClick:function(){return e.editSelectedStation(t)}})}))}},{key:"render",value:function(){var e=this.state.selectedStation;return l.a.createElement("div",{className:"containermap"},l.a.createElement("div",{className:"mapPart"},l.a.createElement(v.a,{center:[43.6010004,1.4235189],zoom:14,maxZoom:20,className:"markercluster-map"},l.a.createElement(E.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'}),l.a.createElement(g.a,null,this.addMarker())),l.a.createElement("div",{className:"formPart"},l.a.createElement(A,{name:e.name,address:e.address,bikes:e.available_bikes,status:e.status}))))}}]),t}(n.Component),P=a(1),D=a(34),z=a(51);function L(e){var t=e.weather;return l.a.createElement(n.Fragment,null,"Clouds"===t?l.a.createElement("i",{className:"fas fa-cloud fa-6x"}):"Rain"===t?l.a.createElement("i",{className:"fas fa-cloud-rain fa-6x"}):"Thunderstorm"===t?l.a.createElement("i",{className:"fas fa-poo-storm fa-6x"}):"Drizzle"===t?l.a.createElement("i",{className:"fas fa-cloud-showers-heavy fa-6x"}):"Snow"===t?l.a.createElement("i",{className:"fas fa-snowflake fa-6x"}):"Clear"===t?l.a.createElement("i",{className:"fas fa-sun fa-6x"}):"Mist"===t||"Smoke"===t||"Haze"===t||"Dust"===t||"Fog"===t||"Ash"===t||"Squall"===t||"Tornado"===t?l.a.createElement("i",{className:"fas fa-smog fa-6x"}):void 0)}D.a.registerPlugin(z.a);var U=function(e){var t=e.weather;window.onload=function(){(new P.e).from(".maintitle",1.5,{autoAlpha:0,opacity:0,y:-20,ease:P.b.easeOut,delay:2},"-=1.00").from(".lead",1.5,{autoAlpha:0,y:-10,ease:P.b.easeOut},"-=1.00").from(".item1",1.5,{autoAlpha:0,y:-20,ease:P.b.easeOut},"-=1.00").from(".item2",1.5,{autoAlpha:0,y:-20,ease:P.b.easeOut},"-=1.00")};return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"hero1 jumbotron jumbotron-fluid"},l.a.createElement("h1",{className:"display-4 maintitle"},"PinkBike"),l.a.createElement("p",{className:"lead"},"Bienvenue sur le site de location de v\xe9los de la ville de Toulouse"),l.a.createElement("div",{className:"item item1"},l.a.createElement("p",null,l.a.createElement(L,{weather:t.weather}))),l.a.createElement("div",{className:"item item2"},l.a.createElement("p",null,parseInt(t.temp)+"\xb0C")),l.a.createElement("i",{id:"btnScroll",className:"iconSlide fas fa-chevron-down iHome",onClick:function(){D.a.to(window,{duration:2,scrollTo:{y:".sliderpart",offsetY:0},ease:P.c.easeOut})}})))},B=a(10),F=a.n(B),M=a(52),_=a.n(M),V=a(53),W=a.n(V),Y=a(54),H=a.n(Y),X=a(55),J=a.n(X),K=a(56),Z=a.n(K),$=a(57),G=a.n($),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){F()(document).ready((function(){for(var e=F()(".slider li").length,t=1,a=1;a<=e;a++)F()(".pagination").append('<li><span fill="#f5f5f5" class="iconPag fas fa-bicycle fa-2x"></span></li>');F()(".slider li").hide(),F()(".slider li:first").show(),F()(".pagination li:first").css({color:"#ef9a9a"}),F()(".pagination li").click((function(){var e=F()(this).index()+1;F()(".slider li").hide(),F()(".slider li:nth-child("+e+")").fadeIn(),F()(".pagination li").css({color:"#272727"}),F()(this).css({color:"#ef9a9a"}),t=e})),F()(".right span").click(r),F()(document).keydown((function(e){39===e.which&&(e.preventDefault(),r())})),F()(".left span").click(s),F()(document).keydown((function(e){37===e.which&&(e.preventDefault(),s())}));var n=null;function l(){n=setInterval((function(){r()}),5e3)}function r(){t>=e?t=1:t++,F()(".slider li").hide(),F()(".slider li:nth-child("+t+")").fadeIn(),F()(".pagination li").css({color:"#272727"}),F()(".pagination li:nth-child("+t+")").css({color:"#ef9a9a"})}function s(){t<=1?t=e:t--,F()(".slider li").hide(),F()(".slider li:nth-child("+t+")").fadeIn(),F()(".pagination li").css({color:"#272727"}),F()(".pagination li:nth-child("+t+")").css({color:"#ef9a9a"})}setTimeout((function(){l()}),6e3),F()(".play").click(l),F()(".pause").click((function(){clearInterval(n)}))}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"containerslide"},l.a.createElement("div",{className:"slideshow"},l.a.createElement("ul",{className:"slider"},l.a.createElement("li",null,l.a.createElement("img",{src:_.a,alt:"explication1"}),l.a.createElement("section",{className:"caption"})),l.a.createElement("li",null,l.a.createElement("img",{src:W.a,alt:"explication2"}),l.a.createElement("section",{className:"caption"})),l.a.createElement("li",null,l.a.createElement("img",{src:H.a,alt:"explication3"}),l.a.createElement("section",{className:"caption"})),l.a.createElement("li",null,l.a.createElement("img",{src:J.a,alt:"explication4"}),l.a.createElement("section",{className:"caption"})),l.a.createElement("li",null,l.a.createElement("img",{src:Z.a,alt:"explication5"}),l.a.createElement("section",{className:"caption"})),l.a.createElement("li",null,l.a.createElement("img",{src:G.a,alt:"explication6"}),l.a.createElement("section",{className:"caption"}))),l.a.createElement("ol",{className:"pagination"}),l.a.createElement("div",{className:"left"},l.a.createElement("span",{className:"fas fa-chevron-left"})),l.a.createElement("div",{className:"right"},l.a.createElement("span",{className:"fas fa-chevron-right"})),l.a.createElement("div",{className:"btnPlayPause"},l.a.createElement("span",{className:"play fas fa-play fa-2x"}),l.a.createElement("span",{className:"pause fas fa-pause fa-2x"}))))}}]),t}(n.Component),ee=function(){return l.a.createElement("footer",null,l.a.createElement("h3",null,"Ce site \xe0 \xe9t\xe9 produit par un \xe9l\xe8ve en formation chez OpenClassRooms"))},te="https://api.jcdecaux.com/vls/v1/stations?contract=".concat("Toulouse","&apiKey=").concat("b309f0297a68f865e2f8824658204cf9ce7ffaca"),ae="http://api.openweathermap.org/data/2.5/weather?q=".concat("Toulouse","&appid=").concat("69b92398024593946ae629c9ade5fa67","&lang=fr&units=metric"),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={stations:[],weatherInfo:[]},a.apiRequest=function(){fetch(te).then((function(e){return e.json()})).then((function(e){return a.setState({stations:Object(c.a)(e)})})).catch((function(e){return console.error(e)}))},a.apiRequestWeather=function(){fetch(ae).then((function(e){return e.json()})).then((function(e){return a.setState({weatherInfo:{weather:e.weather[0].main,icon:e.weather[0].icon,temp:e.main.temp}})})).catch((function(e){return console.error(e)}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.apiRequest(),this.apiRequestWeather()}},{key:"render",value:function(){var e=this.state,t=e.stations,a=e.weatherInfo;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{id:"headerpart"},l.a.createElement(U,{weather:a})),l.a.createElement("section",{className:"sliderpart"},l.a.createElement(Q,null)),l.a.createElement("div",{className:"mappart"},l.a.createElement(T,{stations:t})),l.a.createElement("div",{className:"footerpart"},l.a.createElement(ee,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.1bc36b84.chunk.js.map