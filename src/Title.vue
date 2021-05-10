<template>
    <h1>Vue.js</h1>
</template>

<script>
export default {
    name: 'Title',
    data(){
        return {}
    },
    beforeCreate(){
      console.log('Before create title')
      console.log(this.hello)
    },
    created(){
      console.log('Created title')
      console.log(this.hello)
    },
    beforeMount(){
      console.log('Before mount title')
      console.log(this.$el)
    },
    mounted(){
      console.log('Mounted title')
      console.log(this.$el)
    },
    beforeDestroy(){
      console.log('Before destroy title')
    },
    destroyed(){
      console.log('Destroyed title')
    }
}
</script>