<template>
    <Teleport to="body">
        <div class="contextmenu" v-if="props.isVisible.value">
            <div class="contextMask" @click="(e) => {
                e.stopPropagation();
                $closeCtxmenu()
            }"></div>
            <Box :pos="props.pos" :list="props.list"></Box>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import Box from './Box.vue'
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
    },
    isVisible: {
        type: Object,
        default: ref(false)
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