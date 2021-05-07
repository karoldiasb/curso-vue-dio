<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
    <ButtonTemplateString></ButtonTemplateString>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
    <ButtonXTemplate></ButtonXTemplate>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
    <ButtonInline inline-template>
      <button @click="click">
        Clicked ButtonInline {{ count }} times
      </button>  
    </ButtonInline>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
    <ButtonRender></ButtonRender>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
    <ButtonJSX></ButtonJSX>  <!-- Como tá no escopo global não é necessário colocar na propriedade 'components' do App -->
  </div>
</template>

<script>
  import ButtonVue from './ButtonVue.vue';
  
  export default {
    name: 'App',
    components: {
      ButtonVue
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
