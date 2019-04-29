(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(145),r=a(152),c=a(167),o=a(168),l=a.n(o);function d(e){return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})}function M(){return i.a.createElement(s.b,{query:"1570841572",render:d,data:c})}var u=a(169);function g(){return i.a.createElement(s.b,{query:"1505462872",render:d,data:u})}var N=a(170);function A(){return i.a.createElement(s.b,{query:"1475124929",render:d,data:N})}var m=a(171);function D(){return i.a.createElement(s.b,{query:"809416315",render:d,data:m})}var p=a(172);function f(){return i.a.createElement(s.b,{query:"1498198939",render:d,data:p})}var w=a(173);function j(){return i.a.createElement(s.b,{query:"420308604",render:d,data:w})}var E=a(174);function y(){return i.a.createElement(s.b,{query:"744597419",render:d,data:E})}var z=a(175);function T(){return i.a.createElement(s.b,{query:"1048705595",render:d,data:z})}var b=a(150);var h=function(e){var t=e.children;return i.a.createElement("blockquote",{style:{maxWidth:450,margin:"auto"}},i.a.createElement("pre",{className:"has-background-dark has-text-white is-family-monospace"},t))};function I(e){var t=e.children;return i.a.createElement("div",{className:"tile is-ancestor"},t)}function L(e){var t=e.title,a=e.image,n=e.width,s=void 0===n?4:n,r=e.children;return i.a.createElement("div",{className:"tile is-parent is-"+s},i.a.createElement("article",{className:"tile is-child box"},i.a.createElement("p",{className:"title is-4 has-text-weight-normal"},t),a,i.a.createElement("div",{style:{padding:8,textJustify:"inter-word",textAlign:"justify"}},r)))}function x(){var e=Object(n.useState)(!0),t=e[0],a=e[1];return t&&i.a.createElement("article",{className:"message is-warning",style:{maxWidth:450,margin:"auto",marginTop:12}},i.a.createElement("div",{className:"message-header"},"Additional options",i.a.createElement("button",{className:"delete","aria-label":"delete",onClick:function(){return a(!1)}})),i.a.createElement("div",{className:"message-body"},"For additional information on for instance Docker containers, loading transcriptome data, or configuring user accounts, see the ",i.a.createElement(s.a,{to:"/documentation/installation",className:"has-text-link"},"full documentation"),"."))}t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(b.a,{description:"GeneNoteBook is a collaborative notebook for comparative genomics",title:"GeneNoteBook Documentation"}),i.a.createElement("section",{id:"title",className:"hero"},i.a.createElement("div",{className:"hero-body",style:{padding:24}},i.a.createElement("div",{className:"container has-text-centered"},i.a.createElement("div",{className:"title is-size-1 has-text-weight-light"},"GeneNoteBook"),i.a.createElement("div",{className:"subtitle"},"A collaborative notebook for comparative genomics"),i.a.createElement("p",{className:"is-size-6 has-text-weight-light"},"Visit ",i.a.createElement("a",{href:"http://bioinformatics.nl/genenotebook",className:"has-text-link"},"http://bioinformatics.nl/genenotebook")," for a GeneNoteBook server running on an example dataset.")))),i.a.createElement("section",{id:"main-image",className:"hero is-light"},i.a.createElement("div",{className:"hero-body",style:{padding:24}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"box",style:{margin:"auto",maxWidth:500,padding:2}},i.a.createElement(M,null))))),i.a.createElement("section",{id:"getting-started",className:"hero"},i.a.createElement("div",{className:"hero-body",style:{padding:24}},i.a.createElement("div",{className:"container has-text-centered"},i.a.createElement("div",{className:"title is-size-2"},"Getting started"),i.a.createElement("p",{style:{paddingBottom:6}},"Install GeneNoteBook using ",i.a.createElement("a",{className:"has-text-link",href:"https://bioconda.github.io/"},"bioconda")),i.a.createElement(h,null,"> conda install -c bioconda genenotebook"),i.a.createElement("p",{style:{paddingBottom:6,paddingTop:18}},"Start a GeneNoteBook daemon on localhost:3000"),i.a.createElement(h,null,"> genenotebook run"),i.a.createElement("p",{style:{paddingBottom:6,paddingTop:18}},"Add your data"),i.a.createElement(h,null,"> genenotebook add [genome/annotation/...]"),i.a.createElement(x,null)))),i.a.createElement("section",{id:"features",className:"hero is-light"},i.a.createElement("div",{className:"hero-body",style:{padding:24}},i.a.createElement("div",{className:"container has-text-centered"},i.a.createElement("div",{className:"title is-size-2"},"Features"),i.a.createElement(I,null,i.a.createElement(L,{title:"Gene Table",image:i.a.createElement(M,null),width:8},i.a.createElement("p",null,"Quickly scroll through all genes from multiple organisms and perform custom queries. The Gene Table allows for comparative visualization of Gene Models, Protein Domains and Gene Expression.")),i.a.createElement(L,{title:"Custom queries",image:i.a.createElement(T,null)},i.a.createElement("p",null,"Any gene attribute is automatically indexed to allow efficient queries.",i.a.createElement("br",null),"Query results can be saved in several canonical file formats like fasta for coding sequences, gff3 for genome annotations and tsv for gene expression levels."))),i.a.createElement(I,null,i.a.createElement(L,{title:"Gene Models",image:i.a.createElement(g,null)},i.a.createElement("p",null,"Visualize the exon structure of predicted Gene Models. Explore predicted alternative splicing.")),i.a.createElement(L,{title:"Protein Domains",image:i.a.createElement(D,null),width:3},i.a.createElement("p",null,"Visualization of InterProScan predicted protein domains allows for quick assesment of putative protein function.",i.a.createElement("br",null),"Links to InterPro based on IDs.")),i.a.createElement(L,{title:"Orthogroups",image:i.a.createElement(A,null),width:5},i.a.createElement("p",null,"Orthogroup phylogenetic trees visualize evolutionary relationships between genes. Tree labels are hyperlinks to quickly navigate between members of an orthogroup."))),i.a.createElement(I,null,i.a.createElement(L,{title:"Expression levels",image:i.a.createElement(f,null),width:5},i.a.createElement("p",null,"Expression level barplots automatically display sample sizes of experiments, as well as error bars representing the standard error.")),i.a.createElement(L,{title:"User profiles",image:i.a.createElement(j,null),width:3},i.a.createElement("p",null,"The user profile system allows for configuration of private access to data.")),i.a.createElement(L,{title:"Version history",image:i.a.createElement(y,null)},i.a.createElement("p",null,"Every manually changed annotation is tracked in a version history system, so that at any moment unwanted changes can be reverted.")))))))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),s=a(4),r=a.n(s),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(146);var l=i.a.createContext({}),d=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},146:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),c=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{title:"GeneNoteBook Documentation"}}}}},149:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1MHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI4LjAwMTA2LDAgQzU3LjMxNzI5MjYsMCAwLDU3LjMwNjY5NDIgMCwxMjguMDAxMDYgQzAsMTg0LjU1NTI4MSAzNi42NzYxOTk3LDIzMi41MzU1NDIgODcuNTM0OTM3LDI0OS40NjA4OTkgQzkzLjkzMjAyMjMsMjUwLjY0NTc3OSA5Ni4yODA1ODgsMjQ2LjY4NDE2NSA5Ni4yODA1ODgsMjQzLjMwMzMzMyBDOTYuMjgwNTg4LDI0MC4yNTEwNDUgOTYuMTYxODg3OCwyMzAuMTY3ODk5IDk2LjEwNjc3NywyMTkuNDcyMTc2IEM2MC40OTY3NTg1LDIyNy4yMTUyMzUgNTIuOTgyNjIwNywyMDQuMzY5NzEyIDUyLjk4MjYyMDcsMjA0LjM2OTcxMiBDNDcuMTU5OTU4NCwxODkuNTc0NTk4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IEMyNy4xNTY4Nzg1LDE3Ny42OTYxMTMgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IDM5LjY0NTgyMDYsMTc3Ljg1OTMyNSBDNTIuNDk5MzQxOSwxNzguNzYyMjkzIDU5LjI2NzM2NSwxOTEuMDQ5ODcgNTkuMjY3MzY1LDE5MS4wNDk4NyBDNzAuNjgzNzY3NSwyMTAuNjE4NDIzIDg5LjIxMTU3NTMsMjA0Ljk2MTA5MyA5Ni41MTU4Njg1LDIwMS42OTA0ODIgQzk3LjY2NDcxNTUsMTkzLjQxNzUxMiAxMDAuOTgxOTU5LDE4Ny43NzA3OCAxMDQuNjQyNTgzLDE4NC41NzQzNTcgQzc2LjIxMTc5OSwxODEuMzM3NjYgNDYuMzI0ODE5LDE3MC4zNjIxNDQgNDYuMzI0ODE5LDEyMS4zMTU3MDIgQzQ2LjMyNDgxOSwxMDcuMzQwODg5IDUxLjMyNTA1ODgsOTUuOTIyMzY4MiA1OS41MTMyNDM3LDg2Ljk1ODM5MzcgQzU4LjE4NDIyNjgsODMuNzM0NDE1MiA1My44MDI5MjI5LDcwLjcxNTU2MiA2MC43NTMyMzU0LDUzLjA4NDM2MzYgQzYwLjc1MzIzNTQsNTMuMDg0MzYzNiA3MS41MDE5NTAxLDQ5LjY0NDE4MTMgOTUuOTYyNjQxMiw2Ni4yMDQ5NTk1IEMxMDYuMTcyOTY3LDYzLjM2ODg3NiAxMTcuMTIzMDQ3LDYxLjk0NjU5NDkgMTI4LjAwMTA2LDYxLjg5Nzg0MzIgQzEzOC44NzkwNzMsNjEuOTQ2NTk0OSAxNDkuODM3NjMyLDYzLjM2ODg3NiAxNjAuMDY3MDMzLDY2LjIwNDk1OTUgQzE4NC40OTgwNSw0OS42NDQxODEzIDE5NS4yMzE5MjYsNTMuMDg0MzYzNiAxOTUuMjMxOTI2LDUzLjA4NDM2MzYgQzIwMi4xOTkxOTcsNzAuNzE1NTYyIDE5Ny44MTU3NzMsODMuNzM0NDE1MiAxOTYuNDg2NzU2LDg2Ljk1ODM5MzcgQzIwNC42OTQwMTgsOTUuOTIyMzY4MiAyMDkuNjYwMzQzLDEwNy4zNDA4ODkgMjA5LjY2MDM0MywxMjEuMzE1NzAyIEMyMDkuNjYwMzQzLDE3MC40Nzg3MjUgMTc5LjcxNjEzMywxODEuMzAzNzQ3IDE1MS4yMTMyODEsMTg0LjQ3MjYxNCBDMTU1LjgwNDQzLDE4OC40NDQ4MjggMTU5Ljg5NTM0MiwxOTYuMjM0NTE4IDE1OS44OTUzNDIsMjA4LjE3NjU5MyBDMTU5Ljg5NTM0MiwyMjUuMzAzMzE3IDE1OS43NDY5NjgsMjM5LjA4NzM2MSAxNTkuNzQ2OTY4LDI0My4zMDMzMzMgQzE1OS43NDY5NjgsMjQ2LjcwOTYwMSAxNjIuMDUxMDIsMjUwLjcwMDg5IDE2OC41MzkyNSwyNDkuNDQzOTQxIEMyMTkuMzcwNDMyLDIzMi40OTk1MDcgMjU2LDE4NC41MzYyMDQgMjU2LDEyOC4wMDEwNiBDMjU2LDU3LjMwNjY5NDIgMTk4LjY5MTE4NywwIDEyOC4wMDEwNiwwIFogTTQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBDNDcuNjU4NjQ2NSwxODIuOTc2MTA1IDQ2LjY1ODE3NDUsMTgzLjE2Njg3MyA0NS43NDY3Mjc3LDE4Mi43MzAyMjcgQzQ0LjgxODMyMzUsMTgyLjMxMjY1NiA0NC4yOTY4OTE0LDE4MS40NDU3MjIgNDQuNTk3ODgwOCwxODAuODA3NzEgQzQ0Ljg3MzQzNDQsMTgwLjE1MjczOSA0NS44NzYwMjYsMTc5Ljk3MDQ1IDQ2LjgwMjMxMDMsMTgwLjQwOTIxNiBDNDcuNzMyODM0MiwxODAuODI2Nzg2IDQ4LjI2Mjc0NTEsMTgxLjcwMjE5OSA0Ny45NDA1NTkzLDE4Mi4zNDAyMTIgWiBNNTQuMjM2Nzg5MiwxODcuOTU4MjU0IEM1My42MjYzMzE4LDE4OC41MjQxOTkgNTIuNDMyOTcyMywxODguMjYxMzYzIDUxLjYyMzI2ODIsMTg3LjM2Njg3NCBDNTAuNzg2MDA4OCwxODYuNDc0NTA0IDUwLjYyOTE1NTMsMTg1LjI4MTE0NCA1MS4yNDgwOTEyLDE4NC43MDY3MiBDNTEuODc3NjI1NCwxODQuMTQwNzc1IDUzLjAzNDk1MTIsMTg0LjQwNTczMSA1My44NzQzMzAyLDE4NS4yOTgxMDEgQzU0LjcxMTU4OTIsMTg2LjIwMTA2OSA1NC44NzQ4MDE5LDE4Ny4zODU5NSA1NC4yMzY3ODkyLDE4Ny45NTgyNTQgWiBNNTguNTU2MjQxMywxOTUuMTQ2MzQ3IEM1Ny43NzE5NzMyLDE5NS42OTEwOTYgNTYuNDg5NTg4NiwxOTUuMTgwMjYxIDU1LjY5Njg0MTcsMTk0LjA0MjAxMyBDNTQuOTEyNTczMywxOTIuOTAzNzY0IDU0LjkxMjU3MzMsMTkxLjUzODcxMyA1NS43MTM3OTksMTkwLjk5MTg0NSBDNTYuNTA4NjY1MSwxOTAuNDQ0OTc3IDU3Ljc3MTk3MzIsMTkwLjkzNjczNSA1OC41NzUzMTgxLDE5Mi4wNjY1MDUgQzU5LjM1NzQ2NjksMTkzLjIyMzgzIDU5LjM1NzQ2NjksMTk0LjU4ODg4IDU4LjU1NjI0MTMsMTk1LjE0NjM0NyBaIE02NS44NjEzNTkyLDIwMy40NzExNzQgQzY1LjE1OTc1NzEsMjA0LjI0NDg0NiA2My42NjU0MDgzLDIwNC4wMzcxMiA2Mi41NzE2NzE3LDIwMi45ODE1MzggQzYxLjQ1MjQ5OTksMjAxLjk0OTI3IDYxLjE0MDkxMjIsMjAwLjQ4NDU5NiA2MS44NDQ2MzQxLDE5OS43MTA5MjYgQzYyLjU1NDcxNDYsMTk4LjkzNTEzNyA2NC4wNTc1NDIyLDE5OS4xNTM0NiA2NS4xNTk3NTcxLDIwMC4yMDA1NjQgQzY2LjI3MDQ1MDYsMjAxLjIzMDcxMiA2Ni42MDk1OTM2LDIwMi43MDU5ODQgNjUuODYxMzU5MiwyMDMuNDcxMTc0IFogTTc1LjMwMjUxNTEsMjA2LjI4MTU0MiBDNzQuOTkzMDQ3NCwyMDcuMjg0MTM0IDczLjU1MzgwOSwyMDcuNzM5ODU3IDcyLjEwMzk3MjQsMjA3LjMxMzgwOSBDNzAuNjU2MjU1NiwyMDYuODc1MDQzIDY5LjcwODc3NDgsMjA1LjcwMDc2MSA3MC4wMDEyODU3LDIwNC42ODc1NzEgQzcwLjMwMjI3NSwyMDMuNjc4NjIxIDcxLjc0Nzg3MjEsMjAzLjIwMzgyIDczLjIwODMwNjksMjAzLjY1OTU0MyBDNzQuNjUzOTA0MSwyMDQuMDk2MTkgNzUuNjAzNTA0OCwyMDUuMjYxOTk0IDc1LjMwMjUxNTEsMjA2LjI4MTU0MiBaIE04Ni4wNDY5NDcsMjA3LjQ3MzYyNyBDODYuMDgyOTgwNiwyMDguNTI5MjA5IDg0Ljg1MzU4NzEsMjA5LjQwNDYyMiA4My4zMzE2ODI5LDIwOS40MjM3IEM4MS44MDEzLDIwOS40NTc2MTQgODAuNTYzNDI4LDIwOC42MDMzOTggODAuNTQ2NDcwOCwyMDcuNTY0NzcyIEM4MC41NDY0NzA4LDIwNi40OTg1OTEgODEuNzQ4MzA4OCwyMDUuNjMxNjU3IDgzLjI3ODY5MTcsMjA1LjYwNjIyMSBDODQuODAwNTk2MiwyMDUuNTc2NTQ2IDg2LjA0Njk0NywyMDYuNDI0NDAzIDg2LjA0Njk0NywyMDcuNDczNjI3IFogTTk2LjYwMjE0NzEsMjA3LjA2OTAyMyBDOTYuNzg0NDM2NiwyMDguMDk5MTcxIDk1LjcyNjczNDEsMjA5LjE1Njg3MiA5NC4yMTU0MjgsMjA5LjQzODc4NSBDOTIuNzI5NTU3NywyMDkuNzEwMDk5IDkxLjM1MzkwODYsMjA5LjA3NDIwNiA5MS4xNjUyNjAzLDIwOC4wNTI1MzggQzkwLjk4MDg1MTUsMjA2Ljk5Njk1NSA5Mi4wNTc2MzA2LDIwNS45MzkyNTMgOTMuNTQxMzgxMywyMDUuNjY1ODIgQzk1LjA1NDgwNywyMDUuNDAyOTg0IDk2LjQwOTI1OTYsMjA2LjAyMTkxOSA5Ni42MDIxNDcxLDIwNy4wNjkwMjMgWiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="},150:function(e,t,a){"use strict";var n=a(151),i=a(0),s=a.n(i),r=a(4),c=a.n(r),o=a(154),l=a.n(o),d=a(145);function M(e){var t=e.description,a=e.lang,i=e.meta,r=e.keywords,c=e.title;return s.a.createElement(d.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:n})}M.defaultProps={lang:"en",meta:[],keywords:[]},M.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=M;var u="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"GeneNoteBook Documentation",description:"GeneNoteBook is a collaborative notebook for comparative genomics",author:"@holmrenser"}}}}},152:function(e,t,a){"use strict";var n=a(148),i=a(0),s=a.n(i),r=a(4),c=a.n(r),o=a(145),l=a(149),d=a.n(l);var M=function(e){var t=e.siteTitle,a=Object(i.useState)(!1),n=a[0],r=a[1],c=n?"is-active":"";return s.a.createElement("nav",{className:"navbar is-info is-bold",role:"navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(o.a,{to:"/",className:"navbar-item"},t),s.a.createElement("button",{className:"navbar-burger burger button is-info"+c,"aria-label":"menu","aria-expanded":"false","data-target":"navbarContent",onClick:function(){r(!n)}},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarContent",className:"navbar-menu "+c},s.a.createElement("div",{className:"navbar-end"},s.a.createElement(o.a,{to:"/#getting-started",className:"navbar-item"},"Getting started"),s.a.createElement(o.a,{to:"/#features",className:"navbar-item"},"Features"),s.a.createElement(o.a,{to:"/documentation/installation",className:"navbar-item"},"Documentation"),s.a.createElement("a",{className:"navbar-item",href:"https://github.com/genenotebook/genenotebook"},s.a.createElement("img",{src:d.a,alt:"github-icon",style:{width:40}})))))},u=(a(153),function(e){var t=e.children;return s.a.createElement(o.b,{query:"1170628050",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",null,t))},data:n})});u.propTypes={children:c.a.node.isRequired};t.a=u},167:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACwUlEQVQ4y11U227TQBD1/38EvMBLXxAPSLwWUCtQaUOUppCmaezGt+zayXrt9X0PM2uMECtNxprdOXPmFq/tR5xkisNug1I3KFWJtu4w9hZN20GXFVSh0dK3qRuILEdlarRd7+6OQkJXFcrawDQNvDAM4fs+lvcrrF82uLy9wmK7QqgSeljCGIOyLLF73sMPAgiZoWk6lFVNdoOKgnx8/oRXqwvcJffw/EggSs/YxSFeLy9wsf6AN8t3ePvwHqGMkcTEnoLGSQIhMugih1YppDjQ3R7nUwR5ThEKus8lPNMBVQv0A+iHxAJjOzrdNq1jaOra6bYbEL78xPP2G8JggTR6QBTckn6CJZe+7+EpY1HUFqYdKAVNdWupZop0g5qAtC6dMOBITtHhES+7a0ThDiK6Q5auyI/eU/0qqqVXNpYYMuA4sSDAkorddR0BTo+qyvy563AICHC/JP0LItkgF1tK+0jsBufjVQ6Q0m4IkJw5EjdhAqzd9wRaEWiDNN5CxveQ6QbFKUClfJhSoiNAJuNpSrfuCLQZnDMbC62dngGZMX9zyrk8QB6p28c9lFyjKp5gdOo671LuB4thtGDNtIdhoj6SNxeZgVnY1g8jsqOPE0ker1FElziHn5Ena9dUl3JWWpQNCKhHQQPMRqWUA/n/jAToxxFuqDE34RN+0FjdFwLHokDXThNBY0MbQVthrXXsWHhMmB3bZuHDNiEFkhOBqAyJEjhkMc7q/DcbV0PT2mkA6XR0ofW0anz+BeUynFWBK7nFdb7DIg/wRT7iV3aApRnlhnoNMyTphgmUGfIszrUcCMQBYqpxFAW0WTukWYCj9BGEj6QTCmbnwQZ4uLnTjiEtvSIWc5cZeD4DBeVNSfxrJMFXyOg7sngBRevHY+MYTqlazs1Fmes1nznVucaS/hyEzJ0Umue2dwvAb9j/NxUDe5zk+CPaAAAAAElFTkSuQmCC",aspectRatio:1.3783982365907421,src:"/static/8924c561b9b42529ff491be0ff7c8e0a/c07a1/genenotebook_2.png",srcSet:"/static/8924c561b9b42529ff491be0ff7c8e0a/eb4a9/genenotebook_2.png 250w,\n/static/8924c561b9b42529ff491be0ff7c8e0a/87e1c/genenotebook_2.png 500w,\n/static/8924c561b9b42529ff491be0ff7c8e0a/c07a1/genenotebook_2.png 1000w,\n/static/8924c561b9b42529ff491be0ff7c8e0a/0fecf/genenotebook_2.png 1500w,\n/static/8924c561b9b42529ff491be0ff7c8e0a/d4471/genenotebook_2.png 1876w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},168:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,s=n(a(7)),r=n(a(35)),c=n(a(75)),o=n(a(76)),l=n(a(0)),d=n(a(4)),M=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},g=function(e){var t=M(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},N=[];var A=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){N.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),N.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',c=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+n+"<img "+c+o+a+i+t+r+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=l.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,s=e.style,r=e.onLoad,d=e.onError,M=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:i},M,{onLoad:r,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});D.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var p=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,s=t.fadeIn,c=g(t);!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:o,seenBefore:c},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&A(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=M(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=M(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,s=void 0===i?{}:i,r=e.imgStyle,c=void 0===r?{}:r,d=e.placeholderStyle,u=void 0===d?{}:d,g=e.placeholderClassName,N=e.fluid,A=e.fixed,p=e.backgroundColor,f=e.Tag,w=e.itemProp,j="boolean"==typeof p?"lightgray":p,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},c,u),y=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},c),z={title:t,alt:this.state.isVisible?"":a,style:E,className:g};if(N){var T=N;return l.default.createElement(f,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(f,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),T.base64&&l.default.createElement(D,(0,o.default)({src:T.base64},z)),T.tracedSVG&&l.default.createElement(D,(0,o.default)({src:T.tracedSVG},z)),j&&l.default.createElement(f,{title:t,style:{backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,T.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),l.default.createElement(D,{alt:a,title:t,sizes:T.sizes,src:T.src,srcSet:T.srcSet,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t},T))}}))}if(A){var b=A,h=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:b.width,height:b.height},s);return"inherit"===s.display&&delete h.display,l.default.createElement(f,{className:(n||"")+" gatsby-image-wrapper",style:h,ref:this.handleRef,key:"fixed-"+JSON.stringify(b.srcSet)},b.base64&&l.default.createElement(D,(0,o.default)({src:b.base64},z)),b.tracedSVG&&l.default.createElement(D,(0,o.default)({src:b.tracedSVG},z)),j&&l.default.createElement(f,{title:t,style:{backgroundColor:j,width:b.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:b.height}}),this.state.isVisible&&l.default.createElement("picture",null,b.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:b.srcSetWebp,sizes:b.sizes}),l.default.createElement(D,{alt:a,title:t,width:b.width,height:b.height,sizes:b.sizes,src:b.src,srcSet:b.srcSet,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,o.default)({alt:a,title:t,width:b.width,height:b.height},b))}}))}return null},t}(l.default.Component);p.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var f=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});p.propTypes={resolutions:f,sizes:w,fixed:f,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var j=p;t.default=j},169:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD0klEQVQ4y12UWW8bVRSA+2P4d7wgeOENgRDqEy9FICR4KhGqqECERSpqlKqQqElw4gYaL+PYY4+38Yw949n3j3PHdpxypdHMnXPvOec724M8z6mAIk1xFytWF8+IrB6BcU04usDxEwJ7TNH8lqLxBcXll9D8Gq4e4Z09ZTGcbO4XRf08qKoKx3XxLItg6WGf/Ypxc0I4/JtYP2Ud5ow6VyQnD6lOPqY8+QTz8D3S4w+JL75n1O1jWgvUUrpqhbqu02l3WTkOcQlLxyPOSnkqkjgWgx5BDpG4Eonc8nK8DFJREkQRq9Vqr1AhJ4lg+T5hEFIWeS0s5H+eZzWGWmWekmcJhTyyoyoy8jSplaiV1+cFuSzL2sqiPyDq/kV0fYDRvsD1QoIwwrWnzJ9/RnT2iGx0St74isXRQ6JXnxO9/o1BS8NaLTdGRVetUB8MmM3mxOKp666ZTKf44nEkhjx5G+MJztojEnxfKCbTmYTHrc8vJPbm4l4MM3E1lQyrjUKsqnJrraotVuVmL8dr/J18g5nd+94hy6EkkyDPDPjnMXHvOU7nmNA1ieR8ZDSwB028ICaOI4LAxzQt1o5N0fmdWf9WZIFyb488GPSZClbq29hzA/22w9p1CMOQlTWjp7VZSiZDUeY6KzStx8Kck3jLOlwjw3g7yyrDhSBKpVBukib7kqwQzC2S+q/kxVauwLM9/b6wVXnEWYGjd4mNJo5tYvYaBAud1DgnefMUt/EdwbABNweknUPs1gui9i/EnRdMNA1PSFSsa4Ub5AHGUBSELvZizq3WIfTXJIHD2tTR269xrCnpeoZvjdC1G+xpX0K0ZGyMmc3n95ELfM8TFEFWru+yJtbyoiSv80v9zhT2Ts7+e+NduUdW8Qksk+LmR9Lhy7qoVULiUAx1fsIfXZENjslsjbL9A4F+RtH9WZBfYk1MEim78v5wGI4MtFaLaPIaS0qk3enV/amwnf45N40/sfpNYneOL8ral6Koe0o41Wi/aWEI9ltZduRyjbhFrsriDjHfZrS4h7zbF//L8AZ52/yZtFUirZZKO9UXp02K2SVZIMbMf8kEK1/p5NNLSu1QxtsN69GYQDmzzfBdltUKbSlq6WHHWUrD6zhP3iU9+gC7d4539BHzuYnXkE7643345h3GB5/SfvyE21en4kC1R1YKjdGI/kAnyzIsafbrM5k2RlfKZMpiNqF1dcrclOBLJ7kqbufPmGotfPnXur6uh8ndtFFuWjItVFYTmW9qNqZqYEhLJNIKqRhJpPDVAEml59O8JJHAplJumdxVTuyGi1L4H3HX6GxPW/LEAAAAAElFTkSuQmCC",aspectRatio:.9941860465116279,src:"/static/92d2fc300c4c88ae1b31a048ae897e03/69ecd/genemodel.png",srcSet:"/static/92d2fc300c4c88ae1b31a048ae897e03/705dd/genemodel.png 75w,\n/static/92d2fc300c4c88ae1b31a048ae897e03/2bd34/genemodel.png 150w,\n/static/92d2fc300c4c88ae1b31a048ae897e03/69ecd/genemodel.png 300w,\n/static/92d2fc300c4c88ae1b31a048ae897e03/419be/genemodel.png 450w,\n/static/92d2fc300c4c88ae1b31a048ae897e03/dea62/genemodel.png 513w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},170:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABUUlEQVQoz32SiW6DMBBE8/8/WLVNlUDCGQfMDSHsqxcLlKhSkUaLV/L47dgHEUHV9z1d19G27Zu0pyrsg7oXmmGhH13tvaZZWBbvsSwLh3me/YaiWOswDLv0kKZpKO8FaTDwncBXIkQFBDf4iCC17N9qqBsfjwdVVVGWJeM4MU0TetA4jqRpShLHREHH9Q6nXJyJcLkLx1SwnTgrJXwx3HCVxhizE9Z1vZLf8pwg6fjJ4XwTKjdq2ULhVA+sI78RPp/PtbFlaa1daa2tiOOE6BoRXlpCo6MKphaS0o/dT/wl1J/XHNRsyzNNMwpHbU4tp4x1zNAIsTPUA7LKg+yESqR56UJJtaq0p9kqbXy9kh1LzrnPMDA+u3oQhsln+Gaoz2N7Npt0rVLK4Hwm/DTODH4ycTlCYr3a0U8mm+F2m/9JI8hNzb3ZLsQTzk9P9/oOfwElLriBKm3J3wAAAABJRU5ErkJggg==",aspectRatio:2.176470588235294,src:"/static/67aa595e2529243691c08407709758d0/69ecd/orthogroup.png",srcSet:"/static/67aa595e2529243691c08407709758d0/705dd/orthogroup.png 75w,\n/static/67aa595e2529243691c08407709758d0/2bd34/orthogroup.png 150w,\n/static/67aa595e2529243691c08407709758d0/69ecd/orthogroup.png 300w,\n/static/67aa595e2529243691c08407709758d0/419be/orthogroup.png 450w,\n/static/67aa595e2529243691c08407709758d0/3cf9a/orthogroup.png 600w,\n/static/67aa595e2529243691c08407709758d0/b3eb1/orthogroup.png 900w,\n/static/67aa595e2529243691c08407709758d0/fdefd/orthogroup.png 1332w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},171:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAADR0lEQVQ4y51VaXPiOBDN//9N+2FqZ6tCGAIDCUdswuXbxqd8Yqw33TIspMKHrRW8dKOW26+lp85T13WQUn4Bz11x//u/xJ6k7JCmGWzbhWU6EFlGQajBi9q2xXWw33V9UNLD7fms/DPZtj33CflPRgk5qRA5giBAkqSoqhpJnMB1PeR5gbIs4TiuWleWFcVieH6g/DAMEdMzPFRCITIY1h6mbcDxbIg8RRyHSLIYcRqhOdX0QKj8iGxRCuWnWaJ8XtfJvvQnIg/biDH4qWM83GLya4/Vm4f3iYXF1CFrY6dnWM4czMamgjb3KeZiMXOhLQLMf7soC94a2ScM3Rb6tMZm3uDzrcJqIrAaCyzHmbKLUYrlJOvnf1/mJz14fj6iLYtOfUKmmRD1jbHB1tzBcAxUbXU5BnlB719VoPzL597vDwUd8kMB6y8X9g8P3t8B8tcSp7czmlmLZkp4byEreXvHw3FNyLKJUuzXBoydA3Pvos5pP+grT3eQ+KbXR/p96khDVdPAt3awp//AIojNDK31gdpYoDGXqA9zdKn/mNdFtLeEHQs7xXa7xW6zhmkcEB0D+A7JJ4kRBj6OngvfdZU+Y9ImazUk290l+5KwqkicEWmMxMoLx/oOP8bveJ7reFmu8XO6wvxzj6IokGWCdCuU5WfxreR/Ge5wIHaGYZJYS/VmvmbM4srk8VHc7B3DumdIiJNE3c1vo24gHQ/SDcj66Mjv2LoEm+brWr1YJeRLz3eVS68p0NAhVWR7/4QTxas8RxunaKMEMhWgMoD8ioI7h7p+KmEUxVh9aFhvPrHfH3A8hrCpEZiWDdenQ6HLz03CogrWIWm1LiCoyJQ0zMhAnea+ZGbEnSbPe9RUXn3P8HRCQ37e1PAq6kgErxLwWgH3TM0B9ddDYYYfmg5N1/FJ8uF25JBMLNtWLYoZWsQ2CI4kqZDklMDeO7BGdBEGDir7cojn7raHzPKK6z6y5b1U8ng0WOs2QeCWkI/7cDDw/PKCl+EQg+dnDH+NMHp9xWAwwHA0IuZrpQBmzjYKe0VEglSR0zz1yIZVIFX7ggquVivoVLKmaV+g65qK8U3K6N9DQuWybhWSHtzZeZ9Vwoea+5+Dt+YPMSCWHujAF74AAAAASUVORK5CYII=",aspectRatio:.9002217294900222,src:"/static/e7a8fa3052f4a35455b248d51e62b1f6/69ecd/protein-domains.png",srcSet:"/static/e7a8fa3052f4a35455b248d51e62b1f6/705dd/protein-domains.png 75w,\n/static/e7a8fa3052f4a35455b248d51e62b1f6/2bd34/protein-domains.png 150w,\n/static/e7a8fa3052f4a35455b248d51e62b1f6/69ecd/protein-domains.png 300w,\n/static/e7a8fa3052f4a35455b248d51e62b1f6/df87c/protein-domains.png 406w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},172:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVQ4y42TbW/aMBDH+f6fZpPWdW239i0IqDqptOGpBEohCXESx3EcO37o2QmUFTbtdLHODz//7dy5Y/amnZkT00bvEAKPdijcoV5/eP3ztmQMpjpC1HUtD6A+MaU1pZQUjdHRs9ft9TnnFuZcwAREXAhw83/WSHW0UoQQiF6KBPww8XfsCK4YS7PMwhX2a4JjxAX/ByxFheO1u57pQL+gtIU5jlc3Jd3BXzirCp8oYjS6aJVzQnCOGxi8Ti5YucW4OL1kA9QUZeOrFlZSpjhLs3TBLazSS0zXsyRkjFF3IrtOG5znGFsNQePM+9HCRqlF+Pb9uX+AUbF6TNdPKB3FCFagIu37g/vpy3A8t0kp/oD1ItpcTu99ngNvlfl2KbOHSjzwGjS3RXSzuR3M/OHMB6AiEZ5c72Fj5sH6y1N3WiYTmojd15iupiwaUDYsq+ju9/x1fvX2qzte9Cb++i5K/FXqfVNKuQrjIkxib+OHJAvyjCRemkdBjl5zAp6PVlEYTOLZMoiWQZg8kmwbp1tPStUqwza2DKVtYRACVSstJdSPNNpOKt2skaaWNtoXSS1ECcasQZ3zqoK6ZbYVMChc0VZukDcxq2wK1P7OQgjHstJtAxmCxQDAiG1L29KidNpttj9+mJSypAx2rpyBvk2J63InCbt8KvgP+NMbPC4p1z3zzvev6vjpHk52rnuq8Q40vQ1dE+FLAwAAAABJRU5ErkJggg==",aspectRatio:1.1296296296296295,src:"/static/3d8ffea104eb534a7510c340555201da/69ecd/expression_1.png",srcSet:"/static/3d8ffea104eb534a7510c340555201da/705dd/expression_1.png 75w,\n/static/3d8ffea104eb534a7510c340555201da/2bd34/expression_1.png 150w,\n/static/3d8ffea104eb534a7510c340555201da/69ecd/expression_1.png 300w,\n/static/3d8ffea104eb534a7510c340555201da/419be/expression_1.png 450w,\n/static/3d8ffea104eb534a7510c340555201da/41237/expression_1.png 488w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},173:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAAC4klEQVRIx41Vy3LTQBDMp8Iv5AQcuKTgxj9AFQeK4gO4UMWFHAiBKpAdR3JkEtvR+y3rYctqZka2owg58Va1td4dtXtmetdH6/Uaj6Jaoa4qHBJ7xB+HjHr7rB+Ioc0dIX/pAw/99BRfP39DUu6P7SXse9pRjo/Hx3j75CnOlWtZ43e6RHsJ2wo4P149Oxvi3YcvMJNVQ9jJ+2CFzV4NpillsUJZlvd/9FBCHtqVjrPzn5jPZrhQhvgzvMD3H79QtEgfJOyiXC6RpqkQLGm+yDKZtwn2NqVbv21QEIQwTBuG5cCwbVRVR0Cfbbb16pK3DVu1jN0V0O76fwp9P4DjOARXSPqGFwRwPV9iVq2YHaHUapFhkRcUGMB2PYJPazmyvKS6LbFarZDnOQqK8YgsjCIpR14UUl/el6Mn5iWCP8MRbm4tuEEMx48EthvAdHxSFCMMIyiKgoEygK7rcF0XEZGGYShIkqQhZJnM7tMLLqdLyoLNnNOyHI9UlPKCpqqYTCaYTqdQL1Vo2pjUekIcx/Ed4ZIIPSJgIofUmrZD6lz4QUMsJSFCVdOgEyEraqu7p7DbFG4Eq2VV7etlufFkRl7kmC14nU/ProZtQp4Hvk/KQtikkpX1jYAUeb4Hy7KJqNPlul6LmjhZIE4XFBg2taT6JSl1PstlP6PuckyUpNJEjnPIEU1MIW5oukysLm1q+g20ybTp9LbLXigI45Q6HeLqeiYxU8MmN9x3An/fpdw+Ke1Twc8wismPpCxOZM5GXnfiBe2TUu+58isqtEW15K7Pb03M5oYYue4jXG8IG2P7uFDHGFyOMRrrUK/+4npmSDoOpey4VFevgeX4DWhvC0nZj+58yAXnzrIPBZRaTMXP6GbJeH8HyJOPKDeLm9Ggadyj/3rL6RzFYIRiqKJQRsh/D1BSFthdCPXh/3rit/efYL54DfP5KxjPTnB7/BLWyRusyV4PXrD7UG80dNHb5Q3+AdTz39UddwmzAAAAAElFTkSuQmCC",aspectRatio:.7725040916530278,src:"/static/02377ab390787b831b28e9a14700ef6b/69ecd/user-profile_1.png",srcSet:"/static/02377ab390787b831b28e9a14700ef6b/705dd/user-profile_1.png 75w,\n/static/02377ab390787b831b28e9a14700ef6b/2bd34/user-profile_1.png 150w,\n/static/02377ab390787b831b28e9a14700ef6b/69ecd/user-profile_1.png 300w,\n/static/02377ab390787b831b28e9a14700ef6b/419be/user-profile_1.png 450w,\n/static/02377ab390787b831b28e9a14700ef6b/8f715/user-profile_1.png 472w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},174:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/UlEQVQoz11TyY7TQBDNzyDuXJA48U/c+Ae4IIHEV4wSASPWAxdGSBPQzJBMFiexk3iJ23u8dz+q2jEapqXnqq6qrn7d/TxomgZN26KVEm0rtV/XNZqGYm0Pqec11TLYL6sax7xATmBbVpVeN+AFt9MJlosFZmS36xXmywVWxhKGYVBuitnsFlWZoxtKf7MkgrU2YG83ZFfwXAdMbsDMTFFi6eVYHQqsRYVNUGPtkyV/5ZcwvAK7WGKfKA07BaxIYe53WAgJJ5GQ1GvQtAo/d8D76xTn1wk+3iQYjQMMCd/mJX5YwLtfIUaMS4GzywAX6wLPPgAPXyo8eQM8eAGcTZg3N5QKF2aL0e8Qn/8kmOwSfJmkuuFwLPB1VuD8KsaQmvGGw3GI7/MUzz8Bj14BT98Cj18Do+mpIR/ZTek4catps99ZBTcDQWl45DsUs091XG+GPRp4adsdmT+Ovcdua8G0TFjmBkt6jDxLcX/IpkYUCATCh/A98skeXHoQG1EYaEUMuDCKE+xtB2Ecd/KoGy0Vfs/smMNxPXi+gM32IEg6LDNFEpMaXCtprhkqpbR+jnmurRYGxSShz2XHI9I0I6Ta52tSp/xd6IbcgAttx9VM7xbwKIsCvgh0jsFs+k3v1/5jWDFDOhqrnYM9eobd35CjKEp9JfLE5j+cYn8BZlFA6Nf+RqQAAAAASUVORK5CYII=",aspectRatio:1.7945205479452055,src:"/static/eda3ac2dac606370d272af96a67649fc/69ecd/version-history.png",srcSet:"/static/eda3ac2dac606370d272af96a67649fc/705dd/version-history.png 75w,\n/static/eda3ac2dac606370d272af96a67649fc/2bd34/version-history.png 150w,\n/static/eda3ac2dac606370d272af96a67649fc/69ecd/version-history.png 300w,\n/static/eda3ac2dac606370d272af96a67649fc/419be/version-history.png 450w,\n/static/eda3ac2dac606370d272af96a67649fc/100e5/version-history.png 524w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},175:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAADVklEQVQ4y41Vy44bRRTtr0N8AGskdkgs2LBlw4Jv4AuQEFIkiIRYgKIoTCZESVggxsyM7djdbbf7/aiqflbX4VS77QE0o6Rmjm91V/neqnvOvXbqusY+OCBJM5RlhUMYIctyXN+u8PzF75BSci1FGMWI4wRPnj7D4u9r6EGjbzv0XU/bn+dOVQncLNfw6TTNMmw2LnacX758jR8e/4Q8L6aAnr/H1vPx3fePuPYSVSMRl+mEtMqQiwIJrSNEhbapkaUJrm9u4HouTyX4TqEschRFyXc+124Rcc8genyz+BYfPv4EX1x8jc+ffYVPn36JD378GB/9/BmcvGoQZmpCEFeIM4GkqDmX8MMSStWohETBdFRCQAmFRbLEL+5vuNi/wmXwhvY1fvUu8MS7hFMog02CCUEBRAJwU2AdA1va0eB/w6DMJR4aDsw4bXoIxtxBa00yBuRMRRAecIhC3iiBpg9tNAY9wBnH8fhVcz/O5zo5JA6HAMvVGsv1Guu3G/Rk3A7ryxm44XSCcTT/mU8wM7hZawanFaUgiSSMCkiTDB3lcnaYVBrL0ExwE4MgN3gbG/zpG1zteKrxLoAN3mjqDQP/qMMZ7djxfYtOU4c2ajsAHWFP3hP2+fTueG0z/ddDg0W9xnPvD7xJFtP8L7XClbJ2iajLjjl81zCzQzXU2KgdXLGHpwLsmogIJ+vWAeKWDs17sjw51A2SMsHeD5BE2Skar2amssu60upQY8+87fMRYTEikyPzOMLPRhz4PDAlo7FkGMiedc/ThDVru0mR9AUiniqsGURFSNocjmzpqKKgiVwBLBIk4ihw+3wStpmZTgvW+86Ft/ew8bes4ZK0MPA4UD7D6cp4x7XvdDiQqVrWqFmSkmWoZw3aYdcdM/7b4UOkHD/6oYckMTUl0pthgpWMIvtVJyHZUJym01C8tmwI2qY/zkVztJoBp2ri3QW/VPYCRVdhlbszvCmn1SCRtyTFkrCKbDMwJMKQCIMtBb6KKPDoKOzT6WWnmNcSolXYFjts8x28goxLNmdVMf/l++ZwdsjuPTDxt8sVFlfXU9n5bLyHQ4imbSHYrM/CPjcE3N8c7LA/FxbWgef708+FRRTHkEpBsF86lplT8T+MeX3ed984rf8DOrNNaafK+WcAAAAASUVORK5CYII=",aspectRatio:.9658314350797267,src:"/static/15cfdbea87e03a19c1fdc2065948085f/69ecd/query_1.png",srcSet:"/static/15cfdbea87e03a19c1fdc2065948085f/705dd/query_1.png 75w,\n/static/15cfdbea87e03a19c1fdc2065948085f/2bd34/query_1.png 150w,\n/static/15cfdbea87e03a19c1fdc2065948085f/69ecd/query_1.png 300w,\n/static/15cfdbea87e03a19c1fdc2065948085f/9a9af/query_1.png 424w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-acd8b48ca0558932a15a.js.map