<script setup lang="ts">
import { Text } from "konva/lib/shapes/Text";
import type { TextConfig } from "konva/lib/shapes/Text";

const props = defineProps<{
  config: TextConfig;
}>();

const text = shallowRef(new Text(props.config));
</script>

<template>
  <KonvaShape :shape="text" />
</template>
