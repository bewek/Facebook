import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { cameraboyImage, searchiconImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

const story = [
    {image:cameraboyImage, name:'Will Stone'},
    {image:cameraboyImage, name:'Will Stone'},
    {image:cameraboyImage, name:'Will Stone'},
    {image:cameraboyImage, name:'Will Stone'},
    {image:cameraboyImage, name:'Will Stone'},
]

const SearchStory = () => {
  return (
    <View>
       <View style={[styles.input,{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}]}>
          <TouchableOpacity>
            <ImageCustom source={searchiconImage} style={styles.img} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={{flex: 1, fontSize:15}}
          />
        </View>

        <View style={{flexDirection:'row'}}>
        {
      story.map((item, index) => {
            return (
              <Story
                key={index}
                name={item?.name}
                image={item?.image}
              />
            );
          })
          }
        </View>

    </View>
  )
}

const Story = ({image, name})=>{
    return(
        <View style={{margin:10}}>
            <TouchableOpacity>
            <ImageCustom source={image} style={styles.image}/>
            <TextCustom style={{fontSize:15, color:'black'}}>{name}</TextCustom>
             </TouchableOpacity>
        </View>
    )
}

export default SearchStory

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#edefee',
        borderRadius: 20,
        margin: 10
      },
      img:{
        height: 18, width: 18, marginRight:15
      }, 
      image:{
        height:60, width:60, borderRadius:40
      }
})