<template>
  <div class="hello flex-row flex-main-center">
    <div class="create flex-row flex-main-center flex-second-center">
      <div>{{$t('stage1.create')}}</div>
    </div>
    <div class="connect flex-row flex-main-center flex-second-center">
      <div>{{$t('stage1.connect')}}</div>
    </div>
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
.hello{
  text-align: center;
  margin-top: -65px;
}
.create{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #8565C6;
  border: 2px solid #8565C6;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 14px 20px;
  margin-right: 50px;
}
.connect{
  background: #8565C6;
  border-radius: 6px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  padding: 14px 70px;
}
</style>
