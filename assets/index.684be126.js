import{r as u,_ as $}from"./react.7dc093bc.js";import{av as z,aw as A,ax as L,ay as B,v as R,a6 as F,a7 as G,a4 as H,e as S,f as N,r as V,a3 as X,a5 as q,$ as j,a1 as U}from"./index.8db7cc43.js";var J=z,K=A,Q="[object Symbol]";function Y(e){return typeof e=="symbol"||K(e)&&J(e)==Q}var Z=Y,ee=/\s/;function ne(e){for(var a=e.length;a--&&ee.test(e.charAt(a)););return a}var te=ne,ae=te,ie=/^\s+/;function re(e){return e&&e.slice(0,ae(e)+1).replace(ie,"")}var se=re,oe=se,w=L,ce=Z,D=0/0,le=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,de=parseInt;function me(e){if(typeof e=="number")return e;if(ce(e))return D;if(w(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=w(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=oe(e);var i=ue.test(e);return i||pe.test(e)?de(e.slice(2),i?2:8):le.test(e)?D:+e}var fe=me,ge=B,ve=function(){return ge.Date.now()},ye=ve,be=L,P=ye,W=fe,xe="Expected a function",Ne=Math.max,Se=Math.min;function he(e,a,i){var t,n,g,m,l,o,s=0,v=!1,y=!1,p=!0;if(typeof e!="function")throw new TypeError(xe);a=W(a)||0,be(i)&&(v=!!i.leading,y="maxWait"in i,g=y?Ne(W(i.maxWait)||0,a):g,p="trailing"in i?!!i.trailing:p);function h(r){var d=t,f=n;return t=n=void 0,s=r,m=e.apply(f,d),m}function O(r){return s=r,l=setTimeout(x,a),v?h(r):m}function _(r){var d=r-o,f=r-s,I=a-d;return y?Se(I,g-f):I}function b(r){var d=r-o,f=r-s;return o===void 0||d>=a||d<0||y&&f>=g}function x(){var r=P();if(b(r))return T(r);l=setTimeout(x,_(r))}function T(r){return l=void 0,p&&t?h(r):(t=n=void 0,m)}function C(){l!==void 0&&clearTimeout(l),s=0,t=o=n=l=void 0}function E(){return l===void 0?m:T(P())}function c(){var r=P(),d=b(r);if(t=arguments,n=this,o=r,d){if(l===void 0)return O(o);if(y)return clearTimeout(l),l=setTimeout(x,a),h(o)}return l===void 0&&(l=setTimeout(x,a)),m}return c.cancel=C,c.flush=E,c}var Ee=he,_e=globalThis&&globalThis.__rest||function(e,a){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i};R("small","default","large");var k=null;function Te(e,a){var i=a.indicator,t="".concat(e,"-dot");return i===null?null:j(i)?U(i,{className:S(i.props.className,t)}):j(k)?U(k,{className:S(k.props.className,t)}):u.exports.createElement("span",{className:S(t,"".concat(e,"-dot-spin"))},u.exports.createElement("i",{className:"".concat(e,"-dot-item")}),u.exports.createElement("i",{className:"".concat(e,"-dot-item")}),u.exports.createElement("i",{className:"".concat(e,"-dot-item")}),u.exports.createElement("i",{className:"".concat(e,"-dot-item")}))}function Ie(e,a){return!!e&&!!a&&!isNaN(Number(a))}var M=function(e){F(i,e);var a=G(i);function i(t){var n;H(this,i),n=a.call(this,t),n.debouncifyUpdateSpinning=function(o){var s=o||n.props,v=s.delay;v&&(n.cancelExistingSpin(),n.updateSpinning=Ee(n.originalUpdateSpinning,v))},n.updateSpinning=function(){var o=n.props.spinning,s=n.state.spinning;s!==o&&n.setState({spinning:o})},n.renderSpin=function(o){var s,v=o.getPrefixCls,y=o.direction,p=n.props,h=p.prefixCls,O=p.className,_=p.size,b=p.tip,x=p.wrapperClassName,T=p.style,C=_e(p,["prefixCls","className","size","tip","wrapperClassName","style"]),E=n.state.spinning,c=v("spin",h),r=S(c,(s={},N(s,"".concat(c,"-sm"),_==="small"),N(s,"".concat(c,"-lg"),_==="large"),N(s,"".concat(c,"-spinning"),E),N(s,"".concat(c,"-show-text"),!!b),N(s,"".concat(c,"-rtl"),y==="rtl"),s),O),d=V(C,["spinning","delay","indicator"]),f=u.exports.createElement("div",$({},d,{style:T,className:r}),Te(c,n.props),b?u.exports.createElement("div",{className:"".concat(c,"-text")},b):null);if(n.isNestedPattern()){var I=S("".concat(c,"-container"),N({},"".concat(c,"-blur"),E));return u.exports.createElement("div",$({},d,{className:S("".concat(c,"-nested-loading"),x)}),E&&u.exports.createElement("div",{key:"loading"},f),u.exports.createElement("div",{className:I,key:"container"},n.props.children))}return f};var g=t.spinning,m=t.delay,l=Ie(g,m);return n.state={spinning:g&&!l},n.originalUpdateSpinning=n.updateSpinning,n.debouncifyUpdateSpinning(t),n}return X(i,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()}},{key:"isNestedPattern",value:function(){return!!(this.props&&typeof this.props.children!="undefined")}},{key:"render",value:function(){return u.exports.createElement(q,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(n){k=n}}]),i}(u.exports.Component);M.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var Ce=M;export{Ce as S,Ee as d};
