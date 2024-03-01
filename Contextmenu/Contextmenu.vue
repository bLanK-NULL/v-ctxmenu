<template>
    <Teleport to="body">
        <div class="contextmenu">
            <div class="contextMask" @click.prevent.stop="$closeCtxmenu()" @contextmenu.prevent.stop="$closeCtxmenu()">
            </div>
            <div @contextmenu.prevent>
                <Box :pos="props.pos" :list="props.list"></Box>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import Box from './Box.vue'
import { $closeCtxmenu } from '../index';
const props = defineProps({
    pos: {
        type: Object,
        default: () => {
            return {
                left: 0,
                top: 0
            }
        }
    },
    list: {
        type: Array,
        default: () => {
            return []
        }
    }
})
</script>

<style lang="css" scoped>
.contextMask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999999999999 !important;
    opacity: 0.3;
}
</style>