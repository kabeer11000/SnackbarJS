/*
Kabeers Snackbar JS (0.0.1)
Author(s) Kabeer Jaffri, Kabeers Network
©2020 Kabeers Network All Rights Reserved
*/
const Snackbar=async(data,callback,beforeShow=()=>{},afterShow=()=>{})=>{!data.time?data.time=4000:"";let div=document.createElement("DIV");div.className="snackbar k-snackbar-js";div.innerHTML=`<div class="content"><div class="msg">${data.message}</div></div></div>`;if(data.actiontext){let btn=document.createElement("DIV");btn.className="action";btn.innerText=data.actiontext;btn.addEventListener("click",callback);div.querySelector(".content").appendChild(btn);}
document.body.appendChild(div);div.offsetTop;div.classList.add("show");beforeShow();setTimeout(async()=>{document.addEventListener("click",async(e)=>{if(e.target!==div&&!div.contains(e.target)){await close()}})});setTimeout(()=>{close()},data.time);const close=async()=>{div.classList.remove("show");div.addEventListener("transitionend",async()=>{div.remove();afterShow();});}};
