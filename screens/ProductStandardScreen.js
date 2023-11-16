import { useContext, useLayoutEffect, useState ,useEffect} from 'react';
import { StyleSheet, TextInput, View, Text,Dimensions, Pressable,ActivityIndicator} from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import ItemListHorizontal from '../components/ItemListHorizontal';
import AllItems from '../components/AllItems';
import ComingSoonItems from '../components/ComingSoonItems';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from '../store/redux/appData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const baseURL= 'https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=40' 

function ProductStandardScreen({ route, navigation }) {
  const standardData = useSelector((state)=>state.appData.standardData)
  const dispatch = useDispatch()

  useEffect(() => {
    if(standardData?.length === 0){
    axios.get(baseURL).then((response) => {
      const products = response.data.items.map((item, index) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const image = `https://media-qatar.ahmarket.com/media/catalog/product${item.media_gallery_entries[0].file}`;
        const liked = false;
  
        // Adding the offApply variable based on the specified conditions
        const offApply = [0, 3, 4, 13].includes(index);
  
        return { id, name, price, image, liked, offApply };
      });
      dispatch(adddata({id:'standardData', data:products}))
    });
  }
  }, []);

  
  const scrollItems = ['All' , "sub-category" , "sub-category","sub-category","sub-category"]

  if(standardData?.length ===0 ){
    return <View style={{flex :1, justifyContent:'center' , alignItems:'center'}}>
      <ActivityIndicator size="medium" color={GlobalStyles.colors.primary} />
    </View>
  }


  return (
    <View style={styles.container}>
     <ItemListHorizontal items={scrollItems} selected={0}/>
    <ComingSoonItems  itemData={standardData} />
   
    </View>
  );
}

export default ProductStandardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: windowWidth*0.03,
    
  },
 

 
});