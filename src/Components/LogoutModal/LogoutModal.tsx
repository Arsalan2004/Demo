import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Fonts from '../../constants/Fonts';
import {moderateScale} from 'react-native-size-matters';

const LogoutModal = ({
  isVisible,
  onLogout,
  onCancel,
  primaryBtnText,
  detail,
}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {detail ? detail : 'Are you sure you want to logout?'}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={{...styles.button, backgroundColor: Colors.primary}}
              onPress={onLogout}>
              <Text style={styles.textStyle}>
                {primaryBtnText ? primaryBtnText : 'Logout'}
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{...styles.button, backgroundColor: '#CCCCCC'}}
              onPress={onCancel}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    padding: moderateScale(35),
    alignItems: 'center',
  },
  modalText: {
    marginBottom: moderateScale(20),
    textAlign: 'center',
    fontSize: RFValue(15),
    fontFamily: Fonts.Medium,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    elevation: moderateScale(2),
    minWidth: moderateScale(100),
    marginHorizontal: moderateScale(10),
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogoutModal;
