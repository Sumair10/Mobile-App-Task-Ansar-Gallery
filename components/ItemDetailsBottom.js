import { useContext, useLayoutEffect, useState ,useEffect} from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, Image, Pressable,TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { addFromCart } from '../store/redux/cart';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ItemDetailsBottom({moreData}) {
    const products = useSelector((state)=>state.cart.product)
    const dispatch = useDispatch()
     const [added ,setAdded] =useState(false)
    const handleAdd =()=>{
        dispatch(addFromCart(moreData))
        setAdded(true)
    }

    useEffect(()=>{
        if(products.length > 0){
            products.find(product => product.id === moreData.id && setAdded(true)  )
        }
    },[products])

    const [selectedSize, setSelectedSize] = useState('M');

    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };

    const [selectedColor, setSelectedColor] = useState('Black');

    const handleColorChange = (color) => {
      setSelectedColor(color);
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
           
          <View>
          <View style={styles.priceContainer}>
                <Text style={styles.qar}>{moreData.name}</Text>
            </View>
            <View style={{flexDirection:'row' , alignItems :'center'}}>

            <Text style={styles.text1}>QAR <Text style={{fontWeight:'bold', fontSize:24}}>{Math.floor(moreData.price)}<Text style={{fontSize:16}}>.{(moreData.price - Math.floor(moreData.price)) * 100}</Text></Text></Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text >Details </Text>
            <Icon  name="chevron-forward" size={20} />
          </View>
            </View>

            <View>
      <Text style={[styles.text1, { marginTop: 10 }]}>Size: <Text style={{ fontWeight: 'bold' }}>{selectedSize}</Text></Text>
      <View style={styles.sizeContainer}>
        {['S', 'M', 'L', 'XL', 'XXL'].map((sizeOption) => (
          <TouchableOpacity
            key={sizeOption}
            onPress={() => handleSizeChange(sizeOption)}
            style={[styles.sizeText, selectedSize === sizeOption && { borderWidth: 3 }]}
          >
            <Text>{sizeOption}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
           <View>
      <Text style={[styles.text1, { marginTop: 10 }]}>Color: <Text style={{ fontWeight: 'bold' }}>{selectedColor}</Text></Text>
      <View style={styles.sizeContainer}>
        {['#cebfb8', '#8ca999', 'black', '#44aee8', 'white'].map((colorOption) => (
          <TouchableOpacity
            key={colorOption}
            onPress={() => handleColorChange(colorOption)}
            style={[
              styles.colorsContainer,
              { backgroundColor: colorOption },
              selectedColor === colorOption && { borderWidth: 2, borderRadius: 50, padding: 5, marginHorizontal: 3, },
            ]}
          ></TouchableOpacity>
        ))}
      </View>
    </View>

            <View style={styles.mainContainer}>
            <View >
            <Icon  name="heart-outline" size={30} />
            </View>
            <View style={styles.addContainer}>
                {
                    added ?
                    <Text style={[styles.addText , {opacity:0.5}]}>Added</Text> :

                <Pressable android_ripple={{color :'#cccccc'}} style={{paddingHorizontal:50}} onPress={handleAdd}>
 
                <Text style={styles.addText}>Add to cart</Text>
                </Pressable>
                }
               

            </View>
        </View>
            
        </View>
    );
}

export default ItemDetailsBottom;

const styles = StyleSheet.create({
    container: {
        margin:15
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      colorsContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
      },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    qar: {
        fontSize:windowWidth*0.05,
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
    },

    sizeContainer:{
        flexDirection:'row',
        alignItems:'center'
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
        width:30,
        height:30,
        borderRadius:50,
        borderWidth:1,
        borderColor:GlobalStyles.colors.lgray,
        elevation:2
    },
    detailsContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:"center"
    },
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
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
    addContainer:{
        backgroundColor:'black',
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