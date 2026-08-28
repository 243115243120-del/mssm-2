document.addEventListener("DOMContentLoaded",()=>{
 const processInstagram=()=>{if(window.instgrm?.Embeds)window.instgrm.Embeds.process()};
 processInstagram();
 window.addEventListener("load",processInstagram);
 const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".navlinks");
 if(menu)menu.addEventListener("click",()=>nav?.classList.toggle("open"));
 document.querySelectorAll(".navlinks>a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
 document.querySelectorAll(".dropbtn").forEach(btn=>btn.addEventListener("click",e=>{if(innerWidth<=1000){e.preventDefault();btn.parentElement.classList.toggle("open")}}));
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const modal=document.getElementById("eventModal");
 const open=()=>{if(!modal)return;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"};
 const close=()=>{if(!modal)return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""};
 document.querySelectorAll("[data-open-event]").forEach(x=>x.addEventListener("click",open));document.querySelectorAll("[data-close-event]").forEach(x=>x.addEventListener("click",close));modal?.addEventListener("click",e=>{if(e.target===modal)close()});document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});

});
