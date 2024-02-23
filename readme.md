# 1.Install v-ctxmenu

```shell
npm install v-ctxmenu

```

# 2.global Register

```js
//main.js
import VCtxmenu from 'v-ctxmenu'
...
app.directive('v-ctxmenu', VCtxmenu)
```

> Partial registration is also supported

# 3.usage

```html
<template>
	<div v-ctxmenu:[lists]> this is a line </div>
</template>
<script setup>
const lists = [{
	title: 'default',
	fn: ()=>{console.log('I will be triggered when this item is selected')}
}]
</script>
```

use `$closeCtxmenu()` in template to close context menu
