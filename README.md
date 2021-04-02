# react-native-cross-picker

[![npm version](https://badge.fury.io/js/react-native-cross-picker.svg)]()
<!-- [![npm downloads](https://img.shields.io/npm/dm/react-native-cross-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-native-cross-picker) -->

A Picker component for React Native which emulates the native `<select>` interfaces for iOS and Android

For iOS, Android or other platform this component looks same.

## [View examples on snack.expo.io](https://snack.expo.io/@zahidalidev/react-native-cross-picker)

## Getting Started

### Installing

```
npm install react-native-cross-picker

```

### Basic Usage

```js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"; // for expo and any other for react-native-cli

import ReactNativeCrossPicker from "react-native-cross-picker"


export default function Picker() {
  const [selectedItem, setItem] = useState('')

 const items = [
    { label: "label1", value: 1 },
    { label: "label2", value: 2 },
    { label: "label3", value: 3 },
    { label: "label4", value: 4 },
    { label: "label5", value: 5 },
    { label: "label6", value: 6 },
    { label: "label7", value: 7 },
    { label: "label8", value: 8 },
    { label: "label9", value: 9 },
  ]

  const iconComponent = () => {
    return <MaterialCommunityIcons
      name={"chevron-down"}
      size={20}
      color={"grey"}
    />
  }

  return (
    <View style={styles.container}>
      <ReactNativeCrossPicker modalTextStyle={{}} modalComponentStyle={{}} mainComponentStyle={{ borderColor: "grey", borderWidth: 0.3 }} modalBottomBorderColor="black" iconComponent={iconComponent} items={items} width={"90%"} setItem={setItem} selectedItem={selectedItem} placeholder="Select Item" modalMarginTop={"50%"} modalMaxHeight={"40%"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2efef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```


### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `setItem`                                 | Will set the selected value to selectedItem                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **required**<br>useState hook |
| `items`                                         | The items for the component to render<br> - Each item should be in the following format:<br>`{label: 'Orange', value: 'orange'}`<br>- `label` and `value` are required<br>- `value` can be any data type<br>-                                    | **required**<br>array    |
| `placeholder`                                   | - An override for the default placeholder, a label of `Select item`                                                                                                  | string           |
| `modalTextStyle`                                         | Style overrides for text parts of the popup component.<br>                                                                                                                                                                                                                                                                             | style                                                                               |
| `modalComponentStyle`                                         | Style overrides the style of the popup component.<br>                                                                                                                                                                                                                                                                             | style                                                                               |
| `mainComponentStyle`                                         | Style overrides style of the main component.<br>                                                                                                                                           | style                   |
| `modalBottomBorderColor`                                   | Additional props to pass to the Picker to display the bottom border of main component                                                                                                                                                                                                                                                          | color                   |
| `iconComponent`                                          | Custom icon component to be rendered.<br>                                                                                                                                                                                                                                                                                                                                                                                                       | function that return component                                   |
| `width`                                | Additional props to pass to the main component to set the width default will be 100%.                                                                                                                                                                                                                                                                                                                             | number, percentage like width="80%".                   |
| `placeholder`                         | Default placeholder when item is not selected                                                                                                                                                                                                                                                                                                                                                                 | string                   |
| `modalMarginTop`<br>                                    | margin of the popup model from the top default will be 50%                                                                                                                                                                                                                                                                                                                                                                                 | number, percentage etc.                 |
| `modalMaxHeight`<br>                                    | Maximum hight of the popup modal                                                                                                                                                                                                                                                                                                                                                                                                 | number, percentage etc.

## License

react-native-cross-picker is [MIT licensed](https://github.com/zahidalidev/react-native-cross-picker/blob/master/LICENSE) and built with :heart: by Zahid Ali.
