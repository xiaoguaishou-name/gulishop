<template>
  <div>
    <TypeNav></TypeNav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Container from './Container'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
  export default {
    name:'Home',
    components:{
      Container,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      this.getFloorList()
    },
    methods:{
      getFloorList(){
        this.$store.dispatch('getFloorList')
      }
    },
    computed:{
      ...mapGetters(['floorList'])
    }
  }
</script>

<style lang="less" scoped>

</style>