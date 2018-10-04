<template>
  <div class="mpvue-picker">
    <div :class="{'pickerMask':showPicker}" @click="maskClick" catchtouchmove="true"></div>
    <div class="mpvue-picker-content " :class="{'mpvue-picker-view-show':showPicker}">
      <div class="mpvue-picker__hd">
        <div class="mpvue-picker__action" @click="pickerCancel">取消</div>
        <div class="mpvue-picker__action" @click="pickerConfirm">确定</div>
      </div>
      <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange">
        <block>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in yearList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in monthList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in dayList" :key="index">{{item.label}}</div>
          </picker-view-column>
        </block>
      </picker-view>
    </div>
  </div>
</template>

<script>
/* 由于 getMonth 返回 0-11（1月-12月），因此在设置的时候 month-1 */
const MIN_DATE = new Date(1900, 0, 1); // 最小支持日期 1990-01-01
const MAX_DATE = new Date(2099, 11, 31); // 最大支持日期 20199-12-31
const NOW_DATE = new Date(); // 当前日期
export default {
  data() {
    return {
      pickerValue: [], // picker-view 的 value
      showPicker: false,
      yearList: [],
      monthList: [],
      dayList: []
    };
  },
  props: {
    defaultDate: {
      type: Array,
      default: []
    }
  },
  created() {
    let year = this.defaultDate.length > 0 ? this.defaultDate[0] : NOW_DATE.getFullYear();
    let month = this.defaultDate.length > 0 ? this.defaultDate[1] - 1 : NOW_DATE.getMonth();
    let day = this.defaultDate.length > 0 ? this.defaultDate[2] : NOW_DATE.getDate();
    this.initDateList(year, month, day);
  },
  methods: {
    initDateList(year, month, day) {
      let yearList = [];
      let monthList = [];
      let dayList = [];
      let value = [];
      for (let i = MIN_DATE.getFullYear(); i < MAX_DATE.getFullYear(); i++) {
        if (i === year) {
          value.push(i - MIN_DATE.getFullYear());
        }
        yearList.push({ label: i + '年', value: i });
      }
      for (let i = 0; i < 12; i++) {
        if (i === month) {
          value.push(i);
        }
        monthList.push({ label: i + 1 + '月', value: i + 1 });
      }
      let dayLength = this.getDays(year, month + 1);
      for (let i = 0; i < dayLength; i++) {
        if (i === day) {
          value.push(i - 1);
        }
        dayList.push({ label: i + 1 + '日', value: i + 1 });
      }
      this.yearList = yearList;
      this.monthList = monthList;
      this.dayList = dayList;
      this.pickerValue = value;
    },
    pickerChange(e) {
      let value = e.mp.detail.value;
      if (this.pickerValue[0] !== value[0]) {
        console.log('first');
      } else if (this.pickerValue[1] !== value[1]) {
        console.log('second');
      } else {
        console.log('third');
      }
      this.pickerValue = value;
      console.log(value);
      // 当地一列滚动时
    },
    show() {
      setTimeout(() => {
        this.showPicker = true;
      });
    },
    /* 计算一个月多少天 （ month 传正常的月份数，不用 -1） */
    getDays(year, month) {
      if (month > 12 || month < 0) { return -1; }
      month = parseInt(month, 10);
      var date = new Date(year, month, 0);
      return date.getDate();
    }
  }
};
</script>

<style>
.pickerMask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mpvue-picker-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}
.mpvue-picker-view-show {
  transform: translateY(0);
}
.mpvue-picker__hd {
  display: flex;
  padding: 9px 15px;
  background-color: #fff;
  position: relative;
  text-align: center;
  font-size: 17px;
}
.mpvue-picker__hd:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.mpvue-picker__action {
  display: block;
  flex: 1;
  color: #1aad19;
}
.mpvue-picker__action:first-child {
  text-align: left;
  color: #888;
}
.mpvue-picker__action:last-child {
  text-align: right;
}
.picker-item {
  text-align: center;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mpvue-picker-view {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 238px;
  background-color: rgba(255, 255, 255, 1);
}
</style>
