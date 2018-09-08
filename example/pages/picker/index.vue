<template>
  <div class="mvpue-picker">
    <div class="page-hd">
      <div class="page-title">mvpue-picker 示例</div>
      <div class="page__desc">选中的值:</div>
      <div class="picker-text">{{pickerText}}</div>
    </div>
    <div class="page-bd">
      <button type="default" @click="showSinglePicker">单列选择</button>
      <button type="default" @click="showTimePicker">时间选择</button>
      <button type="default" @click="showMulPicker">多列选择</button>
      <button type="default" @click="showMulLinkageTwoPicker">二级联动选择</button>
      <button type="default" @click="showMulLinkageThreePicker">三级联动选择</button>
    </div>
    <mp-picker ref="mpvuePicker" :mode="mode" :deepLength=deepLength :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mp-picker>
  </div>
</template>

<script>
import mpPicker from '../../../src/picker';
export default {
  components: {
    mpPicker
  },
  data() {
    return {
      mode: 'selector',
      deepLength: 0, // 几级联动
      pickerValueDefault: [], // 初始化值
      pickerValueArray: [], // picker 数组值
      pickerText: '',
      pickerSingleArray: [
        {
          label: '住宿费',
          value: 10
        },
        {
          label: '活动费',
          value: 11
        },
        {
          label: '通讯费',
          value: 12
        },
        {
          label: '补助',
          value: 13
        }
      ],
      pickerMulArray: [
        [
          { label: '中国', value: 20 },
          { label: '美国', value: 22 },
          { label: '日本', value: 23 },
          { label: '俄罗斯', value: 24 }
        ],
        [
          { label: '茶', value: 25 },
          { label: '咖啡', value: 26 },
          { label: '寿司', value: 27 },
          { label: '奶酪', value: 28 }
        ],
        [
          { label: '歼20', value: 29 },
          { label: 'F22', value: 30 },
          { label: '秋月级', value: 31 },
          { label: 'T50', value: 32 }
        ]
      ],
      mulLinkageTwoPicker: [
        {
          label: '飞机票',
          value: 100,
          children: [
            {
              label: '经济舱',
              value: 101
            },
            {
              label: '商务舱',
              value: 102
            }
          ]
        },
        {
          label: '火车票',
          value: 200,
          children: [
            {
              label: '卧铺',
              value: 210
            },
            {
              label: '坐票',
              value: 202
            },
            {
              label: '站票',
              value: 203
            }
          ]
        },
        {
          label: '汽车票',
          value: 300,
          children: [
            {
              label: '快班',
              value: 301
            },
            {
              label: '普通',
              value: 302
            }
          ]
        }
      ],
      mulLinkageThreePicker: [
        {
          label: 'phone',
          value: 90,
          children: [
            {
              label: 'iphone',
              value: 91,
              children: [
                {
                  label: 'iphoneX',
                  value: 92
                },
                {
                  label: 'iphone8',
                  value: 93
                },
                {
                  label: 'iphone8 Plus',
                  value: 94
                }
              ]
            },
            {
              label: 'android',
              value: 80,
              children: [
                {
                  label: 'vivo',
                  value: 81
                },
                {
                  label: '魅族',
                  value: 82
                },
                {
                  label: '小米',
                  value: 83
                }
              ]
            }
          ]
        },
        {
          label: 'PC',
          value: 70,
          children: [
            {
              label: 'mac',
              value: 71,
              children: [
                {
                  label: 'macbook Pro',
                  value: 72
                },
                {
                  label: 'iMac',
                  value: 73
                },
                {
                  label: 'mackbook',
                  value: 74
                },
                {
                  label: 'mackbook air',
                  value: 75
                }
              ]
            },
            {
              label: 'windows',
              value: 60,
              children: [
                {
                  label: 'dell',
                  value: 61
                },
                {
                  label: 'surface',
                  value: 62
                },
                {
                  label: 'thinkpad',
                  value: 63
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
    },
    // 单列
    showSinglePicker() {
      this.pickerValueArray = this.pickerSingleArray;
      this.mode = 'selector';
      this.pickerValueDefault = [];
      this.$refs.mpvuePicker.show();
    },
    // 时间选择
    showTimePicker() {
      this.mode = 'timeSelector';
      this.pickerValueDefault = [1, 2];
      this.$refs.mpvuePicker.show();
    },
    // 多列选择
    showMulPicker() {
      this.pickerValueArray = this.pickerMulArray;
      this.mode = 'multiSelector';
      this.pickerValueDefault = [1, 1, 1];
      this.$refs.mpvuePicker.show();
    },
    // 二级联动选择
    showMulLinkageTwoPicker() {
      this.pickerValueArray = this.mulLinkageTwoPicker;
      this.mode = 'multiLinkageSelector';
      this.deepLength = 2;
      this.pickerValueDefault = [1, 0];
      this.$refs.mpvuePicker.show();
    },
    // 三级联动选择
    showMulLinkageThreePicker() {
      this.pickerValueArray = this.mulLinkageThreePicker;
      this.mode = 'multiLinkageSelector';
      this.deepLength = 3;
      this.pickerValueDefault = [1, 1, 1];
      this.$refs.mpvuePicker.show();
    },
    showPickerView() {
      this.$refs.mpvuePicker.show();
    },
    onConfirm(e) {
      console.log(e);
      if (this.mode === 'selector') {
        this.pickerText = e.label;
      } else if (this.mode === 'timeSelector') {
        this.pickerText = e.label;
      } else if (this.mode === 'multiSelector') {
        this.pickerText = e.label;
      } else if (
        this.mode === 'multiLinkageSelector' &&
        this.deepLength === 2
      ) {
        this.pickerText = e.label;
      } else if (
        this.mode === 'multiLinkageSelector' &&
        this.deepLength === 3
      ) {
        this.pickerText = e.label;
      }
    }
  }
};
</script>

<style>
.page-hd {
  padding: 40px;
}
.page-title {
  font-size: 20px;
  font-weight: 400px;
}
.page-bd {
  padding: 15px;
}
.picker-text,
.page__desc {
  margin-top: 10px;
}
button {
  margin-top: 15px;
}
</style>
