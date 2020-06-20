<template>
  <div class="tiny">
    <div>
      <h2>富文本编辑器</h2>
      <editor  :value="content" @input="editorInp"></editor>
    </div>
    <div>
      <h2>富文本渲染</h2>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
          content:'考虑到那是开了电脑',
    };
  },
  methods:{
    editorInp(res){
      console.log(res)
      this.content=res;
    }
  }
};
</script>

<style lang="scss" scoped>
.tiny{
  display: flex;
}
</style>