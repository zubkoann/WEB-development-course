<template>
  <div class="col">
    <h1>About us</h1>
    <p>some text</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  // указываем какой шаблон из папки layout использовать
  layout: 'staticpage',
  //meta применяется только в universal режиме можно для отдельной страницы прописать разные
  head: {
    title: 'about',
    meta: [
      {
        hid: 'descriptionabout',
        name: 'descriptionabout',
        content: 'custom about'
      }
    ]
  }
}
</script>