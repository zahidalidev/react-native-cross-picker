import React, { useState } from 'react';
import { View, Modal, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

function ReactNativeCrossPicker({ placeHolderColor = "grey", placeHolderSize = RFPercentage(2.9), mainComponentStyle, modalComponentStyle, modalTextStyle, items, setItem, selectedItem, placeholder = "Select Item", width = "100%", iconComponent, modalMarginTop = "50%", modalMaxHeight = RFPercentage(40), modalBottomBorderColor }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible()} >
        <View style={{ borderColor: "grey", borderWidth: 0.5, padding: RFPercentage(1.4), paddingRight: 0, borderRadius: RFPercentage(1), width, flexDirection: "row", justifyContent: "center", alignItems: "center", ...mainComponentStyle }} >
          <Text style={{ fontSize: placeHolderSize, color: placeHolderColor, width: "90%" }} >{selectedItem ? selectedItem : placeholder}</Text>
          <View style={{ width: "10%" }} >
            {iconComponent()}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal onTouchStart={() => setModalVisible(false)} animationType="slide" transparent={true} visible={modalVisible} animationType="slide" >
        <View style={{ maxHeight: modalMaxHeight, marginTop: modalMarginTop, flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}  >
            <Text style={{ color: "red", fontSize: RFPercentage(2), alignSelf: "flex-end", marginRight: RFPercentage(3) }} >Cancel</Text>
          </TouchableWithoutFeedback>

          <ScrollView contentContainerStyle={{ backgroundColor: "white", justifyContent: "center", ...modalComponentStyle }} style={{ marginTop: RFPercentage(2), width: "90%" }} showsVerticalScrollIndicator={false} >
            {items.map((item, index) => <TouchableOpacity style={{ marginTop: RFPercentage(1), justifyContent: "center", alignItems: "flex-start", borderBottomWidth: modalBottomBorderColor ? 0.5 : 0, borderBottomColor: modalBottomBorderColor }} key={index} onPress={() => {
              setModalVisible(false);
              setItem(item.value)
            }} >
              <Text style={{ padding: 12, marginLeft: RFPercentage(2), fontSize: RFPercentage(2.5), color: "grey", ...modalTextStyle }} >{item.label}</Text>
            </TouchableOpacity>
            )}
          </ScrollView>

        </View>
      </Modal>
    </>
  );
}
export default ReactNativeCrossPicker;



