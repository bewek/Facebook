import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { searchiconImage } from '../../../Images'

const NotTop = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
      <TextCustom style={styles.name}>Notifications</TextCustom>

    <TouchableOpacity>
    <View style={styles.container}>
    <ImageCustom source={searchiconImage} style={styles.img}/>
    </View>
    </TouchableOpacity>
  </View>
  )
}

export default NotTop

const styles = StyleSheet.create({
    name:{
        fontSize:27, color:'black', fontWeight:'700', flex:1
    },
    img:{
        height:25, width:25, alignSelf:'center', marginTop:5
     }, 
     container:{
        height:40, width:45, backgroundColor:'#edefee',
        borderRadius:20,
     },
})