<template>
  <div class="flex-row myhead flex-main-around myheader flex-second-center">
    <img class="logo" src="/images/logo.svg" />
    <div class="flex-row flex-second-center">
      <div class="menu_item">{{$t('stage1.advantage')}}</div>
      <div class="menu_item">{{$t('stage1.possibilities')}}</div>
      <div class="menu_item">{{$t('stage1.about')}}</div>
    </div>
    <div class="try_out">{{$t('stage1.try')}}</div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';

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

    };
  },
  created() {
  },
  methods: {
  },
  components: {
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu_item{
  color: #18214D;
  margin-left: 23.5px;
  margin-right: 23.5px;
}
.logo{
  height: 38px;
}
.myheader{
  font-family: Montserrat;
}
.try_out{
  padding: 14px 39px;
  border: 2px solid #8565C6;
  box-sizing: border-box;
  border-radius: 6px;
  color: #8565C6;

}
.myhead{
  margin-top: 34px;
}
</style>
