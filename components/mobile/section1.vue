<template>
  <div class="hello">
    <div class="flex-row flex-second-center headerthing">
      <img class="thelogo" src="/images/logo.svg" />
      <div class="flex"></div>
      <div class="mylang">{{lang_code}}</div>
    </div>

    <div class="flex-row flex-main-center flex-second-center logoitem">
      <img class="logo" src="/images/logo_small.svg" />
    </div>

    <div class="bigname flex-row flex-main-center">
      {{$t('stage1.videocall')}}
      <br>
      {{$t('stage1.business')}}
    </div>

    <div class="sublabel">
      {{$t('stage1.improve1')}}
      <br>
      {{$t('stage1.improve2')}}

    </div>
    <div class="createbox flex-row flex-main-center flex-second-center">
      <div>
        {{$t('stage1.create')}}
      </div>
    </div>

    <div class="createbox2 flex-row flex-main-center flex-second-center">
      <div>
        {{$t('stage1.connect')}}
      </div>
    </div>

    <div class="flex-col flex-second-center thetextsts">
      <div class="flex-row flex-second-center">
        <img src="/images/stage1/ok.svg" />
        <div class="hintt">{{$t('stage1.hint.text1')}}</div>
      </div>
      <div class="flex-row flex-second-center">
        <img src="/images/stage1/ok.svg" />
        <div class="hintt">{{$t('stage1.hint.text2')}}</div>
      </div>
      <div class="flex-row flex-second-center">
        <img src="/images/stage1/ok.svg" />
        <div class="hintt">{{$t('stage1.hint.text4')}}</div>
      </div>
      <div class="flex-row flex-second-center">
        <img src="/images/stage1/ok.svg" />
        <div class="hintt">{{$t('stage1.hint.text3')}}</div>
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
      lang_code: 'RU'
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
.thelogo{
  height: 25px;
}
.headerthing{
  margin-top: 13px;
  padding-left: 23px;
  padding-right: 23px;
}
.mylang{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 32px;
  color: #18214D;
}
.logoitem{
  margin-top: 39px;
  img{
    height: 38px;
  }
}
.bigname{
  margin-top: 39px;
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 110%;
/* or 33px */

text-align: center;
letter-spacing: -0.55px;

/* Dark */

color: #18214D;
}
.sublabel{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 120%;
/* or 19px */

text-align: center;
letter-spacing: -0.457143px;

/* Grey_Reg_text */

color: #686F93;
margin-top : 22px;
}
.createbox2{
  div{
    padding: 12px 73px;
    // border: 1.82667px solid #8565C6;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Montserrat;
  font-style: normal;
  background: #8565C6;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  /* or 183% */

  text-align: center;

  color: white;
  }
  margin-top: 8px;

}
.createbox{
  div{
    padding: 12px 17px;
    border: 1.82667px solid #8565C6;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  /* or 183% */

  text-align: center;

  color: #8565C6;
  }
  margin-top: 45px;

}
.hintt{
  margin-left: 8px;
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
/* or 186% */


/* BLACK */

color: #18214D;
}
.thetextsts{
  margin-top: 18px;
}
</style>
