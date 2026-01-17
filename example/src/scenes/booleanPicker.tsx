import { Text, type TextStyle, View, type ViewStyle } from "react-native";
import { useMemo, useState } from "react";
import {
  RepeatingWheelPicker,
  type RepeatingWheelPickerProps,
} from "@pluto-whale-studio/repeating-wheel-picker";
import styles, { Colors } from "../constants/styles";

const INITIAL_INDEX = 0;

export default function BooleanPicker() {
  const data: boolean[] = useMemo(() => [true, false], []);
  const [, setSelected] = useState(data[INITIAL_INDEX]);

  const exampleProps = useMemo(
    (): RepeatingWheelPickerProps<boolean> => ({
      // mandatory
      setSelected: setSelected,
      initialIndex: INITIAL_INDEX,
      data: data,

      // optional
      getLabel: (b: boolean) => (b ? "Yes" : "No"),
      itemDisplayCount: 2,

      containerVerticalPadding: 5,
      containerHorizontalPadding: 20,
      containerStyle: pickerContainerStyle,
    }),
    [data]
  );

  return (
    <View style={tileStyle}>
      <View style={rowStyle}>
        <Text style={titleStyle}>Boolean picker:</Text>
        <RepeatingWheelPicker<boolean> {...exampleProps} />
      </View>
    </View>
  );
}

const tileStyle: ViewStyle = {
  ...styles.tile,
  borderWidth: 0,
};

const rowStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
};

const titleStyle: TextStyle = {
  ...styles.title,
  marginRight: 20,
};

const pickerContainerStyle: ViewStyle = {
  ...styles.pickerContainer,

  borderRadius: 30,
  borderWidth: 1,
  borderColor: "white",
  backgroundColor: Colors.highlight,
};
