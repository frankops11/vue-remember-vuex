<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.counter }}</h2>
    <h2>Computed: {{ counter }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementByArgument">+5</button>
    <button @click="incrementRandom" :disabled="isLoading">rdn+</button>
    <button @click="decrement">-1</button>


    <h2>mapState: {{ counter }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>

    <h2>Direct getter: {{$store.getters['counter/squareCount']}}</h2>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name: "Counter",
    computed: {
        // counter() {
        //     return this.$store.state.counter;
        // },
        ...mapState('counter',['counter', 'lastMutation', 'isLoading']),
        // ...mapState[{
        //     counter: 'counter',
        //     lastMutation: state => state.lastMutation
        // }]
    },
    methods: {
        increment() {
            this.$store.commit('counter/INCREMENT')
        },
        incrementByArgument() {
            this.$store.commit('counter/INCREMENTBYARGUMENT', 5)
        },
        decrement() {
            this.$store.commit('counter/DECREMENT')
        },
        ...mapActions('counter',{
            incrementRandom: 'incrementRandomInt'
        })
    },
}
</script>