<script lang="tsx">
import Sortable from 'sortablejs'
import { defineComponent, ref } from 'vue'
import Resizeable from '@/components/resizeable/index.vue'

export default defineComponent({
  setup() {
    let VLine = ref()
    let HLine = ref()

    function getRefLineParams(params) {
      const { vLine, hLine } = params
      VLine.value = vLine
      HLine.value = hLine
    }

    return () => [
      <div class="container">
        <Resizeable
          parent={true}
          isConflictCheck={true}
          snap={true}
          snapTolerance={20}
          onRefLineParams={getRefLineParams}
        >
          1
        </Resizeable>
        <Resizeable
          parent={true}
          isConflictCheck={true}
          snap={true}
          snapTolerance={20}
          onRefLineParams={getRefLineParams}
        >
          2
        </Resizeable>
        <Resizeable
          parent={true}
          isConflictCheck={true}
          snap={true}
          snapTolerance={20}
          onRefLineParams={getRefLineParams}
        >
          3
        </Resizeable>

        {VLine.value?.map((v) => [
          <span
            class="ref-line v-line"
            v-show={v.display}
            style={{ left: v.position, top: v.origin, height: v.lineLength }}
          ></span>
        ])}
        {HLine.value?.map((v) => [
          <span
            class="ref-line h-line"
            v-show={v.display}
            style={{ top: v.position, left: v.origin, width: v.lineLength }}
          ></span>
        ])}
      </div>
    ]
  }
})
</script>

<style scoped>
.container {
  width: 1000px;
  height: 1000px;
  border: 1px solid black;
  position: relative;
}
</style>
