import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image, ScrollView, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ItemDetails from './ItemDetails';
import ItemDetailsBottom from './ItemDetailsBottom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const data = [
    { url: require('../assets/men.png') },
    { url: require('../assets/men.png') },
    { url: require('../assets/men.png') },
    { url: require('../assets/men.png') },
    { url: require('../assets/men.png') },
]

function ShorMoreCarouselAll({setBottomSheetVisible ,moreData}) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.topContainer}>

            <Text style={styles.also}>Choose the color and size.</Text>
            <Pressable android_ripple={{color :'#cccccc'}} onPress={()=>setBottomSheetVisible(false)}>

            <Entypo name="cross" size={20}  />
            </Pressable>
                </View>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        moreData.imageArray.map((item, i) => {
                            return <Pressable
                            android_ripple={{color :'#cccccc'}}
                                key={i}
                            >
                                <View >
                                <Image style={styles.imageStyle} source={{uri : item}} />
                                </View>
                            </Pressable>
                        })
                    }
                </ScrollView>
                    <ItemDetailsBottom moreData={moreData}/>
            </View>
        </View>
    );
}

export default ShorMoreCarouselAll;

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor :'#f8f8f8',
        paddingBottom:20
    },
    container: {
        marginHorizontal: 15,
    },

    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    also:{
        fontSize:16,
        color:GlobalStyles.colors.darkGray
    },  
    imageStyle: {
        borderRadius: 2,
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        marginRight: 10,
        marginTop: 20
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    qar: {
        fontSize: 16,
        fontWeight: '400',
        color: GlobalStyles.colors.darkGray,
    },

    priceText: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 4
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: GlobalStyles.colors.darkGray,
        marginTop: 5
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: GlobalStyles.colors.lgray,
        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    },
    offPercentage: {
        color: 'white',
        backgroundColor: GlobalStyles.colors.red,
        padding: 1,
        paddingHorizontal: 3,
        borderRadius: 10,
        marginLeft: 5
    },
});