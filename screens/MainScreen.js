import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text,Dimensions,Pressable } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MainScreen() {

    const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{color :'#cccccc'}} style={styles.textContainer} onPress={()=>navigation.navigate('ProductFashion')} >
        <Text style={styles.text}>Product Cataloug Fashion</Text>
      </Pressable>
      <Pressable  android_ripple={{color :'#cccccc'}} style={styles.textContainer}  onPress={()=>navigation.navigate('ProductStandard')}> 
        <Text style={styles.text}>Product Cataloug Standard</Text>
      </Pressable>
      <Pressable android_ripple={{color :'#cccccc'}} style={styles.textContainer} onPress={()=>navigation.navigate('ProductConfig')}>                           
        <Text style={styles.text}>Product Detail Page | Config</Text>
      </Pressable>
      <Pressable  android_ripple={{color :'#cccccc'}}style={styles.textContainer} onPress={()=>navigation.navigate('ProductSimple')}>
        <Text style={styles.text}>Product Detail Page | Simple</Text>
      </Pressable>
      <Pressable android_ripple={{color :'#cccccc'}} style={styles.textContainer} onPress={()=>navigation.navigate('ProductCart')}>
        <Text style={styles.text}>Cart Page</Text>
      </Pressable>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth*0.06,
    backgroundColor: GlobalStyles.colors.primary,
    justifyContent:'center',
    alignItems:'center'
  },
  textContainer :{
    backgroundColor:'white',
    width:'100%',
    paddingVertical:14,
    borderRadius:3,
    justifyContent :'center',
    marginBottom:14
  },
  text :{
    textAlign:'center',
    fontSize: windowWidth*0.07,
    fontWeight :'bold'
  }

 
});