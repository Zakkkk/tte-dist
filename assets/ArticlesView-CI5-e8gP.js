import{_ as b,r as u,o as S,a as h,c as y,w as A,S as I,l as k,b as L,v as N,d as l,n as m,e as $,f as x,g as B,h as V,p as O,i as F,j as p}from"./index-BBxe-Wcj.js";const M={get:s=>JSON.parse(localStorage.getItem(s)),set:(s,a)=>{localStorage.setItem(s,JSON.stringify(a))}},c=s=>(O("data-v-9131bd33"),s=s(),F(),s),J=c(()=>l("h3",null,"Search for an article",-1)),j=c(()=>l("p",null,"Begin by typing an article title, tags or related words.",-1)),z=c(()=>l("br",null,null,-1)),D={class:"articles-filters"},E={class:"button-group"},T=c(()=>l("br",null,null,-1)),U={key:0,class:"loadmore"},g=6,W={__name:"ArticlesView",setup(s){const a=u(!0),o=u(""),r=u([]),d=u(1);let v=0;function f(e){a.value!=e&&(a.value=e,M.set("newestFirst",e),r.value=[],v=0,i())}async function i(){k(g,v,null,!a.value).then(e=>{r.value.push(...e.articles),v+=e.articles.length,d.value=e.remaining})}function w(e){for(let t=0;t<p.length;t++)if(p[t].id==e)return p[t].name;return`author #${e} not found`}function _(e){return e.title.toLowerCase().includes(o.value.toLowerCase())||e.content.toLowerCase().includes(o.value.toLowerCase())||w(e.author).toLowerCase().includes(o.value.toLowerCase())}function C(){r.value.filter(e=>_(e)).length<g&&d.value>0&&i().then(e=>{})}return S(async()=>{i()}),(e,t)=>(h(),y(I,null,{default:A(()=>[J,j,L(l("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.value=n),type:"text",placeholder:"Search for an article...",onInput:C},null,544),[[N,o.value]]),z,l("div",D,[l("div",E,[l("button",{onClick:t[1]||(t[1]=n=>f(!0)),class:m(`button-small ${a.value==1?"button-active":""}`)}," Newest ",2),l("button",{onClick:t[2]||(t[2]=n=>f(!1)),class:m(`button-small ${a.value==0?"button-active":""}`)}," Oldest ",2)])]),T,$(x,{articles:r.value.filter(n=>_(n))},null,8,["articles"]),d.value!=0?(h(),B("div",U,[l("button",{onClick:t[3]||(t[3]=n=>i())},"More Articles")])):V("",!0)]),_:1}))}},G=b(W,[["__scopeId","data-v-9131bd33"]]);export{G as default};