import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { cameraImage, menuiconImage, pencilImage } from '../../../Images'

const MsgTop = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
        <TouchableOpacity>
    <View style={[styles.container,{marginRight:10}]}>
    <ImageCustom source={menuiconImage} style={styles.accimg}/>
    </View>
    </TouchableOpacity>

      <TextCustom style={styles.name}>Chats</TextCustom>

      <TouchableOpacity>
    <View style={[styles.container,{marginRight:10}]}>
    <ImageCustom source={cameraImage} style={styles.accimg}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.container}>
    <ImageCustom source={pencilImage} style={styles.img}/>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default MsgTop

const styles = StyleSheet.create({
    name:{
        fontSize:25, color:'black', fontWeight:'400', flex:1
    },
    img:{
        height:25, width:25, alignSelf:'center', marginTop:8
     }, 
     container:{
        height:40, width:45, backgroundColor:'#edefee',
        borderRadius:20,
     }, 
     accimg:{
      height:23, width:20, alignSelf:'center',marginTop:8
   }, 
     
})