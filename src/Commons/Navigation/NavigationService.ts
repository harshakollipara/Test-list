import { CommonActions } from "@react-navigation/native";

export default class NavigationService {
  private static navigation: any;

  static setNavigator(navigatorRef: any): void {
    NavigationService.navigation = navigatorRef;
  }

  static navigate(name: string, param: any = undefined) {
    NavigationService.navigation.dispatch(
      CommonActions.navigate({
        name,
        params: param,
      }),
    );
  }
}