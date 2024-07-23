<script setup lang="ts">
import type { Shape } from "konva/lib/Shape";

const { addChild } = useKonvaLayer();

const props = defineProps<{
  shape: Shape;
}>();

onMounted(() => {
  addChild(props.shape);
});
</script>

<template></template>
