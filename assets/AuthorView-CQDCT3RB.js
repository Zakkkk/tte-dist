import{O as f,r as m,o as A,a as d,c as p,w as g,S as y,j as o,U as v,d as a,t as r,A as n,e as C,f as I,g as b,h as k}from"./index-DvtMwVRS.js";const B=a("br",null,null,-1),w=a("hr",{class:"hr-line"},null,-1),V=3,N={__name:"AuthorView",setup(x){const _=f(),s=m([]),c=_.params.authorId,u=m(1);let i=0;const l=(t=>{for(let e=0;e<o.length;e++)if(o[e].id==t)return o[e];console.log(`unmatched author: id ${t}`)})(c);async function h(){v(c,V,i,!1).then(t=>{console.log(t),s.value.push(...t.articles),i+=t.numberOfArticlesEvaluated,u.value=t.remaining})}return A(async()=>{h()}),(t,e)=>(d(),p(y,null,{default:g(()=>[a("h1",null,r(n(l).name),1),a("p",null,r(n(l).biography),1),B,a("h4",null,"Latest Articles From "+r(n(l).name),1),w,C(I,{articles:s.value},null,8,["articles"]),u.value!=0?(d(),b("button",{key:0,onClick:h},"Load more articles")):k("",!0)]),_:1}))}};export{N as default};
