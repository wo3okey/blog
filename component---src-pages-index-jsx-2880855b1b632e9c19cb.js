(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[279],{3416:function(e,t,n){"use strict";var r=n(6540),o=n(2568),l=n(1612),i=n(7008),a=n(1960);const c=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":a.siteUrl,u=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],s),m=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),d=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),p=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),f=e=>{let{link:t,children:n}=e;return t?r.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.A=()=>{const{github:e,kaggle:t,instagram:n,facebook:o,twitter:s,x:g,blogger:h,medium:x,linkedIn:v,email:E,resume:k,link:b}=a.links;return r.createElement(c,{id:"bio"},r.createElement(u,null),r.createElement("div",null,r.createElement(m,null,"@",a.author),r.createElement(d,null,a.description),r.createElement(p,null,r.createElement(f,{link:e},r.createElement(l.hL4,null)),r.createElement(f,{link:t},r.createElement(l.jJF,null)),r.createElement(f,{link:n},r.createElement(l.ao$,null)),r.createElement(f,{link:o},r.createElement(l.iYk,null)),r.createElement(f,{link:s},r.createElement(l.feZ,null)),r.createElement(f,{link:g},r.createElement(i.TCj,null)),r.createElement(f,{link:x},r.createElement(i.DC0,null)),r.createElement(f,{link:h},r.createElement(i.KRq,null)),r.createElement(f,{link:v},r.createElement(l.QEs,null)),r.createElement(f,{link:E},r.createElement(i.Wjb,null)),r.createElement(f,{link:k},r.createElement(i.HkI,null)),r.createElement(f,{link:b},r.createElement(i.AnD,null)))))}},5608:function(e,t,n){"use strict";var r=n(3472),o=n.n(r),l=n(7350),i=n.n(l),a=n(6540),c=n(2568),s=n(4794),u=n(2912),m=n(3173),d=n(786),p=n(3933);const f=c.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),g=c.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),h=c.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),x=c.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText)),v=c.default.span.withConfig({displayName:"PostList__SeriesHeader",componentId:"sc-1oqnm6-4"})(["padding-left:7px;font-size:18px;color:",";& > span{font-weight:normal;color:",";}& > a{color:inherit;text-decoration:none;}& > a:hover{text-decoration:underline;}"],(e=>e.theme.colors.text),(e=>e.theme.colors.tertiaryText));t.A=e=>{let{postList:t}=e;const{0:n,1:r}=(0,a.useState)(10),l=i()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>r(n+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)})),[n,t]),(0,a.useEffect)((()=>{r(10)}),[t]),a.createElement(f,null,t.slice(0,n).map(((e,r)=>{const{title:l,description:i,date:c,tags:f,series:E}=e.frontmatter,{excerpt:k}=e,{slug:b}=e.fields;return a.createElement(a.Fragment,null,a.createElement(g,null,a.createElement(p.A,{category:E}),a.createElement(v,null,a.createElement(s.Link,{to:"/series/"+o()(E,/\s/g,"-")},E)),a.createElement(u.A,{size:"bg"},a.createElement(s.Link,{to:b},l)),a.createElement(h,null,c),i?a.createElement(x,null,i):a.createElement(x,null,k),a.createElement(d.A,{tagList:f})),n-1!==r&&t.length-1!==r&&a.createElement(m.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,n){"use strict";var r=n(6540),o=n(2568),l=n(4794);const i=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),a=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:n,selected:o}=e;return t?n?r.createElement(i,null,t.map(((e,t)=>r.createElement(l.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},r.createElement(a,{selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")"))))):r.createElement(i,null,t.map(((e,t)=>r.createElement(l.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},r.createElement(a,null,c(e)))))):null}},698:function(e,t,n){"use strict";var r=n(2568);t.A=r.default.div.withConfig({displayName:"VerticalSpace",componentId:"sc-fbwjqc-0"})(["height:","px;"],(e=>e.size))},7352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(3031),o=n.n(r),l=n(6540),i=n(6288),a=n(5482),c=n(3416),s=n(5608),u=n(5378),m=n.n(u),d=n(2568),p=n(4794);const f=d.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-11pn9fc-0"})(["position:relative;"]),g=d.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-11pn9fc-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),h=d.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-11pn9fc-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(e=>e.theme.colors.secondaryText)),x=d.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-11pn9fc-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));var v=e=>{let{tags:t,postCount:n}=e;return l.createElement(f,null,l.createElement(g,null,l.createElement(h,null,"TAG LIST"),l.createElement("ul",null,l.createElement(x,null,l.createElement(p.Link,{to:"/tags"},"all (",n,")")),m()(t,(e=>l.createElement(x,null,l.createElement(p.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")")))))))},E=n(3173),k=n(698),b=n(1960);var w=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,r=o()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):l.createElement(i.A,null,l.createElement(a.A,{title:b.title,description:b.description,url:b.siteUrl}),l.createElement(k.A,{size:48}),l.createElement(c.A,null),l.createElement(E.A,null),l.createElement(v,{tags:r,postCount:n.length}),l.createElement(s.A,{postList:n}))}},1033:function(e){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},909:function(e,t,n){var r=n(641),o=n(8329)(r);e.exports=o},3120:function(e,t,n){var r=n(4528),o=n(5891);e.exports=function e(t,n,l,i,a){var c=-1,s=t.length;for(l||(l=o),a||(a=[]);++c<s;){var u=t[c];n>0&&l(u)?n>1?e(u,n-1,l,i,a):r(a,u):i||(a[a.length]=u)}return a}},6649:function(e,t,n){var r=n(3221)();e.exports=r},641:function(e,t,n){var r=n(6649),o=n(5950);e.exports=function(e,t){return e&&r(e,t,o)}},5128:function(e,t,n){var r=n(909),o=n(4894);e.exports=function(e,t){var n=-1,l=o(e)?Array(e.length):[];return r(e,(function(e,r,o){l[++n]=t(e,r,o)})),l}},6155:function(e,t,n){var r=n(4932),o=n(7422),l=n(5389),i=n(5128),a=n(3937),c=n(7301),s=n(3714),u=n(3488),m=n(6449);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return m(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[u];var d=-1;t=r(t,c(l));var p=i(e,(function(e,n,o){return{criteria:r(t,(function(t){return t(e)})),index:++d,value:e}}));return a(p,(function(e,t){return s(e,t,n)}))}},9302:function(e,t,n){var r=n(3488),o=n(6757),l=n(2865);e.exports=function(e,t){return l(o(e,t,r),e+"")}},9570:function(e,t,n){var r=n(7334),o=n(3243),l=n(3488),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:l;e.exports=i},3937:function(e){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},3730:function(e,t,n){var r=n(4394);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,l=e==e,i=r(e),a=void 0!==t,c=null===t,s=t==t,u=r(t);if(!c&&!u&&!i&&e>t||i&&a&&s&&!c&&!u||o&&a&&s||!n&&s||!l)return 1;if(!o&&!i&&!u&&e<t||u&&n&&l&&!o&&!i||c&&n&&l||!a&&l||!s)return-1}return 0}},3714:function(e,t,n){var r=n(3730);e.exports=function(e,t,n){for(var o=-1,l=e.criteria,i=t.criteria,a=l.length,c=n.length;++o<a;){var s=r(l[o],i[o]);if(s)return o>=c?s:s*("desc"==n[o]?-1:1)}return e.index-t.index}},8329:function(e,t,n){var r=n(4894);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var l=n.length,i=t?l:-1,a=Object(n);(t?i--:++i<l)&&!1!==o(a[i],i,a););return n}}},3221:function(e){e.exports=function(e){return function(t,n,r){for(var o=-1,l=Object(t),i=r(t),a=i.length;a--;){var c=i[e?a:++o];if(!1===n(l[c],c,l))break}return t}}},3243:function(e,t,n){var r=n(6110),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=o},5891:function(e,t,n){var r=n(1873),o=n(2428),l=n(6449),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return l(e)||o(e)||!!(i&&e&&e[i])}},6800:function(e,t,n){var r=n(5288),o=n(4894),l=n(361),i=n(3805);e.exports=function(e,t,n){if(!i(n))return!1;var a=typeof t;return!!("number"==a?o(n)&&l(t,n.length):"string"==a&&t in n)&&r(n[t],e)}},6757:function(e,t,n){var r=n(1033),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var l=arguments,i=-1,a=o(l.length-t,0),c=Array(a);++i<a;)c[i]=l[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=l[i];return s[t]=n(c),r(e,this,s)}}},2865:function(e,t,n){var r=n(9570),o=n(1811)(r);e.exports=o},1811:function(e){var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var o=t(),l=16-(o-r);if(r=o,l>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},7334:function(e){e.exports=function(e){return function(){return e}}},5378:function(e,t,n){var r=n(4932),o=n(5389),l=n(5128),i=n(6449);e.exports=function(e,t){return(i(e)?r:l)(e,o(t,3))}},3031:function(e,t,n){var r=n(3120),o=n(6155),l=n(9302),i=n(6800),a=l((function(e,t){if(null==e)return[];var n=t.length;return n>1&&i(e,t[0],t[1])?t=[]:n>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),o(e,r(t,1),[])}));e.exports=a}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2880855b1b632e9c19cb.js.map