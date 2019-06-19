<template>
  <div id="Menu">
    <h1>Menu</h1>
    <div id="myChart" style="width: 100vw;height:100vh; background-color: dimgray"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      //先把假的数据剥离出来，写在前面，这里是根节点与各个节点
      let dataRoot = [
        {
          name: "总资产\n0.07%",
          symbolSize: 190,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy@2x.png"),
          label: {
            fontSize: 20,
            lineHeight: 26,
            position: "inside"
          },
          value: "100"
        },
        {
          name: "金融同业\n0.07%",
          symbolSize: 88,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy.png"),
          value: "101"
        },
        {
          name: "金融市场\n0.07%",
          symbolSize: 50,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy 6.png"),
          value: "102"
        },
        {
          name: "小企业\n0.07%",
          symbolSize: 88,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy 4.png"),
          value: "103"
        },
        {
          name: "资源管理部\n0.07%",
          symbolSize: 117,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy 5.png"),
          value: "104"
        },
        {
          name: "特管中心\n0.07%",
          symbolSize: 79,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy.png"),
          value: "105"
        },
        {
          name: "票据金融\n0.07%",
          symbolSize: 57,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy 5.png"),
          value: "106"
        },
        {
          name: "货币市场或资金池\n0.07%",
          symbolSize: 88,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy.png"),
          value: "107"
        },
        {
          name: "公司\n0.07%",
          symbolSize: 74,
          symbol:
            "image://" +
            require("../assets/028ee1596b7b01a8012193a3dcd852 copy 4.png"),
          value: "108"
        }
      ];

      //这里是根节点与各个节点之间的关系
      let linkRoot = [
        {
          source: "总资产\n0.07%",
          target: "金融同业\n0.07%",
          value: 180
        },
        {
          source: "总资产\n0.07%",
          target: "金融市场\n0.07%",
          value: 450
        },
        {
          source: "总资产\n0.07%",
          target: "小企业\n0.07%",
          value: 400
        },
        {
          source: "总资产\n0.07%",
          target: "资源管理部\n0.07%",
          value: 280
        },
        {
          source: "总资产\n0.07%",
          target: "特管中心\n0.07%",
          value: 350
        },
        {
          source: "总资产\n0.07%",
          target: "票据金融\n0.07%",
          value: 460
        },
        {
          source: "总资产\n0.07%",
          target: "货币市场或资金池\n0.07%",
          value: 430
        },
        {
          source: "总资产\n0.07%",
          target: "公司\n0.07%",
          value: 530
        }
      ];

      //这里才开始引入组件
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option = {
        //提示框组件
        tooltip: {},
        //数据更新动画的时长
        animationDurationUpdate: 1500,
        //初始动画的缓动效果：
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            //类型:图标类
            type: "graph",
            //数据，不解释
            data: dataRoot,
            //线的连接关系，value是线的长短
            links: linkRoot,
            //组件理容器的距离
            top: "5%",
            //bottom: '10%',
            //布局:none---不采用任何布局，使用节点提供的x,y作为节点的位置
            // circular---采用环形布局
            // force---采用力引导布局
            layout: "force",
            force: {
              initLayout: "circular",
              //边的两个节点之间的距离
              edgeLength: [100, 110],
              //节点与节点之间的斥力因子
              repulsion: [1500, 3000]
            },
            symbol: "circle",
            //鼠标拖动缩放和平移漫游，默认不开启
            roam: false,
            //边两端的标记类型，可以是一个数组分别指定两端
            edgeSymbol: ["circle", "circle"],
            //边两端的标记大小，可以是一个数组分别指定大小
            edgeSymbolSize: [0, 0],

            // 节点里面的文字的样式
            label: {
              normal: {
                show: true,
                fontWeight: "bold",
                fontSize: 14,
                color: "#fff",
                lineHeight: 19,
                fontFamily: "MicrosoftYaHei",
                position: "top",
                distance: -10
              }
            },
            //线条样式
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
                color: "rgba(93,177,249,1)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);

      myChart.on("click", function(params) {
        //将上面实例化的表格赋给option
        let option = myChart.getOption();
        //根节点
        if (params.value == 100) {
          option.series[0].data = dataRoot;
          myChart.setOption(option, true);
        }
      });
      //window.addEventListener("resize", this.chart.resize);
    }
  }
};
</script>


<style>
</style>
