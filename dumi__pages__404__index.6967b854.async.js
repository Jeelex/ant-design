(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3509],{674434:function(c,d,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;const a=u(t(918781));function u(r){return r&&r.__esModule?r:{default:r}}const i=a;d.default=i,c.exports=i},929975:function(c,d,t){"use strict";t.r(d);var a=t(639389),u=t.n(a),i=t(385956),r=t(667294),g=t(216906),v=t(941346),x=t(373638),y=t(785893),A={"docs/spec/download":"docs/resources","docs/spec/work-with-us":"docs/resources"},m=function(T){var _=T.router,b=(0,i.useLocation)(),C=b.pathname,s=x.KE(C);return(0,r.useEffect)(function(){for(var l=Object.keys(A),p=0;p<l.length;p+=1){var e=l[p];C.includes(e)&&_.replace(x.J1("/".concat(A[e]),s).pathname)}var f=window,o=f.yuyanMonitor;o==null||o.log({code:11,msg:"Page not found: ".concat(location.href,"; Source: ").concat(document.referrer)})},[]),(0,y.jsx)(g.ZP,{status:"404",title:"404",subTitle:s?"\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u8C8C\u4F3C\u4E0D\u5B58\u5728\uFF1F":"Sorry, the page you visited does not exist.",extra:(0,y.jsx)(i.Link,{to:x.J1("/",s),children:(0,y.jsx)(v.ZP,{type:"primary",icon:(0,y.jsx)(a.HomeOutlined,{}),children:s?"\u8FD4\u56DE Ant Design \u9996\u9875":"Back to home page"})})})};d.default=m},373638:function(c,d,t){"use strict";t.d(d,{J1:function(){return m},Is:function(){return C},Fy:function(){return T},KE:function(){return A},qE:function(){return O}});var a=t(661227),u=t(805574),i=t(97857),r=t(385564),g=t(842348),v=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),x={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":v?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function y(s,l,p,e){var f=s.map(function(n){return n.meta}).filter(function(n){return!n.skip}),o=[],D=function(h,P){return(h.order||0)-(P.order||0)};f.sort(D).forEach(function(n){if(n.category&&(n.category=n.category[l]||n.category),n.type&&(n.type=n.type[l]||n.type),n!=null&&n.title&&(n.title=n.title[l]||n.title),!n.category){o.push(n);return}if(n.category==="Components"&&n.type){var h=o.find(function(E){return(E==null?void 0:E.title)===n.type});h||(h={type:"type",title:n.type,children:[],order:e[n.type]},o.push(h)),h.children=h.children||[],h.children.push(n);return}var P=o.find(function(E){return(E==null?void 0:E.title)===n.category});if(P||(P={type:"category",title:n.category,children:[],order:p[n.category]},o.push(P)),P.children=P.children||[],n.type){var M=P.children.filter(function(E){return(E==null?void 0:E.title)===n.type})[0];M||(M={type:"type",title:n.type,children:[],order:e[n.type]},P.children.push(M)),M.children=M.children||[],M.children.push(n)}else P.children.push(n)});function I(n){return n.sort(D).map(function(h){return h.children?_objectSpread(_objectSpread({},h),{},{children:I(h.children)}):h})}return I(o)}function A(s){return/-cn\/?$/.test(s)}function m(s,l,p,e){var f=s.startsWith("/")?s:"/".concat(s),o;if(l?f==="/"?o="/index-cn":f.endsWith("/")?o=f.replace(/\/$/,"-cn/"):(o="".concat(f,"-cn"),o=o.replace(/(-cn)+/,"-cn")):o=/\/?index-cn/.test(f)?"/":f.replace("-cn",""),e){var D=e[l?"zhCN":"enUS"];o+="#".concat(D)}return{pathname:o,search:p}}function O(s){var l="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",p=new Image,e,f=function(D){e||(e=!0,p.src="",s(D))};return p.onload=function(){return f("responded")},p.onerror=function(){return f("error")},p.src=l,setTimeout(function(){return f("timeout")},1500)}function T(){var s="test",l=window.localStorage;try{return l.setItem(s,"1"),l.removeItem(s),!0}catch(p){return!1}}function _(s){return new Promise(function(l,p){var e=document.createElement("script");e.type="text/javascript",e.src=s,e.onload=l,e.onerror=p,document.head.appendChild(e)})}function b(s){var l=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(s))return"";var p=flattenDeep(s.filter(function(e){if(Array.isArray(e)){var f=_slicedToArray(e,1),o=f[0];return o==="p"}return!1}).map(function(e){var f=flatten(e),o=_toArray(f),D=o[0],I=o.slice(1),n=I.filter(function(h){return typeof h=="string"&&!l.includes(h)}).join("");return[D,n]})).find(function(e){return e&&typeof e=="string"&&!l.includes(e)});return p}var C=function(){return x}},862488:function(c){function d(t,a){for(var u=-1,i=a.length,r=t.length;++u<i;)t[r+u]=a[u];return t}c.exports=d},121078:function(c,d,t){var a=t(862488),u=t(137285);function i(r,g,v,x,y){var A=-1,m=r.length;for(v||(v=u),y||(y=[]);++A<m;){var O=r[A];g>0&&v(O)?g>1?i(O,g-1,v,x,y):a(y,O):x||(y[y.length]=O)}return y}c.exports=i},909454:function(c,d,t){var a=t(644239),u=t(637005),i="[object Arguments]";function r(g){return u(g)&&a(g)==i}c.exports=r},137285:function(c,d,t){var a=t(562705),u=t(135694),i=t(701469),r=a?a.isConcatSpreadable:void 0;function g(v){return i(v)||u(v)||!!(r&&v&&v[r])}c.exports=g},385564:function(c,d,t){var a=t(121078);function u(i){var r=i==null?0:i.length;return r?a(i,1):[]}c.exports=u},842348:function(c,d,t){var a=t(121078),u=1/0;function i(r){var g=r==null?0:r.length;return g?a(r,u):[]}c.exports=i},135694:function(c,d,t){var a=t(909454),u=t(637005),i=Object.prototype,r=i.hasOwnProperty,g=i.propertyIsEnumerable,v=a(function(){return arguments}())?a:function(x){return u(x)&&r.call(x,"callee")&&!g.call(x,"callee")};c.exports=v},701469:function(c){var d=Array.isArray;c.exports=d}}]);
