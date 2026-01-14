import Toast from 'react-native-simple-toast';
export const notifyMessage = (msg: string) => {
    try {
      Toast.showWithGravity(msg, Toast.SHORT, Toast.BOTTOM);
    } catch (error) {
    }
  };