import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MainLayout } from '../../Layout'
import HomeTop from './HomeTop'
import Post from './Post'
import IconTab from '../../Components/IconTab'

const Home = () => {
  return (
  <MainLayout>
    <HomeTop />
    <IconTab focused={'Home'}/>
    <ScrollView>

    <Post />
    </ScrollView>
  </MainLayout>
  )
}

export default Home

const styles = StyleSheet.create({
})