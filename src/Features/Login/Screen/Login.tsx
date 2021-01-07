import {Button, Text, View} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, TextInput} from 'react-native';
import CustomHeader from '../../../Commons/Components/CustomHeader';
import AlertHelper from '../../../Commons/Helpers/AlertHelper';
import LocalizedStrings from '../../../Commons/Helpers/LocalizedStrings';
import styles from './styles';

interface LoginProps {
  dataSource: any;
  isLoading: boolean;
  navigation: any;
}
interface LoginState {
  email: string;
  password: string;
  loading: boolean;
}
const userInfo = {email: 'hruday@gmail.com', password: 'hruday'};

export default class Login extends Component<LoginProps, LoginState> {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(loginProp: LoginProps) {
    super(loginProp);
    this.state = {email: '', password: '', loading: false};
  }

  performLogin = async () => {
    if (
      userInfo.email === this.state.email &&
      userInfo.password === this.state.password
    ) {
      this.props.navigation.navigate('Dashboard');
    } else {
      this.displayAlert(
        LocalizedStrings.loginFailed(),
        LocalizedStrings.incorrectUserNameOrPassword(),
      );
    }
  };

  private displayAlert(title: string, message: string) {
    {
      let buttons = [
        {
          text: 'OK',
          onPress: () => null,
          style: 'cancel',
        },
      ];
      AlertHelper.show(title, message, buttons);
    }
  }

  render() {
    let {email} = this.state;
    let {password} = this.state;

    let width = Dimensions.get('window').width;

    return (
      <View style={styles.loginContainer}>
        <CustomHeader visibleLeft={false} visibleRight={false} title="Login" />
        <View>
          <View padder>
            <View>
              <TextInput
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({email})}
                placeholderTextColor="#015B99"
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={password => this.setState({password})}
                placeholderTextColor="#015B99"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Button
            onPress={this.performLogin.bind(this)}
            style={[styles.buttonContainer, styles.loginButton]}>
            <Text uppercase={false} style={{color: '#626453'}}>
              Log In
            </Text>
          </Button>
          
        </View>
      </View>
    );
  }
}
