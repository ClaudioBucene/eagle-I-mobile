import {StyleSheet} from  'react-native';
import fonts from '../styles/fonts';
export default StyleSheet.create({ 

    container: { 
         flex: 1, 
         justifyContent: 'center',
         alignItems:'center',
         backgroundColor: 'white'
    }, 

    firstTxt: {
        color: '#12375C',
        marginTop: "12%",
        fontFamily: fonts.heading,
        fontSize: 18
    },

    uinputView:{
        marginTop: "5%",
        height:56,
        width: "80%",
        justifyContent: 'center',
        borderRadius: 6
    },

    pinputView:{
        marginVertical: "8%",
        width: "80%",
        height:56,
        justifyContent: 'center',
        borderRadius: 6
    },

    txtInput:{
        backgroundColor: '#F5F5F5',
        textColor: '#12375C'
    }, 
        
    BtnView:{
        flexDirection:'row',
        width:'80%',
        height:56,
        backgroundColor: '#12375C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

    BtnText: {
        marginLeft:12,
        color: '#A1C861',
        fontFamily: fonts.heading,
        fontSize: 15
    }
})