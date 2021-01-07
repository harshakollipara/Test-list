import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

interface CustomHeaderProps {
  navigation: any;
  title?: string;
  onPressLeft?: any;
  onPressRight?: any;
  visibleLeft?: boolean;
  visibleRight?: boolean;
  leftImageName?: any;
  rightImageName?: any;
  goBack?: boolean;
}

interface CustomHeaderState {}

class CustomHeader extends Component<CustomHeaderProps, CustomHeaderState> {
  public static defaultProps: Partial<CustomHeaderProps> = {
    visibleLeft: true,
    visibleRight: true,
  };

  render() {
    const {
      title,
      
      visibleRight,
      goBack
    } = this.props;

    return (
      <View>
        <View style={styles.container}>
           {goBack ? (
          <View style={styles.imageContainer} >
              <TouchableOpacity
                style={styles.leftImageView}
                onPress={() => this.props.navigation.goBack()}
              >
                  <Image
                  style={styles.menuIconImageDimension}
                  source={require('../../Commons/Assets/image/back.png')}
                />
              </TouchableOpacity>
          </View>
            ) : null}

          <View style={styles.centerContainer}>
            <Text style={styles.title}> {title} </Text>
          </View>

          <View style={styles.imageContainer}>
            {visibleRight ? (
              <TouchableOpacity
                style={styles.rightImageView}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Image
                  source={require('../../Commons/Assets/image/power.png')}
                />
              </TouchableOpacity>
            ) : null}
          </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4511e',
    height: 65,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  rightImageView: {
    height: 25,
    width: 25,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4511e',
  },
  leftImageView: {
    height: 25,
    width: 25,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4511e',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: '100%',
  },
  menuIconImageDimension: {
    height: '90%',
    width: '98%',
  },
  centerContainer: {
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '100%',
  },
});

export default CustomHeader;
