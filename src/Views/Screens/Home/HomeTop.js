import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { msgiconImage, searchiconImage } from '../../../Images'
import { useNavigation } from '@react-navigation/native'

const HomeTop = () => {
   const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}> 
    <TextCustom style={styles.fb}>facebook</TextCustom>

    <TouchableOpacity>
    <View style={styles.cont}>
    <TextCustom style={styles.plus}>+</TextCustom>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.container}>
    <ImageCustom source={searchiconImage} style={styles.img}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{navigation.navigate('Message')}}>
    <View style={styles.container}>
    <ImageCustom source={msgiconImage} style={styles.img}/>
    </View>
    </TouchableOpacity>

    </View>
  )
}

export default HomeTop

const styles = StyleSheet.create({
    fb:{
        fontSize:30, 
        fontWeight:'bold',
        color:'#1877F2', 
        flex:1
    },
     img:{
        height:25, width:25,alignSelf:"center"
     }, 
     container:{
        height:40, width:45, backgroundColor:'#edefee',
        borderRadius:20, padding:7, marginRight:5
     }, 
     plus:{
      fontSize:30, color:'black', fontWeight:'500', alignSelf:'center'
     },
     cont:{
      height:40, width:45, backgroundColor:'#edefee',
      borderRadius:20, marginRight:5
   },
})