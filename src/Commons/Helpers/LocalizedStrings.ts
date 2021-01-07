import {strings} from '../Translations/I18n';

export default class LocalizedStrings {
  static incorrectUserNameOrPassword = () =>
    strings('incorrectUserNameOrPassword');
  static loginFailed = () => strings('loginFailed');
  static logOut = () => strings('logOut');
}
