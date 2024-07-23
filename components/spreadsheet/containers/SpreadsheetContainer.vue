<script setup lang="ts">
const konvaContainer = ref<HTMLDivElement | undefined>();

const width = ref(0);
const height = ref(0);

onMounted(() => {
  if (!konvaContainer.value) return;

  width.value = konvaContainer.value.clientWidth;
  height.value = konvaContainer.value.clientHeight;
});
</script>

<template>
  <div ref="konvaContainer">
    <KonvaStage :width="width" :height="height">
      <KonvaLayer>
        <KonvaRect
          :config="{
            x: 0,
            y: 0,
            width: 10000,
            height: 26,
            fill: '#a3a3a3',
          }"
        />
        <KonvaRect
          :config="{
            x: 1,
            y: 1,
            width: 10000 - 2,
            height: 24,
            fill: 'white',
          }"
        />
        <KonvaText
          :config="{
            x: 0,
            y: 0,
            width: 200,
            height: 26,
            text: 'A',
            fill: 'black',
            align: 'center',
            fontSize: 11,
            padding: 7,
          }"
        />
        <KonvaLine
          :config="{
            points: [40, 0, 40, 26],
            stroke: '#a3a3a3',
            strokeWidth: 1,
          }"
        />
      </KonvaLayer>
    </KonvaStage>
  </div>
</template>
