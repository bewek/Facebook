// import {StyleSheet, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import TextCustom from './TextCustom';

// const text = {
//   color: 'black',
// };

// const Button = ({
//   onPress,
//   name,
//   width = 120,
//   style,
//   textStyle = text,
// }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={[styles.button, {width: width}, style]}>
//         <TextCustom style={[styles.buttonText, textStyle]}>{name}</TextCustom>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Button;

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: 'white',
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: 'grey',
//         margin: 5,
//       },
    
//       buttonText: {
//         fontWeight: '700',
//         fontSize: 18,
//       },
// });

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const text = {
  color: 'black',
};

const Button = ({
  onPress,
  name,
  width = 120,
  style,
  textStyle = text,
  source,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {width: width}, style]}>
        {source && (
          <Image
            source={source}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
        )}
        <Text style={[styles.buttonText, textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
  },
});
