<template>
    <div>
        <h1 v-bind="$attrs">{{ titulo }}</h1>
        <h2>{{ subtitulo }}</h2>
        <h2>{{ tipo }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Title',
    inheritAttrs: false,
    props: {
        // titulo: String
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: false,
            default: 'Subtitulo'
        },
        tipo:{
            type: Number,
            validator(value) {
                return[1, 2, 3].includes(value);
            }
        }
    }
}
</script>