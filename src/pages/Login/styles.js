import {StyleSheet} from  'react-native';

export default StyleSheet.create({ 

    container: { 
         flex: 1, 
         justifyContent: 'center',
         alignItems:'center',
         backgroundColor: 'white'
    }, 

    inputView:{
        width: "80%",
        marginBottom: 20,
        justifyContent: 'center',
    },

    txtInput:{
        selectionColor:'#12375C',
        outlineColor:'#12375C',
        activeOutlineColor:'#12375C'
    },
        
    loginBtn:{
    width: "40%"
    },
})