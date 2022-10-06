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
  },

  container2:{
    flex:3
  },

  subview:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
  },

  toview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '10%',
  },

  txtstyle:{
    paddingLeft: '5%'
  }

});