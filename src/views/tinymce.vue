<template>
  <div class="tiny">
    <editor  :value="content" @input="editorInp"></editor>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
          content:'',
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