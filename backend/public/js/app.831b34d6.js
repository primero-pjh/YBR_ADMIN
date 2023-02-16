(function(){"use strict";var e={5549:function(e,t,o){var r=o(9242),s=o(3396);const n={id:"app",style:{"max-width":"500px"}};function i(e,t,o,r,i,u){const a=(0,s.up)("router-view"),l=(0,s.up)("layoutVue"),c=(0,s.up)("DialogRegisterCouple");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l,{ref:"layoutVue"},{body:(0,s.w5)((()=>[(0,s.Wm)(a)])),_:1},512),(0,s.Wm)(c,{ref:"DialogRegisterCouple"},null,512)])}o(7658);var u=o(7139);const a={id:"layoutVue",style:{height:"100%"},ref:"layoutVue"},l={style:{display:"flex","flex-direction":"column",height:"100%"}},c={key:0,style:{"border-bottom":"1px solid #aaa"}},d={key:0},m=(0,s._)("img",{src:"/images/doge_v3.png",style:{width:"50px !important",height:"50px !important"}},null,-1),p=(0,s._)("img",{src:"/images/도지.png",style:{width:"50px !important",height:"50px !important"}},null,-1);function h(e,t,o,r,n,i){const h=(0,s.up)("van-nav-bar"),g=(0,s.up)("van-badge"),f=(0,s.up)("van-tabbar-item"),k=(0,s.up)("van-tabbar");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",l,[n.unShowPage.hasOwnProperty(e.$route.name)?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(h,{title:n.item_list[n.active].label,"left-text":"Back","left-arrow":"",onClickLeft:i.onClickLeft},null,8,["title","onClickLeft"])])),(0,s._)("div",{style:(0,u.j5)([{height:"100%"},{height:n.height-130+"px"}])},[(0,s.WI)(e.$slots,"body")],4)]),n.unShowPage.hasOwnProperty(e.$route.name)?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(k,{modelValue:n.active,"onUpdate:modelValue":t[0]||(t[0]=e=>n.active=e),style:{"border-top":"1px solid #aaa",height:"72px"},onChange:i.onChange,ref:"footer"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.item_list,((t,o)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[t.hasOwnProperty("isCustom")&&t.isCustom?((0,s.wg)(),(0,s.j4)(f,{key:o},{icon:(0,s.w5)((t=>[e.$store.state.couple.socketId?((0,s.wg)(),(0,s.j4)(g,{key:0,content:100,max:"99"},{default:(0,s.w5)((()=>[m])),_:1})):((0,s.wg)(),(0,s.j4)(g,{key:1,content:200,max:"99"},{default:(0,s.w5)((()=>[p])),_:1}))])),_:2},1024)):((0,s.wg)(),(0,s.j4)(f,{icon:t.icon,key:o},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t(t.label)),1)])),_:2},1032,["icon"]))],64)))),256))])),_:1},8,["modelValue","onChange"])]))],512)}var g={name:"layoutVue",data(){return{height:0,isShow:!0,unShowPage:{Login:!0,Error:!0,Waiting:!0,Admin:!0},item_list:[{icon:"home-o",label:"Home",url:"/home",name:"Home"},{icon:"search",label:"Search",url:"/search",name:"Search"},{icon:"chat-o",label:"chat",url:"/chat",name:"Chat",isCustom:!0},{icon:"friends-o",label:"Community",url:"/community",name:"Community"},{icon:"setting-o",label:"Setting",url:"/setting",name:"Setting"}],active:0,showLeft:!1,url_list:[{icon:"chat-o",label:"User",url:"/admin/user",name:"AdminUser",isActive:!1},{icon:"setting-o",label:"Group",url:"/admin/group",name:"AdminGroup",isActive:!1}]}},props:{},computed:{isAdmin:function(){return this.$store.state.user.isAdmin}},methods:{onChange(e){let t=this,o=t.item_list[e];t.$router.push(o.url)},onClickLeft:function(){let e=this,t=e.$router.options.history.state.back;"/login"!=t&&e.$router.back()}},mounted(){let e=this;e.$router.afterEach(((t,o)=>{let r=t.name,s=e.item_list.findIndex((e=>e.name==r));s>=0&&(e.active=s)}))},created(){let e=this;e.height=window.screen.height}},f=o(89);const k=(0,f.Z)(g,[["render",h]]);var b=k;function w(e,t,o,r,n,i){const a=(0,s.up)("van-field"),l=(0,s.up)("van-cell-group"),c=(0,s.up)("van-form"),d=(0,s.up)("van-button"),m=(0,s.up)("van-dialog");return(0,s.wg)(),(0,s.j4)(m,{show:n.isOpen,"onUpdate:show":t[1]||(t[1]=e=>n.isOpen=e),title:"확인"},{footer:(0,s.w5)((()=>[(0,s.Wm)(d,{style:{width:"100%"},onClick:i.confirm,loading:n.isLoading,"loading-text":"상대방에게 요청을 보냈습니다.."},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("Confirm")),1)])),_:1},8,["onClick","loading"])])),default:(0,s.w5)((()=>[(0,s.Wm)(c,{onSubmit:i.confirm},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:n.phoneNumber,"onUpdate:modelValue":t[0]||(t[0]=e=>n.phoneNumber=e),required:"",name:"phoneNumber",label:e.$t("phoneNumber"),placeholder:e.$t("phoneNumber"),rules:[{required:!0,message:e.$t("RequiredPhoneNumber")}],error:n.formError.phoneNumber.length>0,"error-message":n.formError.phoneNumber},null,8,["modelValue","label","placeholder","rules","error","error-message"])])),_:1})])),_:1},8,["onSubmit"])])),_:1},8,["show"])}var v={name:"DialogRegisterCouple",data(){return{isLoading:!1,show:!0,phoneNumber:"",isOpen:!1,formError:{phoneNumber:""},callback:null}},methods:{open:function(e){let t=this;e&&(t.callback=e),t.isOpen=!0},confirm:function(){let e=this;if(!e.phoneNumber)return void(e.formError.phoneNumber="필수입력 항목입니다.");let t=/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;if(0!=t.test(e.phoneNumber)){for(let t in e.formError)e.formError[t]="";e.isLoading=!0}else e.formError.phoneNumber="형식이 틀립니다. 다시 시도해주세요. 예)010-0000-0000"}},mounted:function(){}};const y=(0,f.Z)(v,[["render",w]]);var _=y,$={name:"App",components:{layoutVue:b,DialogRegisterCouple:_},data(){return{socket:null,isAdmin:!1}},mounted:function(){let e=this;e.$store.state.user.socketId||e.$router.push("/login")}};const C=(0,f.Z)($,[["render",i]]);var N=C,S=o(1296),I=o(9545),x=o(3649),V=o(6944),O=o(3739),W=o(5331),L=o(4361),U=o(5943),D=o(4250),j=o(5258),P=o(4521),E=o(6035),q=o(6056),A=o(3805),R=o(9420),T=o(6813),z=o(3),H=o(1174),Z=o(6810),M=o(7619),K=o(1160),J=o(3996),B=o(257),Y=o(2691),F=o(6166),G=o(432),X=o(2229),Q=o(3068),ee=o(1206),te=o(147),oe=o(1719),re=o(898),se=(o(5110),o(678));const ne={id:"HomeVue",style:{height:"100%"}};function ie(e,t,o,r,n,i){const u=(0,s.up)("v-date-picker");return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s.Wm)(u,{modelValue:n.date,"onUpdate:modelValue":t[0]||(t[0]=e=>n.date=e),style:{width:"100%"}},null,8,["modelValue"])])}var ue={name:"HomeVue",data(){return{date:"2023-02-01"}},methods:{},components:{},mounted:function(){let e=this;e.$store.state.user.socketId||e.$router.push("/login")}};const ae=(0,f.Z)(ue,[["render",ie]]);var le=ae;const ce={id:"loginVue",style:{"background-color":"#eff2f5"}},de={style:{margin:"16px"}},me={style:{"text-decoration":"underline"},color:"primary"},pe={style:{"text-decoration":"underline"}},he={class:"block"},ge=(0,s._)("br",null,null,-1);function fe(e,t,o,n,i,a){const l=(0,s.up)("van-field"),c=(0,s.up)("van-switch"),d=(0,s.up)("van-cell"),m=(0,s.up)("van-cell-group"),p=(0,s.up)("van-button"),h=(0,s.up)("van-space"),g=(0,s.up)("van-col"),f=(0,s.up)("van-row"),k=(0,s.up)("van-form"),b=(0,s.up)("DialogRegisterCouple"),w=(0,s.up)("van-image"),v=(0,s.up)("van-overlay");return(0,s.wg)(),(0,s.iD)("div",ce,[(0,s.Wm)(k,{onSubmit:a.onLogin},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{modelValue:i.appUser.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>i.appUser.userId=e),required:"",name:"Username",label:e.$t("userId"),placeholder:"Username",rules:[{required:!0,message:e.$t("RequireduserId")}],error:i.formError.userId.length>0,"error-message":i.formError.userId},null,8,["modelValue","label","rules","error","error-message"]),(0,s.Wm)(l,{modelValue:i.appUser.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.appUser.password=e),required:"",type:"password",name:"Password",label:e.$t("password"),placeholder:"Password",rules:[{required:!0,message:e.$t("Requiredpassword")}],error:i.formError.password.length>0,"error-message":i.formError.password},null,8,["modelValue","label","rules","error","error-message"]),(0,s.Wm)(d,{center:"",title:e.$t("RememberMe")},{"right-icon":(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:i.appUser.rememberMe,"onUpdate:modelValue":t[2]||(t[2]=e=>i.appUser.rememberMe=e)},null,8,["modelValue"])])),_:1},8,["title"])])),_:1}),(0,s._)("div",de,[(0,s.Wm)(h,{direction:"vertical",fill:""},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{block:"",type:"primary","native-type":"submit",disabled:!i.appUser.userId||!i.appUser.password,loading:i.isLoading,"loading-text":e.$t("Loading")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("Login")),1)])),_:1},8,["disabled","loading","loading-text"]),(0,s.Wm)(p,{block:"",color:"yellow",type:"primary",onClick:a.kakaoLogin},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("KakaoLogin")),1)])),_:1},8,["onClick"])])),_:1})]),(0,s.Wm)(f,{justify:"space-between",style:{padding:"0px 16px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{span:"12"},{default:(0,s.w5)((()=>[(0,s._)("p",me,(0,u.zw)(e.$t("ForgetId")),1)])),_:1}),(0,s.Wm)(g,{span:"12",style:{"text-align":"right"}},{default:(0,s.w5)((()=>[(0,s._)("p",pe,(0,u.zw)(e.$t("Signup")),1)])),_:1})])),_:1})])),_:1},8,["onSubmit"]),(0,s.Wm)(b,{ref:"DialogRegisterCouple"},null,512),(0,s.Wm)(v,{show:i.showSplash,onClick:t[4]||(t[4]=t=>e.show=!1)},{default:(0,s.w5)((()=>[(0,s._)("div",{onClick:t[3]||(t[3]=(0,r.iM)((()=>{}),["stop"])),style:{"background-color":"white",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},[(0,s._)("div",he,[(0,s.Wm)(w,{width:"100",height:"100",src:"/images/doge_v3.png"}),ge])])])),_:1},8,["show"])])}var ke=o(6943),be=o(2066),we=o(868),ve=o(9650),ye=o(2135),_e={name:"loginVue",components:{DialogRegisterCouple:_},data(){return{showSplash:!1,appUser:{userId:"",password:"",rememberMe:!0,couple:"",phoneNumber:""},formError:{userId:"",password:""},isLoading:!1}},methods:{onLogin:function(){let e=this;e.isLoading=!0,ke.Z.get("/api/user/login",{params:{userId:e.appUser.userId,password:e.appUser.password,rememberMe:e.appUser.rememberMe?1:0}}).then((function(t){let o=t.data;o.success&&(e.$store.commit("setUser",o.user),e.$store.commit("setToken",o.token),e.setSocket(o.token,(function(){o.user.isAdmin?e.$router.push("/admin/user"):o.user.spousePhoneNumber?(e.$store.commit("setCouple",o.couple),o.coupleSocketId&&e.$store.commit("setCoupleSocketId",o.coupleSocketId),e.$router.push("/home"),e.$store.state.setCookie("token",o.token,"3600m")):e.$router.push("/waiting")}))),e.isLoading=!1}))},kakaoLogin:function(){},setSocket:function(e,t){let o=this,r=(0,be.io)("https://ybr.pritras.com",{auth:{token:`Bearer ${e}`}});r.on("connection",(e=>{o.$store.commit("setSocketId",e),r.emit("/socket/user/register",{user:o.$store.state.user},(function(e,r){e.success?t&&t():o.$store.state.axiosError(e)}))})),r.on("disconnected",(()=>{o.$store.state.setCookie("token",""),window.location.reload()})),r.on("/error",(e=>{(0,we.LJ)({message:e.message,wordBreak:"break-all",className:"w90p"}),o.$store.commit("setSocket",null),o.$store.commit("setToken",null),o.$store.commit("setUser",null),o.$store.commit("setCouple",null),o.$store.state.setCookie("token","")})),r.on("/client/register",(e=>{(0,ve.WD)({title:"요청",message:`${e.phoneNumber}님으로 부터 신청이 왔습니다. 수락하시겠어요?`}).then((()=>{r.emit("/socket/register/couple",{isConfirm:1,myPhone:o.$store.state.user.phoneNumber,otherPhone:e.phoneNumber},((e,t)=>{e.success&&o.$router.push("/home")}))})).catch((()=>{r.emit("/socket/register/couple",{isConfirm:0},((e,t)=>{}))}))})),r.on("/client/register/couple",(e=>{e.success?o.$router.push("/home"):console.log("신청 실패")})),r.on("/client/couple/login",(e=>{(0,ye.NU)({type:"success",message:`${o.$store.state.couple.userName}님이 접속하였습니다.`}),o.$store.commit("setCoupleSocketId",e.socketId)})),o.$store.commit("setSocket",r)}},mounted:function(){let e=this,t=e.$store.state.getCookie("token");"undefined"!==t&&t&&t&&ke.Z.get("/api/user/check",{params:{token:t}}).then((o=>{let r=o.data;r.success&&(e.$store.commit("setUser",r.user),e.$store.commit("setToken",t),e.setSocket(t,(function(){r.user.isAdmin?setTimeout((()=>{e.$router.push("/admin/user")}),1e3):r.user.spousePhoneNumber?(e.$store.commit("setCouple",r.couple),r.coupleSocketId&&e.$store.commit("setCoupleSocketId",r.coupleSocketId),setTimeout((()=>{e.$router.push("/home")}),1e3),e.$store.state.setCookie("token",t,"3600m")):setTimeout((()=>{e.$router.push("/waiting")}),1e3)})))}))},created:function(){let e=this,t=e.$store.state.getCookie("token");t&&(e.showSplash=!0)}};const $e=(0,f.Z)(_e,[["render",fe]]);var Ce=$e;const Ne={id:"waitingVue",style:{"background-color":"#eff2f5",height:"100%",position:"relative"}},Se=(0,s._)("p",null,"요청이 오기를 기다리거나, 요청을 하세요.",-1);function Ie(e,t,o,r,n,i){const a=(0,s.up)("van-field"),l=(0,s.up)("van-button"),c=(0,s.up)("van-cell-group"),d=(0,s.up)("van-form");return(0,s.wg)(),(0,s.iD)("div",Ne,[(0,s.Wm)(d,{onSubmit:i.confirm},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:n.phoneNumber,"onUpdate:modelValue":t[0]||(t[0]=e=>n.phoneNumber=e),required:"",name:"phoneNumber",label:e.$t("phoneNumber"),placeholder:e.$t("phoneNumber"),rules:[{required:!0,message:e.$t("RequiredPhoneNumber")}],error:n.formError.phoneNumber.length>0,"error-message":n.formError.phoneNumber},null,8,["modelValue","label","placeholder","rules","error","error-message"]),(0,s.Wm)(l,{style:{width:"100%"},onClick:i.confirm,loading:n.isLoading,"loading-text":"상대방에게 요청을 보냈습니다.."},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("Confirm")),1)])),_:1},8,["onClick","loading"]),Se])),_:1})])),_:1},8,["onSubmit"])])}var xe={name:"waitingVue",data(){return{phoneNumber:"",isLoading:!1,formError:{phoneNumber:""}}},methods:{confirm:function(){let e=this;e.isLoading=!0;let t=e.$store.state.socket,o=new Object;o["socketId"]=e.$store.state.user.socketId,o["user"]=e.$store.state.user,o["phoneNumber"]=e.phoneNumber,t.emit("/socket/register",o,(function(t,o){console.log("data:",t),t.success||(e.$store.state.setError(e.formError,t.error),e.isLoading=!1)}))}},mounted:function(){}};const Ve=(0,f.Z)(xe,[["render",Ie]]);var Oe=Ve;const We={style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},Le=(0,s._)("p",{style:{"text-align":"center"}},"권한이 없거나",-1),Ue=(0,s._)("p",{style:{"text-align":"center"}},"잘못된 URL 접근입니다 !",-1);function De(e,t,o,r,n,i){const u=(0,s.up)("van-image"),a=(0,s.up)("van-button");return(0,s.wg)(),(0,s.iD)("div",We,[(0,s.Wm)(u,{src:"/images/doge_v3.png"}),Le,Ue,(0,s.Wm)(a,{type:"primary",onClick:i.clickHome,style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" 홈으로 이동 ")])),_:1},8,["onClick"])])}var je={name:"errorVue",data(){return{}},methods:{clickHome:function(){this.$router.push("/home")}},mounted:function(){}};const Pe=(0,f.Z)(je,[["render",De]]);var Ee=Pe;const qe={id:"settingVue"};function Ae(e,t,o,r,n,i){const a=(0,s.up)("van-button"),l=(0,s.up)("van-action-sheet");return(0,s.wg)(),(0,s.iD)("div",qe,[(0,s.Wm)(a,{block:"",onClick:i.logOut,type:"primary","native-type":"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("Logout")),1)])),_:1},8,["onClick"]),(0,s.Wm)(a,{block:"",onClick:i.i18Change,type:"primary","native-type":"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 변경 ")])),_:1},8,["onClick"]),e.$store.state.user.isAdmin?((0,s.wg)(),(0,s.j4)(a,{key:0,type:"primary","native-type":"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 어드민 페이지로 이동 ")])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(l,{show:n.isShow,"onUpdate:show":t[0]||(t[0]=e=>n.isShow=e),actions:n.actions,onSelect:i.onSelect},null,8,["show","actions","onSelect"])])}var Re={name:"settingVue",data(){return{isShow:!1,actions:[{name:"English"},{name:"Korea"}]}},methods:{onSelect:function(e){let t=this,o=e.name;t.$i18n.locale="English"==o?"en":"ko",(0,ye.NU)({type:"success",message:"변경 완료!"}),t.isShow=!1},logOut:function(){let e=this;e.$store.commit("setUser",{userId:"",socketId:"",phoneNumber:""}),e.$store.commit("setToken",""),e.$store.commit("setCouple",""),e.$store.state.setCookie("token",""),e.$router.push("/login")},i18Change:function(){let e=this;e.isShow=!0}},mounted(){let e=this;e.$store.state.user.socketId||e.$router.push("/login")}};const Te=(0,f.Z)(Re,[["render",Ae]]);var ze=Te;const He={id:"ChatVue",style:{height:"100%"}},Ze={style:{display:"flex","flex-direction":"column",height:"100%","background-color":"#eee"}},Me={style:{height:"100%"},class:"pd10"},Ke={style:{display:"flex","flex-direction":"row"}},Je={style:{display:"flex","flex-direction":"column","margin-left":"5px"}},Be={class:"bg-white mt5",style:{"border-radius":"10px",padding:"10px 5px"}},Ye={key:0,style:{display:"flex","align-items":"end"}},Fe={style:{height:"50px"}};function Ge(e,t,o,r,n,i){const a=(0,s.up)("van-image"),l=(0,s.up)("van-icon"),c=(0,s.up)("van-field");return(0,s.wg)(),(0,s.iD)("div",He,[(0,s._)("div",Ze,[(0,s._)("div",Me,[(0,s._)("div",Ke,[(0,s._)("div",null,[(0,s.Wm)(a,{round:"",width:"60",height:"60",fit:"cover",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]),(0,s._)("div",Je,[(0,s._)("div",null,(0,u.zw)(n.item[0].displayName),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.item,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",Be,(0,u.zw)(e.message),1),t==n.item.length-1?((0,s.wg)(),(0,s.iD)("div",Ye,(0,u.zw)(e.sendDate),1)):(0,s.kq)("",!0)])))),128))])])]),(0,s._)("div",Fe,[(0,s.Wm)(c,{modelValue:n.message,"onUpdate:modelValue":t[0]||(t[0]=e=>n.message=e),center:"",clearable:"",placeholder:"Say something..."},{button:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"guide-o",size:"40px",onClick:i.send_message},null,8,["onClick"])])),_:1},8,["modelValue"])])])])}var Xe={name:"ChatVue",data(){return{socket:null,message:"",item:[{displayName:"상대방",message:"ㅋㅋㅋㅋㅋㅋ",sendDate:"2023-01-03T12:12:12"},{displayName:"상대방",message:"진짜로?",sendDate:"2023-01-03T12:12:12"}],currentUser:{id:1,type:{},required:!0},value:""}},methods:{send_message:function(){let e=this;console.log("send_message:"),e.socket.emit("/socket/send/message",{message:e.message,user:e.$store.state.user},((e,t)=>{0==e.success&&console.log(e)}))}},mounted:function(){let e=this;e.socket=e.$store.state.socket,e.socket.on("/client/receive/message",(t=>{e.item.push(t),console.log("data:",t)}))}};const Qe=(0,f.Z)(Xe,[["render",Ge]]);var et=Qe;const tt={id:"DashboardVue",style:{height:"100%"}},ot=(0,s._)("div",{style:{display:"flex","flex-direction":"column",height:"100%","background-color":"#eee"}},null,-1),rt=[ot];function st(e,t,o,r,n,i){return(0,s.wg)(),(0,s.iD)("div",tt,rt)}var nt={name:"DashboardVue",components:{},data(){return{tab:"user",socket:null,user_list:[],user_dict:new Object}},methods:{shutdown:function(e){let t=this;t.socket.emit("/socket/admin/shutdown",{key:e},((e,t)=>{e.success?(0,we.XA)({message:e.message,wordBreak:"break-all"}):(0,we.LJ)({message:e.message,wordBreak:"break-all"})}))}},mounted:function(){let e=this;e.socket=e.$store.state.socket,e.socket.emit("/socket/admin/users/get_all",{},((t,o)=>{Object.keys(t.user_dict).length;e.user_dict=t.user_dict})),e.socket.on("/client/admin/connect/user",(t=>{e.user_dict[t.phoneNumber]={socketId:t.socketId}})),e.socket.on("/client/admin/disconnect/user",(t=>{1==Object.prototype.hasOwnProperty.call(e.user_dict,t.phoneNumber)&&delete e.user_dict[t.phoneNumber]}))}};const it=(0,f.Z)(nt,[["render",st]]);var ut=it;const at={id:"AdminVue",style:{height:"100%"}},lt={style:{display:"flex","flex-direction":"column",height:"100%","background-color":"#eee"}},ct={key:0},dt={class:"bg-white pd20 flex",style:{"justify-content":"space-between"}},mt={style:{display:"flex","flex-direction":"column"}},pt={class:"ft12"},ht={class:"ft12"},gt={class:"bg-white pd20 flex",style:{"justify-content":"space-between"}},ft={style:{display:"flex","flex-direction":"column"}},kt={class:"ft12"},bt={class:"ft12"};function wt(e,t,o,r,n,i){const a=(0,s.up)("van-empty"),l=(0,s.up)("van-search"),c=(0,s.up)("van-button"),d=(0,s.up)("van-swipe-cell");return(0,s.wg)(),(0,s.iD)("div",at,[(0,s._)("div",lt,[0==Object.keys(n.user_dict).length?((0,s.wg)(),(0,s.iD)("div",ct,[(0,s.Wm)(a,{description:"No user"})])):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Wm)(l,{modelValue:n.search_user,"onUpdate:modelValue":t[0]||(t[0]=e=>n.search_user=e),placeholder:"유저를 검색하세요.",onSearch:i.onSearch,onClear:i.onClear},null,8,["modelValue","onSearch","onClear"]),n.isSearch?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(n.filter_user_dict,((e,t)=>((0,s.wg)(),(0,s.j4)(d,{key:t},{right:(0,s.w5)((()=>[(0,s.Wm)(c,{square:"",type:"danger",text:"Disconnect",onClick:e=>i.shutdown(t),style:{height:"100%"}},null,8,["onClick"])])),default:(0,s.w5)((()=>[(0,s._)("div",gt,[(0,s._)("div",ft,[(0,s._)("div",null,(0,u.zw)(t),1),(0,s._)("div",null,[(0,s._)("span",kt,(0,u.zw)(e.userName),1)])]),(0,s._)("div",null,[(0,s._)("span",bt,(0,u.zw)(e.socketId),1)])])])),_:2},1024)))),128)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(n.user_dict,((e,t)=>((0,s.wg)(),(0,s.j4)(d,{key:t},{right:(0,s.w5)((()=>[(0,s.Wm)(c,{square:"",type:"danger",text:"Disconnect",onClick:e=>i.shutdown(t),style:{height:"100%"}},null,8,["onClick"])])),default:(0,s.w5)((()=>[(0,s._)("div",dt,[(0,s._)("div",mt,[(0,s._)("div",null,(0,u.zw)(t),1),(0,s._)("div",null,[(0,s._)("span",pt,(0,u.zw)(e.userName),1)])]),(0,s._)("div",null,[(0,s._)("span",ht,(0,u.zw)(e.socketId),1)])])])),_:2},1024)))),128))],64))])])}var vt={name:"AdminVue",data(){return{tab:"user",socket:null,isSearch:!1,user_list:[],user_dict:{},filter_user_dict:new Object,search_user:""}},methods:{shutdown:function(e){let t=this;t.socket.emit("/socket/admin/shutdown",{key:e},((e,t)=>{e.success?(0,we.XA)({message:e.message,wordBreak:"break-all"}):(0,we.LJ)({message:e.message,wordBreak:"break-all"})}))},onSearch:function(e){let t=this;if(!e)return void(t.isSearch=!1);let o=t.$store.state.tempObj(t.user_dict);for(let r in o)0==r.includes(e)&&0==o[r].userName.includes(e)&&delete o[r];t.filter_user_dict=o,t.isSearch=!0},onClear:function(e){let t=this;t.isSearch=!1}},mounted:function(){let e=this;e.$store.state.user.isAdmin?(e.socket=e.$store.state.socket,e.socket.emit("/socket/admin/clients/get_all",{},((t,o)=>{e.user_dict=t.user_dict})),e.socket.on("/client/admin/connect/user",(t=>{e.user_dict[t.phoneNumber]={socketId:t.socketId}})),e.socket.on("/client/admin/disconnect/user",(t=>{1==Object.prototype.hasOwnProperty.call(e.user_dict,t.phoneNumber)&&delete e.user_dict[t.phoneNumber]}))):e.$router.push("/login")}};const yt=(0,f.Z)(vt,[["render",wt]]);var _t=yt;const $t={id:"AdminVue",style:{height:"100%"}},Ct={style:{display:"flex","flex-direction":"column",height:"100%","background-color":"#eee"}};function Nt(e,t,o,r,n,i){const u=(0,s.up)("van-cell"),a=(0,s.up)("van-button"),l=(0,s.up)("van-swipe-cell"),c=(0,s.up)("van-tab"),d=(0,s.up)("van-tabs");return(0,s.wg)(),(0,s.iD)("div",$t,[(0,s._)("div",Ct,[(0,s.Wm)(d,{active:n.tab,"onUpdate:active":t[0]||(t[0]=e=>n.tab=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{title:"사용자별",name:"user"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.user_dict,((e,t)=>((0,s.wg)(),(0,s.j4)(l,{key:t},{right:(0,s.w5)((()=>[(0,s.Wm)(a,{square:"",type:"danger",text:"Disconnect",onClick:e=>i.shutdown(t)},null,8,["onClick"])])),default:(0,s.w5)((()=>[(0,s.Wm)(u,{border:!1,title:t,value:e.socketId},null,8,["title","value"])])),_:2},1024)))),128))])),_:1}),(0,s.Wm)(c,{title:"그룹별",name:"group"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 그룹별 ")])),_:1})])),_:1},8,["active"])])])}var St={name:"AdminVue",data(){return{tab:"user",socket:null,user_list:[],user_dict:new Object}},methods:{shutdown:function(e){let t=this;t.socket.emit("/socket/admin/shutdown",{key:e},((e,t)=>{e.success?(0,we.XA)({message:e.message,wordBreak:"break-all"}):(0,we.LJ)({message:e.message,wordBreak:"break-all"})}))}},mounted:function(){let e=this;e.$store.state.user.isAdmin||e.$router.push("/login"),e.socket=e.$store.state.socket,e.socket.emit("/socket/admin/clients/get_all",{},((t,o)=>{e.user_dict=t.user_dict})),e.socket.emit("/socket/admin/rooms/get_all",{},((e,t)=>{console.log("data:",e)})),e.socket.on("/client/admin/connect/user",(t=>{e.user_dict[t.phoneNumber]={socketId:t.socketId}})),e.socket.on("/client/admin/disconnect/user",(t=>{1==Object.prototype.hasOwnProperty.call(e.user_dict,t.phoneNumber)&&delete e.user_dict[t.phoneNumber]}))}};const It=(0,f.Z)(St,[["render",Nt]]);var xt=It;const Vt=[{path:"/",name:"home",component:le},{path:"/chat",name:"chat",component:et},{path:"/login",name:"Login",component:Ce},{path:"/waiting",name:"Waiting",component:Oe},{path:"/error",name:"Error",component:Ee},{path:"/setting",name:"Setting",component:ze},{path:"/home",name:"Home",component:le},{path:"/admin/dashboard",name:"AdminDashboard",component:ut},{path:"/admin/user",name:"AdminUser",component:_t},{path:"/admin/group",name:"AdminGroup",component:xt},{path:"/:pathMatch(.*)*",redirect:"/error"}],Ot=(0,se.p7)({history:(0,se.PO)(),routes:Vt});Ot.beforeEach(((e,t)=>{console.error(`from: ${t.fullPath}, to: ${e.fullPath}`)}));var Wt=Ot,Lt=o(65);const Ut=(0,Lt.MT)({state:{socket:null,token:null,user:{userId:"",userName:"",phoneNumber:"",image:"",socketId:"",isAdmin:"",spousePhoneNumber:""},couple:{userId:"",userName:"",phoneNumber:"",image:"",socketId:""},getCookie:function(e){let t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null},setCookie:function(e,t,o){let r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3),document.cookie=e+"="+t+";expires="+r.toUTCString()+";path=/"},setError:function(e,t){for(let o in t)Object.prototype.hasOwnProperty.call(e,o)&&(e[o]=t[o])},axiosError:function(e){console.log("axiosError"),"SOCKET"==e.code&&((0,we.LJ)({message:e.message,wordBreak:"break-all"}),window.location.reload()),"LOGIN_ERROR"==e.code&&((0,we.LJ)({message:e.message,wordBreak:"break-all"}),window.location.reload())},tempObj:function(e){return JSON.parse(JSON.stringify(e))}},getters:{getSocket(e){return e.socket},getUser(e){return e.user}},mutations:{setSocket(e,t){e.socket=t},setToken(e,t){e.token=t},setUser(e,t){t?(e.user.userId=t.userId,e.user.userName=t.userName,e.user.image=t.image,e.user.phoneNumber=t.phoneNumber,e.user.spousePhoneNumber=t.spousePhoneNumber,e.user.isAdmin=t.isAdmin):(e.user.userId="",e.user.userName="",e.user.image="",e.user.phoneNumber="",e.user.spousePhoneNumber="",e.user.isAdmin="")},setSocketId(e,t){e.user.socketId=t},setCouple(e,t){t?(e.couple.userId=t.userId,e.couple.userName=t.userName,e.couple.image=t.image,e.couple.phoneNumber=t.phoneNumber,e.couple.socketId=t.socketId):(e.couple.userId="",e.couple.userName="",e.couple.image="",e.couple.phoneNumber="",e.couple.socketId="")},setCoupleSocketId(e,t){e.couple.socketId=t}}});var Dt=Ut,jt=JSON.parse('{"name":"ybr","version":"0.2.4","private":true,"scripts":{"dev":"vue-cli-service serve --mode dev","serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"axios":"^1.2.3","core-js":"^3.8.3","socket.io-client":"^4.5.4","v-calendar":"^3.0.0-alpha.8","vant":"^4.0.8","vue":"^3.2.13","vue-i18n":"^9.2.2","vue-router":"^4.0.13","vuex":"^4.1.0"},"devDependencies":{"@babel/core":"^7.12.16","@babel/eslint-parser":"^7.12.16","@vue/cli-plugin-babel":"~5.0.0","@vue/cli-plugin-eslint":"~5.0.0","@vue/cli-service":"~5.0.0","eslint":"^7.32.0","eslint-plugin-vue":"^8.0.3"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/vue3-essential","eslint:recommended"],"parserOptions":{"parser":"@babel/eslint-parser"},"rules":{"vue/no-unused-vars":"off","no-unused-vars":"off"}},"browserslist":["> 1%","last 2 versions","not dead","not ie 11"]}'),Pt=o(5658),Et=JSON.parse('{"userId":"아이디","RequireduserId":"아이디를 입력해주세요.","password":"패스워드","phoneNumber":"휴대폰","Requiredpassword":"패스워드를 입력해주세요.","RequiredPhoneNumber":"상대방 번호를 입력해주세요.","RememberMe":"자동 로그인","ForgetId":"ID/PW찾기","Signup":"회원가입","Login":"로그인","Logout":"로그아웃","Confirm":"확인","KakaoLogin":"KakaoLogin","Loading":"Loading...","Chat":"채팅","Home":"홈","Search":"검색","Community":"커뮤니티","Setting":"설정"}'),qt=JSON.parse('{"userId":"userId","password":"password","phoneNumber":"phoneNumber","Requiredpassword":"userId is required","RequireduserId":"userId is required","RequiredPhoneNumber":"phoneNumber is required","RememberMe":"RememberMe?","Signup":"Signup","ForgetId":"Forget Id?","Login":"Login","Logout":"Logout","Confirm":"Confirm","KakaoLogin":"KakaoLogin","Loading":"Loading...","Chat":"Chat","Home":"Home","Search":"Search","Community":"Community","Setting":"Setting"}'),At={ko:Et,en:qt},Rt=o(3045),Tt=o(8397);const zt=(0,Pt.o)({locale:"ko",fallbackLocale:"en",messages:At}),Ht=(0,r.ri)(N);Ht.config.globalProperties.$store=Dt,Ht.config.globalProperties.$config=jt,console.error(`ybr version: ${jt.version}`),S.g.use("ko-KR",Tt.Z),Ht.use(I.zx),Ht.use(x.JO),Ht.use(V.l0),Ht.use(O.gN),Ht.use(W.TS),Ht.use(L.T),Ht.use(U.aV),Ht.use(D.bL),Ht.use(j.Er),Ht.use(P.QP),Ht.use(E.rs),Ht.use(q.X2),Ht.use(A.JX),Ht.use(R.l2),Ht.use(T.Zb),Ht.use(z.Ee),Ht.use(H.Vq),Ht.use(Z.aV),Ht.use(M.FN),Ht.use(K.Vb),Ht.use(J.f),Ht.use(B.Q1),Ht.use(Y.iz),Ht.use(F.OK),Ht.use(G.mQ),Ht.use(Z.aV),Ht.use(X.gb),Ht.use(Q.Ct),Ht.use(ee.GI),Ht.use(te.ol),Ht.use(oe.HY),Ht.use(re.Od),Ht.use(Wt),Ht.use(Dt),Ht.use(zt),Ht.use(Rt.ZP,{}),Ht.mount("#app")}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,n){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],n=e[c][2];for(var u=!0,a=0;a<r.length;a++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(u=!1,n<i&&(i=n));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,i=r[0],u=r[1],a=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in u)o.o(u,s)&&(o.m[s]=u[s]);if(a)var c=a(o)}for(t&&t(r);l<i.length;l++)n=i[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},r=self["webpackChunkybr"]=self["webpackChunkybr"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(5549)}));r=o.O(r)})();
//# sourceMappingURL=app.831b34d6.js.map