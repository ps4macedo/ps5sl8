async function runJailbreak(){window.jb_in_progress=!0,window.jb_started=!0;let a=document.getElementById("l2-redirect");a.style.opacity="0";let b=document.getElementById("post-jb-view");b.style.opacity="0",b.style.pointerEvents="none",document.getElementById("run-jb-parent").style.opacity="0",await sleep(500),document.getElementById("run-jb-parent").style.display="none",document.getElementById("jb-progress").style.opacity="1",await sleep(500),setTimeout(async()=>{let a=localStorage.getItem("wk_exploit_type");"psfree"==a?await run_psfree():"fontface"==a&&(await run_fontface())},100)}function wk_expoit_type_changed(a){localStorage.setItem("wk_exploit_type",a.target.value)}function onload_setup(){create_redirector_buttons(),document.documentElement.style.overflowX="hidden";let a=document.getElementById("redirector-view"),b=document.getElementById("center-view"),c=document.getElementById("menu-overlay"),d=document.getElementById("menu-bar-wrapper");null==localStorage.getItem("wk_exploit_type")&&localStorage.setItem("wk_exploit_type","psfree");let e=localStorage.getItem("wk_exploit_type");"psfree"==e?document.getElementById("wk-exploit-psfree").checked=!0:"fontface"==e&&(document.getElementById("wk-exploit-fontface").checked=!0);let f=!1;b.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="auto",b.style.opacity="1",a.style.pointerEvents="none",a.style.opacity="0",window.addEventListener("keydown",function(e){if(51==e.keyCode||118==e.keyCode){if(f||window.jb_in_progress||window.jb_started)return;f=!0,"-100%"==a.style.left?(a.style.left="-30%",setTimeout(()=>{a.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="none",b.style.opacity="0",a.style.pointerEvents="auto",a.style.opacity="1",a.style.left="0",b.style.left="30%",setTimeout(()=>{b.style.transition="none",b.style.left="100%",f=!1},420)},10)):(b.style.left="30%",setTimeout(()=>{b.style.transition="left 0.4s ease, opacity 0.25s ease",b.style.pointerEvents="auto",b.style.opacity="1",a.style.pointerEvents="none",a.style.opacity="0",a.style.left="-30%",b.style.left="0",setTimeout(()=>{a.style.transition="none",a.style.left="-100%",f=!1},420)},10))}if(52==e.keyCode||119==e.keyCode){if(f||window.jb_in_progress||window.jb_started)return;f=!0,"-100%"==c.style.top?(c.style.top="0",c.style.opacity="1",d.style.right="0",setTimeout(()=>{f=!1},420)):(c.style.opacity="0",d.style.right="-400px",setTimeout(()=>{c.style.top="-100%",f=!1},420))}}),create_redirector_buttons()}async function switch_to_post_jb_view(){document.getElementById("run-jb-parent").style.display="none",document.getElementById("jb-progress").style.opacity="0",await sleep(1e3),document.getElementById("jb-progress").style.display="none",document.getElementById("post-jb-view").style.opacity="0",document.getElementById("post-jb-view").classList.add("opacity-transition"),document.getElementById("post-jb-view").style.display="flex",document.getElementById("post-jb-view").style.opacity="1",document.getElementById("credits").style.opacity="0",document.getElementById("credits").style.display="none"}function sleep(a){return new Promise(b=>setTimeout(b,a))}async function executePayload(a){window.local_payload_queue=[],showToast(payload_map[a].displayTitle+" added to queue.",1100),window.local_payload_queue.push(payload_map[a])}executePayload(0);function showToast(a){const b=document.getElementById("toast-container"),c=document.createElement("div");c.className="toast",c.textContent=a,b.appendChild(c),c.offsetHeight,c.classList.add("show"),setTimeout(()=>{c.classList.add("hide"),c.addEventListener("transitionend",()=>{c.remove()})},2e3)}