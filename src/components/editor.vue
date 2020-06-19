<template>
    <div>
        <h2>富文本编辑器</h2>
        <Editor id="tinymce" v-model="content" :init="DefaultInit"></Editor>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'

// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/lineheight'
import 'tinymce/icons/default/icons.min.js'
export default {
    name:"editor",
    components: { Editor },
    data() {
        return {
            content:'',
            DefaultInit: {
                language_url: '/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/tinymce/skins/ui/oxide', // 主题色
                height: 500,
                branding: false,
                menubar: false,
                theme: 'silver',
                plugins: 'lists  table wordcount contextmenu colorpicker textcolor selectImg lineheight',
                toolbar: ['bold italic underline strikethrough blockquote|forecolor backcolor|formatselect |fontsizeselect  | alignleft aligncenter alignright alignjustify | outdent indent |codeformat blockformats| removeformat undo redo ', 'bullist numlist toc pastetext|codesample charmap  hr insertdatetime |lists image media table link unlink |code searchreplace fullscreen help | selectImage lineheight']
            },
        };
    },
    props:{
        value:{
            type:String,
        }
    },
    mounted(){
        this.editorImgBtn();
        tinymce.init({
            ...this.DefaultInit,
            selector: '#tinymce',
        })
    },
    watch:{
        content:{
            handler:function(val,oldVal){
                // console.log('ooooo')
                this.$emit('input',val)
            }
        }
    },
    methods:{
        editorImgBtn(){
            let that = this;
            let global = tinymce.util.Tools.resolve('tinymce.PluginManager')
            global.add('selectImg', function (editor) {
                editor.ui.registry.addButton('selectImage',{
                    icon: 'image',  
                    tooltip: '插入图片',
                    disabled: false,
                    onAction(){
                        console.log('自定义图片选择')
                    }
                })
            });
        },
        onCheckChange(){
            let data = this.$refs['resources'].api_getcheckItem()[0]
            let url = '/' + data.folder_path + data.file_name
            this.editorGlobal.execCommand(
                'mceInsertContent',
                false,
                `<img alt="Smiley face" src="${this.domain+url}"/>`
            );
            this.dialogVisible = false;
        },
    }
};
</script>

<style>
</style>