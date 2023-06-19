import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageCustom from '../../Components/ImageCustom'
import { jacketcoatImage, ladiesdressImage, ladiespurseImage, ladiessandalImage, menbootImage, menjoggerImage, menshirtImage, onepieceImage, watchImage } from '../../../Images'
import TextCustom from '../../Components/TextCustom'

product=[
    {image:onepieceImage, name:'One Piece', price:'2000'},
    {image:menbootImage, name:'Men Boot', price:'1000'},
    {image:jacketcoatImage, name:'Jacket', price:'5000'},
    {image:ladiesdressImage, name:'Dress', price:'1000'},
    {image:ladiespurseImage, name:'Purse', price:'500'},
    {image:watchImage, name:'Watch', price:'6000'},
    {image:menshirtImage, name:'Shirt', price:'1000'},
    {image:menjoggerImage, name:'Jogger', price:'1500'},
    {image:menshirtImage, name:'Tshirt', price:'1000'},
    {image:ladiessandalImage, name:'Sandal', price:'700'},
]

const Products = () => {
  return (
    <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between', marginTop:15, margin:10}}>
      {product.map((item, index) => {
            return (
              <PrdctDetails
                key={index}
                image={item?.image}
                name={item?.name}
                price={`Rs ${item?.price}`}
              />
            );
          })}
    </View>
  )
}

const PrdctDetails = ({image, price, name})=>{
    return(
        <View>
            <ImageCustom source={image} style={styles.img}/>
            <View style={{flexDirection:'row'}}>
                <TextCustom style={styles.text}>{price} .  </TextCustom>
                <TextCustom style={styles.text}>{name}</TextCustom>
            </View>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    img:{
        height:160, width:180, alignSelf:'center'
    }, 
    text:{
        fontSize:16, color:'black', marginBottom:20
    }
})