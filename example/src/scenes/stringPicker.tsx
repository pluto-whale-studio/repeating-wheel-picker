import { Text, type TextStyle, View, type ViewStyle } from "react-native";
import { useMemo, useState } from "react";
import {
  RepeatingWheelPicker,
  type RepeatingWheelPickerProps,
} from "@pluto-whale-studio/repeating-wheel-picker";
import styles, { Colors } from "../constants/styles";

const INITIAL_INDEX = 7;

export default function StringPicker() {
  const data: string[] = useMemo(
    () => ["art", "bus", "cache", "dart", "end", "fun", "grass", "hug"],
    []
  );
  const [selected, setSelected] = useState(data[INITIAL_INDEX]);

  const exampleProps = useMemo(
    (): RepeatingWheelPickerProps<string> => ({
      // mandatory
      setSelected: setSelected,
      initialIndex: INITIAL_INDEX,
      data: data,

      // optional
      itemDisplayCount: 6,
      itemHeight: 25,

      containerStyle: pickerContainerStyle,

      gradientFadeColor: Colors.tile,
    }),
    [data]
  );

  return (
    <View style={tileStyle}>
      <View style={rowStyle}>
        <Text style={titleStyle}>String picker:</Text>
        <RepeatingWheelPicker<string> {...exampleProps} />
      </View>
      <Text style={selectedStyle}>Selected: {selected}</Text>
    </View>
  );
}

const tileStyle: ViewStyle = {
  ...styles.tile,
  paddingVertical: 0,
  paddingBottom: 10,
};

const rowStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const titleStyle: TextStyle = {
  ...styles.title,
  flex: 1,
  textAlign: "left",
};

const pickerContainerStyle: ViewStyle = {
  ...styles.pickerContainer,
  flex: 1,
};

const selectedStyle: TextStyle = {
  ...styles.text,
  fontStyle: "italic",
  textAlign: "right",
};
