import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextCustom from '../../Components/TextCustom'
import ImageCustom from '../../Components/ImageCustom'
import { myaccImage, searchiconImage } from '../../../Images'

const VideoTop = () => {
  return (
    <View>
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
      <TextCustom style={styles.name}>Watch</TextCustom>

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

    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity>
        <View style={styles.contain}>
        <Text style={styles.texts}>For You</Text>
         </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.txt}>Live</Text>
        </TouchableOpacity>

        <TouchableOpacity >
        <Text style={styles.txt}>Gaming</Text>
        </TouchableOpacity>

        <TouchableOpacity >
        <Text style={styles.txt}>Reels</Text>
        </TouchableOpacity>

        <TouchableOpacity >
        <Text style={styles.txt}>Following</Text>
        </TouchableOpacity>

        </View>

    </View>
  )
}

export default VideoTop

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
   contain:{
    backgroundColor:'#edefee',
    width:80,
    height:40,
    borderRadius:20,
},
texts:{
    fontSize:17, 
    color:'blue',  
    textAlign:'center',
    paddingTop:8
},
txt:{
    fontSize:17, 
    color:'black',  
    textAlign:'center',
    paddingTop:8
},
})