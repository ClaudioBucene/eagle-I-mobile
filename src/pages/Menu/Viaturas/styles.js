import {StyleSheet} from  'react-native';
export default StyleSheet.create({ 

    container: { 
         flex: 1, 
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
        flex: 3, 
        backgroundColor: "#F5F5F5" 
    },

    view4:{
        flex: 4, 
        backgroundColor: "#F5F5F5" ,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    view5:{
        flex: 4, 
        backgroundColor: "#F5F5F5" ,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


    menuButtonsUp:{
        backgroundColor: 'lightgrey',
        width: '42%',
        height:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: '5%',
        borderRadius: 20
    },

    menuButtonsDown:{
        backgroundColor: 'lightgrey',
        width: '42%',
        height:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 20
    },

   })