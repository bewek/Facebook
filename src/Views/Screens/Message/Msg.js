import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { menImage} from '../../../Images'
import TextCustom from '../../Components/TextCustom'

const msg = [
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
    {image:menImage, name:'John San', send:'John sent a photo', time:'1h'},
]

const Msg = () => {
  return (
   <View>
     {
      msg.map((item, index) => {
            return (
              <Mesge
                key={index}
                image={item?.image}
                name={item?.name}
                send={item?.send}
                time={item?.time}
              />
            );
          })
          }
   </View>
  )
}

const Mesge = ( {image, name, time, send})=>{
    return(
        <View style={{flexDirection:'row', margin:10}}>
        <ImageCustom source={image} style={styles.image}/>
        <View style={{paddingHorizontal:20, marginTop:5}}>
          <TextCustom style={styles.name}>{name}</TextCustom>
          <TextCustom>{send}.  {time}</TextCustom>
        </View>
      </View>
    )
}

export default Msg

const styles = StyleSheet.create({
    image:{
        height:60, width:60, borderRadius:40
      },
      name:{
         fontSize:16, color:'black', fontWeight:'400'
      }
})