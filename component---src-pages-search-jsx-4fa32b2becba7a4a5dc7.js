(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[765],{3173:function(e,t,n){"use strict";var o=n(5556),r=n.n(o);const i=n(2568).default.hr.withConfig({displayName:"Divider",componentId:"sc-1jz0jl-0"})(["margin-top:",";margin-bottom:",";border:none;border-bottom:1px solid ",";"],(e=>e.mt),(e=>e.mb),(e=>e.theme.colors.divider));i.propTypes={mt:r().string,mb:r().string},i.defaultProps={mt:"48px",mb:"48px"},t.A=i},5608:function(e,t,n){"use strict";var o=n(7350),r=n.n(o),i=n(6540),a=n(2568),l=n(4794),c=n(2912),s=n(3173),u=n(786);const d=a.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=a.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),m=a.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),f=a.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.A=e=>{let{postList:t}=e;const{0:n,1:o}=(0,i.useState)(10),a=r()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>o(n+10)),300)}),250);return(0,i.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[n,t]),(0,i.useEffect)((()=>{o(10)}),[t]),i.createElement(d,null,t.slice(0,n).map(((e,o)=>{const{title:r,description:a,date:d,tags:g}=e.frontmatter,{excerpt:x}=e,{slug:h}=e.fields;return i.createElement(i.Fragment,null,i.createElement(p,null,i.createElement(c.A,{size:"bg"},i.createElement(l.Link,{to:h},r)),i.createElement(m,null,d),a?i.createElement(f,null,a):i.createElement(f,null,x),i.createElement(u.A,{tagList:g})),n-1!==o&&t.length-1!==o&&i.createElement(s.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,n){"use strict";var o=n(6540),r=n(2568),i=n(4794);const a=r.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),l=r.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:n,selected:r}=e;return t?n?o.createElement(a,null,t.map(((e,t)=>o.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:r===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},o.createElement(l,{selected:e.fieldValue===r},c(e.fieldValue)," (",e.totalCount,")"))))):o.createElement(a,null,t.map(((e,t)=>o.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},o.createElement(l,null,c(e)))))):null}},2912:function(e,t,n){"use strict";var o=n(6540);const r=n(2568).default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1ttlsnf-0"})(["margin-bottom:24px;font-size:",";font-weight:700;line-height:1.3;color:",";word-break:break-all;& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}"],(e=>e.size),(e=>e.theme.colors.text),(e=>e.theme.colors.secondaryText));t.A=e=>{let{size:t,children:n}=e;return o.createElement(r,{size:{sm:"19.2px",md:"25.6px",bg:"33.6px"}[t]}," ",n," ")}},698:function(e,t,n){"use strict";var o=n(2568);t.A=o.default.div.withConfig({displayName:"VerticalSpace",componentId:"sc-fbwjqc-0"})(["height:","px;"],(e=>e.size))},7392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(6540),r=n(2568),i=n(5482),a=n(6288),l=n(5608),c=n(4084);function s(e){return(0,c.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const u=r.default.div.withConfig({displayName:"TextField__Wrapper",componentId:"sc-x9cxl4-0"})(["position:relative;"]),d=r.default.span.withConfig({displayName:"TextField__Icon",componentId:"sc-x9cxl4-1"})(["position:absolute;top:12px;left:18px;font-size:20px;color:",";text-shadow:0 0 5px ",";transition:all 0.2s;"],(e=>e.theme.colors.textFieldBorder),(e=>e.theme.colors.textFieldBorder)),p=r.default.input.attrs({type:"text"}).withConfig({displayName:"TextField__Input",componentId:"sc-x9cxl4-2"})(["padding:14px 19.2px 12px 50px;width:100%;border:1px solid ",";border-radius:1vh;background-color:transparent;font-size:16px;color:",";box-sizing:border-box;outline:none;transition:all 0.2s;&:focus{border:1px solid ",";}&:focus + ","{color:",";}"],(e=>e.theme.colors.textFieldBorder),(e=>e.theme.colors.text),(e=>e.theme.colors.textFieldActivatedBorder),d,(e=>e.theme.colors.textFieldActivatedBorder));var m=e=>{let{...t}=e;return o.createElement(u,null,o.createElement(p,t),o.createElement(d,null,o.createElement(s,null)))},f=n(2912),g=n(698),x=n(1960);const h=r.default.div.withConfig({displayName:"search__SearchWrapper",componentId:"sc-1ljtwq8-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);var v=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,{0:r,1:c}=(0,o.useState)(""),s=(0,o.useCallback)(n.filter((e=>{const{frontmatter:t,rawMarkdownBody:n}=e,{title:o}=t,i=r.toLocaleLowerCase();return!!n.toLocaleLowerCase().includes(i)||o.toLocaleLowerCase().includes(i)})),[r]);return o.createElement(a.A,null,o.createElement(i.A,{title:x.title,description:x.description,url:x.siteUrl}),o.createElement(h,null,o.createElement(f.A,{size:"sm"},"There are ",s.length," post",s.length>1&&"s","."),o.createElement(m,{onChange:e=>c(e.target.value),placeholder:"Search"})),o.createElement(g.A,{size:70}),o.createElement(l.A,{postList:s}))}},1873:function(e,t,n){var o=n(9325).Symbol;e.exports=o},2552:function(e,t,n){var o=n(1873),r=n(659),i=n(9350),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},4128:function(e,t,n){var o=n(1800),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},4840:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},659:function(e,t,n){var o=n(1873),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(c){}var r=a.call(e);return o&&(t?e[l]=n:delete e[l]),r}},9350:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:function(e,t,n){var o=n(4840),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},1800:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},8221:function(e,t,n){var o=n(3805),r=n(124),i=n(9374),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,d,p,m,f=0,g=!1,x=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,o=s;return c=s=void 0,f=t,d=e.apply(o,n)}function b(e){var n=e-m;return void 0===m||n>=t||n<0||x&&e-f>=u}function y(){var e=r();if(b(e))return w(e);p=setTimeout(y,function(e){var n=t-(e-m);return x?l(n,u-(e-f)):n}(e))}function w(e){return p=void 0,h&&c?v(e):(c=s=void 0,d)}function E(){var e=r(),n=b(e);if(c=arguments,s=this,m=e,n){if(void 0===p)return function(e){return f=e,p=setTimeout(y,t),g?v(e):d}(m);if(x)return clearTimeout(p),p=setTimeout(y,t),v(m)}return void 0===p&&(p=setTimeout(y,t)),d}return t=i(t)||0,o(n)&&(g=!!n.leading,u=(x="maxWait"in n)?a(i(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),E.cancel=function(){void 0!==p&&clearTimeout(p),f=0,c=m=s=p=void 0},E.flush=function(){return void 0===p?d:w(r())},E}},3805:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},4394:function(e,t,n){var o=n(2552),r=n(346);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},124:function(e,t,n){var o=n(9325);e.exports=function(){return o.Date.now()}},7350:function(e,t,n){var o=n(8221),r=n(3805);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}},9374:function(e,t,n){var o=n(4128),r=n(3805),i=n(4394),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-4fa32b2becba7a4a5dc7.js.map