# 1.Install v-ctxmenu

```shell
npm install v-ctxmenu

```

# 2.global Register

```js
//main.js
import {VCtxmenu, $closeCtxmenu, $lastEvent} from 'v-ctxmenu'
...
app.directive('ctxmenu', VCtxmenu)
```

> Partial registration is also supported

# 3.usage

```html
<template>
	<div v-ctxmenu:[lists]> this is a line </div>
</template>
<script setup>
import {$closeCtxmenu, $lastEvent} from 'v-ctxmenu'
const lists = [{
  title: '1',
  fn: null,
  children: [{
    title: '1-1',
    fn: () => console.log('1-1 was clicked')
  }]
}, {
  title: '2',
  children: [{
    title: '2-1',
    fn: () => console.log('2-1 was clicked')
  }, {
    title: '2-2',
    fn: () => console.log('2-2 was clicked')
  }, {
    title: '2-3',
    children: [{
      title: '2-3-1',
      fn: () => console.log('2-3-1 was clicked')
    }]
  }]
}]
</script>
```

1. use `$closeCtxmenu()` in template to close context menu
2. use `$lastEvent` get the last event  that is contextmenu event.
