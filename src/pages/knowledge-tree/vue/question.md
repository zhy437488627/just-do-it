请问runtime和runtime-only这两个版本的区别？
1.最明显的就是大小的区别，带编译器会比不带的版本大6kb。
2.编译的时机不同，编译器是运行时编译，性能会有一定的损耗；运行时版本是借助loader做的离线编译，运行性能更高。
Vue.filter
Vue.directive