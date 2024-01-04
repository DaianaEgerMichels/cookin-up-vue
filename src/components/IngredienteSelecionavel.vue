<script>
import Tag from './Tag.vue'
export default {
    props: {
        ingredientes: { type: String, required: true }
    },
    components: { Tag },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button class="ingrediente" @click="selecionado = !selecionado" :aria-pressed="selecionado">
        <Tag :texto="ingredientes" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>