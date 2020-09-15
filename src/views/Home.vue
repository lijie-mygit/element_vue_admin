<template>
  <div class="home">
    <!-- <img :src="imgUrl" alt=""> -->
    <div class="compositeBox">
      <div class="composite" ref="box">
        <img src="../assets/2.png" alt />
        <img src="../assets/1.png" alt />
      </div>
      <div class="mask"></div>
    </div>
    <p style="text-align:left">saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <!-- <el-button type="primary" @click="getpic()">生成报告</el-button> -->
    <el-button type="primary" @click="getpic2()">打开弹出层</el-button>
    <h1>图表数据</h1>
    <div id="pdfDom" ref="pdf">
      <h1>图表数据</h1>
    </div>
    <el-button type="primary" @click="getPdf1()">生成报告</el-button>
    <div style="width: 600px;height:400px;" ref="bar"></div>
    <div style="width: 900px;height:400px;" ref="pie"></div>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="70%" center>
      <img :src="imgUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  components: {},
  data() {
    return {
      html: "",
      imgUrl: "",
      centerDialogVisible: false,
    };
  },
  mounted() {
    this.setChartBar();
    this.setChartPie();
  },
  methods: {
    getpic() {
      var that = this;
      html2canvas(that.$refs.box, {
        useCORS: true,
        backgroundColor: null,
        //                 width:window.screen.availWidth,
        //                 height:window.screen.availHeight,
        //                 windowWidth:that.$refs.box.scrollWidth,
        //                 windowHeight:that.$refs.box.scrollHeight,
        //                 x:window.pageXOffset,
        //                 y:window.pageYOffset
      }).then(function (canvas) {
        that.imgUrl = canvas.toDataURL(); //将canvas转为base64图片(eg. data:image/png;base64,ijskjlkj)
        //             　　that.imgUrl =canvas.toDataURL("image/png").replace("image/png","image/octet-stream")
      });
    },
    getpic2() {
      this.centerDialogVisible = true;
      var that = this;
      html2canvas(that.$refs.box, {
        useCORS: true,
        //                 backgroundColor:null,
        //                 width:window.screen.availWidth,
        //                 height:window.screen.availHeight,
        //                 windowWidth:that.$refs.box.scrollWidth,
        //                 windowHeight:that.$refs.box.scrollHeight,
        //                 x:window.pageXOffset,
        //                 y:window.pageYOffset
      }).then(function (canvas) {
        that.imgUrl = canvas.toDataURL(); //将canvas转为base64图片(eg. data:image/png;base64,ijskjlkj)
        //             　　that.imgUrl =canvas.toDataURL("image/png").replace("image/png","image/octet-stream")
      });
    },
    setChartBar() {
      //基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs["bar"]);
      console.log(myChart);
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
          },
        ],
      });
    },
    setChartPie() {
      //基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs["pie"]);
      console.log(myChart);
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他",
          ],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              position: "inner",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "直达", selected: true },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎" },
            ],
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center",
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0,
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33,
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2,
                },
              },
            },
            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* .compositeBox {
  position: fixed;
  .composite {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
    // visibility: hidden;
    img {
      width: 100px;
      height: 100px;
      &:last-child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;
  }
} */
</style>
<style>
.compositeBox {
  position: fixed;
  z-index: -1;
}
.compositeBox .composite {
  display: inline-block;
  width: 550px;
  height: 400px;
  position: relative;
}
.compositeBox .composite img {
  /* width: 100%; */
  /* height: 100px; */
}
.compositeBox .composite img:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.compositeBox .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
}
</style>
