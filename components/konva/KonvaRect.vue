<script setup lang="ts">
import { Rect, type RectConfig } from "konva/lib/shapes/Rect";

const props = defineProps<{
  config: RectConfig;
}>();

const rect = shallowRef(new Rect(props.config));
</script>

<template>
  <KonvaShape :shape="rect" />
</template>
