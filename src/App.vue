<style>
@import "./assets/styles/fonts.css";
.font {
  font-family: Play;
}
</style>

<script>
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Toolbar,
    Footer,
  },
};
</script>

<template>
  <v-app class="font">
    <Toolbar />
    <Footer />
  </v-app>
</template>
