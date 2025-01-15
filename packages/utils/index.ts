import type {App,Component} from 'vue'

export const withInstall = <T extends Component>(comp: T) => {
  (comp as any).install = (app:App) => {
    app.component((comp as any).name, comp)
  }
  return comp
}