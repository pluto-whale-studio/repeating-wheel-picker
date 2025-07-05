import { useCallback, useState } from "react";
import type { LayoutChangeEvent } from "react-native";

export default function useComponentHeight(): [
  height: number,
  onLayout: (event: LayoutChangeEvent) => void,
] {
  const [height, setHeight] = useState<number>(0);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { height: currentHeight } = event.nativeEvent.layout;
    setHeight(currentHeight);
  }, []);

  return [height, onLayout];
}
