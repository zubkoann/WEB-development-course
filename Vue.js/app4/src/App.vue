
<template>
  <div id="app">
    <h3>Jokes </h3>
    <!--  {{$store.state}}  -->
     <!-- вешаем метод на кнопку -->
    <button
            class="btn btn-primary"
            @click="initJokes">Add ten random jokes</button>

    <button class="btn btn-primary"
            @click="addJoke">Add a Joke</button>
    <br>

    <span v-for="type in types">
      <input
              type="checkbox"
              :value="type"
              v-model="checkedTypes"
              checked
      >
      <label>{{type}}</label>

    </span>
    <br>

    <div class="col-md-12">
      <!-- берем шутки из стора -->
      <!-- includes если включен в массив es6-->
      <Joke
        v-for="(joke, index) in $store.state.jokes" 
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :key="index"
        :index="index"
      />

    </div>

  </div>
</template>

<script>
//2 способ импортируем метод который по мапит экшины из стора в качестве метода в любую компоненту
  import { mapActions } from 'vuex'
  import Joke from './components/Joke'

  export default {
    data(){
      return {
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming']
      }
    },
    components: {
      Joke
    },
    mounted(){
      // обращаемся к мутатору через commit первый параметр это функция что мы вызываем а второй данные которые туда передаем
      // this.$store.commit('initJokes', [{test: 'test_joke'}])
    },
     // методам присваиваем mapActions. Можем примапить сразу все экшины и методы
    // methods: mapActions([
    //   'initJokes'
    // ]),
    // если хотим дополнительно обьявлять методы нужно добавить его с помощью спред
    methods:{
      ...mapActions([
        'initJokes',
        'addJoke'
      ]),
      // потом можем обьявлять другие методы
      initJokesMethod(){
          this.$store.dispatch('initJokes')
      }
    }
    //1 способ  вызываем экшн с помощью метода dispatch может с параметром или нет вызываться 
    // methods: {
    //   initJokes(){
    //     this.$store.dispatch('initJokes')
    //   }
    // }
  }
</script>