async function runJailbreak(){window.jb_in_progress=!0,window.jb_started=!0;let a=document.getElementById("l2-redirect");a.style.opacity="0";let b=document.getElementById("post-jb-view");b.style.opacity="0",b.style.pointerEvents="none",document.getElementById("run-jb-parent").style.opacity="0",await sleep(500),document.getElementById("run-jb-parent").style.display="none",document.getElementById("jb-progress").style.opacity="1",await sleep(500),setTimeout(async()=>{await run_psfree()/*run_fontface()*/},100)}function onload_setup(){document.documentElement.hasAttribute("manifest")&&add_cache_event_toasts(),document.documentElement.style.overflowX="hidden";let a=document.getElementById("redirector-view"),b=document.getElementById("center-view"),c=document.getElementById("menu-overlay"),d=document.getElementById("menu-bar-wrapper"),e=!1;b.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="auto",b.style.opacity="1",a.style.pointerEvents="none",a.style.opacity="0",window.addEventListener("keydown",function(f){if(51==f.keyCode||118==f.keyCode){if(e||window.jb_in_progress||window.jb_started)return;e=!0,"-100%"==a.style.left?(a.style.left="-30%",setTimeout(()=>{a.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="none",b.style.opacity="0",a.style.pointerEvents="auto",a.style.opacity="1",a.style.left="0",b.style.left="30%",setTimeout(()=>{b.style.transition="none",b.style.left="100%",e=!1},420)},10)):(b.style.left="30%",setTimeout(()=>{b.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="auto",b.style.opacity="1",a.style.pointerEvents="none",a.style.opacity="0",a.style.left="-30%",b.style.left="0",setTimeout(()=>{a.style.transition="none",a.style.left="-100%",e=!1},420)},10))}if(52==f.keyCode||119==f.keyCode){if(e||window.jb_in_progress||window.jb_started)return;e=!0,"-100%"==c.style.top?(c.style.top="0",c.style.opacity="1",d.style.right="0",setTimeout(()=>{e=!1},420)):(c.style.opacity="0",d.style.right="-400px",setTimeout(()=>{c.style.top="-100%",e=!1},420))}})}async function switch_to_post_jb_view(){document.getElementById("run-jb-parent").style.display="none",document.getElementById("jb-progress").style.opacity="0",await sleep(1e3),document.getElementById("jb-progress").style.display="none",document.getElementById("post-jb-view").style.opacity="0",document.getElementById("post-jb-view").classList.add("opacity-transition"),document.getElementById("post-jb-view").style.display="flex",document.getElementById("post-jb-view").style.opacity="1",document.getElementById("credits").style.opacity="0",document.getElementById("credits").style.display="none"}function sleep(a){return new Promise(b=>setTimeout(b,a))}async function executePayload(a){window.local_payload_queue=[],showToast(payload_map[a].displayTitle+" added to queue.",1e3),window.local_payload_queue.push(payload_map[a])}executePayload(0);function showToast(a){const b=document.getElementById("toast-container"),c=document.createElement("div");c.className="toast",c.textContent=a,b.appendChild(c),c.offsetHeight,c.classList.add("show"),setTimeout(()=>{c.classList.add("hide"),c.addEventListener("transitionend",()=>{c.remove()})},2e3)}