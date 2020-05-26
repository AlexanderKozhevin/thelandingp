<template>
  <div class="hello_desktop flex-col flex-main-start">
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
    <!-- <img src="/images/logo.svg" />
    <img src="/images/logo_small.svg" />
    <img src="/images/stage1/man.svg" />
    <img src="/images/stage1/woman.svg" />
    <img src="/images/stage2/man.svg" />
    <img src="/images/stage3/man.svg" /> -->
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex';
import section1 from './section1/section1.vue'
import section2 from './section2/section2.vue'
import section3 from './section3/section3.vue'
import section4 from './section4/section4.vue'
import section5 from './section5/section5.vue'
import section6 from './section6/section6.vue'
import section7 from './section7/section7.vue'
import section8 from './section8/section8.vue'
import section9 from './section9/section9.vue'
import section10 from './section10/section10.vue'

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
  $text-color: #18214D;
  .hello_desktop{
    max-width: 1600px;
  }
</style>
