<template>
  <div class="weui-rate">
    <span v-for="(item, index) in itemClasses" class="weui-rate-item" :class="item" :key="index" @click="rateClick(index)"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rateValueClick: 0
    };
  },
  props: {
    rateRange: {
      type: Number,
      default: 5
    },
    rateValue: {
      type: Number,
      default: 0
    },
    rateClass: {
      type: String,
      default: ''
    },
    isSupportClick: {
      type: Boolean,
      defult: false
    }
  },
  computed: {
    itemClasses() {
      const CLS_ON = 'weui-rate-item-on ' + this.rateClass;
      const CLS_HALF = 'weui-rate-item-half ' + this.rateClass;
      const CLS_OFF = 'weui-rate-item-off ' + this.rateClass;
      let result = [];
      let rateValue = this.rateValueClick ? Math.floor(this.rateValueClick * 2) / 2 : Math.floor(this.rateValue * 2) / 2;
      let hasDecimal = rateValue % 1 !== 0;
      let integer = Math.floor(rateValue);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < this.rateRange) {
        result.push(CLS_OFF);
      }
      return result;
    }
  },
  methods: {
    rateClick(index) {
      if (this.isSupportClick) {
        this.rateValue = index + 1;
        this.rateValueClick = this.rateValue;
        this.$emit('rateClick', index);
      }
    }
  }
};
</script>

<style scoped>
.weui-rate-item {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.weui-rate-item-off {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNjg2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNjk2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDVDQkIwRDZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDVDQkIwRTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMPbBkAAAJCSURBVHjazJhLS8NAEMeTtmJVLIiPxoMi9aJUEfEievSLePLkt9GLXvTuRYSCot5UPPhAxYMWFV/UQw/F+kLr4z8wQghpdmOmJgN/NtlsZn+7m8xOYs7MLRiC1sllQfeG6alJz+sJQ9YGoG8/gCqTBGyCemzHzxJOY4KAWchkZaWcSgHGoT7beR/XRQawF0razpNcFxnAAc26UADTUJtLPdV1RAEw63Nm/xWwEcp4XM9wm9AA+xU+YtwmFEDdzvuD9BMEUHf5VI+Bp5lVkoU4x7JGLhtY9uNWH8/XK1TkkvTmOH6hEonDpxvgEErLAVBnhGMfjgE80BKfMRjFrFSIcAb3nWIWYjqLMW0OujKiY8SSw5K//b4kFWgdOo4AHDGsA67ilg/uQmVojNOm/zRKdHcAdqpKWKnBEzRRg4y7mtFsbQLuWjcOUsMVfpNqbdTHihucKlBT3FqGSjWEI9/LgCv+dScpM2ShBnAFhisH3ereOQzlBeHy7PNdai/+gs4FAc/Zp2iyYAkCavsKCzAtDWj6cao5WFMSsFU4aCfYpxigZcibFQZgyUdgt3SnWsIZ7aX70AmfD0IjCv9igClFan/JWdCTre4IuoBGPb5HyGcz71aBAKu9vY/QFnRX5ToBb0Bd0DgP1G0WA291zqWgD5s9aMkDzm633HaP7/W1zAmfgDfQtmrULkZgB7wH02x26wKqZrAeauHlWoNW/wDnzI5W2Rf5bJmdX6wPMoP0h+qQVRGMgZSc3kPDULvXo/IjwADcHoKDst/q9gAAAABJRU5ErkJggg==);
}
.weui-rate-item-half {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ1Q0JCMDc2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ1Q0JCMDg2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDVDQkIwNTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDVDQkIwNjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpTd9MwAAANvSURBVHjazJhLSFRRGMf/c2d0xhln8u34QMm3JRZChhlIEAQFLdy0qEUSGYFFuCiyNi2ilbUoCKFyZUQvJJAe1qaIHkSRKFnR29HJRh3fo+PM9L/TDVTGcR5HZw583DPnnHvPb757zvf9z1VdbGnFUqUBdQimDKCw9g6aXvC+AYgo9R5oILAYMXSMlzEvq6AiiXpQH9YVxWOkmtW1l9BqiDpAA+xNgEd+noq2PqoAv2OD3oTB2nlNJfSiOmoA9Rg9osaccV6TjpYfNYAm/Kn30VwWFYD9KNqlw2Sej64Uvua0iAMytDT66S6LKCBDS148hmv8DMmjF/URA9TDfkIFj3qZ55dGBNCCEp0Jtj0BDC2lF6VVB4yB47AGs2sCcjRfdajz+MzFu9FskODOsqA4Vw1XhoQ5M+OcmddU/qY5k5PQXxjEPFX0ojx+WjHHovqUfKXIcC2+UWVryT6vxWQVAZI4sUkDZ6IElzbUf0yQQ2EsOeeiP2CVpmFsJlxCHMaLYuEwhwMnoMR44z6QpmSjj1I7jlusKKicQNIzRE/5RutoqN/v8G6SDhwdl+PZCMzXowCui2uxkza3YBdz7XjacG6vDTlnuTQ9EQCT53xOsJd+w8wNnDltRf5BD6TZVYSTvfWIcD0BxcHbOHV1AAU7XYgZXQU4ebfeI9yPoAL1XZx8QsjqGegtKwhnp7UTzhZSJsnGh57fyKuYgql7BeAGFLjxsFJdDroHR5C5aQwpnQLhPnvDCOqWXecB5eIs9DomkXBNIOAnwrmFigUtprcJBDQLVzPM15UCAdOFAlL7aeIwVirSg0wMKmGAKrhrKL9EighZ5iULA4zF9PYVCDNmYYBaTG0JZJwS1O2rDkitWO6v3w1pZgjZFyjb8r2ZEnil5NeVB+TRspxnj4Sl+qkjn3LMxmT0Neaia0aOb7T37LpJ++rvrMKNYgwbMBZTO3y1z0JnperZJ+tIZpvexf2EnKA9ZvU+/n0zDMmLUgDrb+tC0SY5h5F5uR/F+WZ8aVvufkL+4uUW7Q3NFSzgsl9YdZio+F+fROJrO9IPMPV181QX8HZVTmtv+UrlHFztTfEiPPgTZRn0YLYTWpssYg0Y2SzDhRpXZOVCe8DqQ+/yBRIJrQ0ZkIdznlMyWpXXeUVUAFTEqbyJ3tFS/Y39K8AAwgYFCNcSvhEAAAAASUVORK5CYII=);
}
.weui-rate-item-on {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTY5NUIxMDc2QjdFMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTY5NUIxMDg2QjdFMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjk1QjEwNTZCN0UxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjk1QjEwNjZCN0UxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pob91EYAAAJZSURBVHjazJg7SyNRGIYn8QpaiZcINm61LgveGjeJ2Ii47IIWCv4AdxRBK7VUUHALsREstFKw1EJFccuAbKdtGkFXLbykEBaN7oLH9wyvECTOJX5J5oOHmZzbPMmcOfOdBNSyIRkdPMZc9zCVbXWhIRujQHkSdAhJwTrQm3J+ITFoUFBwBBSQEalBpQRLwI+Uz4Ms843gAKhM+VzFMt8Ijrksy4vgF9CSplyXtflBcNTjL5tTwVrQZ1PfxzZ5ExwCRTb1us7Ml2AxBZ1imG1zLqhvX8hFu5DDNLCNwBvJQinXtRDXNE0Nj9Wk2aWgjitwBK7JDctuyCVIIHF4SCc4gWOUF32RKjfyE38pnuAXOdCCWmoLhA1/xW/QE6RtJ9j0kdym5WSqxMtDkgT9YMEHcguWi6mSr/NBnWiOgxOwKJyKuYkn681jqiWnZWaJiWcyh3JJ65qv5OzWwR3Qzicq23FlXctUO14X6kNmI/EsysWta5jqMNM3ySmXn1gW5GLW2KY6fe+r7hZ0gXVBuXWOeSv1Lv4H1gQFVzmmaLIQERSMZiObiQoKRqQFC7j3kIowxxQTbAJlgoJ6rEZJwYghH1FJQbfzL+5hYY/kUvAOTPK2NfL83qFPu5TgB4et4wZoAPPgP9HnH1lnt2WtlxB861Ycg27mkedp6s9Z95VtM5o6wQxur97YTIHP4JeL/vtsO82+nuahV8Fd8AnMgkcPT6xuO8O+e17moZNgBQf9ozcw4Dsz7kxD9/3Gsc6subsSqHiPoP6Hao6S24Jr4DYfrJ+g1a7hswADAP0Eerk/kTZKAAAAAElFTkSuQmCC);
}
</style>
