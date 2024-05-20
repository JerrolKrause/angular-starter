"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[792],{686:(P,T,s)=>{s.d(T,{r:()=>C});var p=s(9079),o=s(1584),v=s(6354),h=s(4438),f=s(9781),F=s(1141),g=s(177);let C=(()=>{class u{constructor(E,M){this.ref=E,this.config=M,this.logoutTimer$=(0,o.O)(0,1e3).pipe((0,v.T)(O=>(this.config.data||60)-O)),this.logoutTimer$.pipe((0,p.pQ)()).subscribe(O=>{O<=0&&this.logout()})}ngOnInit(){}logout(){this.ref.close(!0)}ngOnDestroy(){}static#t=this.\u0275fac=function(M){return new(M||u)(h.rXU(f.Pw),h.rXU(f.sb))};static#e=this.\u0275cmp=h.VBU({type:u,selectors:[["app-logout-modal"]],decls:9,vars:3,consts:[["id","the_time"],[1,"p-dialog-footer","p-widget-content","ng-tns-c7-3","ng-star-inserted"],["type","button","pButton","","aria-label","Close","icon","fas fa-power-off","label","Log Out",1,"float-start","pull-left",3,"click"],["type","button","pButton","","icon","fas fa-angle-double-right","iconPos","right","label","Continue Working",3,"click"]],template:function(M,O){1&M&&(h.j41(0,"p"),h.EFF(1," Your session is about to expire in "),h.j41(2,"span",0),h.EFF(3),h.nI1(4,"async"),h.k0s(),h.EFF(5," seconds, do you want to continue working?\n"),h.k0s(),h.j41(6,"div",1)(7,"button",2),h.bIt("click",function(){return O.logout()}),h.k0s(),h.j41(8,"button",3),h.bIt("click",function(){return O.ref.close()}),h.k0s()()),2&M&&(h.R7$(3),h.JRh(h.bMT(4,1,O.logoutTimer$)))},dependencies:[F._f,g.Jj],encapsulation:2})}return u})()},6728:(P,T,s)=>{s.d(T,{Gf:()=>et,w5:()=>N,uR:()=>k,kj:()=>D,qk:()=>ht,zQ:()=>pt,Gg:()=>I,Bh:()=>tt,z_:()=>nt,Bd:()=>R,Ll:()=>V,Qe:()=>_});var p=s(177),o=s(4438);s(3192),s(345);var B=s(1935),j=s(4799),i=s(9781);const A=[B.iI,j.F,i.k_];let I=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=o.$C({type:e});static#s=this.\u0275inj=o.G2t({providers:[p.vh,p.oe],imports:[p.MD,A,B.iI,j.F,i.k_]})}return e})();const V=typeof process<"u"&&null!=process.versions&&null!=process.versions.node,R=!V;var m=s(950);const _=e=>e+` | ${m.c.properties.appName}`;class tt extends B.nU{serialize(a){return this._withTrailingSlash(super.serialize(a))}_withTrailingSlash(a){const t=a.indexOf("?")>-1?"?":"#",n=a.split(t);return n[0].endsWith("/")||-1===a.substring(a.lastIndexOf("/")+1).indexOf(".")&&(n[0]+="/"),n.join(t)}}var X=s(5408),L=s(1626);let et=(()=>{class e{constructor(t){this.http=t,this.store=(0,X.$C)(this.http),this.users=this.store({uniqueId:"id",apiUrl:"https://jsonplaceholder.typicode.com/users"})}static#t=this.\u0275fac=function(n){return new(n||e)(o.KVO(L.Qq))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var st=s(5779),$=s(876);let nt=(()=>{class e{constructor(t,n){this.confirmationService=t,this.dom=n,this.uiStore=(0,X.Dd)({},{persistId:"globalUIStore"})}updateAppModal(){this.confirmationService.confirm({message:"An update for this application is available, would you like to update?",header:"Confirmation",accept:()=>this.dom?.document?.location.reload()})}static#t=this.\u0275fac=function(n){return new(n||e)(o.KVO(st.td),o.KVO($.K5))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ot=s(4412),Q=s(7786),z=s(3726),rt=s(605),Y=s(9172),Z=s(3386),it=s(5558),w=s(6354),at=s(3294),b=s(5964),H=s(8141),lt=s(6697),ct=s(686);let N=(()=>{class e extends $.n${set token(t){this.localStorage.setItem("token",t)}get token(){return this.localStorage.getItem("token")}get user(){return this.localStorage.getItem("user",{isJson:!0})}set user(t){this.localStorage.setItem("user",t)}constructor(){super(),this.token$=this.localStorage.getItem$("token"),this.user$=this.localStorage.getItem$("user",{isJson:!0})}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var D=function(e){return e[e.initial=0]="initial",e[e.loggedIn=1]="loggedIn",e[e.loggedOut=2]="loggedOut",e[e.sessionExpired=3]="sessionExpired",e}(D||{});let k=(()=>{class e{constructor(t,n,r,c,y,l){this.http=t,this.router=n,this.route=r,this.appStorage=c,this.dialogService=y,this.dom=l,this.authState$=new ot.t(D.initial),this.tokenRefreshInterval=60,this.idleDuration=300,this.logoutModalDuration=60,this.logoutModalVisible=!1,this.userActions$=this.dom.isBrowser&&this.dom.document?(0,Q.h)((0,z.R)(document,"keypress"),(0,z.R)(document,"mousemove"),(0,z.R)(document,"click"),(0,z.R)(this.dom.document,"scroll")):(0,Q.h)(),this.refreshEvent$=this.userActions$.pipe((0,Y.Z)(0),(0,Z.c)(1e3,void 0,{leading:!1,trailing:!0})),this.logoutTimerExpired$=this.refreshEvent$.pipe((0,it.n)(()=>(0,rt.Y)(1e3)),(0,w.T)(d=>d>this.idleDuration),(0,Y.Z)(!1),(0,at.F)(),(0,b.p)(d=>!!this.appStorage.token&&d&&!this.logoutModalVisible),(0,H.M)(()=>this.launchLogoutModal())),this.refreshToken$=this.refreshEvent$.pipe((0,Z.c)(1e3*this.tokenRefreshInterval,void 0,{leading:!1,trailing:!0}),(0,b.p)(d=>!!d&&!!this.appStorage.token&&!this.logoutModalVisible),(0,H.M)(()=>this.refreshToken())),this.route.queryParams.pipe((0,lt.s)(1)).subscribe(d=>{d.token&&(this.appStorage.token=d.token)})}logIn(t){return(m.c.endpoints.apiUrl&&m.c.endpoints.authLogin?this.http.post(m.c.endpoints.apiUrl+m.c.endpoints.authLogin,t):this.http.get("assets/mock-data/login.json")).pipe((0,H.M)(r=>{this.appStorage.token=r.data.token,this.authState$.next(D.loggedIn),r.data.expirationSeconds&&(this.idleDuration=r.data.expirationSeconds)}))}refreshToken(){const t=m.c.endpoints.apiUrl&&m.c.endpoints.authTokenRefresh?this.http.post(m.c.endpoints.apiUrl+m.c.endpoints.authTokenRefresh,{}):this.http.post("https://jsonplaceholder.typicode.com/posts/",{}).pipe((0,w.T)(()=>({data:{token:"12345",userGuid:"12345"},success:!0,meta:{}})));return t.subscribe(n=>{this.appStorage.token&&(this.authState$.next(D.loggedIn),this.appStorage.token=n.data.token)},()=>this.logOut(D.sessionExpired)),t}launchLogoutModal(){this.logoutModalVisible=!0,this.dialogService.open(ct.r,{data:this.logoutModalDuration,header:"Warning",width:"70%",dismissableMask:!0}).onClose.subscribe(n=>{n?this.logOut(D.loggedOut):this.refreshToken(),this.logoutModalVisible=!1})}logOut(t){this.appStorage.token=null,this.logoutModalVisible=!1,this.authState$.next(t);const n="/"!==this.router.url&&"/login"!==this.router.url?this.router.url.split("?")[0]:null;this.router.navigate(["/login"],{queryParams:{returnUrl:n}})}static#t=this.\u0275fac=function(n){return new(n||e)(o.KVO(L.Qq),o.KVO(B.Ix),o.KVO(B.nX),o.KVO(N),o.KVO(i.o3),o.KVO($.K5))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ht=(()=>{class e{constructor(t){this.dom=t}handleError(t){throw R&&!t.errorMsg&&!t.hasOwnProperty("status")&&m.c.production&&(m.c.endpoints.errorPath&&this.logError(t),this.resetState(t)),R||console.error(t),t}resetState(t){R&&(console.error({error:t}),this.dom?.localStorage?.clear(),this.dom?.sessionStorage?.clear())}logError(t){if(!m.c.endpoints.apiUrl||!m.c.endpoints.errorPath)return;const n=new XMLHttpRequest,c={level:"Error",class:"",message:t.message,exception:t.stack};n.open("POST",m.c.endpoints.apiUrl+m.c.endpoints.errorPath,!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.send(JSON.stringify(c))}static#t=this.\u0275fac=function(n){return new(n||e)(o.KVO($.K5))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac})}return e})();var ut=s(7673),dt=s(8810),ft=s(9437);let pt=(()=>{class e{constructor(t,n,r){this.appStorage=t,this.auth=n,this.transferState=r}intercept(t,n){if(!V&&"GET"===t.method){const l=(0,o.zw6)(t.url),d=this.transferState.get(l,null);if(d)return(0,ut.of)(new L.cS({body:d,status:200}))}const r={};this.appStorage.token&&(r.Authorization="Bearer "+this.appStorage.token);const c=new L.Lr(r);return n.handle(t.clone({headers:c})).pipe((0,H.M)(l=>{V&&l instanceof L.cS&&(200===l.status||202===l.status)&&this.transferState.set((0,o.zw6)(t.url),l.body)}),(0,ft.W)(l=>((401===l.status||403===l.status)&&this.sessionEnd(),(0,dt.$)(l))))}sessionEnd(){this.auth.logOut(D.sessionExpired)}static#t=this.\u0275fac=function(n){return new(n||e)(o.KVO(N),o.KVO(k),o.KVO(o.pJN))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac})}return e})();var q;!function(e){let a;var t;(t=a=e.Color||(e.Color={}))[t.red=0]="red",t[t.blue=1]="blue",t[t.orange=2]="orange"}(q||(q={}))},3192:(P,T,s)=>{s.d(T,{_:()=>o});var p=s(4438);let o=(()=>{class v{transform(f,F=!1){if(!f||""===f)return f;let u,S,E,g=f.replace(/[^0-9]/g,""),C=!1;if("1"===g.charAt(0)&&11===g.length&&(C=!0,g=g.slice(1)),F)return g;switch(g.length){case 1:case 2:case 3:u=g;break;default:u=g.slice(0,3),S=g.slice(3)}return S?(S.length>3&&(S=S.slice(0,3)+"-"+S.slice(3,7)),E=("("+u+") "+S).trim().slice(0,14)):E="("+u,C?"1 "+E:E}static#t=this.\u0275fac=function(F){return new(F||v)};static#e=this.\u0275pipe=p.EJ8({name:"phoneNumber",type:v,pure:!0})}return v})()},950:(P,T,s)=>{s.d(T,{c:()=>v});const v=(0,s(7409).A)({appID:"angular-starter",production:!1,properties:{appName:"Angular Starter"},settings:{enableServiceWorker:!0,enableAppComms:!0,preloadRoutes:!1,obfuscate:!0},domains:{listenTo:["http://localhost:4200"]},endpoints:{envConfig:"http://localhost:4200/assets/mock-data/env-settings.json",apiUrl:null,authLogin:"http://localhost:4200/assets/mock-data/login.json",authTokenRefresh:null,versionPath:null,errorPath:null},state:{uiStoreBlacklist:[]},licenses:{vapid:{publicKey:"BIZ-IPJrxKxtdL9O9CnK42-XWcepJDPMQDfj8pb_vCfQxa7j1LoC4exdzZ5MhPWaF_5eWPglkj3V32xRswQEm6Q",privateKey:"jUOTBXqGGwElft-fTVBYb1BeLWrRhn2HgyJpXZBhgLo"},agGrid:"qwerty"}},{prod:!0})},1207:(P,T,s)=>{var p=s(345),o=s(4438),v=s(1626),h=s(728),f=s(1935),F=s(5779),g=s(9781),C=s(950),u=s(6728),S=s(9079),E=s(876);let M=(()=>{class i{constructor(A,I){this.auth=A,this.dom=I,this.dom.isBrowser&&(this.auth.logoutTimerExpired$.pipe((0,S.pQ)()).subscribe(),this.auth.refreshToken$.pipe((0,S.pQ)()).subscribe())}ngOnInit(){}ngOnDestroy(){}static#t=this.\u0275fac=function(I){return new(I||i)(o.rXU(u.uR),o.rXU(E.K5))};static#e=this.\u0275cmp=o.VBU({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(I,V){1&I&&o.nrm(0,"router-outlet")},dependencies:[f.n3],encapsulation:2})}return i})();const O=[{path:"users",loadChildren:()=>Promise.all([s.e(283),s.e(148),s.e(341),s.e(76),s.e(922)]).then(s.bind(s,2922)).then(i=>i.UsersModule)},{path:"login",pathMatch:"full",loadChildren:()=>Promise.all([s.e(283),s.e(148),s.e(341),s.e(76),s.e(331)]).then(s.bind(s,9331)).then(i=>i.LoginModule),title:(0,u.Qe)("Please Log In")},{path:"",pathMatch:"full",loadChildren:()=>Promise.all([s.e(283),s.e(148),s.e(76),s.e(902)]).then(s.bind(s,3902)).then(i=>i.HomeModule)},{path:"**",loadChildren:()=>Promise.all([s.e(283),s.e(148),s.e(76),s.e(623)]).then(s.bind(s,6623)).then(i=>i.NoContentModule),title:(0,u.Qe)("Page Not Found")}];let x=(()=>{class i{static#t=this.\u0275fac=function(I){return new(I||i)};static#e=this.\u0275mod=o.$C({type:i});static#s=this.\u0275inj=o.G2t({imports:[f.iI.forRoot(O,{useHash:!1,preloadingStrategy:C.c.settings.preloadRoutes?f.Kp:f.D7,scrollPositionRestoration:"enabled",initialNavigation:"enabledBlocking"}),f.iI]})}return i})();const G=f.iI.forChild([{path:"~",loadChildren:()=>Promise.all([s.e(283),s.e(148)]).then(s.bind(s,2169)).then(i=>i.MasterPageModule)},{path:"~",loadChildren:()=>s.e(283).then(s.bind(s,2283)).then(i=>i.IconsComponent)},{path:"~",loadChildren:()=>s.e(341).then(s.bind(s,4341)).then(i=>i.FormsModule)},{path:"~",loadChildren:()=>s.e(341).then(s.bind(s,4341)).then(i=>i.ReactiveFormsModule)},{path:"~",loadChildren:()=>s.e(76).then(s.bind(s,491)).then(i=>i.CardModule)},{path:"~",loadChildren:()=>s.e(609).then(s.bind(s,2609)).then(i=>i.MessagesModule)},{path:"~",loadChildren:()=>Promise.all([s.e(341),s.e(665),s.e(76),s.e(122)]).then(s.bind(s,1122)).then(i=>i.TableModule)},{path:"~",loadChildren:()=>Promise.all([s.e(665),s.e(861)]).then(s.bind(s,9861)).then(i=>i.TreeModule)}]);C.c.production&&(0,o.SmG)();let B,j=(()=>{class i{constructor(A){this.injector=A,B=this.injector}static#t=this.\u0275fac=function(I){return new(I||i)(o.KVO(o.zZn))};static#e=this.\u0275mod=o.$C({type:i,bootstrap:[M]});static#s=this.\u0275inj=o.G2t({providers:[(0,p.$x)(),F.td,g.o3,{provide:f.Sd,useClass:u.Bh},{provide:o.zcH,useClass:u.qk},u.zQ,{provide:v.a7,useClass:u.zQ,multi:!0}],imports:[p.Bb.withServerTransition({appId:C.c.appID}),v.q1,h.wb,G,x]})}return i})();C.c.production&&(0,o.SmG)(),p.sG().bootstrapModule(j).catch(i=>console.log(i))}},P=>{P.O(0,[502],()=>P(P.s=1207)),P.O()}]);