<template>
  <div id="app">
    <h3>{{ title }}</h3>
 <!-- v-bind или :  ? key - уникальный ключ который должен быть во всех итерациях-->
    <Character
            v-for="(id, index) in initial_ids"
            :id="id"
            :key="index"
    />
    <div class="col-12"></div>

    <button class="btn btn-primary"
            @click="fetchCharacter">Test</button>
  </div>
</template>

<script>
import Character from './components/Character'
export default {
  name: 'app',
  data(){
    return {
      title: 'Star Wars Team',
      initial_ids: [1, 13, 14, 20,49],
      url: process.env.VUE_APP_URL
    }
  },
    methods: {
     fetchCharacter() {
      fetch(`${this.url}people/`, {
        method: 'GET'
      })
        .then(response => response.json())
              .then(json => console.log(json))
    }
  },
  components: {
    Character
    // Character:Character 
    // сообщаем что есть такая компонента
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
