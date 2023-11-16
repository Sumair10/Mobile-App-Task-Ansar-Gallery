import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text,Dimensions ,Image} from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Slider({images}) {


  
  return (
    <View >
      <Icon style={styles.heart} name="heart-outline"color='black' size={20} />
      <Icon style={styles.share} name="share-social-outline"color='black' size={20} />
    <Carousel
        loop
        width={windowWidth}
        height={windowWidth }
        data={[...images]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
         
              <Image style={styles.imageStyle} source={{uri : images[index]}}  />
    
        )}
    />
</View>
  );
}

export default Slider;

const styles = StyleSheet.create({
  container: {
   
  },
  imageStyle: {
  flex:1,
  width:'100%'
},
heart: {
  position: 'absolute',
  zIndex: 999,
  top: 10,
  right: 15,
  backgroundColor:GlobalStyles.colors.gray,
  borderRadius:50,
  padding:5
},
share:{
  position: 'absolute',
  zIndex: 999,
  bottom: 10,
  right: 15,
  backgroundColor:GlobalStyles.colors.gray,
  borderRadius:50,
  padding:5
},
 
});