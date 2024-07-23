import type { Node } from "konva/lib/Node";

interface KonvaLayerProvider {
  addChild(child: Node): void;
}

export const useKonvaLayer = () => {
  const { addChild } = inject<KonvaLayerProvider>('konvaLayerProvider') as KonvaLayerProvider

  return {
    addChild
  }
}