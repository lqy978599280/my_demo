<template>
  <div  class="w">
    父组件：<br>
    <div class="fa">
      传数据给子组件：<input  type="text" v-model="msg_out">
      <button  @click="out">向子组件传输</button>
      <br>
      接受子组件数据：{{msg}} <br>

    </div>
    子组件：<br>
    <Child class="box"  @chuanzhi="sayHi" :show_msg="msgtochild">
        <div slot-scope="testScope">你在干几把</div>
    </Child>
      <el-radio>默认按钮</el-radio>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  components: {Child},
  data: function () {
    return {
      msg: '',
      msgtochild: '',
      msg_out: ''
    }
  },
  methods: {
    out: function () {
      this.msgtochild = this.msg_out
    },
    sayHi: function (message) {
      if (message !== '') {
        this.msg = message
        alert(this.$store.state.num)
      }
    }

  }
}
</script>

<style scoped>
  .w{
    width: 400px;
    text-align: left;
    margin: 0 auto;
  }
.box{
  margin-top: 40px;
}
  .fa{
    width: 400px;
    height: 50px;
    margin: 0 auto;
    border: 1px solid gainsboro;
    margin-bottom: 50px;
  }
</style>
