/**
 * Created by hp on 2016/12/22.
 */
const btn = document.getElementsByTagName('input');
  const preBtn = btn[0];
  const inBtn = btn[1];
  const postBtn = btn[2];
  const treeRoot = document.getElementsByClassName('root')[0];
  let divList = [];
  let timer = null;
window.onload=function(){
  preBtn.onclick = function () {
    reset();
    preOrder(treeRoot);
    changeColor();
  }
  inBtn.onclick = function () {
    reset();
    inOrder(treeRoot);
    changeColor();
  }
  postBtn.onclick = function () {
    reset();
    postOrder(treeRoot);
    changeColor();
  }
}
/* 先序遍历 */
function preOrder(node){
  if(!(node==null)){
    divList.push(node);
    preOrder(node.firstElementChild);
    preOrder(node.lastElementChild);
  }
}
/* 中序遍历 */
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.firstElementChild);
    divList.push(node);
    inOrder(node.lastElementChild);
  }
}
/* 后序遍历 */
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.firstElementChild);
    postOrder(node.lastElementChild);
    divList.push(node);
  }
}
/* 颜色变化函数 */
function changeColor(){
  let i=0;
  divList[i].style.backgroundColor = 'blue';
  // eslint-disable-next-line func-names
  timer=setInterval(function(){
    // eslint-disable-next-line no-plusplus
    i++;
    if(i<divList.length){
      divList[i-1].style.backgroundColor="#fff";
      divList[i].style.backgroundColor="blue";
    }
    else{
      divList[divList.length-1].style.backgroundColor="#fff";
    }
  },500)
}
function reset(){
  divList=[];
  clearInterval(timer);
  const divs=document.getElementsByTagName("div");
  // eslint-disable-next-line no-plusplus
  for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor="#fff";
  }
}
const tree = {
    name:'a',
    left: {
        name:'b',
        left:{
            name:'v',
            left:{
                name: 't' 
            },
            right: {
                name:'e',
                left:{
                    name: 'r' 
                },
                right: {
                    name: '2'
                }
            }
        },
        right: {
            name: 'c'
        }
    },
    right: {
        name:'l',
        left:{
            name:'m',
            left:{
                name: 'x' 
            },
            right: {
                name:'t',
                left:{
                    name: 'o' 
                },
                right: {
                    name: 'y'
                }
            }
        },
        right: {
            name: 'q'
        }
    }
}
const order = []
function midOrder(node) {
    if(node.left){
        midOrder(node.left)
    }
    order.push(node.name)
    if(node.right){
        midOrder(node.right)
    }
}
console.log(midOrder(tree));

