<template>
  <div class="hello">
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
    <section6 />
    <section7 />
    <section8 />
    <section9 />
    <section10 />
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';
import section1 from './section1.vue'
import section2 from './section2.vue'
import section3 from './section3.vue'
import section4 from './section4.vue'
import section5 from './section5.vue'
import section6 from './section6.vue'
import section7 from './section7.vue'
import section8 from './section8.vue'
import section9 from './section9.vue'
import section10 from './section10.vue'

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
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
