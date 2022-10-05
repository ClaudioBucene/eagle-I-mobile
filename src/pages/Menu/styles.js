import { red } from '@mui/material/colors';
import {StyleSheet} from  'react-native';

export default StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent:'center'
   }, 

   view1:{
       flex: 1, 
       backgroundColor: "#F5F5F5" 
   },

   view2:{
       flex: 2, 
       backgroundColor: "#F5F5F5" ,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: '6%'
      },


      view3:{
        flex: 14, 
        backgroundColor: "green"
    }
})