import { Image, StyleSheet, View, Text, FlatList, Pressable, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';

import { GlobalStyles } from "../constants/Styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { adddata } from '../store/redux/appData';
import { useDispatch, useSelector } from 'react-redux'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function ComingSoonItems({ itemData }) {
    const dispatch = useDispatch()

    const toggleVisibility = (itemId) => {

        dispatch(adddata({id:'standardData', data:  itemData.map((item) =>
        item.id === itemId ? { ...item, isVisible: !item.isVisible } : item
      )}))
        
      };
    

    const Item = ({ item }) => {
        return <View style={styles.item}>

            <View style={styles.imageConatainer}>
            <Image style={styles.imageStyle} source={{uri : item.image}} />
            </View>
            <View style={styles.addContainer}>
                <Image style={styles.imageStyleFrame} source={require('../assets/colorFrame.png')} />
                {item.isVisible ? (
            <Pressable android_ripple={{color :'#cccccc'}} onPress={() => toggleVisibility(item.id)}>
              <View style={styles.countContainer}>
                <Icons name="minus" size={16} color="white" />
                <Text style={styles.countText}>0</Text>
                <Icons name="plus" size={16} color="white" />
              </View>
            </Pressable>
          ) : (
            <Pressable android_ripple={{color :'#cccccc'}} onPress={() => toggleVisibility(item.id)}>
              <Icons
                name="plus"
                size={15}
                color="white"
                style={{
                  backgroundColor: GlobalStyles.colors.primary,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical:5
                }}
              />
            </Pressable>
          )}
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.priceContainer}>
                <View style={styles.priceContainer}>

                    <Text style={styles.qar}>QAR</Text>
                    <Text style={[styles.priceText, { color: item.offApply ? GlobalStyles.colors.red : 'black' }]}>{Math.floor(item.price)}<Text style={{fontSize:14}}>.{(item.price - Math.floor(item.price)) * 100}</Text></Text>
                </View>
                <Text style={styles.price}>
                
                     {item.offApply && <Text style={styles.qar}>QAR {item.price - (item.price * 30)/100}</Text> }
                </Text>
            </View>
        </View>

    };


    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={itemData}
                    numColumns={2}
                    renderItem={Item}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20
    },
    item: {
        flex: 1,
        maxWidth: "50%",
        backgroundColor: 'white',
        margin: 10,
        borderWidth:1,
        borderRadius:10,
        borderColor:GlobalStyles.colors.gray,
        padding:10
    },
    imageConatainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 2,
        width: windowWidth * 0.30,
        height :windowWidth*0.3
    },
    imageStyleFrame: {
        width:15,
        zIndex:99,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: GlobalStyles.colors.darkGray,
        marginTop:10
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    qar: {
        fontSize: 14,
        fontWeight: '400',
        color: GlobalStyles.colors.darkGray,
    },

    priceText: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 4
    },

    offContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    price: {
        fontSize: 16,
        fontWeight: '700',
        color: GlobalStyles.colors.lgray,
        textDecorationLine: 'line-through',
    },
    offPercentage: {
        color: 'white',
        backgroundColor: GlobalStyles.colors.red,
        padding: 1,
        paddingHorizontal: 3,
        borderRadius: 10,
        marginLeft: 5
    },

    countContainer: {
        flexDirection: 'row',
        backgroundColor :GlobalStyles.colors.primary,
        borderRadius:20,
        paddingHorizontal: 10,
        paddingVertical:5
    },

    countText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 6,
        color:'white'
    },

    heart: {
        position: 'absolute',
        zIndex: 999,
        top: 10,
        left: 10
    },
    addContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

})
