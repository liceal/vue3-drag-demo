<script lang="tsx">
/*
  https://jbaysolutions.github.io/vue-grid-layout/zh/guide/properties.html#gridlayout
  文档
*/
import { defineComponent, reactive, ref } from 'vue'
import { GridLayout, GridItem } from 'vue3-grid-layout-next'

export default defineComponent({
  setup() {
    let layout = reactive([
      { x: 0, y: 0, w: 2, h: 2, i: '0' },
      { x: 2, y: 0, w: 2, h: 4, i: '1' }
    ])

    let isEdit = ref(true)
    let verticalCompact = ref(false)
    let preventCollision = ref(false)

    return () => [
      <div>
        <button onClick={() => (isEdit.value = !isEdit.value)}>
          静态{isEdit.value ? '✅' : '❌'}
        </button>

        <button onClick={() => (verticalCompact.value = !verticalCompact.value)}>
          垂直压缩{verticalCompact.value ? '✅' : '❌'}
        </button>

        <button onClick={() => (preventCollision.value = !preventCollision.value)}>
          防止碰撞{preventCollision.value ? '✅' : '❌'}
        </button>
      </div>,
      <GridLayout
        layout={layout}
        colNum={20}
        rowHeight={30}
        verticalCompact={verticalCompact.value}
        preventCollision={preventCollision.value}
      >
        {layout.map((item) => [
          // @ts-ignore
          <GridItem static={!isEdit.value} {...item}>
            {item.i}
          </GridItem>
        ])}
      </GridLayout>
    ]
  }
})
</script>

<style scoped>
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item {
  background: #ccc;
  border: 1px solid black;
}
</style>
