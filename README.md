# 结合Promise&Axios&localStorage&Echarts，从“天行数据”获取某省油价，存入本地缓存，并使用echarts展示为图表

Combined with promise & Axios & local storage & ecarts,Save to localStorage，various oil prices of a province are obtained from "Tianxing data" and displayed as charts by ecarts


## 依赖列表:
1. "axios": "^0.21.1",
2. "echarts": "^5.0.2",
3. "less": "^4.1.1",
4. "less-loader": "^5.0.0",

### 2/24 测试把localStorage换为sessionStorage，存储和读取方式基本一致(附加两者区别)
1. localStorage和sessionStorage一样都是用来存储客户端临时信息的对象。

2. 他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。

3. localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。

4. sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。

5. 不同浏览器无法共享localStorage或sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。这里需要注意的是，页面及标 签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。