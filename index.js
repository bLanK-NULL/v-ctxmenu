import { reactive, ref, createApp } from 'vue';
import Contextmenu from './Contextmenu/Contextmenu.vue';

const VCtxmenu = {
    mounted: (el, binding, vnode) => {
        const root = document.createElement('div');
        const pos = reactive({
            left: 0,
            top: 0,
        })
        const isVisible = ref(false)
        const app = createApp(Contextmenu, {
            list: binding.arg,
            pos,
            isVisible
        })
        app.mount(root)
        app.config.globalProperties.$closeCtxmenu = function (val = true) {
            isVisible.value = !val;
        }
        el.addEventListener('contextmenu', function (e) {
            e.stopPropagation();
            e.preventDefault();
            el.appendChild(root)
            isVisible.value = true;
            pos.left = e.x;
            pos.top = e.y;
        })
    },

}

export default VCtxmenu;