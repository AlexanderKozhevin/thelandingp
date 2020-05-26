<template>
  <div class="hello flex-col flex-second-center">
    <div class="thetitle flex-row flex-main-center flex-second-center">{{$t(data.title)}}</div>
    <div class="sukablaya">{{$t(data.txt)}}</div>
    <div class="tryout">
      {{$t('stage8.free')}}
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
  width: 350px;
  border: 2px solid #C2CCDB;
  border-radius: 8px;
  height: 400px;
  margin-left: 20px;
  margin-right: 20px;
}
.thetitle{
  margin-top: 50px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.55px;
  color: #18214D;
  min-height: 70px;
  // background-color: pink;

}
.sukablaya{
  text-align: center;
  margin-top: 23px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  max-width: 300px;
  line-height: 140%;
  text-align: center;
  color: #18214D;
}
.tryout{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  text-align: center;
  color: #8565C6;
  border: 2px solid #8565C6;
  box-sizing: border-box;
  margin-top: 60px;
  padding: 10px 6px;
  border-radius: 6px;
}
</style>
