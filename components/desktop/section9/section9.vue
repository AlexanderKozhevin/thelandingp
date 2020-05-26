<template>
  <div class="hello flex-row">
    <img class="boimage" src="/images/stage9/bo.svg" />

    <div class="yocontainer flex-row">
      <div class="flex flex-col flex-second-center">
        <div>
          <div class="mytit">{{$t('stage9.t1')}}</div>
          <div class="mytit">{{$t('stage9.t2')}}</div>
          <div class="mytit">{{$t('stage9.t3')}}</div>
        </div>

      </div>
      <div class="flex flex-col flex-second-center">
        <div class="myshnayga">
          <div>
            <img class="yoicon" src="/images/stage9/man.svg" />

            <input class="myinput" :placeholder="$t('stage9.name')" />
          </div>
          <div class="mgt">
            <img class="yoicon" src="/images/stage9/email.svg" />

            <input class="myinput" placeholder="E - mail" />
          </div>
          <div class="flex-row flex-second-center mydick">
            <img class="checkicon" @click="setCheck(false)" v-if="checked" src="/images/stage9/check2.svg" />
            <img class="checkicon" @click="setCheck(true)" v-if="!checked" src="/images/stage9/check.svg" />
            <div>
              {{$t('stage9.give')}}
            </div>
            &nbsp;
            <a href="" target="_blank">
              {{$t('stage9.data')}}
            </a>
          </div>
          <div class="feedbag" v-if="checked">
            {{$t('stage9.leave')}}
          </div>

        </div>


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
      checked: true
    };
  },
  created() {
  },
  methods: {
    setCheck(val){
      this.$data.checked = val
    }
  },
  components: {
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  padding-bottom: 100px;
  // max-height: 600px;
  // padding-
  // background-color: red;
  overflow: hidden;
}
.yocontainer{
  width: 100%;
  // background-color: pink;
  margin-top: 150px;
}
.mytit{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 42px;
  color: #18214D;
}
.myinput{
  background: #E3EAF1;
  border-radius: 10px;
  height: 56px;
  border : none;
  font-size: 16px;
  width: 550px;
  padding-left: 60px;
  margin-left: -20px;
  &:focus{
      outline: none;
  }
  &::placeholder{
    color: #18214D;
    opacity: 0.5;
  }
  z-index: 98;

}
.mgt{
  margin-top: 16px;
}
.yoicon{
  position: absolute;
  margin-top: 23px;
  z-index: 99;
}
.mydick{
  // max-width: 450px;
  margin-left: -20px;
  margin-top: 26px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #18214D;

}
.myshnayga{
  width: 600px;
  // background-color: pink;
}
.checkicon{
  margin-right: 20px;
  cursor: pointer;
}
.feedbag{
  background: #8565C6;
  border-radius: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
  padding: 12px 70px;
  margin-left: -20px;
  width: 550px;
  margin-top: 20px;
  cursor: pointer;
}
.boimage{
  width: 600px;
  margin-top:100px;
  position: absolute;
  z-index: -1;
}
</style>
