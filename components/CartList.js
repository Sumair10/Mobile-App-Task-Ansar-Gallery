import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Dimensions,Image ,ScrollView , } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/redux/cart';
import { GlobalStyles } from "../constants/Styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CartList = ({data}) => {
    const dispatch = useDispatch()
    const totalPrice =data.length >0 &&  data.reduce((sum, item) => sum + item.price, 0);
  const closeRow = useCallback((rowMap, rowId) => {
    if (rowMap[rowId]) {
      rowMap[rowId].closeRow();
    }
  }, []);

  const deleteItem = useCallback((rowMap, rowId) => {
    closeRow(rowMap, rowId);
    const newData = [...data];
    const prevIndex = data.findIndex((item) => item.id === rowId);
    newData.splice(prevIndex, 1);
    dispatch(removeFromCart(rowId))
  }, [closeRow, data]);

  const onRowOpen = useCallback((rowId) => {
    console.log('Opened row with Id:', rowId);
  }, []);

  const renderItem = useCallback(
    (rowData , index) => (
        <>
      <TouchableOpacity
        style={styles.itemContainer}
        >
        <Image style={styles.imageStyle} source={{uri : rowData.item.image}} />
        
        <View style={styles.detailContainer}>
            <Text style={styles.itemText}>{rowData.item.name?.length >30 ? rowData.item.name.slice(0,30 - 3) + "..." : rowData.item.name}</Text>

            <View style={styles.priceContainer}>
                <Text style={styles.qar}>Color : </Text>
                <Text style={[styles.qar, { color:GlobalStyles.colors.lgray }]}>White</Text>
                <Text style={[styles.qar, {marginLeft:10}]}>Size : </Text>
                <Text style={[styles.qar, { color:GlobalStyles.colors.lgray }]}>Medium</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.qar}>QAR</Text>
                <Text style={[styles.priceText, { color:GlobalStyles.colors.red }]}>{Math.floor(rowData.item.price)}<Text style={{fontSize:14}}>.{(rowData.item.price - Math.floor(rowData.item.price)) * 100}</Text></Text>
                {/* <Text style={styles.price}>49.25</Text> */}
            </View>
        </View>

        <View style={styles.countContainer}>
                    <Icons name="plus" size={20} color={GlobalStyles.colors.primary}/>
                    <Text style={styles.countText}>0</Text>
                    <Icons name="minus" size={20} color={GlobalStyles.colors.gray}/>
                </View>
        
      </TouchableOpacity>
   
          </>
    ),
    []
  );

  const renderHiddenItem = useCallback(
    (rowData, rowMap) => (
      <View style={styles.hiddenContainer}>
        <TouchableOpacity
          style={[styles.hiddenButton, styles.deleteButton]}
          onPress={() => deleteItem(rowMap, rowData.item.id)}
        >
          <Text style={styles.buttonText}><Icons name="delete" size={windowWidth*0.08} color="white"/></Text>
        </TouchableOpacity>
      </View>
    ),
    [closeRow, deleteItem]
  );

  return (
    <View style={styles.container}>

        {/* <ScrollView> */}
      <SwipeListView
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        // leftOpenValue={75}
        rightOpenValue={-75}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowOpen}
        />
   <View style={styles.totalContainer}>
        <View style={styles.total}>
            <Text style={styles.totalText}>Item(s) Total: </Text>
            <Text style={styles.totalPrice}>QAR {totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.total}>
            <Text  style={styles.totalText}>Item(s) Discount:</Text>
            <Text style={[styles.totalPrice, {color:GlobalStyles.colors.red}]}>QAR 0.00</Text>
        </View>
        <View style={[styles.total , {marginTop:5}]}>
            <Text style={styles.totalText}>Estimated Total</Text>
            <Text  style={[styles.totalPrice, {color:'black' ,fontWeight:'bold'}]}>QAR {totalPrice.toFixed(2)}</Text>
        </View>
        <Text style={styles.ship}>Shipping charges will be calculated on checkout page.</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <View style={styles.checkoutContainerInner}>
          <Text style={styles.checkText}>Total</Text>
          <Text style={styles.checkPrice}> QAR {totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.checkoutButton}>
        <Icon name="cart" size={20} color='white'/>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </View>
      </View>
        {/* </ScrollView> */}
    </View>
  );
};


export default CartList;


const styles = StyleSheet.create({ 

    checkoutContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:windowWidth*0.02,
        paddingVertical:windowWidth*0.02,
        backgroundColor:'white',
        alignItems:'center'
    },
    checkoutContainerInner:{
        flexDirection:'row',
        alignItems:'center'
    },
    checkText:{
        fontSize:16,
        marginRight:5
    },
    checkPrice:{
        fontSize:20,
        fontWeight:'bold'
    },
    checkoutText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,

    },
    checkoutButton:{
        backgroundColor:GlobalStyles.colors.primary,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        borderRadius:20,
        padding:10

    },
    container: { 
        flex: 1, 
        backgroundColor: '#eee', // Light Gray 
        paddingTop: 20, 
        paddingHorizontal: 15, 
    }, 
    heading: { 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        color: 'green', 
        margin: 20, 
        textAlign: 'center', 
    }, 
    subheading: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        color: '#333', // Dark Gray 
        margin: 10, 
        textAlign: 'center', 
    }, 
    itemContainer: { 
      
        backgroundColor: '#FFF', // White 
        borderBottomColor: '#E0E0E0', // Lighter Gray 
        borderBottomWidth: 1, 
        height: windowWidth * 0.3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 3, 
        elevation: 1, 
        marginBottom: 10, 
        flexDirection:'row',
        justifyContent:'space-between'
    }, 
    itemText: { 
        color: '#333', // Dark Gray 
        fontSize: 16, 
        fontWeight: 'bold', 
    }, 
    hiddenContainer: { 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: '#FFF', 
        height: 80, 
    }, 
    hiddenButton: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 75, 
        height:windowWidth*0.4,  
    }, 
    deleteButton: { 
        backgroundColor: '#E74C3C', // Red 
        
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    buttonText:{
         
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop:windowWidth * 0.1
    },
        imageStyle: {
        borderRadius: 2,
        margin : windowWidth*0.025,
        width: windowWidth * 0.25,
        height:windowWidth*0.25
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

    
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: GlobalStyles.colors.lgray,
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
        marginLeft: 4
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    detailContainer:{
        marginVertical: windowWidth*0.03,
        justifyContent:'space-evenly'
    },

    countContainer: {
        justifyContent:'center',
        padding:windowHeight*0.02,
        alignItems:'center'
    },

    countText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 6,
        borderWidth:1,
        paddingHorizontal:8,
        textAlign:'center',
        borderColor:GlobalStyles.colors.lgray,
        marginVertical:5
    },
    totalContainer :{
        backgroundColor:'white',
        marginVertical:windowWidth*0.02,
        padding:windowWidth*0.02
    },
    total :{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    totalText :{
        color:GlobalStyles.colors.darkGray,
        fontSize:16
    },
    totalPrice :{
        color:GlobalStyles.colors.darkGray,
        fontSize:16,
        fontWeight:'normal'
    },

    ship:{
        color:GlobalStyles.colors.lgray,
        fontSize:10
    }
}); 
