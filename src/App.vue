<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import Router from '@/router'

export default defineComponent({
  setup() {
    function renderRouterButton() {
      const routers = Router.getRoutes()
      // console.log(routers)
      return routers.map((v) => {
        return ['（', <RouterLink to={v.path}>{v.name}</RouterLink>, '）']
      })
    }
    return () => [renderRouterButton(), <hr />, <RouterView />]
  }
})
</script>
