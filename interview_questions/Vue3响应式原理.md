### 题目
vue3响应式原理
vue 3 的响应式系统基于 Proxy 对象，它允许 Vue 拦截对象的读写操作，并在这些操作发生时执行特定的逻辑。
与 Vue 2 中基于 Object.defineProperty 的响应式实现相比，Proxy 提供了更强大的功能，能够监听更多类型的操作（如属性的添加和删除），并且能够在性能上获得提升。

Vue 3 通过以下几个核心概念来实现响应式系统：
* reactive：创建一个深层响应式对象，可以跟踪所有嵌套属性的变化。
* ref：用于将基本类型的数据变成响应式，或者用来封装引用类型的对象。
* computed：用于定义计算属性，可以根据其他响应式数据动态计算值。
* effect：用来收集依赖和触发副作用的函数。

#### Vue 3 响应式系统的工作原理
##### Proxy的使用
Vue 3 中的 reactive 和 ref 都是基于 Proxy 实现的。Proxy 是 ES6 引入的一种功能，可以用来定义对象基本操作的行为（如读、写、删除等）。
通过 Proxy，Vue 可以拦截对对象的访问和修改，做到对数据的追踪和监听。 例如，当你访问 state.count 时，Proxy 会拦截 get 操作，从而记录依赖；
当你修改 state.count 时，Proxy 会拦截 set 操作，从而触发依赖更新。
##### 依赖追踪和响应式更新
Vue 的响应式系统基于 “依赖追踪（Dependency Tracking）” 和 “副作用（Reactivity Effects）”。
当你访问一个响应式数据时，Vue 会追踪哪些数据被访问，并把这些数据作为依赖收集起来。
一旦这些依赖发生了变化，Vue 会触发相应的副作用来更新视图。
##### 代码示例：简单实现
```js
let activeEffect;
 
function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      if (activeEffect) {
        track(target, key);
      }
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      trigger(target, key);
      return result;
    }
  });
}
 
const targetMap = new WeakMap();
 
function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  dep.add(activeEffect);
}
 
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}
 
function effect(fn) {
  activeEffect = fn;
  fn(); // 执行函数并触发依赖收集
  activeEffect = null;
}
```
