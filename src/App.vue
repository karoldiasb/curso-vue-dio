<template>
  <div id="app">
    <!-- passando valores pro componente filho -->
    <Title titulo="Vuejs" :tipo="1" class="red" attr1="attr1"/> <!-- adiciona a class red no root do Title, ou seja, na div pai -->
    <Title titulo="Titulo 2" subtitulo="Basico"/>

    <ul>
      <li v-for="(item, i) in todos" :key="i">
        {{item}}
      </li>
    </ul>
    <ul>
      <li v-for="(valor, chave, index) in todosObject" :key="index">
        {{ chave }} : {{ valor }} - {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(char, indexString) in todoString" :key="indexString">
        {{ char }} - {{ indexString }}
      </li>
    </ul>
    <ul>
      <li v-for="number in 10" :key="number">
        {{ number }}
      </li>
    </ul>
    <ul>
      <template v-if="listTodos.length > 0"> <!--serve pra encapsular-->
        <li v-for="(todo, k) in filteredTodos" :key="k">
          {{ todo }}
        </li>
      </template>
      <li v-else>No item</li>
    </ul>

    <!-- component separado -->
    <ul>
      <ListItem
        v-for="(item, indexItem) in listItem"
        :key="indexItem"
        v-bind="item"
      />
    </ul>

    <!-- evento customizado -->
    <ListItem2 @increment="increment"/>
    {{count}}

    <!-- two way data binding -->
    <input type="text" @input="text = $event.target.value" :value="text">
    <!-- ou -->
    <input type="text" v-model="text"> <!-- v-model é um atalho pra o de cima -->
    {{text}}
  </div>
</template>

<script>
  import Title from './Title.vue';
  import ListItem from './listItem.vue';
  import ListItem2 from './listItem2.vue';

  export default {
    name: 'App',
    components: {
      Title,
      ListItem,
      ListItem2,
    },
    data(){
      return {
        todos: [
          'item 1',
          'item 2',
          'item 3',
        ],
        todosObject:{
          item1: 'Item 1 object',
          item2: 'Item 2 object',
          item3: 'Item 3 object',
        },
        todoString: 'Hello world Vue.js',
        listTodos: [
        ],
        listItem:[
          { label: 'item 1', value: 1},
          { label: 'hello', value: 'world'},
          { label: 'harry', value: 'potter'},
        ],
        count: 0,
        text: ''
      }
    },
    computed:{
      filteredTodos(){
        return this.listTodos.filter(todo => !todo.isCompleted)
      }
    },
    methods:{
      increment(qt, event){
        this.count+=qt;
        console.log(event)
      }
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
