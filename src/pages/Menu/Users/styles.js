import { width } from '@mui/system';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5" ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    paddingTop: '10%',
    paddingBottom: '20%'
  },

  container2:{
    flex:3
  },

  leftview: {
    flexDirection:'row', 
    alignItems:'center',
  },

  subview:{
    backgroundColor: '#F5F5F5',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10%',
  },

  tostyle:{
    activeOpacity: '3'
  },

  txtstyle: {
    paddingLeft:'5%',
    color: '#12375C'
  }

 });