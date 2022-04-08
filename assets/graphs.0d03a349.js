import{r as l,i as U,L as Y}from"./react.7dc093bc.js";import{F as m,u as Z,g as O,a as _,b as ee,R as j,C as v,S as $}from"./index.e570f4fd.js";import{B as te,D as ae,h as ne,f as G}from"./tools.efc9aa35.js";import{j as x,a as t,m as se}from"./index.43338a1a.js";import"./lodash.71f9f2ff.js";const{RangePicker:re}=ae,{Option:V}=$,ue=()=>{const[E,N]=l.exports.useState([]),[y,A]=l.exports.useState(""),[C]=m.useForm(),[w,P]=l.exports.useState([]),[F,I]=l.exports.useState(!0),[q,b]=l.exports.useState(!1),[B,K]=l.exports.useState({filterDate:[],startIndex:0,endIndex:-1}),[M]=l.exports.useState([{name:"Raw",value:"raw"}]),[D,R]=l.exports.useState([]);Z(()=>{W()}),l.exports.useEffect(()=>{F||T()},[F]);async function T(){const e=await O(y);R(e),L(y,e,!1)}async function W(){const{types:e}=await _();if(N(e||[]),e.length>0){C.setFieldsValue({category:e[0]}),I(!0),A(e[0]);const a=await O(e[0]);R(a),L(e[0],a,!0)}}async function L(e,a,k){const o=a.length;b(!0);try{for(let s=0;s<o;s++){const d=a[s];ee(e,d).then(i=>{s===0&&P(i==null?void 0:i.xAxis),X(e,d,i,s,k)})}b(!1)}catch(s){console.log(s),b(!1)}}function X(e,a,k,o,s){const d=`${e}-${a}`,i=document.getElementById(`${d}`);if(i){let c=U(i),{legend:f,lines:r,sql:J,title:Q,version:h,xAxis:S}=k;if(!s){const{startIndex:n,endIndex:g,filterDate:u}=B;B.endIndex===-1?(S=u,r.map(p=>{p.data=p.data.slice(n)}),h=h.slice(n)):(S=u,r.map(p=>{p.data=p.data.slice(n,g+1)}),h=h.slice(n,g+1))}r==null||r.map(n=>n.type="line"),I(!0),c.setOption({legend:{data:f,y:"bottom"},title:{left:"center",text:`${Q}`},tooltip:{trigger:"axis",position:function(n){return o%3==2?"right":o%3==1?n:[n[0]+10,0]},formatter(n){let g=`<div style="width: 500px; white-space: normal;word-wrap: break-word;">${J}</div>${n[0].axisValue}<span style="display:inline-block;padding-left: 20px;">${h[n[0].dataIndex]}</span></br>`;return n.forEach((u,p)=>{g+=`<div>${u.marker} ${u.seriesName}:${u.data}</div>`}),g}},xAxis:{data:S,name:"date"},yAxis:{name:"s"},series:r}),c=null}}function z(e){return e>ne().add(0,"days")}async function H(){const{category:e,date:a,kind:k}=C.getFieldsValue();A(e);let o=null,s=null;a&&a.length>1&&(o=G(a[0]),s=G(a[1]));const d=w.indexOf(o),i=w.indexOf(s),c=d===-1?0:d,f=i;let r=[];if(f===-1?r=w.slice(c):r=w.slice(c,f+1),r.length<=0){se.warning("No data was generated for this time range");return}I(!1),K({filterDate:r,startIndex:c,endIndex:f})}return x("div",{children:[t(m,{form:C,initialValues:{kind:"raw",category:y},children:x(j,{gutter:10,children:[t(v,{span:6,children:t(m.Item,{name:"date",label:"Date range",children:t(re,{disabledDate:z,style:{width:"100%"}})})}),t(v,{span:4,children:t(m.Item,{name:"kind",label:"Graph kind",children:t($,{children:M.map((e,a)=>t(V,{value:e.value,children:e.name},a))})})}),t(v,{span:4,children:t(m.Item,{name:"category",label:"Category",children:t($,{children:E.map((e,a)=>t(V,{value:e,children:e},a))})})}),t(te,{loading:q,type:"primary",onClick:H,children:"Submit"})]})}),x("div",{children:[x("div",{style:{marginBottom:"20px"},children:[x("div",{children:["See ",t(Y,{to:"/compare",children:"compare page"})," for descriptions of what the names mean."]}),t("div",{children:"Note: pink in the graphs represent data points that are interpolated due to missing data. Interpolated data is simply the last known data point repeated until another known data point is found."})]}),t(j,{id:"allChartWrap",children:D==null?void 0:D.map(e=>t(v,{span:8,style:{marginBottom:"20px"},children:t("div",{style:{height:"300px",width:"100%"},id:`${y}-${e}`})},e))})]})]})};export{ue as default};
