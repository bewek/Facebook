import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MainLayout } from '../../Layout'
import FriendTop from './FriendTop'
import FnReq from './FnReq'
import PeopleYou from './PeopleYou'
import IconTab from '../../Components/IconTab'

const Friends = () => {
  return (
   <MainLayout>
     <IconTab focused={'Friends'}/>
     <ScrollView>

     <FriendTop />
     <FnReq />
     <PeopleYou />
     </ScrollView>
   </MainLayout>
  
  )
}

export default Friends

const styles = StyleSheet.create({})