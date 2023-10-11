<script setup>
import { DndProvider } from "vue3-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import DragBox from "@/components/drag-box/drag-box.vue";
import DropBox from "@/components/drop-box/drop-box.vue";
import DndPreview from "@/dnd-preview/dnd-preview.vue";
function dragChange(event) {
  console.log(event);
}
</script>

<template>
  <dnd-provider :backend="TouchBackend" :options="{ enableMouseEvents: true }">
    <drag-box
      v-slot="{ drag }"
      @change="dragChange"
      :data="{ text: '我是你的内容' }"
    >
      <div :ref="drag">drag text</div>
      <dnd-preview>
        <button>drag text</button>
      </dnd-preview>
    </drag-box>
    <drop-box v-slot="{ drop }">
      <div
        :ref="drop"
        style="width: 800px; height: 600px; border: 1px solid grey"
      >
        drop
      </div>
    </drop-box>
  </dnd-provider>
</template>
