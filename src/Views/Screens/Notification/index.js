import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MainLayout } from '../../Layout'
import NotTop from './NotTop'
import TextCustom from '../../Components/TextCustom'
import NotData from './NotData'
import IconTab from '../../Components/IconTab'

const Notification = () => {
  return (
    <MainLayout>
      <IconTab focused={'Notification'}/>
      <NotTop />
      <ScrollView>
        <TextCustom style={{fontSize:16, color:'black', fontWeight:'600', padding:12}}>Earlier</TextCustom>
        <NotData />
      </ScrollView>
    </MainLayout>
  )
}

export default Notification

const styles = StyleSheet.create({})