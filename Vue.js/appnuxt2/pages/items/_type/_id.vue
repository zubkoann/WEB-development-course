<template>
  <div>
    <h1>type {{ $route.params.type }}</h1>
    <h2>id {{$route.params.id}}</h2>
  </div>
</template>

<script>
// создаем вложенность можно бесконечнуюю с названием _name
export default {
  name: 'TypeId'
}
</script>