import{r as i,i as M}from"./react.7dc093bc.js";import{F as c,d as O,u as V,a as q,k as z,R as C,C as h,S as $}from"./device-type.faefe4b8.js";import{s as y}from"./styles.module.a3c36dde.js";import{j as d,a as e}from"./index.0dee21a9.js";import{S as G}from"./index.84677191.js";import"./lodash.71f9f2ff.js";const{Option:P}=$,Z=()=>{const[f]=c.useForm(),{isPhone:p}=O(),[v,S]=i.exports.useState([]),[n,w]=i.exports.useState([]),[g,I]=i.exports.useState(""),[L,b]=i.exports.useState(""),[A,m]=i.exports.useState(!1);V(()=>{F()});async function F(){const{types:t}=await q();S(t||[]),t.length>0&&(f.setFieldsValue({category:t[0]}),x(t[0]))}async function x(t){m(!0);try{I(t);let{date:a,results:s}=await z(t);b(a),w(s),B(t,s),m(!1)}catch{m(!1)}}function B(t,a){for(let s=0;s<a.length;s++){const o=a[s];j(o,t)}}function j(t,a,s){const o=`${a}-${t.title}`,E=document.getElementById(`${o}`);let N=M(E),R=document.getElementById(`${o}-title`);const{xAxis:T,title:k,lines:D,sql:H}=t;R.innerHTML=`
        <span style='display: flex'>
          <span style='font-weight: bold; padding-right: 10px;'>${k}:</span><span>${H}</span>
        </span>
      `,N.setOption({xAxis:{type:"category",data:T},yAxis:{type:"value",name:"s"},tooltip:{trigger:"axis",extraCssText:"z-index: 10",formatter(r){let l="";return r.forEach((u,W)=>{l+=`<div>${u.marker} ${u.name}:${u.data}</div>`}),l}},series:[{data:D.map(r=>r.toFixed(3)),type:"bar",itemStyle:{normal:{label:{show:!0},color:function(r){var l=["#5470c6","#91cc75","#fac858","#ee6666"];return l[r.dataIndex]}}}}]})}return d("div",{children:[e(c,{form:f,initialValues:{category:g},children:d(C,{gutter:20,children:[e(h,{span:p?24:4,children:e(c.Item,{name:"category",label:"Category",children:e($,{onChange:x,children:v.map((t,a)=>e(P,{value:t,children:t},a))})})}),e(h,{span:p?24:6,children:e(c.Item,{label:"Latest",children:d("span",{children:[L," (",n&&n.length>0&&n[0].version,")"]})})})]})}),e(G,{spinning:A,children:e(C,{className:y.allChartWrap,style:{minHeight:"400px"},gutter:10,children:n==null?void 0:n.map(t=>e(h,{span:p?24:8,style:{marginBottom:"20px"},children:d("div",{className:y.content,children:[e("div",{className:y.title,id:`${g}-${t.title}-title`}),e("div",{style:{height:"300px",width:"100%"},id:`${g}-${t.title}`})]})},t.title))})})]})};export{Z as default};
