import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MainLayout } from '../../Layout'
import MsgTop from './MsgTop'
import SearchStory from './SearchStory'
import Msg from './Msg'

const Message = () => {
  return (
   <MainLayout>
    <MsgTop />
    <ScrollView>
      <SearchStory />
      <Msg />
    </ScrollView>
   </MainLayout>
  )
}

export default Message

const styles = StyleSheet.create({})