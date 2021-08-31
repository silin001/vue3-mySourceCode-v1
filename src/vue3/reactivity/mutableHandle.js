import { isObject } from './shared/utils'
import { reactive } from './reactive'
function createGetter () {
  return function get (target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    console.log('获取', res)
    if (isObject(res)) {
      return reactive(res)
    }
    return res
  }

}
function createSetter () {
  return function set (target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    console.log('设置', res)
    return res
  }
}
const get = createGetter(), set = createSetter()
const mutableHandle = {
  get,
  set
}
export {
  mutableHandle
}