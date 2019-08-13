<template>
  <div class="book">
    <div class="card-block">
            <p><u>{{bookItem.volumeInfo.title}}</u></p>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: ['bookItem', 'key'],
  
}
</script>