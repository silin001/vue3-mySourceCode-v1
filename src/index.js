// import { reactive } from '@vue/reactivity'
import { reactive } from './vue3/reactivity'
// reactive ->es6  proxy 代理
// 就是composoition API
const state = reactive({
  name: 'Eldora',
  count: 1,
  list: ['Sauer']
})
state.age = 18
state.list.push(2)
console.log(state)