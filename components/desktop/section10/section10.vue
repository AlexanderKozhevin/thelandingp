<template>
  <div class="hello flex-row flex-second-start flex-main-around">
    <img class="luxury" src="/images/stage10/bot.svg" />
    <img class="luxury2" src="/images/stage10/bot2.svg" />

    <div class="flex-col flex-second-start">
      <div class="h_title">{{$t('stage10.sales')}}</div>
      <div class="thetext">
        8 800 775 08 54
      </div>
      <div class="thetext">
        rusales@gcorelabs.com
      </div>
    </div>

    <div class="flex-col flex-second-start">
      <div class="h_title">{{$t('stage10.partner')}}</div>
      <div class="thetext">
        partner@gcorelabs.com
      </div>
      <img class="skicon" src="/images/stage10/sk.svg" />

    </div>

    <div class="flex-col flex-second-start">
      <div class="h_title">{{$t('stage10.social')}}</div>
      <div class="social_row flex-row">
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/f.svg" />
        </a>
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/in.svg" />
        </a>
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/yt.svg" />
        </a>
      </div>
      <div class="social_row flex-row">
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/we.svg" />
        </a>
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/tw.svg" />
        </a>
        <a href="" target="_blank">
          <img class="sicon" src="/images/social/insta.svg" />
        </a>
      </div>
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
  height: 400px;
  background-color: #8565C6;
}
.h_title{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 62px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #18214D;
}
.thetext{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.55px;
  color: #FFFFFF;
}
.skicon{
width: 50px;
margin-top: 20px;
}
.sicon{
  width: 40px;
  margin-right: 40px;
}
.social_row{
  margin-top: 20px;
}
.hello{
  padding-top: 80px;
}
.luxury{
  position: absolute;
  width: 350px;
  z-index: 0;
  left: 0;
  // bottom: 10px;
  margin-top: 120px;
}
.luxury2{
  position: absolute;
  width: 350px;
  z-index: 0;
  left: 520px;
  // bottom: 10px;
  margin-top: 240px;
}
.toper{
  width: 200px;
  position: absolute;
}
</style>
