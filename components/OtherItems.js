import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Carousel from 'react-native-reanimated-carousel';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function OtherItems() {



    return (
        <>
            <View style={styles.seperator}></View>
            <View style={styles.container}>
                <View style={styles.shippingContainer}>

                    <Icons name="home" size={20} />
                    <Text style={styles.shippingText}>Shipping</Text>
                </View>
                <View style={styles.mainContainer}>

                    <View style={styles.timeContainre}>
                        <Text style={styles.timeText1}>Standard : as per selected time slot.</Text>
                        <Text style={styles.timeText2}>Free delivery on orders above QAR 99.</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.returnContainer}>

                  <View style={styles.returnContainerInner}>
                  <Icons name="home" size={20} />
                    <Text style={styles.shippingText}>Easy Return : You call & we pickup.</Text>
                  </View>
                  <Icon name="chevron-forward" size={20} />
                </View>
            </View>
        </>
    );
}

export default OtherItems;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    seperator: {
        height: 10,
        width: '100%',
        backgroundColor: '#f8f8f8',
        marginBottom: 10
    },
    shippingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shippingText: {
        marginLeft: 10,
        fontSize: windowWidth * 0.04,
        fontWeight: '600'
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    timeContainre: {
        width: '70%',
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeText2: {
        color: '#2e991e'
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray
    },
    returnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10
    },
    returnContainerInner:{
        flexDirection: 'row',
        alignItems: 'center',
    },

});