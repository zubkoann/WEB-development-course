<template>
  <div class="home">
     <SearchForm /> 
     <Item
        v-for="(book, index) in $store.state.books.items" 
        :key="index"
        :book-item="book"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from '@/components/SearchForm.vue'
import Item from '@/components/Item.vue'

export default {
  name: 'home',
  components: {
    SearchForm,
    Item
  },
}
</script>
