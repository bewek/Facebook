import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MenuTop from './MenuTop'
import Shortcut from './Shortcut'
import IconTab from '../../Components/IconTab'

const Menu = () => {
  return (
    <View style={{flex:1, backgroundColor:'#edefee'}}>
      <IconTab focused={'Menu'}/>
      <ScrollView>
        <MenuTop />
        <Shortcut />
      </ScrollView>

    </View>
   
  )
}

export default Menu

const styles = StyleSheet.create({})