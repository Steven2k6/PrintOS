<template>
  <v-switch
    v-model="model"
    hide-details
    true-value="Dark"
    false-value="Light"
    :label="`Switch to ${model}`"
    @change="toggleTheme"
  ></v-switch>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  data: () => ({
    model: "Dark",
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
