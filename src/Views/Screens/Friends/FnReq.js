import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { womenImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

const people = [
    {image:womenImage, name:'Lina San', hr:'1h', mutual:'5 mutual friends'},
    {image:womenImage, name:'Lina San', hr:'1h', mutual:'5 mutual friends'},
    {image:womenImage, name:'Lina San', hr:'1h', mutual:'5 mutual friends'},
]

const FnReq = () => {
  return (
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between',margin:10, marginTop:10}}>
            <TextCustom style={{fontSize:18, color:'black', fontWeight:'500'}}>Friend requests</TextCustom>
            <TouchableOpacity>
            <TextCustom style={{fontSize:16, color:'blue', fontWeight:'400'}}>See all</TextCustom>
            </TouchableOpacity>
        </View>
     {people.map((item, index) => {
            return (
              <Req
                key={index}
                image={item?.image}
                name={item?.name}
                hr={item?.hr}
                mutual={item?.mutual}
              />
            );
          })}
    </View>
  )
}

const Req = ({image, name, hr, mutual})=>{
    return(
        <View style={{flexDirection:"row", margin:10, marginTop:10}}>
            <ImageCustom source={image} style={styles.img}/>
            <View style={{paddingHorizontal:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TextCustom style={styles.names}>{name}</TextCustom>
                <TextCustom style={{marginRight:5}}>{hr}</TextCustom>
            </View>
            <TextCustom style={{marginVertical:2, marginBottom:8}}>{mutual}</TextCustom>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity>
                <View style={styles.bluebox}>
                    <TextCustom style={styles.conf}>Confirm</TextCustom>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.greybox}>
                    <TextCustom style={styles.del}>Delete</TextCustom>
                </View>
             </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default FnReq

const styles = StyleSheet.create({
    img:{
        height:80, width:80, borderRadius:60, alignSelf:'center'
    },
    bluebox:{
        height:40, width:120, backgroundColor:'#0d47a1', borderRadius:10
    },
    conf:{
        fontSize:16, color:'white', textAlign:'center', marginTop:10
    },
    greybox:{
        height:40, width:120, backgroundColor:'#edefee', borderRadius:10, marginLeft:15
    },
    del:{
        fontSize:16, color:'black', textAlign:'center', marginTop:10
    },
    names:{
        fontSize:18, color:'black', marginVertical:2
    }
})