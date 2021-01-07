import { StyleSheet} from 'react-native';

// @ts-ignore
export  default styles = StyleSheet.create({
     MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 5,
    },
    textView: {
        textAlignVertical:'center',
        padding:10,
        color: '#000'
    },
    textSubView:{
        textAlignVertical:'center',
        paddingLeft:10,
        paddingRight:10,
        color: '#000',
        fontWeight:'bold',
    },
    loginContainer:{
        flex: 1,
    backgroundColor: 'white'
    },
    buttonContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      loginButton: {
        backgroundColor: '#c9c9c9',
        marginTop:'5%',
        marginLeft:'3%'
      },
    });