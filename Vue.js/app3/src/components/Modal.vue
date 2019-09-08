<template>
  <div>
    <h1>Modal</h1>
    <button class="btn btn-primary" @click.prevent="toggleShow">Toggle</button>
    <h2 v-if="isShowing">Modal content</h2>
    <button class="btn btn-primary" @click.prevent="emitMethod">Emit event</button>
  </div>
</template>

<script>
import localMixin from "../mixins/localMixin";
import EventBus from "../eventBus";

export default {
  name: "Modal",
  // чтобы миксин применился к этой компаненте
  mixins: [localMixin],
  data() {
    return {
      title: "Modal"
    };
  },
  mounted() {
    // $on глобально прослушивать компонент
    console.log("hello from Vue instance! " + this.title);
    EventBus.$on("CUSTOM_EVENT", data => {
      console.log("custom event from Modal with data: " + data);
    });
  },
  beforeDestroy() {
    EventBus.$off("CUSTOM_EVENT");
  },
  methods: {
    // $emit вызывает ивент эмитим на шине а не в компоненте. eventData можем передавать
    // или не передавать
    emitMethod() {
      EventBus.$emit("CUSTOM_EVENT", "eventData");
    }
  }
};
</script>

<style scoped>
</style>