import Vue from "vue";
import Vuetify, {
  VApp,
  VContainer,
  VCol,
  VRow,
  VAppBar,
  VBtn,
  VImg,
  VSpacer,
  VSimpleTable,
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VApp,
    VContainer,
    VCol,
    VRow,
    VAppBar,
    VBtn,
    VImg,
    VSpacer,
    VSimpleTable,
  },
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5e04cc",
        secondary: "#2C7300",
        accent: "#CEE696",
        error: "#B00020",
        info: "#2196F3",
        success: "#97CC04",
        warning: "#FFA000",
      },
    },
  },
});
