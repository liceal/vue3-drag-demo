<script lang="tsx">
import Sortable from 'sortablejs'
import { defineComponent, onMounted, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const itemsRef = ref()
    const items = reactive([
      { content: '1', h: 10, w: 10 },
      { content: '2', h: 20, w: 20 },
      { content: '3', h: 10, w: 30 },
      { content: '4', h: 20, w: 40 },
      { content: '5', h: 10, w: 50 },
      { content: '6', h: 10, w: 60 }
    ])

    function renderItems() {
      //计算剩余格子
      // let itemsN = 0
      // items.forEach((v) => {
      //   itemsN += v.h * v.w
      // })
      // let overN = 100 - itemsN

      // items.push(...Array(overN).fill({ content: '空', h: 1, w: 1, empty: true }))

      return items.map((v) => {
        return (
          <div
            class="item"
            style={{
              gridColumnStart: `span ${v.w}`,
              gridRowStart: `span ${v.h}`
            }}
          >
            <button onClick={() => (v.w += 1)}>w</button>
            <button onClick={() => (v.h += 1)}>h</button>
            {v.w}*{v.h}
          </div>
        )
      })
    }

    onMounted(() => {
      new Sortable(itemsRef.value, {
        animation: 150
      })
    })

    return () => [
      <div class="items" ref={itemsRef}>
        {renderItems()}
      </div>
    ]
  }
})
</script>

<style scoped>
.items {
  width: 500px;
  height: 500px;
  border: 1px solid gray;

  display: grid;
  grid-template-columns: repeat(100, 5px);
  grid-template-rows: repeat(100, 5px);
}
.item {
  border: 1px solid gray;
  position: relative;
}
</style>
