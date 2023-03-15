
'use strict'


const { createApp } = Vue

createApp({
    data() {
        return {

            addtodolist: '',

            todolist: [
                {
                    testo: 'fare la spesa',
                    done: false
                },
                {
                    testo: 'fare la doccia',
                    done: false
                },
                {
                    testo: 'comprare sigarette',
                    done: true
                },
                {
                    testo: 'studiare',
                    done: false
                },
                {
                    testo: 'andare a fare un giro in barca',
                    done: false
                },
                {
                    testo: 'cucinare qualcosa',
                    done: true
                },
                {
                    testo: 'andare al cinema',
                    done: false
                },
                {
                    testo: 'mangiarsi nu bell spaghetto alle vongole',
                    done: false
                },
                {
                    testo: 'andare fuori a cena',
                    done: true
                }
            ]
        }
    },

    methods: {
        rimuovere(index) {
            this.todolist.splice(index, 1);
        },
        aggiungere() {
            console.log(this.aggiungere)
            
        }



    }
}).mount('#app')