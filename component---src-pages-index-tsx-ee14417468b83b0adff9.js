(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/mF+":function(e,t,n){},CLmH:function(e,t,n){"use strict";var a=n("q1tI"),l=n("DmXo"),c=n("HLd5"),r=(n("/mF+"),function(e){var t=document.querySelector("body"),n=document.querySelector(".project-overlay"),a=document.getElementById("overlay-"+e.currentTarget.id);t.classList.add("disabled"),n.classList.add("active"),a.classList.add("active")});t.a=function(e){var t=e.data;return a.createElement("div",{className:"project-card",id:t.id,onClick:r},a.createElement("div",{className:"project-card-name"},a.createElement(l.a,{className:"project-card-badge",src:t.imgSrc}),t.name),a.createElement("div",{className:"project-card-description"},t.description),a.createElement("div",{className:"project-card-tags"},a.createElement(c.a,{tag:t.tags[0]}),a.createElement("span",{className:"project-card-type"},t.type.join(", "))))}},DmXo:function(e,t,n){"use strict";var a=n("zLVn"),l=n("q1tI"),c=n("Wbzz"),r=n("9eSz"),m=n.n(r);t.a=function(e){var t=e.src,n=Object(a.a)(e,["src"]),r=Object(c.useStaticQuery)("3309047460"),s=l.useMemo((function(){return r.allFile.edges.find((function(e){var n=e.node;return t===n.relativePath}))}),[r,t]);return s?l.createElement(m.a,Object.assign({fluid:s.node.childImageSharp.fluid},n)):l.createElement("svg",{className:"project-card-badge",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},l.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}))}},EDuE:function(e,t,n){},HLd5:function(e,t,n){"use strict";var a,l=n("q1tI");!function(e){e.Python="#3572A5",e.TypeScript="#2B7489",e.JavaScript="#F1E05A",e["Unreal Engine"]="black",e.Unity="black",e.HTML="#e34c26",e["C++"]="#f34b7d",e["C#"]="#178600",e.PHP="#4F5D95",e.Java="#b07219",e["Node.js"]="#3C873A",e.Django="#092e20",e.MySQL="#00758F",e.MariaDB="#002d3b",e.MongoDB="#589636",e.Qt="#41CD52",e.Electron="#89deee",e.Tensorflow="#FFA800",e["Jupyter Notebook"]="#f8702c",e.Docker="#0db7ed",e.GraphQL="#e12b9a",e.Steamworks="#66c0f4",e.Discord="#7289DA",e["Google Maps API"]="#4285F4",e["Google Cloud Platform"]="#4285F4",e["AWS EC2"]="#FF9900",e["AWS S3"]="#FF9900"}(a||(a={}));var c=a;n("w/Ym"),t.a=function(e){var t=e.tag;return l.createElement("span",{className:"project-language"},l.createElement("span",{className:"project-language-badge",style:{backgroundColor:c[t]||"#ccc"}}),t)}},J0pQ:function(e,t,n){},LiQr:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return r}));var a=n("q1tI"),l=n("DmXo"),c=n("t+iR"),r=(n("Ts3z"),n("nroF"),function(e){var t=e.data;return a.createElement("a",{className:"badge-external noLint",href:t.link,title:t.type,target:"_blank"},a.createElement("span",{className:"badge badge-external-icon",style:{backgroundColor:t.image.background||"#FFFFFF"}},a.createElement(c.a,{className:"badge-image badge-external-icon-image",src:t.image.src})),a.createElement("span",{className:"badge-external-text"},a.createElement("h6",null,a.createElement("span",{className:"lint"},t.type)),a.createElement("span",{className:"lint"},t.external_id)))}),m=function(e){var t=e.data;return a.createElement("a",{className:"badge badge-external-small noLintAbsolute",style:{backgroundColor:t.image.background||"#FFFFFF"},href:t.link,title:t.type,target:"_blank"},a.createElement(l.a,{className:"badge-external-small-image",src:t.image.src}),a.createElement("span",{className:"badge-external-small-id",style:{color:t.image.background?"#FFFFFF":"#000000"}},t.external_id))}},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n("Wbzz"),c=n("9Dj+"),r=n("H8eV"),m=n("t+iR"),s=(n("ka4r"),function(e){var t=e.data;return a.createElement("div",{className:"badge badge-lang",style:{backgroundColor:t.image.background||"#FFFFFF"},title:t.name},a.createElement(m.a,{className:"badge-image badge-lang-image",src:t.image.src}))}),i=n("LiQr"),u=n("CLmH"),o=n("u4M0");n("EDuE"),t.default=function(){var e,t,n,m=Object(l.useStaticQuery)("4100466924"),E=m.allProjectsJson.nodes,d=m.allLanguagesJson.group,p=m.allLinksJson.nodes,v={},g={};return d.forEach((function(e){v[e.fieldValue]=e.nodes})),p.forEach((function(e){g[e.type]=e})),a.createElement(c.a,null,a.createElement(r.a,{title:"Home"}),a.createElement("section",{className:"title",id:"title",style:{width:"100%",height:"100vh"}},a.createElement("div",null,a.createElement("h1",null,a.createElement("span",null,"Learn, Find, Figure Out")),a.createElement("p",{className:"title-name"},"STARTERGATE / 최호승"),a.createElement("p",null,"백엔드 엔지니어"),a.createElement("p",null,"게임 개발자"),a.createElement("p",null,"3학년 고등학생 @"," ",a.createElement("a",{href:"https://gsm.gen.hs.kr",target:"_blank"},"광주소프트웨어마이스터고등학교")))),a.createElement("section",{id:"backend-dev"},a.createElement("h2",null,"Backend Engineer"),a.createElement("div",{className:"section-main"},a.createElement("p",{className:"section-punchline"},"백엔드 엔지니어입니다. 눈에 보이지 않는 걸 만듭니다."),a.createElement("br",null),"서버에서 돌아가는 프로그램을 만듭니다. 직접 해야할 때는 모바일 앱이나 웹 앱도 직접 만듭니다.",a.createElement("br",null),"컴퓨터에는 항상 관심이 많았습니다. 초등학교 때에는 컴퓨터 방과후를 다녔고, 중학교 때에"," ",a.createElement("a",{href:"https://opentutorials.org/course/1",target:"_blank"},"생활코딩"),"으로 코딩을 시작했습니다.",a.createElement("br",null),"코딩에 관심이 많아져서 고등학교는 소프트웨어마이스터고로 진학했습니다.",a.createElement("br",null),"항상 변화하며 새로운 것을 시도합니다. 새로운 것은 항상 더 나은 것이라 생각합니다."),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,a.createElement("a",{href:"http://gsm.gen.hs.kr/sub/page.php?page_code=info_06#department01",className:"cv-item-title",title:"광주소프트웨어마이스터고등학교 소프트웨어개발과",target:"_blank"},a.createElement("span",{className:"lint"},"광주소프트웨어마이스터고등학교 소프트웨어개발과"))),a.createElement("span",null,"HTTP, TCP 같은 웹 이론 및 HTML & CSS 학습"),a.createElement("br",null),a.createElement("span",null,"과목 산출물 프로젝트 진행"),a.createElement("br",null),a.createElement("span",null,"웹 개발 동아리 빈실 부장")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"Node.js"),a.createElement("span",null,"Node.js 8부터 시작"),a.createElement("br",null),a.createElement("span",null,"TypeScript와 함께 가장 많이 사용중"),a.createElement("br",null),a.createElement("span",null,"Express와 Koa 사용 중")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"Python"),a.createElement("span",null,"Django와 챗봇 개발을 위해 사용"),a.createElement("br",null),a.createElement("span",null,"알고리즘 문제 해결을 위해 사용"),a.createElement("br",null),a.createElement("span",null,"파이썬 백엔드 개발 현장실습 경험, 배포된 코드 작성 경험")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"빈실"),a.createElement("span",null,"학교 내부에서 사용되는 서비스를 개발하는 동아리"),a.createElement("br",null),a.createElement("span",null,"TypeScript, Node.js, Koa.js 사용"),a.createElement("br",null),a.createElement("span",null,"테스팅, 문서화, 스프린트 개발 경험"))),a.createElement("section",{id:"game-dev"},a.createElement("h2",null,"Game Developer"),a.createElement("div",{className:"section-main"},a.createElement("p",{className:"section-punchline"},"인디 게임 개발자입니다. 경험을 만듭니다."),a.createElement("br",null),"다양한 장르의 게임을 만듭니다. 플랫포머 게임을 출시해봤고, 여러 프로젝트를 준비하고 있습니다.",a.createElement("br",null),"대부분의 10대 남학생이 그렇듯, 게임을 좋아합니다. 초등학생 때는 넥슨 게임을 해왔고, 중학교 이후로는 패키지 게임에 빠졌습니다.",a.createElement("br",null),"여러 게임을 해보다 보니 직접 만들어보고 싶다는 생각이 들었습니다. 그래서 고등학교 1학년에 유니티 방과후를 들었습니다.",a.createElement("br",null),"방과후에서 배운 지식을 바탕으로 고2 때에 Tiny Beluga라는 동아리를 만들고, 친구들과 함께 Lost라는 게임을 개발하고 출시했습니다.",a.createElement("br",null),"여러 장르를 시도합니다. 처음으로 출시해본 게임은 2D 플랫포머였고, 좋은 아이디어만 있다면 다양하게 만들어보고 있습니다."),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"Unity"),a.createElement("span",null,"게임 개발 동아리 Tiny Beluga에서 사용 중"),a.createElement("br",null),a.createElement("span",null,"개발한 게임 Steam 출시 경험"),a.createElement("br",null),a.createElement("span",null,"Unity Teams 활용한 협업 경험")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"Unreal Engine"),a.createElement("span",null,"게임 프로토타입 개발에 사용 중"),a.createElement("br",null),a.createElement("span",null,"언리얼 엔진과 서버를 연결하여 통계 내주는 서비스 개발"),a.createElement("br",null),a.createElement("span",null,"열심히 공부 중...")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"Tiny Beluga"),a.createElement("span",null,"인디 게임 개발 동아리"),a.createElement("br",null),a.createElement("span",null,"Unity 사용한 2D 플랫포머 게임 개발 / 출시 경험"),a.createElement("br",null),a.createElement("span",null,"차기작 얼심히 구상중..."))),a.createElement("section",{id:"project"},a.createElement("div",{className:"page-title"},a.createElement("h2",null,"Project Highlights"),a.createElement(i.b,{data:g.GitHub})),a.createElement("div",{className:"list"},E.map((function(e){return a.createElement(u.a,{data:e})}))),a.createElement(l.Link,{to:"/projects/"},"See More...")),a.createElement("section",{id:"cv-technologies"},a.createElement("div",{className:"page-title"},a.createElement("h2",null,"Technologies"),a.createElement(i.b,{data:g.StackShare})),a.createElement("div",{id:"cv-languages-using"},a.createElement("h4",null,"Using"),a.createElement("div",{className:"list"},null===(e=v.using)||void 0===e?void 0:e.map((function(e){return a.createElement(s,{data:e})})))),a.createElement("div",{id:"cv-languages-learned"},a.createElement("h4",null,"Learned / Used"),a.createElement("div",{className:"list"},null===(t=v.learned)||void 0===t?void 0:t.map((function(e){return a.createElement(s,{data:e})})))),a.createElement("div",{id:"cv-languages-learning"},a.createElement("h4",null,"Learning / Interested"),a.createElement("div",{className:"list"},null===(n=v.learning)||void 0===n?void 0:n.map((function(e){return a.createElement(s,{data:e})}))))),a.createElement("section",{id:"cv"},a.createElement("h2",null,"Résumé"),a.createElement("section",{id:"cv-education"},a.createElement("h3",null,"Education"),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,a.createElement("a",{href:"https://gsm.gen.hs.kr",className:"cv-item-title",title:"광주소프트웨어마이스터고등학교"},a.createElement("span",{className:"lint"},"광주소프트웨어마이스터고등학교"))),a.createElement("span",null,"광주광역시"),a.createElement("span",null,"2018.03 ~ 2021.01"),a.createElement("br",null),a.createElement("span",null,"소프트웨어개발과"))),a.createElement("section",{id:"cv-experiences"},a.createElement("h3",null,"Experiences"),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,a.createElement("a",{href:"https://www.peoplefund.co.kr",className:"cv-item-title",title:"피플펀드컴퍼니",target:"_blank"},a.createElement("span",{className:"lint"},"피플펀드컴퍼니"))),a.createElement("span",null,"서울특별시"),a.createElement("span",null,"2020.01 ~ 2020.02"),a.createElement("br",null),a.createElement("span",null,"백엔드 엔지니어 (현장실습)"),a.createElement("br",null),a.createElement("span",null,"계정 인증 미들웨어 및 일부 기능 리팩토링"))),a.createElement("section",{id:"cv-activities"},a.createElement("div",{className:"page-title"},a.createElement("h3",null,"Activities"),a.createElement(i.b,{data:{type:"GitHub",link:"https://github.com/startergate/Conferences",external_id:"Conferences",image:{src:"externals/github.png",background:"#24292e"}}})),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"글로벌 비즈쿨 CO-TDM 창업경진대회"),a.createElement("span",null,"2018.6"),a.createElement("span",null,"최우수상"),a.createElement("br",null),a.createElement("span",null,"E-Faucet: 스마트 수도꼭지")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"GSM 창의알고리즘 콘테스트"),a.createElement("span",null,"2018.4"),a.createElement("span",null,"장려상"),a.createElement("br",null),a.createElement("span",null,"M2C: Modular Multi Camera")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"GSM 팀프로젝트발표회"),a.createElement("span",null,"2020.9"),a.createElement("span",null,"장려상"),a.createElement("br",null),a.createElement("span",null,"Eliverd")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"정보처리기능사"),a.createElement("span",null,"2019.3"),a.createElement("span",null,"한국산업인력공단")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,"TOEIC"),a.createElement("span",null,"2018.8"),a.createElement("span",null,"865점"))),a.createElement("section",{id:"cv-group-activities"},a.createElement("h3",null,"Group Activities"),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,a.createElement("a",{href:"https://github.com/BeanSil",className:"cv-item-title",title:"빈실"},a.createElement("span",{className:"lint"},"빈실"))),a.createElement("span",null,"광주소프트웨어마이스터고등학교"),a.createElement("span",null,"웹 개발 동아리"),a.createElement("br",null),a.createElement("span",null,"동아리원"),a.createElement("span",null,"2018.3 ~ 2020.8"),a.createElement("br",null),a.createElement("span",null,"부장"),a.createElement("span",null,"2020.1 ~ 2020.8"),a.createElement("br",null),a.createElement("span",null,"프로젝트: DOTORI")),a.createElement("div",{className:"cv-item"},a.createElement("h5",null,a.createElement("a",{href:"https://github.com/tiny-beluga",className:"cv-item-title",title:"Tiny Beluga"},a.createElement("span",{className:"lint"},"Tiny Beluga"))),a.createElement("span",null,"광주소프트웨어마이스터고등학교"),a.createElement("span",null,"게임 개발 동아리"),a.createElement("br",null),a.createElement("span",null,"동아리원"),a.createElement("span",null,"2019.3 ~ "),a.createElement("br",null),a.createElement("span",null,"부장"),a.createElement("span",null,"2019.3 ~ "),a.createElement("br",null),a.createElement("span",null,"프로젝트: Lost"))),a.createElement("a",{href:"/cv.pdf",download:!0},"Download CV as PDF")),a.createElement("section",{id:"link"},a.createElement("h2",null,"Links"),a.createElement("div",{className:"list"},p.map((function(e){return a.createElement(i.a,{data:e})})))),a.createElement(o.a,{data:E}))}},Ts3z:function(e,t,n){},ka4r:function(e,t,n){},nroF:function(e,t,n){},ptct:function(e,t,n){},"t+iR":function(e,t,n){"use strict";var a=n("zLVn"),l=n("q1tI"),c=n("Wbzz"),r=n("9eSz"),m=n.n(r);t.a=function(e){var t=e.src,n=Object(a.a)(e,["src"]),r=Object(c.useStaticQuery)("2663935865"),s=l.useMemo((function(){return r.allFile.edges.find((function(e){var n=e.node;return t===n.relativePath}))}),[r,t]);return l.createElement(m.a,Object.assign({fluid:s.node.childImageSharp.fluid},n))}},u4M0:function(e,t,n){"use strict";var a=n("q1tI"),l=n("zLVn"),c=n("Wbzz"),r=n("9eSz"),m=n.n(r),s=function(e){var t=e.src,n=Object(l.a)(e,["src"]),r=Object(c.useStaticQuery)("1524446316"),s=a.useMemo((function(){return r.allFile.edges.find((function(e){var n=e.node;return t===n.relativePath}))}),[r,t]);return s?a.createElement(m.a,Object.assign({fluid:s.node.childImageSharp.fluid},n)):null},i=n("HLd5"),u=(n("J0pQ"),n("ptct"),function(e){var t,n=e.data;return a.createElement("div",{className:"overlay-item project-detail",id:"overlay-"+n.id},a.createElement("div",{className:"project-detail-title"},a.createElement(s,{className:"project-detail-icon",src:n.imgSrc}),a.createElement("h2",{className:"project-detail-name"},n.name),a.createElement("div",{className:"project-card-description"},n.description),a.createElement("div",{className:"project-card-tags"},n.tags.map((function(e){return a.createElement(i.a,{tag:e})}))),a.createElement("span",{className:"project-detail-exit",onClick:function(){document.querySelector(".project-overlay").dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))}},a.createElement("svg",{viewBox:"0 0 12 12",version:"1.1"},a.createElement("line",{x1:"1",y1:"11",x2:"11",y2:"1",strokeWidth:"1"}),a.createElement("line",{x1:"1",y1:"1",x2:"11",y2:"11",strokeWidth:"1"})))),n.contents?a.createElement("div",{className:"project-detail-content"},null===(t=n.contents)||void 0===t?void 0:t.map((function(e){var t=e.title,n=e.text;return a.createElement("div",{className:"project-detail-content-item"},a.createElement("h5",null,t),n)}))):null)});t.a=function(e){var t=e.data;return document.addEventListener("keydown",(function(e){27!=e.keyCode&&27!=e.which||document.querySelector(".project-overlay").dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))})),a.createElement("div",{className:"project-overlay",onClick:function(e){e.target===e.currentTarget&&(e.currentTarget.classList.remove("active"),document.querySelector("body").classList.remove("disabled"),document.querySelectorAll(".overlay-item").forEach((function(e){e.classList.remove("active")})))}},t.map((function(e){return a.createElement(u,{data:e})})))}},"w/Ym":function(e,t,n){},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ee14417468b83b0adff9.js.map