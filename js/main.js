'use strict'


const { createApp } = Vue

  createApp({
    data() {
      return {
        todolist : [
            {
                testo : 'fare la spesa',
                done : false
            },
            {
                testo : 'fare la doccia',
                done : false
            },
            {
                testo : 'comprare sigarette',
                done : false
            },
            {
                testo : 'studiare',
                done : false
            },
            {
                testo : 'andare a fare un giro in barca',
                done : false
            },
            {
                testo : 'cucinare qualcosa',
                done : false
            },
            {
                testo : 'andare al cinema',
                done : false
            },
            {
                testo : 'mangiarsi nu bell spaghetto alle vongole',
                done : false
            },
            {
                testo : 'andare fuori a cena',
                done : false
            }
        ]
      }
    }
  }).mount('#app')