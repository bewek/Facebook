import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Button from './Button';
import { friendsiconImage, homeiconImage, marketiconImage, menuiconImage, noticonImage, videoiconImage } from '../../Images';

const tabs = {
    tabs: [
      {
        title: 'Home',
        icon: homeiconImage,
        tab: {
          title: 'Home',
          icon: homeiconImage,
        },
      },
      {
        title: 'Friends',
        icon: friendsiconImage,
        tab: {
          title: 'Friends',
          icon: friendsiconImage,
        },
      },
      {
        title: 'Video',
        icon: videoiconImage,
        tab: {
          title: 'Video',
          icon: videoiconImage,
        },
      },
      {
        title: 'Market',
        icon: marketiconImage,
        tab: {
          title: 'Market',
          icon: marketiconImage,
        },
      },
      {
        title: 'Notification',
        icon: noticonImage,
        tab: {
          title: 'Notification',
          icon: noticonImage,
        },
      },
      {
        title: 'Menu',
        icon: menuiconImage,
        tab: {
          title: 'Menu',
          icon: menuiconImage,
        },
      },
    ],
  };

const IconTab = ({focused}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          padding: 2,
        }}>
        {tabs.tabs.map((tab, index) => {
          return (
            <Button
              key={index}
              source={tab.icon}
              style={[
                focused == tab.tab.title && {backgroundColor: '#72e1ef'},
                {height: 45, width: 60, borderColor:'white', padding:20},
              ]}
              onPress={() => {
                navigation.navigate(tab.title);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default IconTab;

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
});
