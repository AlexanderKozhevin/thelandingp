<template>
  <div class="hello flex-col flex-second-center">
    <div class="pizda1">{{$t('stage8.t1')}}</div>
    <div class="pizda2">{{$t('stage8.t2')}}</div>

    <div class="item_momo flex-row">
      <Item :data="item" :key="index" v-for="(item, index) in list" />
    </div>


  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';
import Item from './item'
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
        {title: "stage8.mt1", txt: 'stage8.txt1'},
        {title: "stage8.mt2", txt: 'stage8.txt2'},
        {title: "stage8.mt3", txt: 'stage8.txt3'}
      ]
    }
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
  padding-bottom: 100px;
}
.pizda1, .pizda2{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 62px;
  color: #18214D;
}
.pizda1{
  margin-top: 130px;
}
.item_momo{
  margin-top: 48px;
}
</style>
