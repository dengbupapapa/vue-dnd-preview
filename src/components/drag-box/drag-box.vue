<script setup>
import { computed, unref } from "vue";
import { useDrag } from "vue3-dnd";
// import { number } from "echarts";
const emit = defineEmits(["change"]);
const props = defineProps({
  data: {
    type: Object,
  },
  // index: {
  //   type: Number,
  // },
  // idx: {
  //   type: Number,
  // },
});
const [collect, drag, dragPreview] = useDrag(() => ({
  type: "Box",
  item: () => props?.data,
  end: (item, monitor) => {
    emit("change", item, monitor);
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}));
const isDragging = computed(() => unref(collect).isDragging);
</script>
<template>
  <slot v-bind="{ drag, isDragging, dragPreview }"></slot>
</template>
