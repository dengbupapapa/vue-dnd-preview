# vue-dnd-preview

> vue dnd preview in non-React-Dnd-HTML5-Backend

## INSTALL
```
npm i vue-dnd-preview -S
```

### EXAMPLE
```vue
<script setup>
import DndPreview from "vue-dnd-preview";
</script>
<template>
    <dnd-preview>
        <div class="root">
            <div class="head">
                head
            </div>
            <div class="body">
                body
            </div>
        </div>
    </dnd-preview>
</template>
```

## API

| Property | Description                             | Type   | Default Value |
| -------- | --------------------------------------- | ------ | ------------- |
| default  | Preview element node                    | slot   |               |
| zIndex   | Preview the z-index of the element node | number | 9999999       |

