<template>
  <div class="hello">
    <div class="bigtitle flex-row flex-main-center flex-second-center">
      {{$t('stage2.intro1')}}
      {{$t('stage2.intro2')}}
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
.bigtitle{

  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 110%;
/* or 29px */

text-align: center;

/* BLACK */

color: #18214D;
background: #F3F6FA;
padding-top: 25px;
padding-bottom: 25px;
margin-top: 30px;

}
</style>
