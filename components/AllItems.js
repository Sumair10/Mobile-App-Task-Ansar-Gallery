import { Image, StyleSheet, View, Text, FlatList, Pressabl, Dimensions, Pressable ,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyles } from "../constants/Styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomModal from "../screens/BottomModal";
import ShorMoreCarousel from "./ShorMoreCarousel";
import ShorMoreCarouselAll from "./ShorMoreCarouselAll";
import { addFromCart, removeFromCart } from "../store/redux/cart";
import { adddata } from '../store/redux/appData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function AllItems({ itemData }) {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [cartData, setCartData] = useState(itemData[0]);

    

    const dispatch = useDispatch()
    const handleLike = (id) => {
        const updateData = itemData.map((item) => {
            if (item.id === id) {
                if(item.liked) {
                    return {
                        ...item,
                        liked: false
                    };
                }
                else{
                    dispatch(addFromCart({item}))
                    return {
                        ...item,
                        liked: true
                    };
                }
            
            } else {
                return item; 
            }
        });
    
        dispatch(adddata({id:'fashionData', data:[...updateData]}))
    };

    const handleCartPress =(item)=>{
        setCartData(item)
        setBottomSheetVisible(true)
    }

    const Item = ({ item }) => {
        return <View style={styles.item}>
                
            <Icon onPress={()=>handleLike(item.id)} style={styles.heart} name={item.liked ? "heart" : "heart-outline"} color={ item.liked ? GlobalStyles.colors.red : GlobalStyles.colors.lgray} size={20} />
            <View style={styles.imageStyleFrameContainer}>

            <Image style={styles.imageStyleFrame} source={require('../assets/colorFrame.png')} />
            </View>
           
            <View style={styles.imageConatainer}>
                <Image style={styles.imageStyle} source={{uri : item.image}} />
            </View>
            {/* <Text style={styles.itemName}>{item.name.length > 18 ? item.name.slice(0, 18 - 3) + "..." : item.name}</Text> */}
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.qar}>QAR</Text>
                <Text style={[styles.priceText, { color: item.offApply ? GlobalStyles.colors.red : 'black' }]}>{Math.floor(item.price)}<Text style={{fontSize:14}}>.{(item.price - Math.floor(item.price)) * 100}</Text></Text>
            </View>

            <View style={styles.offContainer}>
                <View style={{ flexDirection: 'row' }}>

                    {item.offApply ? (
                        <>
                            <Text style={styles.price}>
                                300.00
                            </Text>
                            <Text style={styles.offPercentage}>-40%</Text>
                        </>
                    ) : null}
                </View>
                <TouchableOpacity onPress={()=>handleCartPress(item)}>

                    <Icon name="cart" size={25} />
                </TouchableOpacity>
                {/* <View style={styles.countContainer}>
                    <Icons name="minussquare" size={20} />
                    <Text style={styles.countText}>0</Text>
                    <Icons name="plussquare" size={20} />
                </View> */}

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
                <BottomModal  visible={isBottomSheetVisible} onDismiss={() => setBottomSheetVisible(false)}>
                    <ShorMoreCarouselAll setBottomSheetVisible={setBottomSheetVisible} moreData={cartData}/>

                </BottomModal>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 10
    },
    item: {
        flex: 1,
        maxWidth: "50%",
        backgroundColor: 'white',
        margin: 10
    },
    imageConatainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 2,
        width: windowWidth * 0.47,
        height:windowWidth *0.47
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: GlobalStyles.colors.darkGray,
        marginTop: 5
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

    offContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

    countContainer: {
        flexDirection: 'row'
    },

    countText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 6
    },

    heart: {
        position: 'absolute',
        zIndex: 999,
        top: 10,
        left: 10
    },
    imageStyleFrameContainer:{
        position: 'absolute',
        zIndex: 999,
        bottom: 90,
        right: 5,
    },
    imageStyleFrame: {
        // height:5
        
    },

})
