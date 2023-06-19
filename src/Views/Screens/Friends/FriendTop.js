import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import { searchiconImage } from '../../../Images'
import ImageCustom from '../../Components/ImageCustom'

const FriendTop = () => {
  return (
    <View>
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
      <TextCustom style={styles.name}>Friends</TextCustom>

    <TouchableOpacity>
    <View style={styles.container}>
    <ImageCustom source={searchiconImage} style={styles.img}/>
    </View>
    </TouchableOpacity>
  </View>

 
  <View style={{flexDirection:'row'}}>
    <TouchableOpacity>
        <View style={styles.cont}>
            <TextCustom style={styles.text}>Suggestions</TextCustom>
        </View>
    </TouchableOpacity>
    <TouchableOpacity>
        <View style={styles.cont}>
            <TextCustom style={styles.text}>Your Friends</TextCustom>
        </View>
    </TouchableOpacity>
        
</View>

    </View>
  )
}

export default FriendTop

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
   text:{
      fontSize:15, color:'black',textAlign:'center', marginTop:10
   }, 
   cont:{
      height:40, width:120, backgroundColor:"#edefee", borderRadius:20, marginHorizontal:10
   },
})