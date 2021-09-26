import getRandomInt from "../../../helpers/getRandomInt";

const counterStore = {
    namespaced: true,
    state: () => (
        {
            counter: 0,
            lastMutation: 'none',
            isLoading: false,
            lastRandomInt: 0
        }
    ),
    mutations: { //Síncronas por regla general
        INCREMENT(state) {
            state.counter++
            state.lastMutation = 'INCREMENT'
        },
        INCREMENTBYARGUMENT(state, value) {
            state.counter += value
            state.lastMutation = `INCREMENT-BY-ARGUMENT: ${value}`
            state.lastRandomInt = value
        },
        DECREMENT(state) {
            state.counter--
            state.lastMutation = 'DECREMENT'
        },
        SETLOADING(state) {
            state.isLoading = !state.isLoading
            state.lastMutation = 'SET-LOADING'
        }
    },
    actions: { //Síncronas y Asíncronas
        async incrementRandomInt({commit}) {
            commit('SETLOADING')
            const randomNumber = await getRandomInt()
            commit('INCREMENTBYARGUMENT', randomNumber)
            commit('SETLOADING')
        }
    },
    getters: {
        squareCount(state) {
            return state.counter * state.counter;
        }
    }
}

export default counterStore;