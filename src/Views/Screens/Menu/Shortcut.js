import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageCustom from '../../Components/ImageCustom'
import { avatarImage, communityImage, eventsImage, fantasyImage, feedsImage, friendsiconImage, gamingImage, greysettingImage, groupsImage, helpImage, marketiconImage, memoryImage, msgkidsImage, pagesImage, paymentImage, reelsImage, savedImage, videoiconImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

short = [
    {image:feedsImage, name:'Feeds'},
    {image:friendsiconImage, name:'Friends'},
    {image:groupsImage, name:'Groups'},
    {image:marketiconImage, name:'Marketplace'},
    {image:videoiconImage, name:'Videos on Watch'},
    {image:memoryImage, name:'Memories'},
    {image:savedImage, name:'Saved'},
    {image:pagesImage, name:'Pages'},
    {image:reelsImage, name:'Reels'},
    {image:eventsImage, name:'Events'},
    {image:avatarImage, name:'Avatars'},
    {image:fantasyImage, name:'Fantasy Games'},
    {image:gamingImage, name:'Gaming'},
    {image:msgkidsImage, name:'Messenger Kids'},
    {image:paymentImage, name:'Orders and payments'},
]

const Shortcut = () => {
  return (
    <View>
      <Text style={{fontSize:15, color:'black', margin:10, marginTop:20}}>
        All shortcuts</Text>
        
        <View style={{flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
        {
      short.map((item, index) => {
            return (
              <Shortcuts
                key={index}
                name={item?.name}
                image={item?.image}
              />
            );
          })
          }
        </View>

          <View style={{flexDirection:'row', margin:15}}>
            <ImageCustom source={communityImage} style={styles.img}/>
            <TextCustom style={{fontSize:16, color:'black', marginLeft:15}}>Community resources</TextCustom>
          </View>
          <View style={{flexDirection:'row', margin:15}}>
            <ImageCustom source={helpImage} style={styles.img}/>
            <TextCustom style={{fontSize:16, color:'black', marginLeft:15}}>Help & support</TextCustom>
          </View>
          <View style={{flexDirection:'row', margin:15}}>
            <ImageCustom source={greysettingImage} style={styles.img}/>
            <TextCustom style={{fontSize:16, color:'black', marginLeft:15}}>Settings & privacy</TextCustom>
          </View>

          <TouchableOpacity>
          <View style={{height:40, width:'90%', backgroundColor:'#d9d9d9', borderRadius:10,margin:15}}>
            <TextCustom style={{fontSize:16, color:'black', marginLeft:15, textAlign:'center', marginTop:10}}>Log out</TextCustom>
          </View>
            </TouchableOpacity>

    </View>
  )
}

const Shortcuts = ({image, name})=>{
    return(
        <View style={styles.container}>
            <ImageCustom source={image} style={styles.image}/>
            <TextCustom style={{fontSize:15, color:'black', marginLeft:15}}>{name}</TextCustom>
        </View>
    )
}

export default Shortcut

const styles = StyleSheet.create({
    image:{
        height:22, width:22, margin:10, marginLeft:15, marginTop:15
    }, 
    container:{
        height:80, 
        width:170, 
        backgroundColor:'white', 
        borderRadius:10, 
        borderColor:'#d9d9d9', 
        borderWidth:.8, 
        marginBottom:10
      },
      img:{
        height:25, width:25, 
    },
})