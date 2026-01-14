import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
const IndicatorModal = ({isLoading}: {isLoading: boolean}) => {
  return (
    <Modal
      visible={isLoading}
      transparent={true}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000050',
        }}>
        <ActivityIndicator
          animating={isLoading}
          size="large"
          color="#000"
        />
      </View>
    </Modal>
  );
};
export default IndicatorModal;
