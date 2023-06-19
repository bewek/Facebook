import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import TextCustom from '../../Components/TextCustom'
import { menImage } from '../../../Images'

const people = [
    {image:menImage, name:'John Stone', mutual:'10 mutual friends'},
    {image:menImage, name:'John Stone', mutual:'10 mutual friends'},
    {image:menImage, name:'John Stone', mutual:'10 mutual friends'},
]

const PeopleYou = () => {
  return (
    <View>
 
    <TextCustom style={{fontSize:18, color:'black', fontWeight:'500',margin:10, marginTop:10}}>
        People You May Know
    </TextCustom>
            
     {people.map((item, index) => {
            return (
              <Know
                key={index}
                image={item?.image}
                name={item?.name}
                mutual={item?.mutual}
              />
            );
          })}
    </View>
  )
}

const Know = ({image, name, mutual})=>{
    return(
        <View style={{flexDirection:"row", margin:10, marginTop:10}}>
            <ImageCustom source={image} style={styles.img}/>
            <View style={{paddingHorizontal:20}}>
          
                <TextCustom style={styles.names}>{name}</TextCustom>
                
            
            <TextCustom style={{marginVertical:2, marginBottom:8}}>{mutual}</TextCustom>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity>
                <View style={styles.bluebox}>
                    <TextCustom style={styles.conf}>Add Friend</TextCustom>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.greybox}>
                    <TextCustom style={styles.del}>Remove</TextCustom>
                </View>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default PeopleYou

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