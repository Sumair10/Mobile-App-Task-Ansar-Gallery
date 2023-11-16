import { useContext, useLayoutEffect, useState,useEffect } from 'react';
import { StyleSheet, TextInput, View, Text,Dimensions ,Pressable,ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Header from '../components/Header';
import ItemListHorizontal from '../components/ItemListHorizontal';
import AllItems from '../components/AllItems';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from '../store/redux/appData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const baseURL= 'https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=30&searchCriteria[currentPage]=1&searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=36248&searchCriteria[filter_groups][1][filters][0][condition_type]=eq' 
const baseURLForMore="https://testuatah.com/rest/V1/products/5500000060561"

function ProductFashionScreen() {

  const fashionData = useSelector((state)=>state.appData.fashionData)
  const fashionDataMore = useSelector((state)=>state.appData.fashionDataMore)

    const dispatch = useDispatch()

  useEffect(() => {
    if(fashionData?.length === 0){

    axios.get(baseURL).then((response) => {
      const products = response.data.items.map((item, index) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const image = `https://media-qatar.ahmarket.com/media/catalog/product${item.media_gallery_entries[0].file}`;
        const imageArray = item?.media_gallery_entries.map((entry) => {
          return `https://media-qatar.ahmarket.com/media/catalog/product${entry.file}`;
        });
        const liked = false;
  
        // Adding the offApply variable based on the specified conditions
        const offApply = [0, 3, 4, 13,16,17].includes(index);
  
        return { id, name, price, image, liked, imageArray, offApply };
      });
      dispatch(adddata({id:'fashionData', data:products}))
    });
    }
  }, []);

  useEffect(() => {
    if(fashionDataMore === null){
      
    axios.get(baseURLForMore).then((response) => {
      const data ={
        id: response.data.id,
        sku: response.data.sku,
        name: response.data.name,
        price: response.data.price,
        imageArray: response.data?.media_gallery_entries.map(entry => {
          return `https://media-qatar.ahmarket.com/media/catalog/product${entry.file}`;
        })
      }
      dispatch(adddata({id:'fashionDataMore', data:data}))
    });
    }
  }, []);



  const scrollItems =['All', 'Women', 'Men' ,"Kids" ,'Bags & Luggage']



 if(fashionData?.length ===0 || fashionDataMore.length ===0){
    return <View style={{flex :1, justifyContent:'center' , alignItems:'center'}}>
      <ActivityIndicator size="medium" color={GlobalStyles.colors.primary} />
    </View>
  }

  return (
    <View style={styles.container}>

      <ItemListHorizontal items={scrollItems} selected={2}/>
      <AllItems itemData={fashionData}  moreData={fashionDataMore}/>
       
    </View>
  );
}

export default ProductFashionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: windowWidth*0.03,
    backgroundColor:'white'
    
  },
 

 
});