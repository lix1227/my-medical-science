<template>
  <div id="container">
    <!--  标题  -->
    <div class="title">
      <h3>基于图神经网络</h3>
      <h1>医学语言语义解析</h1>
    </div>

    <!--  输入框  -->
    <div class="input">
      <input type="text" placeholder="请输入医学语言" class="myText" v-model="inputText">
      <input type="button" class="myBtn" value="提交"  @click="submit()"/>
    </div>

    <!--  结果展示  -->
    <div class="resTitle">
      <h3>解析结果</h3>
    </div>
    <div class="result" v-if="!isResult">
      <div class="resLeft">
        <img :src='imgResult' class="img-box" @dblclick="openModal()">
      </div>
      <div class="resRight">
        <span class="myLabel">诊断情况 ：</span>
        <span class="myResText">膀胱充盈可未见确切异常密度</span>
        <span class="myLabel">诊断标准词 ：</span>
        <span class="myResText">膀胱占位性病变</span>
      </div>
    </div>
    <!--  当数据没有返回，加载Loading组件  -->
    <div class="loadAnimate" v-else>
      <Loading></Loading>
    </div>
    <!--  空盒子，占用  -->
    <div class="blank"></div>

    <!--  双击查看大图浮层  -->
    <div id="myModal" v-show="isOpenModal">
      <img :src="imgResult">
    </div>
    <div id="myModal-layer" v-show="isOpenModal" @click="closeModal()" ></div>
  </div>
</template>

<script>
import { getInfo } from '@/request/api'
export default {
  name: 'index',
  components: {
    Loading: () => import('@/components/Loading')
  },
  data () {
    return {
      isResult: false,
      isOpenModal: false,
      imgResult: require('@/assets/example.jpg'),
      inputText: ''
    }
  },
  created () {

  },
  methods: {
    submit () {
      getInfo().then(res => {
        console.log(res)
      })
    },
    // 打开弹窗
    openModal () {
      const modalLayer = document.getElementById('myModal-layer')

      modalLayer.style.width = document.body.scrollWidth + 'px'
      modalLayer.style.height = document.body.scrollHeight + 'px'
      this.isOpenModal = true
    },
    // 关闭弹窗
    closeModal () {
      this.isOpenModal = false
    }
  }
}
</script>

<style lang="less" scoped>
// 整个容器样式
#container{
  margin: 0 10vw;
  padding-top: 5vh;
  text-align: center;
  box-shadow: #ccc 0 0 10px;
  height: auto;
}
//标题样式
.title h3{
  font-size: 28px;
  color: #ccc;
}
.title h1{
  font-size: 36px;
  margin-bottom: 5vh;
}
// 输入框样式
.input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
}
.input .myText{
  width: 50%;
  height: 46px;
  outline: none;
  border: 1px solid #ccc;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.input .myBtn{
  width: 6%;
  height: 50px;
  outline: none;
  border: 1px solid #ccc;
  border-left: none;
  cursor: pointer;
  background-color: black;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
// 结果展示区样式
.resTitle{
  height: 5vh;
  line-height: 5vh;
  padding: 0 3%;
  text-align: left;
  margin-bottom: 2vh;
}
.resTitle h3{
  width: auto;
  padding: 0 3%;
  border: 1px solid #ccc;
  background-color: #ccc;
  color: #fff;
  font-style: italic;
  font-size: 24px;
}
.result{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 3%;
}
.resLeft{
  width: 30%;
  height: auto;
}
.resLeft .img-box{
  height: 500px;
  border: 1px solid #ccc;
}
.resRight{
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 3%;
  border-left: 1px solid #ccc;
}
.resRight .myLabel{
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.resRight .myResText{
  text-indent: 36px;
  font-size: 18px;
  margin-bottom: 50px;
}
.loadAnimate{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
}
.blank{
  height: 100px;
}
// 弹窗图层
#myModal{
  position: absolute;
  z-index: 13;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%,-50%);
}

#myModal-layer{
  position: absolute;
  left:0;
  top:0;
  z-index:12;
  background:#000;
  -moz-opacity: 0.8;
  opacity:.80;
  filter: alpha(opacity=80);/* 只支持IE6、7、8、9 */
}
</style>
