import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MarketTop from './MarketTop'
import { MainLayout } from '../../Layout'
import Option from './Option'
import Products from './Products'
import IconTab from '../../Components/IconTab'

const Market = () => {
  return (
   <MainLayout>
      <IconTab focused={'Market'}/>
     <MarketTop />
     <ScrollView>
      <Option />
      <Products/>
     </ScrollView>
   </MainLayout>
    
  )
}

export default Market

const styles = StyleSheet.create({})