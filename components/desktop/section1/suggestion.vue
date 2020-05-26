<template>
  <div class="hello flex-row flex-main-center">
    <div class="hey_item flex-row flex-second-center">
      <img src="/images/stage1/ok.svg" />
        <div>{{$t('stage1.hint.text1')}}</div>
    </div>

    <div class="hey_item flex-row flex-second-center">
      <img src="/images/stage1/ok.svg" />
        <div>{{$t('stage1.hint.text2')}}</div>
    </div>

    <div class="hey_item flex-row flex-second-center">
      <img src="/images/stage1/ok.svg" />
        <div>{{$t('stage1.hint.text3')}}</div>
    </div>

    <div class="hey_item flex-row flex-second-center">
      <img src="/images/stage1/ok.svg" />
        <div>{{$t('stage1.hint.text4')}}</div>
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
  margin-top: 31px;
}
.hey_item{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  color: #18214D;
  margin-right: 32px;
  img{
    margin-right: 10px;
  }
}
</style>
