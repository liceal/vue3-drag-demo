<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue'
import Sortable from 'sortablejs'

export default defineComponent({
  setup() {
    // 数据格式
    let gridData = ref([
      ['a', 'a', 'b'],
      ['c', 'c', 'b'],
      ['d', 'e', 'f']
    ])

    function dragStartFn(e: DragEvent) {
      console.log(e)
      e.dataTransfer.effectAllowed = 'move'
    }

    function dragFn(e) {
      console.log(e)
    }

    const containerRef = ref()
    onMounted(() => {
      new Sortable(containerRef.value, {
        animation: 150,
        ghostClass: 'blue-background-class',
        onMove(e) {
          console.log(e)
          let { dragged, related } = e
          let Tgridarea = getComputedStyle(dragged).gridArea
          let Rgridarea = getComputedStyle(related).gridArea
          dragged.style.gridArea = Rgridarea
          related.style.gridArea = Tgridarea
          console.log(Tgridarea, Rgridarea)
        }
      })
    })

    return () => [
      <div id="example1" class="container" ref={containerRef}>
        <div
          class="item item1"
          style={{
            gridArea: `a`
          }}
          key="1"
        >
          1
        </div>
        <div class="item item2" key="2">
          2
        </div>
        <div class="item item3" key="3">
          3
        </div>
        <div class="item item4" key="4">
          4
        </div>
        <div class="item item5" key="5">
          5
        </div>
        <div class="item item6" key="6">
          6
        </div>
      </div>
      // <hr />,
      // <div id="example2" class="container">
      //   <div class="item item1" draggable={true}>
      //     1
      //   </div>
      //   <div class="item item2" draggable={true}>
      //     2
      //   </div>
      //   <div class="item item3">3</div>
      //   <div class="item item4">4</div>
      //   <div class="item item5">5</div>
      //   <div class="item item6">6</div>
      // </div>
    ]
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    'a a b'
    'c e e'
    'd f f';
  gap: 10px;
}
.item {
  height: 100px;
  border: 1px solid gray;
}
.item1 {
  /* grid-area: var(--grid-area, a); */
  background: red;
}
.item2 {
  grid-area: b;
  background: yellow;
}
.item3 {
  grid-area: c;
  background: blueviolet;
}
.item4 {
  grid-area: d;
  background: pink;
}
.item5 {
  grid-area: e;
  background: aqua;
}
.item6 {
  grid-area: f;
  background: sandybrown;
}
</style>
