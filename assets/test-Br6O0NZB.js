import"./index-BPFUryKd.js";function r(e,n){return e.replaceAll(n,"").replaceAll("&nbsp;"," ")}async function g(e){let n=`https://en.wiktionary.org/api/rest_v1/page/definition/${e}`,i=new RegExp(`< *\\/? *[a-z]+ *( [a-z]+="[^<>"]+" *)* *\\/? *>|<[^>]*>|
.*|Alternative spelling of.*`,"ig"),a=await(await fetch(n)).json(),l=`<h1>${e}</h1>`,o="";for(let p of a.en)for(let t of p.definitions)if(t.definition){let f=r(t.definition,i);if(o+=f,l+=`
<p>${f}</p>`,t.examples)for(let s of t.examples){let c=r(s,i);console.log(c)}}console.log(o),document.getElementById("content").innerHTML=l}g("bear");
