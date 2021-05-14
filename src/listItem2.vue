<template>
    <!-- <li @click="$emit('increment', 5, $event)">Click me</li> -->
    <li @click="emit">Click me</li>

</template>

<script>

export default {
    name: 'listItem2',
    methods:{
        emit(event){
            this.$emit('increment', 5, event);
        }
    }
}
</script>