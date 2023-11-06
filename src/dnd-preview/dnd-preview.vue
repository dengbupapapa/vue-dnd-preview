<template>
  <teleport to="body" v-if="collectedProps.isDragging">
    <div
      :style="{
        position: 'fixed',
        pointerEvents: 'none',
        transform: `translate(${collectedProps.sourceClientOffset?.x}px, ${collectedProps.sourceClientOffset?.y}px)`,
        top: 0,
        left: 0,
        zIndex,
      }"
    >
      <slot></slot>
    </div>
  </teleport>
</template>
<script setup>
import { useDragLayer } from "vue3-dnd";
defineProps({
  zIndex: {
    type: Number,
    default: () => 9999999,
  },
});
/**
 * 获取容器
 */
let collectedProps = useDragLayer((monitor) => ({
  isDragging: monitor.isDragging(),
  sourceClientOffset: monitor.getSourceClientOffset(),
}));
</script>
