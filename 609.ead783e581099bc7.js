"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[609],{2609:(j,g,r)=>{r.r(g),r.d(g,{Messages:()=>X,MessagesModule:()=>U});var o=r(9969),l=r(177),e=r(4438),_=r(5779),m=r(3306),p=r(9329),f=r(1962),u=r(1512),h=r(2816),d=r(563),v=r(1584);const T=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),I=t=>({value:"visible",params:t});function y(t,i){if(1&t&&e.nrm(0,"span"),2&t){const s=e.XpG().$implicit;e.HbH("p-message-icon pi "+s.icon),e.BMQ("data-pc-section","icon")}}function b(t,i){1&t&&e.nrm(0,"CheckIcon"),2&t&&e.BMQ("data-pc-section","icon")}function E(t,i){1&t&&e.nrm(0,"InfoCircleIcon"),2&t&&e.BMQ("data-pc-section","icon")}function C(t,i){1&t&&e.nrm(0,"TimesCircleIcon"),2&t&&e.BMQ("data-pc-section","icon")}function O(t,i){1&t&&e.nrm(0,"ExclamationTriangleIcon"),2&t&&e.BMQ("data-pc-section","icon")}function D(t,i){if(1&t&&(e.j41(0,"span",10),e.qex(1),e.DNE(2,b,1,1,"CheckIcon",11)(3,E,1,1,"InfoCircleIcon",11)(4,C,1,1,"TimesCircleIcon",11)(5,O,1,1,"ExclamationTriangleIcon",11),e.bVm(),e.k0s()),2&t){const s=e.XpG().$implicit;e.R7$(2),e.Y8G("ngIf","success"===s.severity),e.R7$(),e.Y8G("ngIf","info"===s.severity),e.R7$(),e.Y8G("ngIf","error"===s.severity),e.R7$(),e.Y8G("ngIf","warn"===s.severity)}}function G(t,i){if(1&t&&e.nrm(0,"span",14),2&t){const s=e.XpG(2).$implicit;e.Y8G("innerHTML",s.summary,e.npT),e.BMQ("data-pc-section","summary")}}function R(t,i){if(1&t&&e.nrm(0,"span",15),2&t){const s=e.XpG(2).$implicit;e.Y8G("innerHTML",s.detail,e.npT),e.BMQ("data-pc-section","detail")}}function x(t,i){if(1&t&&(e.qex(0),e.DNE(1,G,1,2,"span",12)(2,R,1,2,"span",13),e.bVm()),2&t){const s=e.XpG().$implicit;e.R7$(),e.Y8G("ngIf",s.summary),e.R7$(),e.Y8G("ngIf",s.detail)}}function S(t,i){if(1&t&&(e.j41(0,"span",18),e.EFF(1),e.k0s()),2&t){const s=e.XpG(2).$implicit;e.BMQ("data-pc-section","summary"),e.R7$(),e.JRh(s.summary)}}function B(t,i){if(1&t&&(e.j41(0,"span",19),e.EFF(1),e.k0s()),2&t){const s=e.XpG(2).$implicit;e.BMQ("data-pc-section","detail"),e.R7$(),e.JRh(s.detail)}}function k(t,i){if(1&t&&e.DNE(0,S,2,2,"span",16)(1,B,2,2,"span",17),2&t){const s=e.XpG().$implicit;e.Y8G("ngIf",s.summary),e.R7$(),e.Y8G("ngIf",s.detail)}}function P(t,i){if(1&t){const s=e.RV6();e.j41(0,"button",20),e.bIt("click",function(){e.eBV(s);const a=e.XpG().index,c=e.XpG(2);return e.Njj(c.removeMessage(a))}),e.nrm(1,"TimesIcon",21),e.k0s()}if(2&t){const s=e.XpG(3);e.BMQ("aria-label",s.closeAriaLabel)("data-pc-section","closebutton"),e.R7$(),e.Y8G("styleClass","p-message-close-icon"),e.BMQ("data-pc-section","closeicon")}}function L(t,i){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.DNE(2,y,1,3,"span",7)(3,D,6,4,"span",8)(4,x,3,2,"ng-container",3)(5,k,2,2,"ng-template",null,1,e.C5r)(7,P,2,4,"button",9),e.k0s()()),2&t){let s;const n=i.$implicit,a=e.sdS(6),c=e.XpG(2);e.HbH("p-message p-message-"+n.severity),e.Y8G("@messageAnimation",e.eq3(13,I,e.l_i(10,T,c.showTransitionOptions,c.hideTransitionOptions))),e.R7$(),e.BMQ("data-pc-section","wrapper")("id",n.id||null),e.R7$(),e.Y8G("ngIf",n.icon),e.R7$(),e.Y8G("ngIf",!n.icon),e.R7$(),e.Y8G("ngIf",!c.escape)("ngIfElse",a),e.R7$(3),e.Y8G("ngIf",c.closable&&(null===(s=n.closable)||void 0===s||s))}}function $(t,i){if(1&t&&(e.qex(0),e.DNE(1,L,8,15,"div",4),e.bVm()),2&t){const s=e.XpG();e.R7$(),e.Y8G("ngForOf",s.messages)}}function Y(t,i){1&t&&e.eu8(0)}function A(t,i){if(1&t&&(e.j41(0,"div",22)(1,"div",6),e.DNE(2,Y,1,0,"ng-container",23),e.k0s()()),2&t){const s=e.XpG();e.Y8G("ngClass","p-message p-message-"+s.severity),e.R7$(2),e.Y8G("ngTemplateOutlet",s.contentTemplate)}}let X=(()=>{class t{messageService;el;cd;config;set value(s){this.messages=s,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new e.bkB;onClose=new e.bkB;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(s,n,a,c){this.messageService=s,this.el=n,this.cd=a,this.config=c}ngAfterContentInit(){this.templates?.forEach(s=>{s.getType(),this.contentTemplate=s.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s){Array.isArray(s)||(s=[s]);const n=s.filter(a=>this.key===a.key);this.messages=this.messages?[...this.messages,...n]:[...n],this.startMessageLifes(n),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let s=this.el.nativeElement.parentElement;return!(!s||!s.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(s){const n=this.messages[s];this.messages=this.messages?.filter((a,c)=>c!==s),n&&this.onClose.emit(n),this.valueChange.emit(this.messages)}get icon(){const s=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(s){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(s=>s.unsubscribe())}startMessageLifes(s){s?.forEach(n=>n.life&&this.startMessageLife(n))}startMessageLife(s){const n=(0,v.O)(s.life).subscribe(()=>{this.messages=this.messages?.filter(a=>a!==s),this.timerSubscriptions=this.timerSubscriptions?.filter(a=>a!==n),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(n)}static \u0275fac=function(n){return new(n||t)(e.rXU(_.bg,8),e.rXU(e.aKT),e.rXU(e.gRc),e.rXU(_.r1))};static \u0275cmp=e.VBU({type:t,selectors:[["p-messages"]],contentQueries:function(n,a,c){if(1&n&&e.wni(c,_.Ei,4),2&n){let M;e.mGM(M=e.lsd())&&(a.templates=M)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:[e.Mj6.HasDecoratorInputTransform,"closable","closable",e.L39],style:"style",styleClass:"styleClass",enableService:[e.Mj6.HasDecoratorInputTransform,"enableService","enableService",e.L39],key:"key",escape:[e.Mj6.HasDecoratorInputTransform,"escape","escape",e.L39],severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange",onClose:"onClose"},features:[e.GFd],decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(n,a){if(1&n&&(e.j41(0,"div",2),e.DNE(1,$,2,1,"ng-container",3)(2,A,3,2,"ng-template",null,0,e.C5r),e.k0s()),2&n){const c=e.sdS(3);e.HbH(a.styleClass),e.Y8G("ngStyle",a.style),e.BMQ("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),e.R7$(),e.Y8G("ngIf",!a.contentTemplate)("ngIfElse",c)}},dependencies:()=>[l.YU,l.Sq,l.bT,l.T3,l.B3,d.n,m.S,f.e,h.I,p.P,u.A],styles:["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,o.hZ)("messageAnimation",[(0,o.kY)(":enter",[(0,o.iF)({opacity:0,transform:"translateY(-25%)"}),(0,o.i0)("{{showTransitionParams}}")]),(0,o.kY)(":leave",[(0,o.i0)("{{hideTransitionParams}}",(0,o.iF)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),U=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[l.MD,d.Z,m.S,f.e,h.I,p.P,u.A]})}return t})()}}]);