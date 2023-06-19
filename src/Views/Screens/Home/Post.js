import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { XImage, bluelikeImage, cameraboyImage, cmtImage, heartImage, likeImage, publicImage, shareImage, threedotImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

postnow =[
    {
    iconimg:cameraboyImage, name:'Bibek Chaudhary', image:cameraboyImage, hr :'2h .', desc:'Life is so intresting.',
    nmbrlikes:'10 likes', nmbrcmts:'2 comments'
},
    {
    iconimg:cameraboyImage, name:'Bibek Chaudhary', image:cameraboyImage, hr :'2h .', desc:'Life is so intresting.',
    nmbrlikes:'10 likes', nmbrcmts:'2 comments'
},
    {
    iconimg:cameraboyImage, name:'Bibek Chaudhary', image:cameraboyImage, hr :'2h .', desc:'Life is so intresting.',
    nmbrlikes:'10 likes', nmbrcmts:'2 comments'
},
    {
    iconimg:cameraboyImage, name:'Bibek Chaudhary', image:cameraboyImage, hr :'2h .', desc:'Life is so intresting.',
    nmbrlikes:'10 likes', nmbrcmts:'2 comments'
},
    {
    iconimg:cameraboyImage, name:'Bibek Chaudhary', image:cameraboyImage, hr :'2h .', desc:'Life is so intresting.',
    nmbrlikes:'10 likes', nmbrcmts:'2 comments'
},
]

const Post = () => {
  return (
    <View>
      {
      postnow.map((item, index) => {
            return (
              <PostComponent
                key={index}
                iconimg={item?.iconimg}
                name={item?.name}
                image={item?.image}
                hr={item?.hr}
                desc={item?.desc}
                nmbrcmts={item?.nmbrcmts}
                nmbrlikes={item?.nmbrlikes}
              />
            );
          })
          }
    </View>
  )
}

const PostComponent = ({iconimg, name, hr, desc, image,nmbrcmts, nmbrlikes})=>{
    return(
        <View>

            <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:15}}>
                <TouchableOpacity>
                <ImageCustom source={iconimg} style={styles.img}/>
                </TouchableOpacity>

                <View style={{flex:1, paddingHorizontal:20}}>
                    <TextCustom style={styles.name}>{name}</TextCustom>
                    <View style={{flexDirection:'row'}}>
                        <TextCustom>{hr}</TextCustom>
                        <ImageCustom source={publicImage} style={styles.public}/>
                    </View>
                </View>

                <TouchableOpacity>
                <ImageCustom source={threedotImage} style={styles.imgs}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <ImageCustom source={XImage} style={styles.imges}/>
                </TouchableOpacity>

            </View>

            <TextCustom style={styles.text}>{desc}</TextCustom>

            <ImageCustom source={image} style={styles.image}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', margin:10, borderBottomWidth:1, borderBottomColor:'grey'}}>
                <ImageCustom source={bluelikeImage} style={styles.like}/>
                <ImageCustom source={heartImage} style={styles.heart}/>
                <TextCustom style={{flex:1, textAlignVertical:"center", paddingHorizontal:10}}>{nmbrlikes}</TextCustom>
                <TextCustom style={{textAlignVertical:'center'}}>{nmbrcmts}</TextCustom>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', margin:8, borderBottomColor:'grey', borderBottomWidth:5}}>
                <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                    <ImageCustom source={likeImage} style={styles.react} />
                    <TextCustom style={{textAlignVertical:'center', paddingHorizontal:8}}>Like</TextCustom>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                    <ImageCustom source={cmtImage} style={styles.cmt} />
                    <TextCustom style={{textAlignVertical:'center', paddingHorizontal:8}}>Comment</TextCustom>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                    <ImageCustom source={shareImage} style={styles.share} />
                    <TextCustom style={{textAlignVertical:'center', paddingHorizontal:8}}>Share</TextCustom>
                </View>
                </TouchableOpacity>
                </View>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    img:{
        height:45, width:45, borderRadius:30, marginLeft:10
    },
    name:{
        fontSize:18, color:'black', fontWeight:'700'
    },
    public:{
        height:14, width:14, marginLeft:8, alignSelf:'center'
    },
    imgs:{
            height:35, width:40, alignSelf:'center', marginRight:10
    },
    imges:{
            height:23, width:23, marginRight:10, marginTop:5
    },
    text:{
        fontSize:16, color:'black', margin:10
    }, 
    image:{
        height:400,
        width:'100%'
    },
    like:{
        height:28, width:28, alignSelf:'center'
    },
    heart:{
        height:20, width:20,alignSelf:"center"
    },
    react:{
        height:26, width:26,
    },
    cmt:{
        height:24, width:24,
    },
    share:{
        height:20, width:20,
    },
})