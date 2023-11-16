import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image, ScrollView, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';
import Icons from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function ShorMoreCarousel({data}) { 

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
            <Text style={styles.also}>You may also like this</Text>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        data && data.map((item, i) => {
                            return <Pressable
                            android_ripple={{color :'#cccccc'}}
                                key={i}
                            >
                                <View >
                                    <Image style={styles.imageStyle} source={{uri : item.image}} />
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.qar}>QAR</Text>
                                        <Text style={[styles.priceText, { color: 'black'}]}>{Math.floor(item.price)}<Text style={{fontSize:14}}>.{(item.price - Math.floor(item.price)) * 100}</Text></Text>
                                    </View>
                                    {/* <View style={{ flexDirection: 'row' }}>

                                        <Text style={styles.price}>
                                            XX.xx
                                        </Text>
                                        <Text style={styles.offPercentage}>-10%</Text>

                                    </View> */}
                                </View>
                            </Pressable>
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default ShorMoreCarousel;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor :'#f8f8f8',
        marginTop:20,
        paddingBottom:20
    },
    container: {
        marginHorizontal: 15,
    },

    also:{
        fontSize:20,
        marginTop:10,
        color:GlobalStyles.colors.darkGray
    },  
    imageStyle: {
        borderRadius: 2,
        width: windowWidth * 0.37,
        height: windowWidth * 0.37,
        marginRight: 20,
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