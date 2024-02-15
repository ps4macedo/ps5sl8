async function runJailbreak() {
    window.jb_in_progress = true;
    window.jb_started = true;
    let l2_redirector = document.getElementById("l2-redirect");
    l2_redirector.style.opacity = "0";

    let postjb = document.getElementById("post-jb-view");
    postjb.style.opacity = "0";
    postjb.style.pointerEvents = "none";

    document.getElementById("run-jb-parent").style.opacity = "0";
    await sleep(500);
    document.getElementById("run-jb-parent").style.display = "none";
    document.getElementById("jb-progress").style.opacity = "1";
    await sleep(500);

//    create_payload_buttons();
    setTimeout(async () => {
//        let wk_exploit_type = localStorage.getItem("wk_exploit_type");
//        if (wk_exploit_type == "psfree") {
            await run_psfree();
//        } else if (wk_exploit_type == "fontface") {
//            await run_fontface();
//        }
    }, 100);
}

function wk_expoit_type_changed(event) { 
    localStorage.setItem("wk_exploit_type", event.target.value);
}

function onload_setup() {

    if (document.documentElement.hasAttribute("manifest")) {
        add_cache_event_toasts();
    }

    create_redirector_buttons();

    document.documentElement.style.overflowX = 'hidden';
    let redirector = document.getElementById("redirector-view");
    let center_view = document.getElementById("center-view");

    let menu_overlay = document.getElementById("menu-overlay");
    let menu = document.getElementById("menu-bar-wrapper");

    if (localStorage.getItem("wk_exploit_type") == null) {
        localStorage.setItem("wk_exploit_type", "psfree");
    }

//    let wk_exploit_type = localStorage.getItem("wk_exploit_type");
//    if (wk_exploit_type == "psfree") {
        document.getElementById("wk-exploit-psfree").checked = true;
//    } else if (wk_exploit_type == "fontface") {
//        document.getElementById("wk-exploit-fontface").checked = true;
//    }

    let isTransitionInProgress = false;

    center_view.style.transition = "left 0.4s ease, opacity 0.25s ease";
    center_view.style.pointerEvents = "auto";
    center_view.style.opacity = "1";
    redirector.style.pointerEvents = "none";
    redirector.style.opacity = "0";

    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 51 || event.keyCode == 118) {
            // seems like the browser failes to load any new pages after the jailbreak...
            if (isTransitionInProgress || window.jb_in_progress || window.jb_started) {
                return;
            }
            isTransitionInProgress = true;
            if (redirector.style.left == "-100%") {
                redirector.style.left = "-30%";
                setTimeout(() => {
                    redirector.style.transition = "left 0.4s ease, opacity 0.25s ease";

                    center_view.style.pointerEvents = "none";
                    center_view.style.opacity = "0";
                    redirector.style.pointerEvents = "auto";
                    redirector.style.opacity = "1";

                    redirector.style.left = "0";
                    center_view.style.left = "30%";
                    setTimeout(() => {
                        center_view.style.transition = "none";
                        center_view.style.left = "100%";
                        isTransitionInProgress = false;
                    }, 420);
                }, 10);

            } else {
                center_view.style.left = "30%";

                setTimeout(() => {
                    center_view.style.transition = "left 0.4s ease, opacity 0.25s ease";

                    center_view.style.pointerEvents = "auto";
                    center_view.style.opacity = "1";
                    redirector.style.pointerEvents = "none";
                    redirector.style.opacity = "0";

                    redirector.style.left = "-30%";
                    center_view.style.left = "0";
                    setTimeout(() => {
                        redirector.style.transition = "none";
                        redirector.style.left = "-100%";
                        isTransitionInProgress = false;
                    }, 420);
                }, 10);


            }

        }


        if (event.keyCode == 52 || event.keyCode == 119) {
            if (isTransitionInProgress || window.jb_in_progress || window.jb_started) {
                return;
            }
            isTransitionInProgress = true;
            if (menu_overlay.style.top == "-100%") {
                menu_overlay.style.top = "0";
                menu_overlay.style.opacity = "1";
                menu.style.right = "0";
                setTimeout(() => {
                    isTransitionInProgress = false;
                }, 420);
            } else {
                menu_overlay.style.opacity = "0";
                menu.style.right = "-400px";
                setTimeout(() => {
                    menu_overlay.style.top = "-100%";
                    isTransitionInProgress = false;
                }, 420);
                
            }

        }
    });

    create_redirector_buttons();
}

async function switch_to_post_jb_view() {
    // should already be none but just in case
    document.getElementById("run-jb-parent").style.display = "none";

    document.getElementById("jb-progress").style.opacity = "0";
    await sleep(1000);
    document.getElementById("jb-progress").style.display = "none";

    document.getElementById("post-jb-view").style.opacity = "0";
    document.getElementById("post-jb-view").classList.add("opacity-transition");
    document.getElementById("post-jb-view").style.display = "flex";
    document.getElementById("post-jb-view").style.opacity = "1";

    document.getElementById("credits").style.opacity = "0";
    document.getElementById("credits").style.display = "none";

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executePayload(i) {
	window.local_payload_queue = [];
    showToast(payload_map[i].displayTitle + " added to queue.", 1000);
    window.local_payload_queue.push(payload_map[i]);
}

executePayload(0);

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Trigger reflow and enable animation
    toast.offsetHeight;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.add('hide');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 2000);
}
