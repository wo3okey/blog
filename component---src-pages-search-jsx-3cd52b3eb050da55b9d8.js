"use strict";(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[765],{5608:function(e,t,o){var n=o(3472),l=o.n(n),r=o(7350),a=o.n(r),i=o(6540),s=o(2568),c=o(4794),d=o(2912),m=o(3173),p=o(786),u=o(3933);const g=s.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),x=s.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),h=s.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),f=s.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText)),E=s.default.span.withConfig({displayName:"PostList__SeriesHeader",componentId:"sc-1oqnm6-4"})(["padding-left:7px;font-size:18px;color:",";& > span{font-weight:normal;color:",";}& > a{color:inherit;text-decoration:none;}& > a:hover{text-decoration:underline;}"],(e=>e.theme.colors.text),(e=>e.theme.colors.tertiaryText));t.A=e=>{let{postList:t}=e;const{0:o,1:n}=(0,i.useState)(10),r=a()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&o<t.length&&setTimeout((()=>n(o+10)),300)}),250);return(0,i.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[o,t]),(0,i.useEffect)((()=>{n(10)}),[t]),i.createElement(g,null,t.slice(0,o).map(((e,n)=>{const{title:r,description:a,date:s,tags:g,series:w}=e.frontmatter,{excerpt:k}=e,{slug:b}=e.fields;return i.createElement(i.Fragment,null,i.createElement(x,null,i.createElement(u.A,{category:w}),i.createElement(E,null,i.createElement(c.Link,{to:"/series/"+l()(w,/\s/g,"-")},w)),i.createElement(d.A,{size:"bg"},i.createElement(c.Link,{to:b},r)),i.createElement(h,null,s),a?i.createElement(f,null,a):i.createElement(f,null,k),i.createElement(p.A,{tagList:g})),o-1!==n&&t.length-1!==n&&i.createElement(m.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,o){var n=o(6540),l=o(2568),r=o(4794);const a=l.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),i=l.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),s=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:o,selected:l}=e;return t?o?n.createElement(a,null,t.map(((e,t)=>n.createElement(r.Link,{key:JSON.stringify({tag:e,i:t}),to:l===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},n.createElement(i,{selected:e.fieldValue===l},s(e.fieldValue)," (",e.totalCount,")"))))):n.createElement(a,null,t.map(((e,t)=>n.createElement(r.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},n.createElement(i,null,s(e)))))):null}},698:function(e,t,o){var n=o(2568);t.A=n.default.div.withConfig({displayName:"VerticalSpace",componentId:"sc-fbwjqc-0"})(["height:","px;"],(e=>e.size))},7392:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var n=o(6540),l=o(2568),r=o(5482),a=o(6288),i=o(5608),s=o(4084);function c(e){return(0,s.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const d=l.default.div.withConfig({displayName:"TextField__Wrapper",componentId:"sc-x9cxl4-0"})(["position:relative;"]),m=l.default.span.withConfig({displayName:"TextField__Icon",componentId:"sc-x9cxl4-1"})(["position:absolute;top:12px;left:18px;font-size:20px;color:",";text-shadow:0 0 5px ",";transition:all 0.2s;"],(e=>e.theme.colors.textFieldBorder),(e=>e.theme.colors.textFieldBorder)),p=l.default.input.attrs({type:"text"}).withConfig({displayName:"TextField__Input",componentId:"sc-x9cxl4-2"})(["padding:14px 19.2px 12px 50px;width:100%;border:1px solid ",";border-radius:1vh;background-color:transparent;font-size:16px;color:",";box-sizing:border-box;outline:none;transition:all 0.2s;&:focus{border:1px solid ",";}&:focus + ","{color:",";}"],(e=>e.theme.colors.textFieldBorder),(e=>e.theme.colors.text),(e=>e.theme.colors.textFieldActivatedBorder),m,(e=>e.theme.colors.textFieldActivatedBorder));var u=e=>{let{...t}=e;return n.createElement(d,null,n.createElement(p,t),n.createElement(m,null,n.createElement(c,null)))},g=o(2912),x=o(698),h=o(1960);const f=l.default.div.withConfig({displayName:"search__SearchWrapper",componentId:"sc-1ljtwq8-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);var E=e=>{let{data:t}=e;const o=t.allMarkdownRemark.nodes,{0:l,1:s}=(0,n.useState)(""),c=(0,n.useCallback)(o.filter((e=>{const{frontmatter:t,rawMarkdownBody:o}=e,{title:n}=t,r=l.toLocaleLowerCase();return!!o.toLocaleLowerCase().includes(r)||n.toLocaleLowerCase().includes(r)})),[l]);return n.createElement(a.A,null,n.createElement(r.A,{title:h.title,description:h.description,url:h.siteUrl}),n.createElement(f,null,n.createElement(g.A,{size:"sm"},"There are ",c.length," post",c.length>1&&"s","."),n.createElement(u,{onChange:e=>s(e.target.value),placeholder:"Search"})),n.createElement(x.A,{size:70}),n.createElement(i.A,{postList:c}))}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-3cd52b3eb050da55b9d8.js.map