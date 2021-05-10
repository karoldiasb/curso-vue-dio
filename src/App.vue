<template>
  <div id="app">
    <Title v-if="shouldAppear"></Title>
    <!-- <button @click="count++">Click</button> -->
    <button @click="shouldAppear = false">Destroy title</button>
    <!-- {{ count }} -->
  </div>
</template>

<script>
  import Title from './Title.vue';

  export default {
    name: 'App',
    components: {
      Title
    },
    data(){
      return {
        hello: 'world',
        count: 0,
        shouldAppear: true
      }
    },
    beforeCreate(){
      console.log('Before create app')
      console.log(this.hello)
    },
    created(){
      console.log('Created app')
      console.log(this.hello)
    },
    beforeMount(){
      console.log('Before mount app')
      console.log(this.$el)
    },
    mounted(){
      console.log('Mounted app')
      console.log(this.$el)
    },
    beforeUpdate(){
      console.log('Before update app')
      console.log(this.count)
    },
    updated(){
      console.log('Updated app')
      console.log(this.count)
    }
  }

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
