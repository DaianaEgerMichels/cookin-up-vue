<script>
import Tag from './Tag.vue'
export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    components: { Tag },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        selecionar() {
            this.selecionado = !this.selecionado

            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente)
            } else {
                this.$emit('removerIngrediente', this.ingrediente)
            }
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button class="ingrediente" @click="selecionar" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>