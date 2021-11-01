/** 获取根节点 */
const rootDom = document.getElementById("root")

const setNode = (text: string) => {
  if (rootDom) {
    rootDom.innerHTML = text;
  }
}
setNode("哈哈哈哈")