import{s as h,n as c,o as E}from"../chunks/scheduler.k-kUyWhY.js";import{S as v,i as f,g as u,s as b,y as O,h as _,f as i,c as T,z as S,k as r,x as k,a as y}from"../chunks/index.rfkuZzMR.js";import{g as I}from"../chunks/globals.0cDDIVm6.js";const R=!0,B=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"})),{document:p}=I;function L(m){let n,a,t,l='<div class="svelte-18z53sd"><label for="key_3" class="svelte-18z53sd">OTP:</label> <input type="number" id="key_3" placeholder="ENTER OTP(KEY_3)" class="svelte-18z53sd"/> <button id="SendOtp" class="svelte-18z53sd">Send OTP</button> <br/> <label for="pass" class="svelte-18z53sd">PASSWORD:</label> <input type="text" id="pass" placeholder="ENTER PASSWORD" class="svelte-18z53sd"/> <br/> <label for="key_1" class="svelte-18z53sd">KEY-1:</label> <input type="number" id="key_1" placeholder="ENTER KEY_1" class="svelte-18z53sd"/><br/> <label for="key_2" class="svelte-18z53sd">KEY-2:</label> <input type="number" id="key_2" placeholder="ENTER KEY_2" class="svelte-18z53sd"/><br/> <button id="login" class="svelte-18z53sd">Login</button></div> <div id="msg_psw" class="svelte-18z53sd"></div>';return{c(){n=u("meta"),a=b(),t=u("div"),t.innerHTML=l,this.h()},l(s){const e=O("svelte-mqwn29",p.head);n=_(e,"META",{name:!0,content:!0}),e.forEach(i),a=T(s),t=_(s,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),S(t)!=="svelte-1va3imc"&&(t.innerHTML=l),this.h()},h(){p.title="LOGIN - DibashSapkota",r(n,"name","description"),r(n,"content",""),r(t,"class","MAIN svelte-18z53sd"),r(t,"id","main")},m(s,e){k(p.head,n),y(s,a,e),y(s,t,e)},p:c,i:c,o:c,d(s){s&&(i(a),i(t)),i(n)}}}function w(m){return E(()=>{const n="https://docs.dibash.info.np/api/?q=getAuth";async function a(){document.getElementById("msg_psw").innerHTML="PLEASE WAIT";let l=document.getElementById("pass").value,s=document.getElementById("key_1").value,e=document.getElementById("key_2").value,g=document.getElementById("key_3").value;console.log({pass:l,key_1:s,key_2:e});try{let d=await(await fetch(n+`&pass=${l}&key_1=${s}&key_2=${e}&key_3=${g}&a=1`)).json();if(d.CODE==1){localStorage.setItem("a",d.AUTH),window.location.href=window.location.href+"print";return}document.getElementById("msg_psw").innerHTML=`<br>
				<h1>INVALID PASSWORD</h1>
					<br>
					<p>${JSON.stringify(d)}</p>
				`}catch(o){console.log(o),document.getElementById("msg_psw").innerHTML=`<br>
				<h1>ERROR OCCORED!</h1>
					<br>
					${o}
					<p>${JSON.stringify(o)}</p>
				`}}async function t(){document.getElementById("msg_psw").innerHTML="Sending OTP";let e=await(await fetch("https://docs.dibash.info.np/api/?q=SEND_OTP&a=1")).json();if(e.CODE==1){document.getElementById("msg_psw").innerHTML=`
				<h1>OTP_SENT</h1>
				<h2>${e.REF_OTP}</h2>
				<p>${JSON.stringify(e)}</p>`;return}document.getElementById("msg_psw").innerHTML=`
			<h1>ERROR_OCCORED</h1>
					<p>${JSON.stringify(e)}</p>
				`}document.getElementById("login").addEventListener("click",()=>{a()}),document.getElementById("SendOtp").addEventListener("click",()=>{t()})}),[]}class M extends v{constructor(n){super(),f(this,n,w,L,h,{})}}export{M as component,B as universal};
