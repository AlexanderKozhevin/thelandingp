<template>
  <div class="hello">
    <div class="offset"></div>
    <div class="flex-col flex-main-center flex-second-center">
      <div class="h_yo yo1">{{$t('stage7.t1')}}</div>
      <div class="h_yo">{{$t('stage7.t2')}}</div>
      <div class="h_yo">{{$t('stage7.t3')}}</div>

      <div class="flex-row hey_go">
        <Item :data="item" :key="index" v-for="(item, index) in list" />
      </div>
      <div class="flex-row yoyo">
        <div class="mybutton1">{{$t('stage7.y1')}}</div>
        <div class="mybutton2">{{$t('stage7.y2')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';
import Item from './item.vue'

export default {
  name: 'sample',
  props: {
  },
  computed: {
    ...mapState({
      // list: state => state.graphs.list
    }),
  },
  data() {
    return {
      list: [
        'stage7.m1','stage7.m2','stage7.m3'
      ]
    };
  },
  created() {
  },
  methods: {
  },
  components: {
    Item
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="true" lang="scss">
.hello{
  // height: 400px;
  padding-bottom: 150px;
}
.h_yo{
  // margin-bottom: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  // line-height: 62px;
  color: #18214D;
}
.yo1{
  margin-top: 162px;

}
.offset{
  height: 150px;
  width: 100%;
  background: #F3F6FA;
  // background: red;
}
.hey_go{
  margin-top: 36px;
}
.mybutton1{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #8565C6;
  padding: 10px 23px;
  border: 2px solid #8565C6;
  box-sizing: border-box;
  border-radius: 6px;
}
.mybutton2{
  background: #8565C6;
  border: 2px solid #8565C6;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  margin-left: 50px;
  color: #FFFFFF;
  padding: 10px 80px;
}
.yoyo{
  margin-top: 0px;
}
</style>
