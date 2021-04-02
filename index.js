import React, { useState } from 'react';
import { View, Modal, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

function ReactNativeCrossPicker({ mainComponentStyle, modalComponentStyle, modalTextStyle, items, setItem, selectedItem, placeholder = "Select Item", width = "100%", iconComponent, modalMarginTop = "50%", modalMaxHeight = RFPercentage(40), modalBottomBorderColor = "black" }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible()} >
        <View style={{ padding: RFPercentage(1), width, flexDirection: "row", justifyContent: "center", alignItems: "center", ...mainComponentStyle }} >
          <Text style={{ fontSize: RFPercentage(2.9), color: "grey", width: "90%" }} >{selectedItem ? selectedItem.name : placeholder}</Text>
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
            {items.map((item, index) => <TouchableOpacity style={{ marginTop: RFPercentage(1), justifyContent: "center", alignItems: "flex-start", borderBottomWidth: 0.5, borderBottomColor: modalBottomBorderColor }} key={index} onPress={() => {
              setModalVisible(false);
              setItem(item)
            }} >
              <Text style={{ padding: 12, marginLeft: RFPercentage(2), fontSize: RFPercentage(2.5), color: "black", ...modalTextStyle }} >{item.name}</Text>
            </TouchableOpacity>
            )}
          </ScrollView>

        </View>
      </Modal>
    </>
  );
}

export default ReactNativeCrossPicker;

