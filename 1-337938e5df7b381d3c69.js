(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(M,N,e){"use strict";e.r(N),e.d(N,"graphql",function(){return g}),e.d(N,"StaticQueryContext",function(){return r}),e.d(N,"StaticQuery",function(){return u});var t=e(0),D=e.n(t),a=e(4),j=e.n(a),n=e(143),i=e.n(n);e.d(N,"Link",function(){return i.a}),e.d(N,"withPrefix",function(){return n.withPrefix}),e.d(N,"navigate",function(){return n.navigate}),e.d(N,"push",function(){return n.push}),e.d(N,"replace",function(){return n.replace}),e.d(N,"navigateTo",function(){return n.navigateTo});var T=e(148),c=e.n(T);e.d(N,"PageRenderer",function(){return c.a});var z=e(48);e.d(N,"parsePath",function(){return z.a});var r=D.a.createContext({}),u=function(M){return D.a.createElement(r.Consumer,null,function(N){return M.data||N[M.query]&&N[M.query].data?(M.render||M.children)(M.data?M.data.data:N[M.query].data):D.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:j.a.object,query:j.a.string.isRequired,render:j.a.func,children:j.a.func}},144:function(M,N,e){"use strict";var t=e(158),D=e(0),a=e.n(D),j=e(4),n=e.n(j),i=e(159),T=e.n(i),c=e(142);function z(M){var N=M.description,e=M.lang,D=M.meta,j=M.keywords,n=M.title;return a.a.createElement(c.StaticQuery,{query:r,render:function(M){var t=N||M.site.siteMetadata.description;return a.a.createElement(T.a,{htmlAttributes:{lang:e},title:n,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:n},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.site.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:t}].concat(j.length>0?{name:"keywords",content:j.join(", ")}:[]).concat(D)})},data:t})}z.defaultProps={lang:"en",meta:[],keywords:[]},z.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.array,keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},N.a=z;var r="1025518380"},145:function(M,N,e){"use strict";var t=e(155),D=e(0),a=e.n(D),j=e(4),n=e.n(j),i=e(142),T=e(156),c=e.n(T);var z=function(M){var N=M.siteTitle,e=Object(D.useState)(!1),t=e[0],j=e[1],n=t?"is-active":"";return a.a.createElement("nav",{className:"navbar is-info is-bold",role:"navigation"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(i.Link,{to:"/",className:"navbar-item"},N),a.a.createElement("button",{className:"navbar-burger burger button is-info"+n,"aria-label":"menu","aria-expanded":"false","data-target":"navbarContent",onClick:function(){j(!t)}},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{id:"navbarContent",className:"navbar-menu "+n},a.a.createElement("div",{className:"navbar-end"},a.a.createElement(i.Link,{to:"/#getting-started",className:"navbar-item"},"Getting started"),a.a.createElement(i.Link,{to:"/#features",className:"navbar-item"},"Features"),a.a.createElement(i.Link,{to:"/documentation/installation",className:"navbar-item"},"Documentation"),a.a.createElement("a",{className:"navbar-item",href:"https://github.com/genenotebook/genenotebook"},a.a.createElement("img",{src:c.a,alt:"github-icon",style:{width:40}})))))},r=(e(157),function(M){var N=M.children;return a.a.createElement(i.StaticQuery,{query:"1170628050",render:function(M){return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{siteTitle:M.site.siteMetadata.title}),a.a.createElement("div",null,N))},data:t})});r.propTypes={children:n.a.node.isRequired};N.a=r},148:function(M,N,e){var t;M.exports=(t=e(154))&&t.default||t},154:function(M,N,e){"use strict";e.r(N);e(32);var t=e(0),D=e.n(t),a=e(4),j=e.n(a),n=e(68),i=e(2),T=function(M){var N=M.location,e=i.default.getResourcesForPathnameSync(N.pathname);return D.a.createElement(n.a,Object.assign({location:N,pageResources:e},e.json))};T.propTypes={location:j.a.shape({pathname:j.a.string.isRequired}).isRequired},N.default=T},155:function(M){M.exports={data:{site:{siteMetadata:{title:"GeneNoteBook Documentation"}}}}},156:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1MHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI4LjAwMTA2LDAgQzU3LjMxNzI5MjYsMCAwLDU3LjMwNjY5NDIgMCwxMjguMDAxMDYgQzAsMTg0LjU1NTI4MSAzNi42NzYxOTk3LDIzMi41MzU1NDIgODcuNTM0OTM3LDI0OS40NjA4OTkgQzkzLjkzMjAyMjMsMjUwLjY0NTc3OSA5Ni4yODA1ODgsMjQ2LjY4NDE2NSA5Ni4yODA1ODgsMjQzLjMwMzMzMyBDOTYuMjgwNTg4LDI0MC4yNTEwNDUgOTYuMTYxODg3OCwyMzAuMTY3ODk5IDk2LjEwNjc3NywyMTkuNDcyMTc2IEM2MC40OTY3NTg1LDIyNy4yMTUyMzUgNTIuOTgyNjIwNywyMDQuMzY5NzEyIDUyLjk4MjYyMDcsMjA0LjM2OTcxMiBDNDcuMTU5OTU4NCwxODkuNTc0NTk4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IEMyNy4xNTY4Nzg1LDE3Ny42OTYxMTMgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IDM5LjY0NTgyMDYsMTc3Ljg1OTMyNSBDNTIuNDk5MzQxOSwxNzguNzYyMjkzIDU5LjI2NzM2NSwxOTEuMDQ5ODcgNTkuMjY3MzY1LDE5MS4wNDk4NyBDNzAuNjgzNzY3NSwyMTAuNjE4NDIzIDg5LjIxMTU3NTMsMjA0Ljk2MTA5MyA5Ni41MTU4Njg1LDIwMS42OTA0ODIgQzk3LjY2NDcxNTUsMTkzLjQxNzUxMiAxMDAuOTgxOTU5LDE4Ny43NzA3OCAxMDQuNjQyNTgzLDE4NC41NzQzNTcgQzc2LjIxMTc5OSwxODEuMzM3NjYgNDYuMzI0ODE5LDE3MC4zNjIxNDQgNDYuMzI0ODE5LDEyMS4zMTU3MDIgQzQ2LjMyNDgxOSwxMDcuMzQwODg5IDUxLjMyNTA1ODgsOTUuOTIyMzY4MiA1OS41MTMyNDM3LDg2Ljk1ODM5MzcgQzU4LjE4NDIyNjgsODMuNzM0NDE1MiA1My44MDI5MjI5LDcwLjcxNTU2MiA2MC43NTMyMzU0LDUzLjA4NDM2MzYgQzYwLjc1MzIzNTQsNTMuMDg0MzYzNiA3MS41MDE5NTAxLDQ5LjY0NDE4MTMgOTUuOTYyNjQxMiw2Ni4yMDQ5NTk1IEMxMDYuMTcyOTY3LDYzLjM2ODg3NiAxMTcuMTIzMDQ3LDYxLjk0NjU5NDkgMTI4LjAwMTA2LDYxLjg5Nzg0MzIgQzEzOC44NzkwNzMsNjEuOTQ2NTk0OSAxNDkuODM3NjMyLDYzLjM2ODg3NiAxNjAuMDY3MDMzLDY2LjIwNDk1OTUgQzE4NC40OTgwNSw0OS42NDQxODEzIDE5NS4yMzE5MjYsNTMuMDg0MzYzNiAxOTUuMjMxOTI2LDUzLjA4NDM2MzYgQzIwMi4xOTkxOTcsNzAuNzE1NTYyIDE5Ny44MTU3NzMsODMuNzM0NDE1MiAxOTYuNDg2NzU2LDg2Ljk1ODM5MzcgQzIwNC42OTQwMTgsOTUuOTIyMzY4MiAyMDkuNjYwMzQzLDEwNy4zNDA4ODkgMjA5LjY2MDM0MywxMjEuMzE1NzAyIEMyMDkuNjYwMzQzLDE3MC40Nzg3MjUgMTc5LjcxNjEzMywxODEuMzAzNzQ3IDE1MS4yMTMyODEsMTg0LjQ3MjYxNCBDMTU1LjgwNDQzLDE4OC40NDQ4MjggMTU5Ljg5NTM0MiwxOTYuMjM0NTE4IDE1OS44OTUzNDIsMjA4LjE3NjU5MyBDMTU5Ljg5NTM0MiwyMjUuMzAzMzE3IDE1OS43NDY5NjgsMjM5LjA4NzM2MSAxNTkuNzQ2OTY4LDI0My4zMDMzMzMgQzE1OS43NDY5NjgsMjQ2LjcwOTYwMSAxNjIuMDUxMDIsMjUwLjcwMDg5IDE2OC41MzkyNSwyNDkuNDQzOTQxIEMyMTkuMzcwNDMyLDIzMi40OTk1MDcgMjU2LDE4NC41MzYyMDQgMjU2LDEyOC4wMDEwNiBDMjU2LDU3LjMwNjY5NDIgMTk4LjY5MTE4NywwIDEyOC4wMDEwNiwwIFogTTQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBDNDcuNjU4NjQ2NSwxODIuOTc2MTA1IDQ2LjY1ODE3NDUsMTgzLjE2Njg3MyA0NS43NDY3Mjc3LDE4Mi43MzAyMjcgQzQ0LjgxODMyMzUsMTgyLjMxMjY1NiA0NC4yOTY4OTE0LDE4MS40NDU3MjIgNDQuNTk3ODgwOCwxODAuODA3NzEgQzQ0Ljg3MzQzNDQsMTgwLjE1MjczOSA0NS44NzYwMjYsMTc5Ljk3MDQ1IDQ2LjgwMjMxMDMsMTgwLjQwOTIxNiBDNDcuNzMyODM0MiwxODAuODI2Nzg2IDQ4LjI2Mjc0NTEsMTgxLjcwMjE5OSA0Ny45NDA1NTkzLDE4Mi4zNDAyMTIgWiBNNTQuMjM2Nzg5MiwxODcuOTU4MjU0IEM1My42MjYzMzE4LDE4OC41MjQxOTkgNTIuNDMyOTcyMywxODguMjYxMzYzIDUxLjYyMzI2ODIsMTg3LjM2Njg3NCBDNTAuNzg2MDA4OCwxODYuNDc0NTA0IDUwLjYyOTE1NTMsMTg1LjI4MTE0NCA1MS4yNDgwOTEyLDE4NC43MDY3MiBDNTEuODc3NjI1NCwxODQuMTQwNzc1IDUzLjAzNDk1MTIsMTg0LjQwNTczMSA1My44NzQzMzAyLDE4NS4yOTgxMDEgQzU0LjcxMTU4OTIsMTg2LjIwMTA2OSA1NC44NzQ4MDE5LDE4Ny4zODU5NSA1NC4yMzY3ODkyLDE4Ny45NTgyNTQgWiBNNTguNTU2MjQxMywxOTUuMTQ2MzQ3IEM1Ny43NzE5NzMyLDE5NS42OTEwOTYgNTYuNDg5NTg4NiwxOTUuMTgwMjYxIDU1LjY5Njg0MTcsMTk0LjA0MjAxMyBDNTQuOTEyNTczMywxOTIuOTAzNzY0IDU0LjkxMjU3MzMsMTkxLjUzODcxMyA1NS43MTM3OTksMTkwLjk5MTg0NSBDNTYuNTA4NjY1MSwxOTAuNDQ0OTc3IDU3Ljc3MTk3MzIsMTkwLjkzNjczNSA1OC41NzUzMTgxLDE5Mi4wNjY1MDUgQzU5LjM1NzQ2NjksMTkzLjIyMzgzIDU5LjM1NzQ2NjksMTk0LjU4ODg4IDU4LjU1NjI0MTMsMTk1LjE0NjM0NyBaIE02NS44NjEzNTkyLDIwMy40NzExNzQgQzY1LjE1OTc1NzEsMjA0LjI0NDg0NiA2My42NjU0MDgzLDIwNC4wMzcxMiA2Mi41NzE2NzE3LDIwMi45ODE1MzggQzYxLjQ1MjQ5OTksMjAxLjk0OTI3IDYxLjE0MDkxMjIsMjAwLjQ4NDU5NiA2MS44NDQ2MzQxLDE5OS43MTA5MjYgQzYyLjU1NDcxNDYsMTk4LjkzNTEzNyA2NC4wNTc1NDIyLDE5OS4xNTM0NiA2NS4xNTk3NTcxLDIwMC4yMDA1NjQgQzY2LjI3MDQ1MDYsMjAxLjIzMDcxMiA2Ni42MDk1OTM2LDIwMi43MDU5ODQgNjUuODYxMzU5MiwyMDMuNDcxMTc0IFogTTc1LjMwMjUxNTEsMjA2LjI4MTU0MiBDNzQuOTkzMDQ3NCwyMDcuMjg0MTM0IDczLjU1MzgwOSwyMDcuNzM5ODU3IDcyLjEwMzk3MjQsMjA3LjMxMzgwOSBDNzAuNjU2MjU1NiwyMDYuODc1MDQzIDY5LjcwODc3NDgsMjA1LjcwMDc2MSA3MC4wMDEyODU3LDIwNC42ODc1NzEgQzcwLjMwMjI3NSwyMDMuNjc4NjIxIDcxLjc0Nzg3MjEsMjAzLjIwMzgyIDczLjIwODMwNjksMjAzLjY1OTU0MyBDNzQuNjUzOTA0MSwyMDQuMDk2MTkgNzUuNjAzNTA0OCwyMDUuMjYxOTk0IDc1LjMwMjUxNTEsMjA2LjI4MTU0MiBaIE04Ni4wNDY5NDcsMjA3LjQ3MzYyNyBDODYuMDgyOTgwNiwyMDguNTI5MjA5IDg0Ljg1MzU4NzEsMjA5LjQwNDYyMiA4My4zMzE2ODI5LDIwOS40MjM3IEM4MS44MDEzLDIwOS40NTc2MTQgODAuNTYzNDI4LDIwOC42MDMzOTggODAuNTQ2NDcwOCwyMDcuNTY0NzcyIEM4MC41NDY0NzA4LDIwNi40OTg1OTEgODEuNzQ4MzA4OCwyMDUuNjMxNjU3IDgzLjI3ODY5MTcsMjA1LjYwNjIyMSBDODQuODAwNTk2MiwyMDUuNTc2NTQ2IDg2LjA0Njk0NywyMDYuNDI0NDAzIDg2LjA0Njk0NywyMDcuNDczNjI3IFogTTk2LjYwMjE0NzEsMjA3LjA2OTAyMyBDOTYuNzg0NDM2NiwyMDguMDk5MTcxIDk1LjcyNjczNDEsMjA5LjE1Njg3MiA5NC4yMTU0MjgsMjA5LjQzODc4NSBDOTIuNzI5NTU3NywyMDkuNzEwMDk5IDkxLjM1MzkwODYsMjA5LjA3NDIwNiA5MS4xNjUyNjAzLDIwOC4wNTI1MzggQzkwLjk4MDg1MTUsMjA2Ljk5Njk1NSA5Mi4wNTc2MzA2LDIwNS45MzkyNTMgOTMuNTQxMzgxMywyMDUuNjY1ODIgQzk1LjA1NDgwNywyMDUuNDAyOTg0IDk2LjQwOTI1OTYsMjA2LjAyMTkxOSA5Ni42MDIxNDcxLDIwNy4wNjkwMjMgWiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="},157:function(M,N,e){},158:function(M){M.exports={data:{site:{siteMetadata:{title:"GeneNoteBook Documentation",description:"GeneNoteBook is a collaborative notebook for comparative genomics",author:"@holmrenser"}}}}}}]);
//# sourceMappingURL=1-337938e5df7b381d3c69.js.map