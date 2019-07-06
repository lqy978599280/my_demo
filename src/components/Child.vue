<template>
    <div class="son">
        子组件信息：<input type="text" v-model="msg">
        <button v-on:click="pass">
            向父组件传输
        </button>
        <br>
        接收父组件数据：{{show_msg}}<br>
        <slot testScope="testScope"></slot>
        <slot :testScope="test"></slot>
    </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['show_msg'],
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    pass: function () {
      this.$emit('chuanzhi', this.msg)
    }
  }
}
</script>

<style scoped>
    .son {
        width: 400px;
        height: 50px;
        border: 1px solid gainsboro;
        margin: 0 auto;
    }
</style>
