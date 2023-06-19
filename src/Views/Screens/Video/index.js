import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MainLayout } from '../../Layout'
import VideoTop from './VideoTop'
import VideoPost from './VideoPost'
import IconTab from '../../Components/IconTab'

const Video = () => {
  return (
   <MainLayout>
    <IconTab focused={'Video'}/>
    <ScrollView>
      <VideoTop />
      <VideoPost />
    </ScrollView>
   </MainLayout>
  )
}

export default Video

const styles = StyleSheet.create({})