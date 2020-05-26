<template>
  <div class="hello">
    <myheader />
    <mylogo />
    <hey />
    <action />
    <suggestion />
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';
import myheader from './myheader'
import mylogo from './mylogo'
import hey from './hey'
import action from './action'
import suggestion from './suggestion'

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
    myheader,
    mylogo,
    hey,
    action,
    suggestion
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
