import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },
  textView: {
    textAlignVertical: 'center',
    padding: 10,
    color: '#000'
  },
  textSubView: {
    textAlignVertical: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000',
    fontWeight: 'bold',
  },
 
 
  
  itemSeparator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#000',
  }
});

export default styles;