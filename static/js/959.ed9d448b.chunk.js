"use strict";(self.webpackChunkagency_website=self.webpackChunkagency_website||[]).push([[959],{5959:function(n,e,r){function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o,a,c=[],l=!0,s=!1;try{if(o=(r=r.call(n)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=o.call(r)).done)&&(c.push(t.value),c.length!==e);l=!0);}catch(d){s=!0,i=d}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(n,e)||function(n,e){if(n){if("string"===typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e),r.d(e,{default:function(){return j}});var o,a,c,l,s,d,u=r(168),h=r(5331),m=r(1681),f=r(2791),p=r(2978),g=r(184),b=p.ZP.header(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 5rem;\n  background-color: var(--nav);\n  color: var(--white);\n  position: relative;\n  z-index: 500;\n  @media only Screen and (max-width: 64em) {\n    padding: 0.5rem 3rem;\n  }\n  @media only Screen and (max-width: 40em) {\n    padding: 0.5rem 1.5rem;\n  }\n"]))),x=p.ZP.a(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 2rem;\n  height: auto;\n  cursor: pointer;\n  img {\n    margin-right: 0.5rem;\n  }\n"]))),w=p.ZP.nav(c||(c=(0,u.Z)(['\n  width: 25rem;\n  max-width: 40rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s;\n  @media only Screen and (max-width: 48em) {\n    display: none;\n  }\n  a {\n    font-weight: 600;\n    line-height: 1.5;\n    color: var(--white);\n    &::after {\n      content: "";\n      display: block;\n      height: 3px;\n      width: 0;\n      background: transparent;\n      transition: width 0.5s;\n    }\n    &:not(:last-child):hover::after {\n      width: 100%;\n      background: var(--purple);\n    }\n    /* &:not(:last-child) {\n      margin-right: 2rem;\n    } */\n    /* @media only Screen and (max-width: 48em) {\n      &:not(:last-child) {\n        margin-right: 1rem;\n      }\n    } */\n  }\n']))),y=p.ZP.button(l||(l=(0,u.Z)(["\n  background-color: var(--purple);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  color: var(--white);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:focus {\n    transform: scale(0.9);\n  }\n  @media only Screen and (max-width: 40em) {\n    font-size: 1.2rem;\n    &:hover {\n      transform: none;\n    }\n    &:focus {\n      transform: none;\n    }\n  }\n"]))),v=p.ZP.button(s||(s=(0,u.Z)(['\n  display: none;\n  @media only Screen and (max-width: 48em) {\n    display: inline-block;\n  }\n  position: relative;\n  background-color: transparent;\n  width: 2rem;\n  height: 2px;\n  margin-top: 0rem;\n  transition: all 0.3s;\n  cursor: pointer;\n  &::before,\n  &::after {\n    content: "";\n    background-color: var(--white);\n    width: 2rem;\n    height: 2px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n\n    transition: all 0.3s;\n  }\n  &::before {\n    top: ',";\n    transform: ",";\n  }\n  &::after {\n    top: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.clicked?"0":"-0.5rem"}),(function(n){return n.clicked?"rotate(135deg)":"rotate(0)"}),(function(n){return n.clicked?"0":"0.5rem"}),(function(n){return n.clicked?"rotate(-135deg)":"rotate(0)"})),k=p.ZP.nav(d||(d=(0,u.Z)(["\n  display: none;\n  @media only Screen and (max-width: 48em) {\n    display: flex;\n  }\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  overflow-x: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  opacity: ",";\n  visibility: ",";\n  transition: all 0.5s;\n  z-index: -10;\n  background-color: rgb(53 53 63 / 95%);\n  border-radius: 20px;\n  margin: 0.5rem;\n  a {\n    color: var(--white);\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin: 1.5rem;\n    cursor: pointer;\n  }\n"])),(function(n){return n.clicked?"1":0}),(function(n){return n.clicked?"visible":"hidden"})),j=function(){var n=i((0,f.useState)(!1),2),e=n[0],r=n[1],t=(0,f.useRef)(null);h.p8.registerPlugin(m.i);var o=function(n,e){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},a=function(n,t){r(!e),o(n,t)};return(0,f.useEffect)((function(){var n=t.current;window.matchMedia("(max-width: 40em)").matches?h.p8.to(n,{position:"fixed",top:"0",left:"0",right:"0",padding:"1rem 2.5rem",borderRadius:"0 0 50px 50px",border:"2px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=200 top",end:"+=100",scrub:!0}}):h.p8.to(n,{position:"fixed",top:"1rem",left:"3rem",right:"3rem",padding:"1.5rem 2rem",borderRadius:"50px",border:"3px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=300 top",end:"+=250",scrub:!0}})}),[]),(0,g.jsxs)(b,{ref:t,children:[(0,g.jsxs)(x,{children:[(0,g.jsx)("img",{src:"kinhublogo.png",alt:"KinHub"}),(0,g.jsx)("h3",{children:"InfoTech"})]}),(0,g.jsxs)(w,{children:[(0,g.jsx)("a",{href:"#home",onClick:function(n){return o("home",n)},children:"Home"}),(0,g.jsx)("a",{href:"#about",onClick:function(n){return o("about",n)},children:"About Us"}),(0,g.jsx)("a",{href:"#services",onClick:function(n){return o("services",n)},children:"Products"}),(0,g.jsx)("a",{href:"#contact",onClick:function(n){return o("contact",n)},children:(0,g.jsx)(y,{children:"Contact Us"})})]}),(0,g.jsx)(v,{clicked:+e,onClick:function(){return r(!e)},children:(0,g.jsx)("span",{})}),(0,g.jsxs)(k,{clicked:+e,children:[(0,g.jsx)("a",{href:"#home",onClick:function(n){return a("home",n)},children:"Home"}),(0,g.jsx)("a",{href:"#about",onClick:function(n){return a("about",n)},children:"About Us"}),(0,g.jsx)("a",{href:"#services",onClick:function(n){return a("services",n)},children:"Services"}),(0,g.jsx)("a",{href:"#contact",onClick:function(n){return a("contact",n)},children:(0,g.jsx)(y,{children:"Contact Us"})})]})]})}}}]);
//# sourceMappingURL=959.ed9d448b.chunk.js.map