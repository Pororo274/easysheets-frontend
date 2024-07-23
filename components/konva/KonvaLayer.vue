<script setup lang="ts">
import type { Group } from "konva/lib/Group";
import { Layer } from "konva/lib/Layer";
import type { Shape } from "konva/lib/Shape";

const { addLayer } = useKonvaStage();
const layer: Ref<Layer> = shallowRef(new Layer({}));

const addChild = (child: Group | Shape) => {
  layer.value.add(child);
  layer.value.draw();
};

onMounted(() => {
  addLayer(layer.value);
});

provide("konvaLayerProvider", {
  addChild,
});
</script>

<template>
  <slot></slot>
</template>
