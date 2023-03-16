// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    /*themes: {
      light: {
        background: "#272727",
        toolbar: "#1e1e1e",
        error: "#ff57722",
      },
      dark: {
        background: "#1e1e1e",
        toolbar: "#272727",
        error: "#ff57722",
      },
    },*/
  },
});
