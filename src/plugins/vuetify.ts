import Vue from "vue";
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: "#1e1e1e",
          secondary: "#272727",
        },
      },
      light: {
        colors: {
          primary: "#272727",
          secondary: "#1e1e1e",
        },
      },
    },
  },
});
