
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { resolve } from '../build-tools/module-build/webpack/config/webpack.base'

function initMixin(Vue) {
    Vue.prototype._init = function(options) {
     // ...当执行new Vue时，进行一系列初始化并挂载
    }
  }
  function initGlobalAPI(Vue) {
    Vue.set方法
    Vue.delete方法
    Vue.nextTick方法
    
   /*  ...
    
    内置组件:
    keep-alive
    transition
    transition-group
    
    ... */
    
    initUse(Vue):Vue.use方法
    initMixin(Vue):Vue.mixin方法
    initExtend(Vue):Vue.extend方法
    initAssetRegisters(Vue):Vue.component，Vue.directive，Vue.filter方法
  }
function Vue(options) {
//   ...
  // eslint-disable-next-line no-underscore-dangle
  this._init(options)
}
Vue.prototype._init = function(options) {

    const vm = this
    vm._uid = uid++  // 唯一标识
    
    vm.$options = mergeOptions(  // 合并options
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
    // ...
    initLifecycle(vm) // 开始一系列的初始化
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm)
    initState(vm)
    initProvide(vm)
    callHook(vm, 'created')
    initInjections(vm)
    initState(vm)
    initProvide(vm)
    // ...
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
  function initLifecycle(vm) {
    const options = vm.$options  // 之前合并的属性
    
    let parent = options.parent;
    if (parent && !options.abstract) { //  找到第一个非抽象父组件
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent
      }
      parent.$children.push(vm)
    }
    
    vm.$parent = parent  // 找到后赋值
    vm.$root = parent ? parent.$root : vm  // 让每一个子组件的$root属性都是根组件
    
    vm.$children = []
    vm.$refs = {}
    
    vm._watcher = null
    // ...
    vm._isDestroyed = false
    vm._isBeingDestroyed = false
  }
  function initEvents (vm) {
    vm._events = Object.create(null)  // 事件中心
    // ...
    const listeners = vm.$options._parentListeners  // 经过合并options得到的
    if (listeners) {
      updateComponentListeners(vm, listeners) 
    }
  }
  // initRender(vm): 主要作用是挂载可以将render函数转为vnode的方法。
  function initRender(vm) {
    vm._vnode = null
    ...
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)  //转化编译器的
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)  // 转化手写的
    ...
  }
   function initInjections(vm) {
    const result = resolveInject(vm.$options.inject, vm) // 找结果
    if(result) { // 如果有结果
        toggleObserving(false)  // 刻意为之不被响应式
        Object.keys(result).forEach(key => {
          ...
          defineReactive(vm, key, result[key])
        })
        toggleObserving(true)
      }
    function resolveInject (inject, vm) {
        if (inject) {
          const result = Object.create(null)
          const keys = Object.keys(inject)  //省略Symbol情况
      
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const provideKey = inject[key].from
            let source = vm
            while (source) {
              if (source._provided && hasOwn(source._provided, provideKey)) { //hasOwn为是否有
                result[key] = source._provided[provideKey]
                break
              }
              source = source.$parent
            }
          ... vue@2.5后新增设置inject默认参数相关逻辑
          }
          return result
        }
      }
      function initState(vm) {
        ...
        const opts = vm.$options
        if(opts.props) initProps(vm, opts.props)
        if(opts.methods) initMethods(vm, opts.methods)
        if(opts.data) initData(vm)
        ...
        if(opts.computed) initComputed(vm, opts.computed)
        if(opts.watch && opts.watch !== nativeWatch) {
          initWatch(vm, opts.watch)
        }
      }
    // ...
  }
initMixin(Vue) // 定义_init方法。
stateMixin(Vue) // 定义数据相关的方法$set,$delete,$watch方法。
eventsMixin(Vue) // 定义事件相关的方法$on，$once，$off，$emit。
lifecycleMixin(Vue) // 定义_update，及生命周期相关的$forceUpdate和$destroy。
renderMixin(Vue) // 定义$nextTick，_render将render函数转为vnode。
//