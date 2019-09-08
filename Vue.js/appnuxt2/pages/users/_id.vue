<template>
  <div class>
    <h1>user {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: '_id',
  //   есть только в pages  в компоненте нет
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>