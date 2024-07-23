<script setup lang="ts">
import Konva from "konva";
import type { Layer } from "konva/lib/Layer";

const props = defineProps<{
  width: number;
  height: number;
}>();

const stage = shallowRef<Konva.Stage | undefined>();
const children: Ref<Layer[]> = shallowRef<Konva.Layer[]>([]);

onMounted(() => {
  stage.value = new Konva.Stage({
    container: "container",
  });

  for (let i = 0; i < children.value.length; i++) {
    stage.value.add(children.value[i]);
  }
});

const addLayer = (child: Layer) => {
  children.value.push(child);
};

watchEffect(() => {
  if (!stage.value) return;

  stage.value.height(props.height);
  stage.value.width(props.width);
});

provide("konvaStageProvider", {
  addLayer,
});
</script>

<template>
  <div id="container">
    <slot></slot>
  </div>
</template>
