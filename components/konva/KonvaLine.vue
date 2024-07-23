<script setup lang="ts">
import { Line, type LineConfig } from "konva/lib/shapes/Line";

const props = defineProps<{
  config: LineConfig;
}>();

const line = shallowRef(new Line(props.config));
</script>

<template>
  <KonvaShape :shape="line" />
</template>
