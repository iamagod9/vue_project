(function(){"use strict";var e={411:function(e,t,r){var s=r(963),n=r(252);const c={class:"app"};function o(e,t,r,s,o,a){const i=(0,n.up)("employee-profile"),l=(0,n.up)("menu-employee-profile");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(i),(0,n.Wm)(l)])}var a=r(577);const i=e=>((0,n.dD)("data-v-5899e15c"),e=e(),(0,n.Cn)(),e),l={class:"header"},m=i((()=>(0,n._)("br",null,null,-1))),u={class:"checkbox"},p={class:"theme-switcher-wrap"},_=i((()=>(0,n._)("div",{class:"switch-path"},[(0,n._)("div",{class:"switch-handle"})],-1))),d=[_],h={class:"tasks"},f={class:"wrapper-tasks"},v=i((()=>(0,n._)("br",null,null,-1))),g={class:"wrapper-tasks"},k=i((()=>(0,n._)("br",null,null,-1))),C={class:"test-complete"},T=i((()=>(0,n._)("br",null,null,-1))),b={class:"certification"};function w(e,t,r,s,c,o){const i=(0,n.up)("radial-progress-bar");return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["cart",c.currentTheme])},[(0,n._)("div",l,[(0,n._)("p",{class:(0,a.C_)(["identification-number",c.currentTheme])},[(0,n.Uk)("XX.XX.XXXX"),m,(0,n.Uk)("XX.XX")],2),(0,n._)("div",{class:(0,a.C_)(["exit",c.currentTheme])},[(0,n._)("a",{class:(0,a.C_)(["exit__text",c.currentTheme]),href:"#"},"Выход",2)],2)]),(0,n._)("div",u,[(0,n._)("div",p,[(0,n._)("div",{class:(0,a.C_)(["theme-switcher",{active:"theme-light"===c.currentTheme}]),onClick:t[0]||(t[0]=(...e)=>o.switchTheme&&o.switchTheme(...e))},d,2)])]),(0,n._)("div",{class:(0,a.C_)(["my-data",c.currentTheme])},[(0,n._)("h2",{class:(0,a.C_)(["my-data__name",c.currentTheme])},"Фамилия Имя Отчество",2),(0,n._)("p",{class:(0,a.C_)(["my-data__number",c.currentTheme])},"XX.XX.XXXX",2),(0,n._)("p",{class:(0,a.C_)(["my-data__text",c.currentTheme])},"Таб №: ГОКИ 0000",2),(0,n._)("p",{class:(0,a.C_)(["my-data__text",c.currentTheme])},"Проходчик IV разряда",2)],2),(0,n._)("div",h,[(0,n._)("div",f,[(0,n._)("div",{class:(0,a.C_)(["tasks-item",c.currentTheme])},[(0,n._)("h3",{class:(0,a.C_)(c.currentTheme)},"Инструктаж",2),(0,n._)("div",{class:(0,a.C_)(["briefing",c.currentTheme])},[(0,n.Wm)(i,{class:"rpb",diameter:125,"completed-steps":c.completedSteps=10,"total-steps":c.totalSteps},null,8,["completed-steps","total-steps"])],2)],2),(0,n._)("div",{class:(0,a.C_)(["tasks-item",c.currentTheme])},[(0,n._)("h3",{class:(0,a.C_)(["tasks-test",c.currentTheme])},[(0,n.Uk)("Предсменный"),v,(0,n.Uk)(" экзаменатор")],2),(0,n._)("div",{class:(0,a.C_)(["pre-shift-examiner",c.currentTheme])},[(0,n.Wm)(i,{class:"rpb",diameter:125,"completed-steps":c.completedSteps=10,"total-steps":c.totalSteps},null,8,["completed-steps","total-steps"])],2)],2)]),(0,n._)("div",g,[(0,n._)("div",{class:(0,a.C_)(["tasks-item",c.currentTheme])},[(0,n._)("h3",{class:(0,a.C_)(["tasks-complete",c.currentTheme])},[(0,n.Uk)("Тестов"),k,(0,n.Uk)("выполнено")],2),(0,n._)("div",C,[(0,n.Wm)(i,{class:"rpb",diameter:125,"inner-stroke-color":c.innerStrokeColor,"completed-steps":c.completedSteps=2.5,"total-steps":c.totalSteps},{default:(0,n.w5)((()=>[(0,n._)("p",{class:(0,a.C_)(["tasks-description",c.currentTheme])},"12",2)])),_:1},8,["inner-stroke-color","completed-steps","total-steps"])])],2),(0,n._)("div",{class:(0,a.C_)(["tasks-item",c.currentTheme])},[(0,n._)("h3",{class:(0,a.C_)(["certification-through",c.currentTheme])},[(0,n.Uk)("Аттестация"),T,(0,n.Uk)("через")],2),(0,n._)("div",b,[(0,n.Wm)(i,{class:"rpb","inner-stroke-color":c.innerStrokeColor,diameter:125,"completed-steps":c.completedSteps=1.25,"total-steps":c.totalSteps},{default:(0,n.w5)((()=>[(0,n._)("p",{class:(0,a.C_)(["tasks-description",c.currentTheme])},"3",2),(0,n._)("p",{class:(0,a.C_)(["tasks-description-text",c.currentTheme])}," дня",2)])),_:1},8,["inner-stroke-color","completed-steps","total-steps"])])],2)])])],2)}var y=r(735),X=r.n(y),S={data(){return{completedSteps:0,totalSteps:10,startColor:"#ef7f1b",stopColor:"#d76e00",innerStrokeColor:"#353d54",currentTheme:localStorage.getItem("theme-color")}},methods:{switchTheme(){const e=localStorage.getItem("theme-color");"theme-light"===e?(localStorage.setItem("theme-color","theme-dark"),this.currentTheme=localStorage.getItem("theme-color")):(localStorage.setItem("theme-color","theme-light"),this.currentTheme=localStorage.getItem("theme-color"))}},components:{RadialProgressBar:X()}},x=r(744);const O=(0,x.Z)(S,[["render",w],["__scopeId","data-v-5899e15c"]]);var j=O,I=r.p+"img/work.96a63dad.png",U=r.p+"img/notification.1466033b.png",E=r.p+"img/education.c73fc99f.png",P=r.p+"img/achievement.9f23d13a.png";const W=(0,n._)("a",{href:"#"},null,-1),Z=[W],D={class:"wrapper-menu"},M=(0,n._)("div",{class:"menu-item"},[(0,n._)("h3",{class:"menu-item__text"},"Начать работу"),(0,n._)("img",{class:"menu-item__img",src:I,alt:"work"})],-1),z={class:"menu-item"},B=(0,n._)("h3",{class:"menu-item__text"},"Уведомление",-1),F=(0,n._)("img",{class:"menu-item__img",src:U,alt:"notification"},null,-1),R={class:"notification",role:"status"},V=(0,n.uE)('<div class="wrapper-menu"><div class="menu-item"><h3 class="menu-item__text">Обучение</h3><img class="menu-item__img" src="'+E+'" alt="education"></div><div class="menu-item"><h3 class="menu-item__text">Достижения</h3><img class="menu-item__img" src="'+P+'" alt="achievement"></div></div>',1);function q(e,t,r,s,c,o){return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["menu",e.currentTheme])},[(0,n._)("div",{class:(0,a.C_)(["logo",e.currentTheme])},Z,2),(0,n._)("div",D,[M,(0,n._)("div",z,[B,F,(0,n._)("div",R,(0,a.zw)(c.notifications),1)])]),V],2)}var A={data(){return{notifications:2}},components:{EmployeeProfile:j}};const G=(0,x.Z)(A,[["render",q]]);var H=G,J={components:{EmployeeProfile:j,MenuEmployeeProfile:H}};const K=(0,x.Z)(J,[["render",o]]);var L=K;const N={type:"checkbox"};function Q(e,t,r,s,c,o){return(0,n.wg)(),(0,n.iD)("input",N)}var Y={name:"my-checkbox"};const $=(0,x.Z)(Y,[["render",Q]]);var ee=$;function te(e,t){return null}const re={},se=(0,x.Z)(re,[["render",te]]);var ne=se;function ce(e,t,r,s,n,c){return null}var oe={};const ae=(0,x.Z)(oe,[["render",ce]]);var ie=ae,le=[ee,ne,ie];const me=(0,s.ri)(L);le.forEach((e=>{me.component(e.name,e)})),me.mount("#app")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,c){if(!s){var o=1/0;for(m=0;m<e.length;m++){s=e[m][0],n=e[m][1],c=e[m][2];for(var a=!0,i=0;i<s.length;i++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](s[i])}))?s.splice(i--,1):(a=!1,c<o&&(o=c));if(a){e.splice(m--,1);var l=n();void 0!==l&&(t=l)}}return t}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[s,n,c]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/vue_project/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,c,o=s[0],a=s[1],i=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(i)var m=i(r)}for(t&&t(s);l<o.length;l++)c=o[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(m)},s=self["webpackChunkamicum_vue_project"]=self["webpackChunkamicum_vue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(411)}));s=r.O(s)})();
//# sourceMappingURL=app.3369dd35.js.map