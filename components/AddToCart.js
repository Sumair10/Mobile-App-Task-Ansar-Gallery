

import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image, ScrollView, Pressable ,TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';
import Icons from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function AddToCart() {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.qtyContainer}>
                <Text >QTY</Text>
                <Text style={styles.qty}>1</Text>
            </View>
            <TouchableOpacity style={styles.addContainer} activeOpacity={0.7}>
                <Text style={styles.addText}>Add to cart</Text>

            </TouchableOpacity>
        </View>

    );
}

export default AddToCart;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal: 15,
        paddingTop:10
    },
    qtyContainer:{
        alignItems:'center',
        borderWidth:1,
        borderColor :GlobalStyles.colors.gray,
        padding:1,
        paddingHorizontal:20,
        borderRadius:2
    },
    qty:{
        fontSize:20,
        fontWeight:'bold'
    },
    addContainer:{
        backgroundColor:GlobalStyles.colors.primary,
        flex :1,
        marginHorizontal:10,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
    },
    addText:{
        color :'white',
        fontWeight:'bold',
        fontSize:25,
        padding:8
    }
});