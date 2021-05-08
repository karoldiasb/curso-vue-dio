<template>
  <div id="app">
    <!-- <button @click="increment(2, $event)">Click increment</button> -->
    <!-- <button @click="firstName='New name'">New first name</button> -->
    <button @click="fullName='Severo snape'">Set new first name </button>
    <!-- {{ count }} -->
    <!-- {{ fullName() }} -->
    <!-- {{ fullNameComputed }} -->
  </div>
</template>

<script>

  export default {
    name: 'App',
    data(){
        return {
          count: 0,
          firstName: 'Harry',
          lastName: 'Potter',
        }
    }, 
    computed:{
      // fullNameComputed(){
      //   return `${this.firstName} ${this.lastName}`;
      // },
      fullName:{
        get(){
          return `${this.firstName} ${this.lastName}`;
        },
        set(value){
          const [first, last] = value.split(' ');
          this.firstName = first;
          this.lastName = last;
        }
      }
    },
    methods:{
      // increment(value, event){
      //   this.count += value;
      // },
      // fullName(){
      //   return `${this.firstName} ${this.lastName}`;
      // }
    },
    mounted(){
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
