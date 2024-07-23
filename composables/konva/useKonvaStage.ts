import type { Layer } from "konva/lib/Layer";

interface KonvaStageProvider {
  addLayer(child: Layer): void;
}

export const useKonvaStage = () => {
  const { addLayer } = inject<KonvaStageProvider>('konvaStageProvider') as KonvaStageProvider

  return {
    addLayer
  }
}