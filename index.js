import { createApp } from 'vue';
import Contextmenu from './Contextmenu/Contextmenu.vue';

let $closeCtxmenu = null;
let $lastEvent = null;
const VCtxmenu = {
    mounted: (el, binding) => {
        el.addEventListener('contextmenu', handleContextmenu)
        function handleContextmenu(e) {
            $lastEvent = e;
            e.stopPropagation();
            e.preventDefault();
            let root = document.createElement('div')
            const pos = {
                left: e.x,
                top: e.y,
            }
            const app = createApp(Contextmenu, {
                list: binding.arg,
                pos,
            })
            app.mount(root)
            $closeCtxmenu = function () {
                app.unmount()
                el.removeChild(root)
                root = null;
            }
            el.appendChild(root)
        }
    },
}


export {
    VCtxmenu,
    $closeCtxmenu,
    $lastEvent,
};