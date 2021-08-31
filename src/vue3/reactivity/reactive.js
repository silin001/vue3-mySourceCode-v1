import { isObject } from './shared/utils'
import { mutableHandle } from './mutableHandle'
function reactive (target) {
  return createReactiveObject(target, mutableHandle)
}
function createReactiveObject (target, baseHandler) {
  if (!isObject(target)) {
    return target
  }
  const observer = new Proxy(target, baseHandler)
  return observer
}

export {
  reactive
}