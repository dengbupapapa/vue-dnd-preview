<script setup>
import { useDrop } from "vue3-dnd";
import { computed, toRef, unref, watch } from "vue";

const props = defineProps(["active", "config"]);
const config = toRef(props, "config");
const emit = defineEmits(["update:active", "drop"]);
const [dropCollect, drop] = useDrop(() => ({
  accept: "Box",
  drop: (item, monitor) => {
    emit("drop");
    return {
      item,
      config: unref(config),
      sourceClientOffset: monitor.getSourceClientOffset(),
    };
  },
  collect: (monitor) => {
    return {
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    };
  },
}));
const canDrop = computed(() => unref(dropCollect).canDrop);
const isOver = computed(() => unref(dropCollect).isOver);
const isActive = computed(() => unref(canDrop) && unref(isOver));

watch(isActive, (newIsActive) => {
  emit("update:active", newIsActive);
});
</script>
<template>
  <slot v-bind="{ drop, canDrop, isOver, isActive }"></slot>
</template>
