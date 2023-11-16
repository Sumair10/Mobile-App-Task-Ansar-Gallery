import { useContext, useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import CartList from '../components/CartList';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const baseURL = 'https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=30&searchCriteria[currentPage]=1&searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=36248&searchCriteria[filter_groups][1][filters][0][condition_type]=eq'

function ProductCartScreen({ route, navigation }) {
  const cartItems = useSelector((state) => state.cart.product)
  const [itemData, setItemData] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((response) => {


      const products = response.data.items.map(item => {
        const id = item.id;
        const name = item.name;

        const price = item.price;
        const image = `https://media-qatar.ahmarket.com/media/catalog/product${item.media_gallery_entries[0].file}`
        const liked = false
        return { id, name, price, image, liked };
      });
      setItemData(products.slice(8))
    });
  }, []);

  // if(itemData?.length ===0 ){
  //   return <View style={{flex :1, justifyContent:'center' , alignItems:'center'}}>
  //     <ActivityIndicator size="medium" color={GlobalStyles.colors.primary} />
  //   </View>
  // }

  if (cartItems.length === 0) {
    return <View style={styles.container1}>
      <Text style={{ fontSize: 20 }}>No Items</Text>

    </View>
  }

  return (
    <View style={styles.container}>
      <CartList data={cartItems} />

    </View>
  );
}

export default ProductCartScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  container: {
    flex: 1,

  },



});