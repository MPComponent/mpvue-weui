<template>
  <div class="dev-test=content">
    <picker class="weui-btn" mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
      <button type="default">日期选择器</button>
    </picker>
    <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2016-09-01'
    };
  },
  mounted() {
    this.drawCanvas();
  },
  methods: {
    bindDateChange() {
      // TODO
    },
    drawCanvas() {
      /* eslint-disable */
      // 使用 wx.createContext 获取绘图上下文 context
      var context = wx.createCanvasContext('firstCanvas')

      context.setStrokeStyle("#00ff00")
      context.setLineWidth(5)
      context.rect(0, 0, 200, 200)
      context.stroke()
      context.setStrokeStyle("#ff0000")
      context.setLineWidth(2)
      context.moveTo(160, 100)
      context.arc(100, 100, 60, 0, 2 * Math.PI, true)
      context.moveTo(140, 100)
      context.arc(100, 100, 40, 0, Math.PI, false)
      context.moveTo(85, 80)
      context.arc(80, 80, 5, 0, 2 * Math.PI, true)
      context.moveTo(125, 80)
      context.arc(120, 80, 5, 0, 2 * Math.PI, true)
      context.stroke()
      context.draw()
    }
  }
};
</script>

<style>
</style>
