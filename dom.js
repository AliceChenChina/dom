window.dom = {
  create(htmlString){
    // 创建节点
    let template = document.createElement('template');
    template.innerHTML=htmlString.trim();
    return template.content.firstChild;
  },
  after(node,brother){
    // 新增弟弟
    node.parentNode.insertBefore(brother,node.nextSibling);
  },
  before(node,elderBrother) {
    // 新增哥哥
    node.parentNode.insertBefore(elderBrother, node);
  },
  append(parent, child) {
    // 增加儿子
    parent.appendChild(node)
  },
  remove(node){
    // 删除后台节点
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    // 清空子节点
    const array = [];
    let x = node.firstChild;
    while(x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value){
    // 读写属性
    if (arguments.length === 3) {
      node.setAttribute(name,value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name)
    }
  },
  text(node, string){
    // 读写文本内容
    if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = string;
      }else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html (node, string) {
    // 读取html内容
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value){
    // 修改style
    if(arguments.length===3){
      // 属性赋值
      node.style[name] = value
    }else if(arguments.length===2){
      if(typeof name === 'string'){
        // 获取属性值
        return node.style[name]
      }else if(name instanceof Object){
        // 属性赋值
        const object = name
        for(let key in object){
          node.style[key] = object[key]
        }
      }
    }
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  each(nodeList, fn){
    for(let i=0;i<nodeList.length;i++){
      fn.call(null, nodeList[i])
    }
  }

};
