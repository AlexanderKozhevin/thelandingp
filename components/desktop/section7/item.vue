<template>
  <div class="hello flex-row flex-second-center">
    <img src="/images/stage1/ok.svg" />
    <div class="mylabel">
      {{$t(data)}}
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';

export default {
  name: 'sample',
  props: {
    data: String
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
.mylabel{
  margin-left: 10px;
  margin-right: 27px;
}
</style>
