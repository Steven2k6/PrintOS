<template>
  <div>
    <v-toolbar density="compact" elevate-on-scroll clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-model="model" @click="toggleTheme" variant="tonal">
        Switch Theme</v-btn
      >
    </v-toolbar>
  </div>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  data: () => ({
    model: "Light",
  }),
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
