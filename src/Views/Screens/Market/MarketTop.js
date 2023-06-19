import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { cateImage, myaccImage, searchiconImage, sellImage } from '../../../Images'

const MarketTop = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
      <TextCustom style={styles.name}>Marketplace</TextCustom>

      <TouchableOpacity>
    <View style={[styles.container,{marginRight:10}]}>
    <ImageCustom source={myaccImage} style={styles.accimg}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.container}>
    <ImageCustom source={searchiconImage} style={styles.img}/>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default MarketTop

const styles = StyleSheet.create({
    name:{
        fontSize:27, color:'black', fontWeight:'700', flex:1
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