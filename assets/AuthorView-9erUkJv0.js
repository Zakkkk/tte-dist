import{_ as v,A as I,r as p,o as w,a as n,c as k,w as f,S as C,j as c,G as S,d as e,t as l,u as a,g as b,e as g,h as A,f as B,p as V,i as x}from"./index-C2jGE1eo.js";import{e as E}from"./popper.esm-DHm4SaRM.js";const u=r=>(V("data-v-107b654d"),r=r(),x(),r),F={class:"name"},N={key:0},L={class:"author-badges"},O=u(()=>e("span",{class:"author-badge material-symbols-outlined"}," stylus ",-1)),$=u(()=>e("br",null,null,-1)),j=u(()=>e("hr",{class:"hr-line"},null,-1)),D=3,G={__name:"AuthorView",setup(r){const y=I(),i=p([]),d=y.params.authorId,h=p(1);let m=0;const o=(t=>{for(let s=0;s<c.length;s++)if(c[s].id==t)return c[s];console.log(`unmatched author: id ${t}`)})(d);async function _(){S(d,D,m,!1).then(t=>{console.log(t),i.value.push(...t.articles),m+=t.numberOfArticlesEvaluated,h.value=t.remaining})}return w(async()=>{_()}),(t,s)=>(n(),k(C,null,{default:f(()=>[e("h1",F,l(a(o).name),1),a(o).badges&&a(o).badges.length!=0?(n(),b("div",N,[e("div",L,[g(a(E),{content:"This user is one of the first 15 contributors",arrow:"",hover:"",placement:"bottom"},{default:f(()=>[O]),_:1})])])):A("",!0),e("p",null,l(a(o).biography),1),$,e("h4",null,"Latest Articles From "+l(a(o).name),1),j,g(B,{articles:i.value},null,8,["articles"]),h.value!=0?(n(),b("button",{key:1,onClick:_},"Load more articles")):A("",!0)]),_:1}))}},W=v(G,[["__scopeId","data-v-107b654d"]]);export{W as default};