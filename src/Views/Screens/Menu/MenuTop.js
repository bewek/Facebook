import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { cameraboyImage, searchiconImage, settingsImage } from '../../../Images'

const MenuTop = () => {
  return (
    <View>
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
    <TextCustom style={styles.name}>Menu</TextCustom>

    <TouchableOpacity>
  <View style={[styles.container,{marginRight:10}]}>
  <ImageCustom source={settingsImage} style={styles.img}/>
  </View>
  </TouchableOpacity>

  <TouchableOpacity>
  <View style={styles.container}>
  <ImageCustom source={searchiconImage} style={styles.img}/>
  </View>
  </TouchableOpacity>
  </View>

    <TouchableOpacity>
  <View style={{flexDirection:'row', marginTop:10}}>
    <ImageCustom source={cameraboyImage} style={styles.image}/>
    <View style={{paddingHorizontal:15}}>
        <TextCustom style={styles.text}>Bibek Chaudhary</TextCustom>
        <TextCustom>See your Profile</TextCustom>
    </View>
  </View>
</TouchableOpacity>

    </View>
  )
}

export default MenuTop

const styles = StyleSheet.create({
    name:{
        fontSize:27, color:'black', fontWeight:'500', flex:1
    },
    img:{
        height:25, width:25, alignSelf:'center', marginTop:8
     }, 
     container:{
        height:40, width:45, backgroundColor:'#edefee',
        borderRadius:20,
     }, 
     image:{
        height:45, width:45, borderRadius:30, marginLeft:10
    },
    text:{
        fontSize:16, color:'black', fontWeight:'500'
    }
})