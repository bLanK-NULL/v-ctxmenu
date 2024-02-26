<template>
    <div class="box" ref="box">
        <ul ref="boxUl">
            <li v-for="(item, index) of props.list" @click="($event) => {
                if (!item.children) {
                    item.fn && item.fn($event)
                    $closeCtxmenu()
                }
            }" :key="index" @mouseover="curIdx = index">
                {{ item.title }}
                <svg v-if="item.children" t="1708875539800" class="icon right-arrow" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="834" width="16" height="16">
                    <path
                        d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
                        p-id="835"></path>
                </svg>
                <Box v-if="(curIdx === index) && item.children" :pos="sonPos" :list="item.children"></Box>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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
const box = ref(null)
const boxUl = ref(null)
const curIdx = ref(-1)
//怎么用计算属性给出子节点的pos, 子节点在父节点右边刚好和父节点右边重合
const sonPos = computed(() => {
    return {
        left: props.pos.left + box.value.getBoundingClientRect().width,
        top: props.pos.top + boxUl.value.getBoundingClientRect().height / props.list.length * curIdx.value,
    }
})
</script>

<style lang="css" scoped>
/* 清除ul 和 li的默认样式 */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    margin: 0;
    padding: 0;
}

/* .box 是fixed定位，这是一个问题
因为子 box无法相对于父亲box定位
但是有方法绕过
*/
.box {
    position: fixed;
    left: v-bind("props.pos.left + 5 + 'px'");
    top: v-bind("props.pos.top + 5 + 'px'");
    z-index: 99999999999999 !important;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9fb;
}

.box li {
    box-sizing: border-box;
    min-width: 130px;
    font-size: 14px;
    padding: 8px 16px;
    font-weight: 400;
    /* 字体 微软lighter*/
    font-family: "Microsoft YaHei", "微软雅黑", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    position: relative;
    user-select: none;
}

.box li:hover {
    background-color: #c7c7cc;
    cursor: pointer;
}

.box .right-arrow {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
}
</style>