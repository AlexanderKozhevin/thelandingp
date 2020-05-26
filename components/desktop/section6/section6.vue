<template>
  <div class="hello flex-col flex-second-center">
    <div class="holdblock flex-col flex-second-center">
      <div class="thetitle">{{$t('stage6.title')}}</div>
      <div class="flex-row flex-main-center flex-wrap">
        <Item :data="item" :key="index" v-for="(item, index) in list" />
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
        {icon: 'im_1.svg', text: 'stage6.sub1', soon: false},
        {icon: 'im_2.svg', text: 'stage6.sub2', soon: false},
        {icon: 'im_3.svg', text: 'stage6.sub3', soon: false},
        {icon: 'im_4.svg', text: 'stage6.sub4', soon: false},
        {icon: 'im_5.svg', text: 'stage6.sub5', soon: false},
        {icon: 'im_6.svg', text: 'stage6.sub6', soon: false},
        {icon: 'im_7.svg', text: 'stage6.sub7', soon: false},
        {icon: 'im_8.svg', text: 'stage6.sub8', soon: false},
        {icon: 'im_9.svg', text: 'stage6.sub9', soon: true},
        {icon: 'im_10.svg', text: 'stage6.sub10', soon: true},
        {icon: 'im_11.svg', text: 'stage6.sub11', soon: true},
        {icon: 'im_12.svg', text: 'stage6.sub12', soon: true}
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
<style scoped lang="scss">
.hello{
  background: #F3F6FA;
  // width: 900px;
  // padding-bottom: 50px;
}
.thetitle{
  margin-bottom: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 62px;
  color: #18214D;
  margin-top: 162px;
}
.holdblock{
  width: 900px;
}
</style>
