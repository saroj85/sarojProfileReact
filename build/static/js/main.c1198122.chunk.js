(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),o=n(3),i=n(4),s=n(6),u=n(5),m=n(7),p=n(2),h=n(10),d=n(13),E=n(1),f=document.head;a.Component;function g(){var e=Object(p.a)(["\n    ul{\n        list-style: none;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        li{\n            margin-right: 20px;\n            &:last-child{\n                margin-right: 0px;\n            }\n            a{\n                font-size: 15px;\n                font-weight: bold;\n                color: #fff;\n                text-decoration: none;\n                padding: 12px 16px;\n                border-radius: 4px;\n                &.active{\n                    background:#18bc9c;\n                }\n\n            }\n        }\n    }\n"]);return g=function(){return e},e}function b(){var e=Object(p.a)(["\n    width: 100px;\n    height: 106px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .logo{\n        font-size: 30px;\n        color: #fff;\n        text-transform: uppercase;\n        font-weight: 700;\n        a{\n            color: #fff;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            .sm_text{\n                font-size: 11px;\n                font-weight: 200;\n                letter-spacing: 2px;\n                color: #00ffcd;\n            }\n        }\n    }\n"]);return b=function(){return e},e}function x(){var e=Object(p.a)(["\n    width: 100%;\n    height: 106px;\n    background-color: #2c3e50;\n    display: flex;\n    padding: 0px 100px;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: space-between;\n"]);return x=function(){return e},e}var w=E.a.header(x()),v=E.a.div(b()),j=E.a.div(g()),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"saroj"},n.test=function(){n.state.name;return"hello",console.log("INNER NAME","hello"),{name:"hello"}},n.handleScroll=function(){n.setState({scrollY:window.scrollY},function(){return console.log("SCREEN Y",n.state.scrollY)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0}),window.addEventListener("screen",this.handleScroll,{passive:!0}),this.test()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("screen",this.handleScroll)}},{key:"render",value:function(){return console.log("HEADER",this.state),r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(v,null,r.a.createElement("span",{className:"logo"},r.a.createElement(h.c,{to:"/"},r.a.createElement("span",null,"Iam,saroj"),r.a.createElement("span",{className:"sm_text"},"React Js Developer")))),r.a.createElement(j,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.c,{to:"/",exact:!0},"HOME")),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/portfolio"},"PORTFOLIO")),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/about"},"ABOUT")),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/contact"},"CONTACT"))))))}}]),t}(a.Component),O=Object(d.g)(y);function k(){var e=Object(p.a)(["\n    width: 100%;\n    height: ",";\n    display: block;\n"]);return k=function(){return e},e}var S=E.a.div(k(),function(e){return e.h||"2px"});function C(){var e=Object(p.a)(["\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n    background-color: #18bc9c;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    .user_img{\n        width: 200px;\n        height: 200px;\n        border-radius: 50%;\n    }\n    .user_title{\n        font-size: 43px;\n        font-weight: bold;\n        color: #fff;\n        text-transform: uppercase;\n    }\n    .user_desc{\n        font-size: 18px;\n        font-weight: 600;\n        color: #fff;\n\n    }\n"]);return C=function(){return e},e}var N=E.a.div(C()),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement("img",{className:"user_img",src:"https://saroj85.github.io/SarojProfile/img/saroj01.jpg"}),r.a.createElement(S,{h:"15px"}),r.a.createElement("h1",{className:"user_title"},"* START SAROJ *"),r.a.createElement(S,{h:"15px"}),r.a.createElement("p",{className:"user_desc"},"Web Designer- User Experience Developer"))}}]),t}(a.Component);function P(){var e=Object(p.a)(["\n    font-size: 45px;\n    color: ",";\n    text-align: center;\n    font-weight: 700;\n    text-transform: uppercase;\n    /* border-bottom: 2px solid #ccc; */\n    padding-bottom: 10px;\n    .border_bottom{\n        display: block;\n        width: 105px;\n        height: 2px;\n        background: ",";\n        margin: auto;\n    }\n"]);return P=function(){return e},e}var R=E.a.h1(P(),function(e){return e.color||"#fff"},function(e){return e.color||"#fff"}),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,{color:this.props.color},this.props.title,r.a.createElement("span",{className:"border_bottom"})))}}]),t}(a.Component);function T(){var e=Object(p.a)(["\n    width: ",";\n    height: ",";\n    /* width: ","; */\n    transform: ",";\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    bottom:0px;\n    left: 0px;\n    margin:",";\n    display: block;\n    background-color:",";\n    z-index: 101;\n    padding-top: 30px;\n    transition: all 0.1s;\n    border-radius: 0px;\n"]);return T=function(){return e},e}function z(){var e=Object(p.a)(["\n    width: ",";\n    height: ",";\n    /* width: ","; */\n    transform: ",";\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    bottom:0px;\n    left: 0px;\n    margin:",";\n    display: block;\n    background-color:",";\n    z-index: 101;\n    padding-top: 30px;\n    transition: all 0.1s;\n    border-radius: 30px;\n\n    .close{\n        position: absolute;\n        top: -11px;\n        right: 22px;\n        font-size: 31px;\n        color: #18bc9c;\n        font-weight: 700;\n        padding: 0px;\n        cursor: pointer;\n        border: 1px solid #18bc9c;\n        width: 41px;\n        height: 41px;\n        border-radius: 50%;\n        text-align: center;\n        line-height: 41px;\n        transition: all 0.1s;\n        &:hover{\n            background: #18bc9c;\n            color: #fff;\n        }\n    }\n"]);return z=function(){return e},e}function D(){var e=Object(p.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    bottom:0px;\n    left: 0px;\n    margin: auto;\n    display: block;\n    background-color: rgba(0,0,0,0.61);\n    z-index: 100;\n    transform: ",";\n    transition: all 0.1s;\n    overflow-y: auto;\n"]);return D=function(){return e},e}var L=E.a.div(D(),function(e){return e.effect?"scale(1)":"scale(0)"}),U=E.a.div(z(),function(e){return e.width||"300px"},function(e){return e.height||"300px"},function(e){return e.effect?"300px":"0px"},function(e){return e.effect?"scale(1)":"scale(0)"},function(e){return e.margin?e.margin:"auto"},function(e){return e.bg||"#fff"}),M=E.a.div(T(),function(e){return e.width||"70vw"},function(e){return e.height||"50px"},function(e){return e.effect?"300px":"0px"},function(e){return e.effect?"scale(1)":"scale(0)"},function(e){return e.margin?e.margin:"auto"},function(e){return e.bg||"#fff"}),B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).stopProp=function(e){e.stopPropagation()},n.state={},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=e.bg,l=e.popUpClose,c=e.effect,o=e.margin,i=e.error;return r.a.createElement("div",null,r.a.createElement(L,{onClick:l,effect:c},!i&&r.a.createElement(U,{height:t,width:n,bg:a,margin:o,effect:c,onClick:this.stopProp},this.props.children),i&&r.a.createElement(M,{height:t,width:n,bg:a,margin:o,effect:c,onClick:this.stopProp},this.props.children)))}}]),t}(a.Component);n(42);function _(){var e=Object(p.a)(["\n    border: 0px;\n    width: 104px;\n    height: 40px;\n    font-size: 16px;\n    background-color: #18bc9c;\n    color: #fff;\n    border-radius: 4px;\n    text-align: center;\n    margin: auto;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    font-weight: 600;\n\n"]);return _=function(){return e},e}function H(){var e=Object(p.a)(["\n    width: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: auto;\n    .skill{\n        border: 1px solid #ccccccd9;\n        padding: 5px;\n        border-radius: 4px;\n        margin: 5px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: 500;\n        background: #f9f9f9;\n        cursor: pointer;\n    }\n"]);return H=function(){return e},e}function J(){var e=Object(p.a)(["\n    width: 100%;\n    height: 260px;\n    position: relative;\n    overflow: hidden;\n    .hover_card{\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: ",";\n        bottom: 0px;\n        right: 0px;\n        left: 0px;\n        transition: all 0.1s;\n        background-color: #18bc9c;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 50px;\n        color: #fff;\n    }\n    img{\n        max-width: 100%;\n    } \n"]);return J=function(){return e},e}var F=E.a.div(J(),function(e){return e.hover?"0px":"-100%"}),W=E.a.div(H()),Y=E.a.button(_()),V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).popUpShow=function(){n.setState({showPopup:!0}),document.body.style.overflow="hidden",document.body.style.marginRight="16px"},n.popUpClose=function(){n.setState({showPopup:!1}),document.body.style.overflow="auto",document.body.style.marginRight="0px",document.body.style.margin="0px"},n.state={hover:!1,showPopup:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,n=t.logo,a=t.title,l=t.bigImage,c=(t.url,t.description),o=t.skill;return console.log("logo",n),r.a.createElement("div",null,r.a.createElement(F,{hover:this.state.hover,onMouseOut:function(){return e.setState({hover:!1})},onMouseOver:function(){return e.setState({hover:!0})}},r.a.createElement("img",{src:n}),r.a.createElement("div",{className:"hover_card",onClick:this.popUpShow},r.a.createElement("i",{className:"fas fa-search-plus"}))),r.a.createElement(B,{popUpClose:this.popUpClose,effect:this.state.showPopup,height:"max-content",width:"calc(100vw - 100px)",margin:"50px"},r.a.createElement("div",{style:{padding:"10px",position:"relative"}},r.a.createElement("div",{className:"close",onClick:this.popUpClose},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement(A,{title:a,color:"#000"}),r.a.createElement(S,{h:"20px"}),r.a.createElement("img",{src:l,style:{maxWidth:"70%",border:"4px solid #09d3ac",borderRadius:"3px"}}),r.a.createElement(S,{h:"20px"}),r.a.createElement("p",{style:{fontSize:"21px",fontWeight:"500"}},c),r.a.createElement(S,{h:"20px"}),r.a.createElement(W,null,o&&o.map(function(e,t){return r.a.createElement("div",{className:"skill",key:t},e)})),r.a.createElement(S,{h:"50px"}),r.a.createElement(Y,{onClick:this.popUpClose},"Close"),r.a.createElement(S,{h:"50px"}))))}}]),t}(a.Component);function K(){var e=Object(p.a)(["\n    width: calc(100% - 120px);\n    margin: auto;\n"]);return K=function(){return e},e}var q=E.a.div(K()),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null,this.props.children)}}]),t}(a.Component);function Q(){var e=Object(p.a)(["\n    width: 100%;\n    background-color: ",";\n    height: ",";\n"]);return Q=function(){return e},e}function Z(){var e=Object(p.a)(["\n      min-height: ",";\n      padding: ",";\n      margin: ",";\n      box-sizing: border-box;\n      font-family:'Asap', sans-serif ;\n   ",";\n   @media only screen and (min-width: 768px){\n       ","\n   }\n   @media only screen and (min-width: 992px){\n       ","\n   }\n   @media only screen and (min-width: 1200px){\n       ","\n   }\n"]);return Z=function(){return e},e}function X(){var e=Object(p.a)(["\n   width : 100%;\n   height: ",";\n   background-color: ",";\n   display: flex;\n   align-items: ",";\n   justify-content: ",";\n   margin: ",";\n   margin-right: ",";\n   flex-direction: ",";\n   flex-wrap : ",";\n   overflow: ",";\n   padding: ",";\n   font-family:'Asap', sans-serif ;\n   &::-webkit-scrollbar { width: "," }\n"]);return X=function(){return e},e}var $=E.a.div(X(),function(e){return e.height||void 0},function(e){return e.bg||void 0},function(e){return e.alignItems?e.alignItems:"center"},function(e){return e.justify?e.justify:"space-between"},function(e){return e.margin?e.margin:"auto"},function(e){return e.marginRight?e.marginRight+"px":"auto"},function(e){return e.direction?e.direction:"row"},function(e){return e.wrap?e.wrap:"wrap"},function(e){return e.overflow?e.overflow:""},function(e){return e.padding||"0px"},function(e){return e.hideScrollbar?"0 !important":"auto"});function ee(e){if(e)return"width : ".concat(e/12*100,"%")}var te=E.a.div(Z(),function(e){return e.minHeight?e.minHeight:void 0},function(e){return e.padding?e.padding:"10px"},function(e){return e.margin?e.margin:"auto"},function(e){var t=e.xs;return t?ee(t):"width: 100%"},function(e){var t=e.sm;return t?ee(t):"width: 0%"},function(e){var t=e.md;return t&&ee(t)},function(e){var t=e.lg;return t&&ee(t)}),ne=(E.a.div(Q(),function(e){return e.color||"#7C7C7C"},function(e){return e.height||"1px"}),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={data:[{id:1,title:"Flypur",logo:"https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png",bigImage:"https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png",url:"https://flypur.com",description:"buyer seller communitty ",skill:["Vue.js","html","css","javascript","react Native","responsive design"]},{id:2,title:"bogglingshop",logo:"https://saroj85.github.io/SarojProfile/img/portfolio/boggling.png",bigImage:"https://saroj85.github.io/SarojProfile/img/portfolio/boggling-work.png",url:"https://bogglingshop.com",description:"online clothing store ",skill:["html","css","javascript","Jquery","Bootstrap","responsive design"]},{id:3,title:"shodding",logo:"https://saroj85.github.io/SarojProfile/img/portfolio/shodding.png",bigImage:"https://saroj85.github.io/SarojProfile/img/portfolio/shoddingbig.png",url:"https://shodding.com",description:"online latest & premium clothing store ",skill:["html","css","javascript","Jquery","Bootstrap","responsive design"]},{id:4,title:"parkspace",logo:"https://saroj85.github.io/SarojProfile/img/portfolio/parkspace.png",bigImage:"https://saroj85.github.io/SarojProfile/img/portfolio/parkspacebig.png",url:"https://parkspace.in",description:"car parking online booking app ",skill:["html","css","javascript","Jquery","Bootstrap","responsive design"]},{id:5,title:"thebigstack",logo:"assest/big-stack.png",bigImage:"assest/bigstack.png",url:"https://flypur.com",description:"INDIA\u2019S 1ST ONLINE POKER UNIVERSITY AND PREMIUM SHOPPING STORE",skill:["html","css","javascript","react Js","Sass","responsive design"]},{id:6,title:"Sageit",logo:"assest/saget.png",bigImage:"assest/sagit-big.png",url:"http://hpie.in/sageit/",description:"Sage IT is a business technology company providing comprehensive range of IT products and services. These include: healthcare IT, business intelligence, analytics, data warehouse, integration solutions, web & mobile application development, cloud computing, big data, content management, testing, technology consulting, infrastructure & application support services.",skill:["html","css","javascript","wordpress","responsive design"]}]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement(A,{title:"Portfolio",color:"#2c3e50"}),r.a.createElement(S,{h:"30px"}),r.a.createElement($,null,this.state.data&&this.state.data.map(function(e,t){return r.a.createElement(te,{sm:"4",key:t},r.a.createElement(V,{item:e}))}))))}}]),t}(a.Component));function ae(){var e=Object(p.a)(["\n    width: 100%;\n    .about{\n        max-width: 400px;\n        margin: auto;\n        h2{\n            color: #fff;\n            font-size: 20px;\n            font-weight: 500;\n        }\n\n        .d_btn{\n            width: 200px;\n            height: 55px;\n            border: 1px solid #fff;\n            color: #fff;\n            background: transparent;\n            font-size: 18px;\n            text-transform: capitalize;\n            outline: none;\n\n            cursor: pointer;\n            &:hover{\n                background-color: #fff;\n                border: 1px solid  #fff;\n                color: #000;\n            }\n        }\n    }\n\n"]);return ae=function(){return e},e}var re=E.a.div(ae()),le=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,{height:"80vh",bg:"#18bc9c"},r.a.createElement(G,null,r.a.createElement(re,null,r.a.createElement(S,{h:"50px"}),r.a.createElement(A,{title:"About us",color:"#2c3e50"}),r.a.createElement(S,{h:"50px"}),r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"I am a User Interface Developer working on HTML5 / CSS3 / SASS , BS3 / BS4, jQuery, JavaScript,React Js, React Native , Basic of VueJs, Responsive Web Design , Photoshop with fast learning skill."),r.a.createElement(S,{h:"100px"}),r.a.createElement("button",{className:"d_btn"},r.a.createElement("a",{download:"Resume_saroj",href:"/assest/Resume.doc"},r.a.createElement("i",{className:"fas fa-download"})," download now !")))))))}}]),t}(a.Component),ce=n(30);function oe(){var e=Object(p.a)(["\n    width: 100%;\n    padding: 6px 0px;\n    height: 45px;\n    line-height: 45px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #000;\n    border: 0px;\n    border-bottom: 1px solid #ccccccb5;\n    outline: none;\n    font-weight: 600;\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n    width: 600px;\n    margin: auto;\n    text-align: left;\n\n    textarea{\n        width: 100%;\n        padding: 6px 0px;\n        height: 100px;\n        font-size: 14px;\n        font-weight: 500;\n        color: #000;\n        border: 0px;\n        border-bottom: 1px solid #ccccccb5;\n        outline: none;\n        resize: none;\n        font-weight: 600;\n    }\n\n    .send{\n        font-size: 18px;\n        height: 66px;\n        line-height: 66px;\n        font-weight: 500;\n        text-align: center;\n        width: 103px;\n        outline: none;\n        border: 1px solid #18bc9c;\n        background-color: #18bc9c;\n        color: #fff;\n        border-radius: 4px;\n        cursor: pointer;\n        font-family: 'Asap', sans-serif;\n        &:hover{\n            opacity: 0.7;\n        }\n    }\n\n    .error_msg{\n        color: red;\n        font-size: 12px;\n    }\n\n"]);return ie=function(){return e},e}var se=E.a.div(ie()),ue=E.a.input(oe()),me=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeHandler=function(e){n.setState(Object(ce.a)({},e.target.name,e.target.value),console.log("hey",n.state))},n.submitClick=function(e){n.state.name.length<=2?alert("Please Enter your Full Name"):/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(n.state.email)?n.state.message.length<=5?alert("Please Enter  Your Message"):(n.setState({name:"",email:"",message:""}),alert("Thanks For contacting Me !!")):alert("Please Enter Email")},n.state={error:!1,name:"",email:"",message:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,{title:"contact Me",color:"#000"}),r.a.createElement(se,null,r.a.createElement(ue,{type:"text",name:"name",value:this.state.name,placeholder:"Full Name",onChange:this.changeHandler}),this.state.nameError&&r.a.createElement("p",{className:"error_msg"},this.state.errorMessage),r.a.createElement(S,{h:"10px"}),r.a.createElement(ue,{type:"text",name:"email",value:this.state.email,placeholder:"Email",onChange:this.changeHandler}),this.state.EmailError&&r.a.createElement("p",{className:"error_msg"},this.state.errorMessage),r.a.createElement(S,{h:"10px"}),r.a.createElement("textarea",{type:"text",name:"message",value:this.state.message,placeholder:"Message",onChange:this.changeHandler}),this.state.messageError&&r.a.createElement("p",{className:"error_msg"},this.state.errorMessage),r.a.createElement(S,{h:"10px"}),r.a.createElement("button",{className:"send",onClick:this.submitClick},"Send"),r.a.createElement(S,{h:"100px"})))}}]),t}(a.Component);function pe(){var e=Object(p.a)(["\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15px;\n    color: #fff;\n    background: #1a252f;\n"]);return pe=function(){return e},e}function he(){var e=Object(p.a)(["\n    width: 100%;\n    background-color: #2c3e50;\n    color: #fff;\n\n    .web{\n        width: 212px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin: auto;\n        a{\n            width: 40px;\n            height: 40px;\n            border: 1px solid #fff;\n            border-radius: 50%;\n            font-size: 15px;\n            text-align: center;\n            display: inline-block;\n            color: #fff;\n            line-height: 40px;\n            /* margin-right: 10px; */\n        }\n        #google:hover{\n            background-color: #a51919;\n        }\n        #facebook:hover{\n            background-color: #48649f;\n        }\n        #linkedin:hover{\n            background-color: #0173b1;\n        }\n    }\n\n"]);return he=function(){return e},e}var de=E.a.div(he()),Ee=E.a.div(pe()),fe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(de,null,r.a.createElement(S,{h:"100px"}),r.a.createElement($,{alignItems:"self-start"},r.a.createElement(te,{sm:"4",margin:"0px"},r.a.createElement("h2",null,"LOCATION"),r.a.createElement(S,{h:"15px"}),r.a.createElement("p",null,"Nirman Vihar New Delhi")),r.a.createElement(te,{sm:"4",margin:"0px"},r.a.createElement("h2",null,"AROUND THE WEB"),r.a.createElement(S,{h:"15px"}),r.a.createElement("div",{className:"web"},r.a.createElement("a",{href:"",id:"facebook",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("a",{href:"",id:"google",target:"_blank"},r.a.createElement("i",{className:"fab fa-google-plus-g"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/saroj85/",target:"_blank",id:"linkedin"},r.a.createElement("i",{className:"fab fa-linkedin-in"})))),r.a.createElement(te,{sm:"4",margin:"0px"},r.a.createElement("h2",null,"ABOUT FREELANCER"),r.a.createElement(S,{h:"15px"}))),r.a.createElement(S,{h:"100px"})),r.a.createElement(Ee,null,"Copyright \xa9 iam saroj 2019"))}}]),t}(a.Component);function ge(){var e=Object(p.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 45px;\n\tfont-weight: 600;\n\theight: 30vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return ge=function(){return e},e}var be=E.a.div(ge());var xe=function(){return r.a.createElement(be,null,"404 - Sorry this page is not found")},we=(n(46),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement(I,null),r.a.createElement(S,{h:"40px"}),r.a.createElement(ne,null),r.a.createElement(S,{h:"40px"}),r.a.createElement(le,null),r.a.createElement(S,{h:"40px"}),r.a.createElement(me,null))}}]),t}(a.Component));function ve(){var e=Object(p.a)(["\n    width: 80%;\n    margin: auto;\n    /* background: red; */\n    table{\n        border: 1px solid #ccc;\n        border-collapse: collapse;\n        width: 100%;\n    }\n    tr td{\n        border: 1px solid #ccc;\n    }\n"]);return ve=function(){return e},e}var je=E.a.div(ve()),ye=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(je,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Curriculum Vitae")),r.a.createElement("p",null,r.a.createElement("strong",null,"UI Developer\xa0 ")),r.a.createElement("p",null,"Approx. 2 Years of experience in UI Development and 1 year in React Js"),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("p",null,r.a.createElement("strong",null,"Saroj Kumar")),r.a.createElement("h5",null,r.a.createElement("strong",null,"Email:")," send4saroj@gmail.com"),r.a.createElement("h5",null,r.a.createElement("strong",null,"Mobile:")," 8789080458"),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"11A, First Floor, South Ganesh Nagar"),r.a.createElement("p",null,r.a.createElement("strong",null,"Delhi - 110092")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"680"},r.a.createElement("p",null,r.a.createElement("strong",null,"CARRIER OBJECTIVE")))))),r.a.createElement("p",null,"To perform exclusively for professional excellence and role enhancement in a pioneer organization where I can learn and implement innovative ideas."),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"681"},r.a.createElement("p",null,r.a.createElement("strong",null,"TECHNICAL SKILLS")))))),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"297"},r.a.createElement("p",null,"1\xa0\xa0\xa0\xa0 Design Packages"),r.a.createElement("p",null,"2\xa0\xa0\xa0\xa0 Web Technologies"),r.a.createElement("p",null,"3\xa0\xa0\xa0\xa0 Operating Systems\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),r.a.createElement("td",{width:"385"},r.a.createElement("p",null,"Photoshop,Dreamweaver"),r.a.createElement("p",null,"React Js, JavaScript, jQuery, HTML5, CSS3, Bootstrap, Responsive website \xa0"),r.a.createElement("p",null,"MS Win 2000,XP, Window10"))))),r.a.createElement("p",null,"\xa0"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"680"},r.a.createElement("p",null,r.a.createElement("strong",null,"PROFESSIONAL QUALIFICATIONS")))))),r.a.createElement("p",null,"\xa0"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"681"},r.a.createElement("p",null,"6\xa0\xa0\xa0\xa0 Certification in UI Development from Lal Bahadur shastra Institute (Pandav Nagar)"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"681"},r.a.createElement("p",null,r.a.createElement("strong",null,"ACADEMIC QUALIFICATION")))))),r.a.createElement("p",null,"\xa0"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"151"},r.a.createElement("p",null,r.a.createElement("strong",null,"S. No."))),r.a.createElement("td",{width:"116"},r.a.createElement("p",null,r.a.createElement("strong",null,"Exams"))),r.a.createElement("td",{width:"174"},r.a.createElement("p",null,r.a.createElement("strong",null,"University"))),r.a.createElement("td",{width:"240"},r.a.createElement("p",null,r.a.createElement("strong",null,"Year")))),r.a.createElement("tr",null,r.a.createElement("td",{width:"151"},r.a.createElement("p",null,"1.")),r.a.createElement("td",{width:"116"},r.a.createElement("p",null,"12",r.a.createElement("sup",null,"th"))),r.a.createElement("td",{width:"174"},r.a.createElement("p",null,"BIEC")),r.a.createElement("td",{width:"240"},r.a.createElement("p",null,"2018"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"151"},r.a.createElement("p",null,"2.")),r.a.createElement("td",{width:"116"},r.a.createElement("p",null,"BA")),r.a.createElement("td",{width:"174"},r.a.createElement("p",null,"LNMU")),r.a.createElement("td",{width:"240"},r.a.createElement("p",null,"Pursuing"))))),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("p",null,r.a.createElement("strong",null,"WORK EXPERIENCE")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2",width:"367"},r.a.createElement("p",null,r.a.createElement("strong",null,"THE BIG STACK PVT LTD ")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("p",null,"Lane Number 2, Saiyad ul Ajaib, Sainik Farm, New Delhi, Delhi 110044"),r.a.createElement("p",null,"\xa0")),r.a.createElement("td",{colspan:"2",width:"314"},r.a.createElement("p",null,r.a.createElement("strong",null,"08 Jan 2019 to till date")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")))),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",width:"681"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Profile: Front End Developer ")))),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",width:"681"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Environment: HTML5, CSS3, JavaScript, React js, Sass, Bootstrap, Photoshop Responsive website")))),r.a.createElement("tr",null,r.a.createElement("td",{width:"247"},r.a.createElement("p",null,r.a.createElement("strong",null,"Project"))),r.a.createElement("td",{colspan:"2",width:"432"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.thebigstack.com/"},"https://www.thebigstack.com/")),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"\xa0")),r.a.createElement("td",{width:"1"},r.a.createElement("p",null,"\xa0"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"137"},"\xa0"),r.a.createElement("td",{width:"86"},"\xa0"),r.a.createElement("td",{width:"228"},"\xa0"),r.a.createElement("td",{width:"1"},"\xa0")))),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2",width:"367"},r.a.createElement("p",null,r.a.createElement("strong",null,"FLYPUR TECH LABS PVT. LTD")),r.a.createElement("p",null,r.a.createElement("strong",null,"C-155, Nirman Bihar,")),r.a.createElement("p",null,r.a.createElement("strong",null,"New Delhi, India -110092"))),r.a.createElement("td",{colspan:"2",width:"314"},r.a.createElement("p",null,r.a.createElement("strong",null,"16 Oct 2017 to 05 Jan 2019")))),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",width:"681"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Profile: UI Developer ")))),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",width:"681"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Environment: HTML5, CSS3, JavaScript,basic of vue.js, React Native , Photoshop, WordPress,Bootstrap, Responsive website.")))),r.a.createElement("tr",null,r.a.createElement("td",{width:"247"},r.a.createElement("p",null,r.a.createElement("strong",null,"Projects"))),r.a.createElement("td",{colspan:"2",width:"432"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://flypur.com/"},"https://flypur.com/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://testgist.hpie.in/"},"http://testgist.hpie.in/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://www.jobs.hpie.in/"},"http://www.jobs.hpie.in/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://mytechbus.com/"},"http://mytechbus.com/")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://stocksearning.com/"},"https://stocksearning.com/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://hpie.in/sageit/"},"http://hpie.in/sageit/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://parkspace.in/"},"http://parkspace.in/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://www.help4human.org/"},"http://www.help4human.org/")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://tcexam.hpie.in/"},"http://tcexam.hpie.in")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.bogglingshop.com/"},"https://www.bogglingshop.com/")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.shodding.com/"},"https://www.shodding.com/")),r.a.createElement("p",null,"\xa0")),r.a.createElement("td",{width:"1"},r.a.createElement("p",null,"\xa0"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"144"},"\xa0"),r.a.createElement("td",{width:"85"},"\xa0"),r.a.createElement("td",{width:"221"},"\xa0"),r.a.createElement("td",{width:"1"},"\xa0")))),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2",width:"682"},r.a.createElement("p",null,r.a.createElement("strong",null,"PERSONAL DETAILS")))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Father\u2019s Name:"))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"Dinesh Yadav"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Date of Birth: "))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"15/02/1998"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Nationality:"))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"Indian"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Marital Status:"))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"Single"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Language:"))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"English, Hindi"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Strengths: "))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"Fast learner, Punctual, accept challenges"))),r.a.createElement("tr",null,r.a.createElement("td",{width:"195"},r.a.createElement("p",null,r.a.createElement("strong",null,"Hobbies:"))),r.a.createElement("td",{width:"487"},r.a.createElement("p",null,"Working on Computer, Reading Books, Playing Games."))))),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"Place:\xa0 New Delhi"),r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"Date:",r.a.createElement("strong",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Saroj Kumar")),r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "))))}}]),t}(a.Component),Oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,{h:"40px"}),r.a.createElement($,{alignItems:"start"},r.a.createElement(te,{sm:"8"},r.a.createElement(me,null)),r.a.createElement(te,{sm:"4",margin:"0px"},r.a.createElement("p",null,"For any enquery mail to: send4saroj@gmail.com"))))}}]),t}(a.Component);function ke(){var e=Object(p.a)(["\n    width: 30px;\n    height: 30px;\n    border: 1px solid #ffffff;\n    background-color: #2c3e50;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    cursor: pointer;\n    line-height: 30px;\n    color: #fff;\n    font-size: 21px;\n"]);return ke=function(){return e},e}var Se=E.a.div(ke()),Ce=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).scrollStep=function(){0===window.pageYOffset&&clearInterval(n.state.intervalId),window.scroll(0,window.pageYOffset-50)},n.scrollToTop=function(){var e=setInterval(n.scrollStep,16.66);n.setState({intervalId:e})},n.state={},n.myRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("propsNew",this.props),r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(we,null)),r.a.createElement(d.a,{exact:!0,path:"/portfolio"},r.a.createElement(S,{h:"100px"}),r.a.createElement(ne,null)),r.a.createElement(d.a,{exact:!0,path:"/about"},r.a.createElement(S,{h:"40px"}),r.a.createElement(ye,null)),r.a.createElement(d.a,{exact:!0,path:"/contact"},r.a.createElement(Oe,null)),r.a.createElement(d.a,{component:xe})),r.a.createElement(S,{h:"40px"}),r.a.createElement(fe,null),r.a.createElement(Se,{onClick:this.scrollToTop},r.a.createElement("i",{className:"fas fa-angle-up"}))))}}]),t}(a.Component),Ne=Object(d.g)(Ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h.b,{history:d.f},r.a.createElement(Ne,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c1198122.chunk.js.map