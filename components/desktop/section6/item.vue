<template>
  <div class="hello flex-col flex-second-center">
    <img :src="'/images/stage6/' + data.icon" />
    <div class="text_zalupa">
      {{$t(data.text)}}
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';

export default {
  name: 'sample',
  props: {
    data: Object
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
  width: 300px;
  margin-bottom: 70px;
  // margin-left: 50px;
  // margin-right: 50px;
}
.text_zalupa{
  max-width: 250px;
  text-align: center;
  margin-top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
color: #18214D;
}
</style>
