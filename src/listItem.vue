<template>

    <li> {{label}} - {{value}} </li>

</template>

<script>
export default {
    name: 'List-Item',
    props: {
        label: String,
        value: [String, Number]
    }
}
</script>