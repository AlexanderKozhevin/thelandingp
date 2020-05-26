<template>
  <div class="hello flex-col flex-second-center">
    <div class="intro1">{{$t('stage2.intro1')}}</div>
    <div class="intro2">{{$t('stage2.intro2')}}</div>

    <div class="flex-row bigxui">
      <div class="parter parnon flex-row flex-main-end">
        <div class="manda">
          <div class="mid_title">{{$t('stage2.ecom')}}</div>
          <div class="mid_title">{{$t('stage2.tele')}}</div>

          <div class="yo_title yo1">
            {{$t('stage2.zalupa1')}}
          </div>
          <div class="yo_title">
            {{$t('stage2.zalupa2')}}
          </div>
          <ul class="option_list">
            <li class="super_item">{{$t('stage2.list1')}}</li>
            <li class="super_item">{{$t('stage2.list2')}}</li>
            <li class="super_item">{{$t('stage2.list3')}}</li>
            <li class="super_item">{{$t('stage2.list4')}}</li>
            <li class="super_item">{{$t('stage2.list5')}}</li>
          </ul>
        </div>
      </div>
      <div class="parter parnon parter2 flex-row flex-main-center">
        <img class="mustage" src='/images/stage2/man.svg' />
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
<style scoped="true" lang="scss">
.hello{
  padding-top: 148px;
}
.confirmation_window{
  width: 650px;
  background-color: red;
}
.intro1, .intro2{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 52px;
  text-align: center;
  color: #18214D;
}
.intro1{
  // margin-top: 148px;
}
.parter{
  width: 50%;
  padding-top: 148px;
}
.bigxui{
  width: 100%;
  margin-bottom: -140px;

  // margin-top: 142px;
}
.manda{
  width: 650px;
}
.mid_title{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #90A3BA;
}
.yo_title{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 120%;
  letter-spacing: -0.55px;
  color: #18214D;
}
.yo1{
  margin-top: 50px;
}
.option_list{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: #686F93;
  margin-top: 50px;
}
.parter2{
  overflow: hidden;
  // background: url('/images/stage2/man.svg');
}
.mustage{
  // position: absolute;
  width: 800px;
  margin-top: -120px;
  // margin-left: -100px;
}
.super_item{
  padding-bottom: 10px;
  padding-top: 10px;
}
.parnon{
  // margin-top: 0px!important;
}
</style>
