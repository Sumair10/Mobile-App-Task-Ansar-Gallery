import { useContext, useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, ScrollView,ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Slider from '../components/Slider';
import OtherItems from '../components/OtherItems';
import ShorMoreCarousel from '../components/ShorMoreCarousel';
import AddToCart from '../components/AddToCart';
import ItemDetailsSimple from '../components/ItemDetailsSimple';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from '../store/redux/appData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const baseURL = 'https://testuatah.com/rest/V1/products/5500000060561'
const baseURLForMore= 'https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=30&searchCriteria[currentPage]=1&searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=36248&searchCriteria[filter_groups][1][filters][0][condition_type]=eq' 

function ProductSimpleScreen({ route, navigation }) {

  const simpleData = useSelector((state)=>state.appData.simpleData)
  const simpleDataMore = useSelector((state)=>state.appData.simpleDataMore)

    const dispatch = useDispatch()
  useEffect(() => {
    if(simpleData?.length === 0){

    axios.get(baseURLForMore).then((response) => {


      const products = response.data.items.map(item => {
        const id = item.id;
        const name = item.name;

        const price = item.price;
        const image = `https://media-qatar.ahmarket.com/media/catalog/product${item.media_gallery_entries[0].file}`
        const liked = false
        return { id, name, price, image,liked };
      });
      dispatch(adddata({id:'simpleData', data:products}))
    });
    }
  }, []);
  
  useEffect(() => {
    if(simpleDataMore === null){

    axios.get(baseURL).then((response) => {
      const data= {
        id: response.data.id,
        sku: response.data.sku,
        name: response.data.name,
        price: response.data.price,
        imageArray: response.data?.media_gallery_entries.map(entry => {
          return `https://media-qatar.ahmarket.com/media/catalog/product${entry.file}`;
        })
      }


      dispatch(adddata({id:'simpleDataMore', data:data}))
    });
    }
  }, []);

  if(simpleData?.length === 0 || simpleDataMore === null){
    return <View style={{flex :1, justifyContent:'center' , alignItems:'center'}}>
      <ActivityIndicator size="medium" color={GlobalStyles.colors.primary} />
    </View>
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.heading}>{simpleDataMore?.name}</Text>
        <Slider images={simpleDataMore.imageArray}/>
        <ItemDetailsSimple data={simpleDataMore}/>
        <OtherItems />
        <ShorMoreCarousel  data={simpleData}/>
      </ScrollView>
      <AddToCart />
    </View>
  );
}

export default ProductSimpleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: windowWidth * 0.03,
    backgroundColor: 'white'
  },

  heading: {
    fontSize: windowHeight * 0.03,
    padding: 10,
  },


});