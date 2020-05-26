<template>
  <div class="hello flex-row  flex-main-center">
    <div class="flex-row flex-second-center my_row">
      <div class="img_left">
        <img class="image_item" src="/images/stage1/man.svg" />
      </div>
      <div class="flex-col flex-main-start flex-second-center title_shift">
        <div class="big_title first_block">
          {{$t('stage1.videocall')}}
        </div>
        <div class="big_title">
          {{$t('stage1.business')}}
        </div>


        <div class="midle_title first_middle">
          {{$t('stage1.improve1')}}
        </div>
        <div class="midle_title">
          {{$t('stage1.improve2')}}
        </div>

      </div>
      <div class="img_right">
        <img class="image_item" src="/images/stage1/woman.svg" />
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
.image_item{
  width: 390px;
}
.hello{
  // background-color: pink;
}
.big_title{
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 52px;
line-height: 105%;
/* or 76px */

text-align: center;
letter-spacing: -2px;

/* Dark */

color: #18214D;
}
.midle_title{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 32px;
/* or 123% */

text-align: center;
letter-spacing: -0.457143px;

/* Grey_Reg_text */

color: #686F93;
}
.title_shift{
  margin-left: 50px;
  margin-right: 50px;
  height: 100%;
}
.my_row{
  // background-color: pink;
  margin-top: -50px;
}
.first_block{
  margin-top: 133px;
}
.first_middle{
  margin-top: 33px;
}
</style>
