import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ItemDetails({data }) {



    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
          <View>
          <View style={styles.priceContainer}>
                <Text style={styles.qar}>QAR</Text>
                <Text style={styles.priceText}>{Math.floor(data.price)}<Text style={{fontSize:25}}>.{(data.price - Math.floor(data.price)) * 100}</Text></Text>
            </View>
            {/* <View style={{flexDirection:'row' , alignItems :'center'}}>

                <Text style={styles.price}>
                    75.99
                </Text>
                <Text style={styles.offPercentage}>-10%</Text>
            </View> */}
          </View>
          <View style={styles.newArrivalContainer}>
            <Text style={styles.newArrival}>NEW ARRIVAL</Text>
          </View>
            </View>

            <Text style={styles.text1}>Size : <Text style={{fontWeight:'bold'}}>M</Text></Text>
            <View style={styles.sizeContainer}>
                <Text style={styles.sizeText}>S</Text>
                <Text style={[styles.sizeText , {borderWidth:3}]}>M</Text>
                <Text style={styles.sizeText}>L</Text>
                <Text style={styles.sizeText}>XL</Text>
                <Text style={styles.sizeText}>XXL</Text>
            </View>
            <Text style={styles.text1}>Color : <Text style={{fontWeight:'bold'}}>Black</Text></Text>
            <View style={styles.sizeContainer}>
               <View style={[styles.colorsContainer ,{backgroundColor:'#cebfb8'}]}></View>
               <View style={[styles.colorsContainer ,{backgroundColor:'#8ca999'}]}></View>
               <View style={[styles.colorsContainer ,{backgroundColor:'black'}]}></View>
               <View style={[styles.colorsContainer ,{backgroundColor:'#44aee8'}]}></View>
               <View style={[styles.colorsContainer ,{backgroundColor:'white'}]}></View>
            </View>
            <Text style={styles.text1}>Details </Text>
        <Text style={{fontWeight:'bold', color:GlobalStyles.colors.lgray}}>SKU : {data?.sku}</Text>
        </View>
    );
}

export default ItemDetails;

const styles = StyleSheet.create({
    container: {
        margin:15
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    qar: {
        fontSize:windowWidth*0.06,
        fontWeight: '400',
        color: GlobalStyles.colors.darkGray,
    },

    priceText: {
        fontSize: windowWidth*0.1,
        fontWeight: '700',
        marginLeft: 4
    },

    offContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    price: {
        fontSize: windowWidth*0.06,
        fontWeight: '700',
        color: GlobalStyles.colors.lgray,
        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    },
    offPercentage: {
        color: 'white',
        backgroundColor: GlobalStyles.colors.red,
        padding: 1,
        paddingHorizontal: 8,
        borderRadius: 20,
        marginLeft: 5,
        fontSize: windowWidth*0.06
    },

    newArrivalContainer:{
        backgroundColor:'#f96815',
        padding:10,
        borderRadius : 10
    },
    newArrival:{
        color :'white',
        fontWeight:'700'
    },
    text1 :{
        fontSize: windowWidth*0.05,
        marginTop:10
    },

    sizeContainer:{
        flexDirection:'row'
    },
    sizeText:{
        fontSize:windowWidth*0.05,
        borderWidth:1,
        marginRight:8,
        marginVertical:5,
        padding:3,
        paddingHorizontal:10,
        borderColor:GlobalStyles.colors.lgray
    },

    colorsContainer :{
        marginTop:10,
        width:30,
        height:30,
        marginRight:10,
        borderRadius:50,
        borderWidth:1,
        borderColor:GlobalStyles.colors.lgray,
        elevation:2
    }

});