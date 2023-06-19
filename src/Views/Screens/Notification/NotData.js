import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { menImage, threedotImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

like = [
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
    {image:menImage, name:'John Stone, Lina San ', reacted:'reacted to your post, Happy Birthday', hr:'1 hour ago'},
]

const NotData = () => {
  return (
    <View>
       {like.map((item, index) => {
            return (
              <Post
                key={index}
                image={item?.image}
                name={item?.name}
                hr={item?.hr}
                reacted={item?.reacted}
              />
            );
          })}
    </View>
  )
}

const Post = ({name, image,reacted, hr})=>{
    return(
        <View style={{flexDirection:"row", margin:10, marginTop:10}}>
            <ImageCustom source={image} style={styles.img}/>
            <View style={{paddingHorizontal:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                <TextCustom style={styles.names}>{name}</TextCustom>
                <TextCustom>{reacted}</TextCustom>
                <TextCustom>{hr}</TextCustom>
                </View>
                <TouchableOpacity>
                <ImageCustom source={threedotImage} style={styles.dotimg}/>
                </TouchableOpacity>
            </View>
            </View>
        </View>
       
    )
}

export default NotData

const styles = StyleSheet.create({
    img:{
        height:70, width:70, borderRadius:50, alignSelf:'center'
    },
    names:{
        fontSize:16, color:'black', marginVertical:2
    },
    dotimg:{
        height:20, width:35
    }
})