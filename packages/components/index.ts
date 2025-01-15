import * as components from "./components";
import "@kairos-ui/theme-chalk/index.less"
import type {App} from 'vue'

const FUNCTION_COMP = ["TMessage"];

export default {
  install(app :App) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value as any)
    });
  }
}

