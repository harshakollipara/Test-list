import {Alert} from 'react-native';

export default class AlertHelper {
  static show(
    title: string,
    message: string,
    arrayOfButtons: Array<any>,
    shouldAddDelay = true,
    delay = 500,
    cancelable = false,
  ) {
    if (shouldAddDelay) {
      setTimeout(
        () => AlertHelper.display(title, message, arrayOfButtons, cancelable),
        delay,
      );
      return;
    }

    AlertHelper.display(title, message, arrayOfButtons, cancelable);
  }

  static display(
    title: string,
    message: string,
    arrayOfButtons: Array<any>,
    cancelable: boolean,
  ) {
    Alert.alert(title, message, arrayOfButtons, {cancelable});
  }
}
