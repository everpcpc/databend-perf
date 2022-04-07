import{r as i,i as H,L as J}from"./react.7dc093bc.js";import{F as D,u as Q,g as j,a as Y,b as Z,R as E,C,S as F}from"./index.aeae7cdd.js";import{B as _,D as ee,h as A}from"./index.fbaac9bb.js";import{j as v,a as t,m as te}from"./index.41f8e2ca.js";import"./lodash.71f9f2ff.js";function ae(g){var u=i.exports.useRef(g);return u.current=g,u}var ne=function(u){var p=ae(u);i.exports.useEffect(function(){return function(){p.current()}},[])},re=ne;const{RangePicker:se}=ee,{Option:G}=F,ue=()=>{const[g,u]=i.exports.useState([]),[p,R]=i.exports.useState(""),[I]=D.useForm(),[x,V]=i.exports.useState([]),[B,b]=i.exports.useState(!0),[L,U]=i.exports.useState({filterDate:[],startIndex:0,endIndex:-1}),[N]=i.exports.useState([{name:"Raw",value:"raw"}]),[$,M]=i.exports.useState([]);Q(()=>{T()}),re(()=>{}),i.exports.useEffect(()=>{B||P()},[B]);async function P(){const e=await j(p);M(e),O(p,e,!1)}async function T(){let e=await Y();if(u(e||[]),e.length>0){I.setFieldsValue({category:e[0]}),b(!0),R(e[0]);const a=await j(e[0]);M(a),O(e[0],a,!0)}}async function O(e,a,k){const l=a.length;for(let s=0;s<l;s++){const d=a[s],o=await Z(e,d);s===0&&V(o==null?void 0:o.xAxis),q(e,d,o,s,k)}}function q(e,a,k,l,s){const d=`${e}-${a}`,o=document.getElementById(`${d}`);let c=H(o),{legend:f,lines:r,sql:X,title:z,version:y,xAxis:S}=k;if(!s){const{startIndex:n,endIndex:w,filterDate:h}=L;L.endIndex===-1?(S=h,r.map(m=>{m.data=m.data.slice(n)}),y=y.slice(n)):(S=h,r.map(m=>{m.data=m.data.slice(n,w+1)}),y=y.slice(n,w+1))}r==null||r.map(n=>n.type="line"),b(!0),c.setOption({legend:{data:f,y:"bottom"},title:{left:"center",text:`${z}`},tooltip:{trigger:"axis",position:function(n){return l%3==2?"right":l%3==1?n:[n[0]+10,0]},formatter(n){let w=`<div style="width: 500px; white-space: normal;word-wrap: break-word;">${X}</div>${n[0].axisValue}<span style="display:inline-block;padding-left: 20px;">${y[n[0].dataIndex]}</span></br>`;return n.forEach((h,m)=>{w+=`<div>${h.marker} ${h.seriesName}:${h.data}</div>`}),w}},xAxis:{data:S,name:"date"},yAxis:{name:"s"},series:r}),c=null}function K(e){return e>A().add(0,"days")}async function W(){const{category:e,date:a,kind:k}=I.getFieldsValue();R(e);let l=null,s=null;a&&a.length>1&&(l=A(a[0]).format("yyyy-MM-DD"),s=A(a[1]).format("yyyy-MM-DD"));const d=x.indexOf(l),o=x.indexOf(s),c=d===-1?0:d,f=o;let r=[];if(f===-1?r=x.slice(c):r=x.slice(c,f+1),r.length<=0){te.warning("There is no birth data for this time range");return}b(!1),console.log("realDate:",x,c,f,r),U({filterDate:r,startIndex:c,endIndex:f})}return v("div",{children:[t(D,{form:I,initialValues:{kind:"raw",category:p},children:v(E,{gutter:10,children:[t(C,{span:6,children:t(D.Item,{name:"date",label:"Date range",children:t(se,{disabledDate:K,style:{width:"100%"}})})}),t(C,{span:4,children:t(D.Item,{name:"kind",label:"Graph kind",children:t(F,{children:N.map((e,a)=>t(G,{value:e.value,children:e.name},a))})})}),t(C,{span:4,children:t(D.Item,{name:"category",label:"Category",children:t(F,{children:g.map((e,a)=>t(G,{value:e,children:e},a))})})}),t(_,{type:"primary",onClick:W,children:"Submit"})]})}),v("div",{children:[v("div",{style:{marginBottom:"20px"},children:[v("div",{children:["See ",t(J,{to:"/compare",children:"compare page"})," for descriptions of what the names mean."]}),t("div",{children:"Note: pink in the graphs represent data points that are interpolated due to missing data. Interpolated data is simply the last known data point repeated until another known data point is found."})]}),t(E,{id:"allChartWrap",children:$==null?void 0:$.map(e=>t(C,{span:8,style:{marginBottom:"20px"},children:t("div",{style:{height:"300px",width:"100%"},id:`${p}-${e}`})},e))})]})]})};export{ue as default};
