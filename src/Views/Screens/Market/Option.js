import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import TextCustom from '../../Components/TextCustom'
import { cateImage, mapblueImage, sellImage } from '../../../Images'

const Option = () => {
  return (
    <View>
     
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity>
        <View style={styles.cont}>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:8}}>
            <ImageCustom source={sellImage} style={styles.imge}/>
            <TextCustom style={styles.text}>Sell</TextCustom>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.cont}>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:8}}>
            <ImageCustom source={cateImage} style={styles.imge}/>
            <TextCustom style={styles.text}>Categories</TextCustom>
            </View>
          </View>
         </TouchableOpacity>
</View>

    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
        <TextCustom style={styles.pick}>Today's Picks</TextCustom>
        <View style={{flexDirection:'row'}}>
            <ImageCustom source={mapblueImage} style={styles.map}/>
            <TextCustom style={styles.place}>Lalitpur, Nepal</TextCustom>
        </View>
    </View>

    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    imge:{
        height:20, width:20,
     }, 
     text:{
        fontSize:15, color:'black', paddingHorizontal:10
     }, 
     cont:{
        height:40, width:150, backgroundColor:"#edefee", borderRadius:20
     },
     pick:{
        fontSize:16, color:'black', fontWeight:'600'
     }, 
     map:{
        height:18, width:18, alignSelf:'center'
     },
     place:{
        fontSize:16, color:'blue', fontWeight:'400'
     }, 
})