(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/mF+":function(e,t,a){},CLmH:function(e,t,a){"use strict";var n=a("q1tI"),l=a("DmXo"),c=a("HLd5"),r=(a("/mF+"),function(e){var t=document.querySelector("body"),a=document.querySelector(".project-overlay"),n=document.getElementById("overlay-"+e.currentTarget.id);t.classList.add("disabled"),a.classList.add("active"),n.classList.add("active")});t.a=function(e){var t=e.data;return n.createElement("div",{className:"project-card",id:t.id,onClick:r},n.createElement("div",{className:"project-card-name"},n.createElement(l.a,{className:"project-card-badge",src:t.imgSrc}),t.name),n.createElement("div",{className:"project-card-description"},t.description),n.createElement("div",{className:"project-card-tags"},n.createElement(c.a,{tag:t.tags[0]})))}},DmXo:function(e,t,a){"use strict";var n=a("zLVn"),l=a("q1tI"),c=a("Wbzz"),r=a("9eSz"),i=a.n(r);t.a=function(e){var t=e.src,a=Object(n.a)(e,["src"]),r=Object(c.useStaticQuery)("3309047460"),s=l.useMemo((function(){return r.allFile.edges.find((function(e){var a=e.node;return t===a.relativePath}))}),[r,t]);return s?l.createElement(i.a,Object.assign({fluid:s.node.childImageSharp.fluid},a)):l.createElement("svg",{className:"project-card-badge",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},l.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}))}},EDuE:function(e,t,a){},HLd5:function(e,t,a){"use strict";var n,l=a("q1tI");!function(e){e.Python="#3572A5",e.TypeScript="#2B7489",e.JavaScript="#F1E05A"}(n||(n={}));var c=n;a("w/Ym"),t.a=function(e){var t=e.tag;return l.createElement("span",{className:"project-language"},l.createElement("span",{className:"project-language-badge",style:{backgroundColor:c[t]||"#ccc"}}),t)}},J0pQ:function(e,t,a){},LiQr:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a("q1tI"),l=a("DmXo"),c=a("t+iR"),r=(a("Ts3z"),a("nroF"),function(e){var t=e.data;return n.createElement("a",{className:"badge-external noLint",href:t.link,title:t.type,target:"_blank"},n.createElement("span",{className:"badge badge-external-icon",style:{backgroundColor:t.image.background||"#FFFFFF"}},n.createElement(c.a,{className:"badge-image badge-external-icon-image",src:t.image.src})),n.createElement("span",{className:"badge-external-text"},n.createElement("h6",null,n.createElement("span",{className:"lint"},t.type)),n.createElement("span",{className:"lint"},t.external_id)))}),i=function(e){var t=e.data;return n.createElement("a",{className:"badge badge-external-small noLintAbsolute",style:{backgroundColor:t.image.background||"#FFFFFF"},href:t.link,title:t.type,target:"_blank"},n.createElement(l.a,{className:"badge-external-small-image",src:t.image.src}),n.createElement("span",{className:"badge-external-small-id",style:{color:t.image.background?"#FFFFFF":"#000000"}},t.external_id))}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a("Wbzz"),c=a("9Dj+"),r=a("H8eV"),i=a("t+iR"),s=(a("ka4r"),function(e){var t=e.data;return n.createElement("div",{className:"badge badge-lang",style:{backgroundColor:t.image.background||"#FFFFFF"},title:t.name},n.createElement(i.a,{className:"badge-image badge-lang-image",src:t.image.src}))}),m=a("LiQr"),u=a("CLmH"),o=a("u4M0");a("EDuE"),t.default=function(){var e,t,a,i=Object(l.useStaticQuery)("1977225763"),d=i.allProjectsJson.nodes,E=i.allLanguagesJson.group,v=i.allLinksJson.nodes,p={},g={};return E.forEach((function(e){p[e.fieldValue]=e.nodes})),v.forEach((function(e){g[e.type]=e})),n.createElement(c.a,null,n.createElement(r.a,{title:"Home"}),n.createElement("section",{className:"title",id:"title",style:{width:"100%",height:"100vh"}},n.createElement("div",null,n.createElement("h1",null,n.createElement("span",null,"Learn, Find, Figure Out")),n.createElement("p",{className:"title-name"},"STARTERGATE / 최호승"),n.createElement("p",null,"백엔드 엔지니어"),n.createElement("p",null,"게임 개발자"),n.createElement("p",null,"3학년 고등학생 @"," ",n.createElement("a",{href:"https://gsm.gen.hs.kr"},"광주소프트웨어마이스터고등학교")))),n.createElement("section",{id:"backend-dev"},n.createElement("h2",null,"Backend Engineer"),"백엔드 엔지니어입니다. 눈에 보이지 않는 걸 만듭니다.",n.createElement("br",null),"서버에서 돌아가는 프로그램을 만듭니다. 직접 해야할 때는 모바일 앱이나 웹 앱도 직접 만듭니다.",n.createElement("br",null),"컴퓨터에는 항상 관심이 많았습니다. 초등학교 때에는 컴퓨터 방과후를 다녔고, 중학교 때에"," ",n.createElement("a",{href:"https://opentutorials.org/course/1"},"생활코딩"),"으로 코딩을 시작했습니다.",n.createElement("br",null),"코딩에 관심이 많아져서 고등학교는 소프트웨어마이스터고로 진학했습니다.",n.createElement("br",null),"항상 변화하며 새로운 것을 시도합니다. 새로운 것은 항상 더 나은 것이라 생각합니다."),n.createElement("section",{id:"game-dev"},n.createElement("h2",null,"Game Developer"),"인디 게임 개발자입니다. 경험을 만듭니다.",n.createElement("br",null),"다양한 장르의 게임을 만듭니다. 플랫포머 게임을 출시해봤고, 여러 프로젝트를 준비하고 있습니다.",n.createElement("br",null),"대부분의 10대 남학생이 그렇듯, 게임을 좋아합니다. 초등학생 때는 넥슨 게임을 해왔고, 중학교 이후로는 패키지 게임에 빠졌습니다.",n.createElement("br",null),"여러 게임을 해보다 보니 직접 만들어보고 싶다는 생각이 들었습니다. 그래서 고등학교 1학년에 유니티 방과후를 들었습니다.",n.createElement("br",null),"방과후에서 배운 지식을 바탕으로 고2 때에 Tiny Beluga라는 동아리를 만들고, 친구들과 함께 Lost라는 게임을 개발하고 출시했습니다.",n.createElement("br",null),"여러 장르를 시도합니다. 처음으로 출시해본 게임은 2D 플랫포머였고, 좋은 아이디어만 있다면 다양하게 만들어보고 있습니다."),n.createElement("section",{id:"project"},n.createElement("h2",null,"Project Highlights"),n.createElement(m.b,{data:g.GitHub}),n.createElement("div",{className:"list"},d.map((function(e){return n.createElement(u.a,{data:e})}))),n.createElement(l.Link,{to:"/projects/"},"See More...")),n.createElement("section",{id:"link"},n.createElement("h2",null,"Links"),n.createElement("div",{className:"list"},v.map((function(e){return n.createElement(m.a,{data:e})})))),n.createElement("section",{id:"cv-languages"},n.createElement("h2",null,"Languages"),n.createElement(m.b,{data:g.StackShare}),n.createElement("div",{id:"cv-languages-using"},n.createElement("h4",null,"Using"),n.createElement("div",{className:"list"},null===(e=p.using)||void 0===e?void 0:e.map((function(e){return n.createElement(s,{data:e})})))),n.createElement("div",{id:"cv-languages-learned"},n.createElement("h4",null,"Learned / Used"),n.createElement("div",{className:"list"},null===(t=p.learned)||void 0===t?void 0:t.map((function(e){return n.createElement(s,{data:e})})))),n.createElement("div",{id:"cv-languages-learning"},n.createElement("h4",null,"Learning / Interested"),n.createElement("div",{className:"list"},null===(a=p.learning)||void 0===a?void 0:a.map((function(e){return n.createElement(s,{data:e})}))))),n.createElement("section",{id:"cv"},n.createElement("h2",null,"Curriculum Vitae"),n.createElement("section",{id:"cv-education"},n.createElement("h3",null,"Education"),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,n.createElement("a",{href:"https://gsm.gen.hs.kr",className:"cv-item-title",title:"광주소프트웨어마이스터고등학교"},n.createElement("span",{className:"lint"},"광주소프트웨어마이스터고등학교"))),n.createElement("span",null,"광주광역시"),n.createElement("span",null,"2018.03 ~ 2021.01"),n.createElement("br",null),n.createElement("span",null,"소프트웨어개발과"))),n.createElement("section",{id:"cv-experiences"},n.createElement("h3",null,"Experiences"),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,n.createElement("a",{href:"https://www.peoplefund.co.kr",className:"cv-item-title",title:"피플펀드컴퍼니"},n.createElement("span",{className:"lint"},"피플펀드컴퍼니"))),n.createElement("span",null,"서울특별시"),n.createElement("span",null,"2020.01 ~ 2020.02"),n.createElement("br",null),n.createElement("span",null,"백엔드 엔지니어 (현장실습)"),n.createElement("br",null),n.createElement("span",null,"계정 인증 미들웨어 및 일부 기능 리팩토링"))),n.createElement("section",{id:"cv-activities"},n.createElement("h3",null,"Activities"),n.createElement(m.b,{data:{type:"GitHub",link:"https://github.com/startergate/Conferences",external_id:"Conferences",image:{src:"externals/github.png",background:"#24292e"}}}),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,"글로벌 비즈쿨 CO-TDM 창업경진대회"),n.createElement("span",null,"2018.6"),n.createElement("span",null,"최우수상"),n.createElement("br",null),n.createElement("span",null,"E-Faucet: 스마트 수도꼭지")),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,"GSM 창의알고리즘 콘테스트"),n.createElement("span",null,"2018.4"),n.createElement("span",null,"장려상"),n.createElement("br",null),n.createElement("span",null,"M2C: Modular Multi Camera")),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,"GSM 팀프로젝트발표회"),n.createElement("span",null,"2020.9"),n.createElement("span",null,"장려상"),n.createElement("br",null),n.createElement("span",null,"Eliverd")),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,"정보처리기능사"),n.createElement("span",null,"2019.3"),n.createElement("span",null,"한국산업인력공단")),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,"TOEIC"),n.createElement("span",null,"2018.8"),n.createElement("span",null,"865점"))),n.createElement("section",{id:"cv-group-activities"},n.createElement("h3",null,"Group Activities"),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,n.createElement("a",{href:"https://github.com/BeanSil",className:"cv-item-title",title:"빈실"},n.createElement("span",{className:"lint"},"빈실"))),n.createElement("span",null,"광주소프트웨어마이스터고등학교"),n.createElement("span",null,"웹 개발 동아리"),n.createElement("br",null),n.createElement("span",null,"동아리원"),n.createElement("span",null,"2018.3 ~ 2020.8"),n.createElement("br",null),n.createElement("span",null,"부장"),n.createElement("span",null,"2020.1 ~ 2020.8"),n.createElement("br",null),n.createElement("span",null,"프로젝트: DOTORI")),n.createElement("div",{className:"cv-item"},n.createElement("h6",null,n.createElement("a",{href:"https://github.com/tiny-beluga",className:"cv-item-title",title:"Tiny Beluga"},n.createElement("span",{className:"lint"},"Tiny Beluga"))),n.createElement("span",null,"광주소프트웨어마이스터고등학교"),n.createElement("span",null,"게임 개발 동아리"),n.createElement("br",null),n.createElement("span",null,"동아리원, 2019.3 ~ "),n.createElement("br",null),n.createElement("span",null,"부장, 2019.3 ~ "),n.createElement("br",null),n.createElement("span",null,"프로젝트: Lost"))),n.createElement("a",{href:"/cv.pdf",download:!0},"Download CV as PDF")),n.createElement(o.a,{data:d}))}},Ts3z:function(e,t,a){},ka4r:function(e,t,a){},nroF:function(e,t,a){},ptct:function(e,t,a){},"t+iR":function(e,t,a){"use strict";var n=a("zLVn"),l=a("q1tI"),c=a("Wbzz"),r=a("9eSz"),i=a.n(r);t.a=function(e){var t=e.src,a=Object(n.a)(e,["src"]),r=Object(c.useStaticQuery)("2663935865"),s=l.useMemo((function(){return r.allFile.edges.find((function(e){var a=e.node;return t===a.relativePath}))}),[r,t]);return l.createElement(i.a,Object.assign({fluid:s.node.childImageSharp.fluid},a))}},u4M0:function(e,t,a){"use strict";var n=a("q1tI"),l=a("zLVn"),c=a("Wbzz"),r=a("9eSz"),i=a.n(r),s=function(e){var t=e.src,a=Object(l.a)(e,["src"]),r=Object(c.useStaticQuery)("1524446316"),s=n.useMemo((function(){return r.allFile.edges.find((function(e){var a=e.node;return t===a.relativePath}))}),[r,t]);return n.createElement(i.a,Object.assign({fluid:s.node.childImageSharp.fluid},a))},m=a("HLd5"),u=(a("J0pQ"),a("ptct"),function(e){var t,a=e.data;return n.createElement("div",{className:"overlay-item project-detail",id:"overlay-"+a.id},n.createElement("div",{className:"project-detail-title"},n.createElement(s,{className:"project-detail-icon",src:a.imgSrc}),n.createElement("h2",{className:"project-detail-name"},a.name),n.createElement("div",{className:"project-card-description"},a.description),n.createElement("div",{className:"project-card-tags"},a.tags.map((function(e){return n.createElement(m.a,{tag:e})})))),a.contents?n.createElement("div",{className:"project-detail-content"},null===(t=a.contents)||void 0===t?void 0:t.map((function(e){var t=e.title,a=e.text;return n.createElement("div",{className:"project-detail-content-item"},n.createElement("h5",null,t),a)}))):null)});t.a=function(e){var t=e.data;return n.createElement("div",{className:"project-overlay",onClick:function(e){e.currentTarget.classList.remove("active"),document.querySelector("body").classList.remove("disabled"),document.querySelectorAll(".overlay-item").forEach((function(e){e.classList.remove("active")}))}},t.map((function(e){return n.createElement(u,{data:e})})))}},"w/Ym":function(e,t,a){},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1eb9fd11b5efe637db01.js.map