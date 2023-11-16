import { useContext, useLayoutEffect, useState ,useEffect } from 'react';
import { StyleSheet, TextInput, View, Text,Dimensions , ScrollView,ActivityIndicator} from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import Slider from '../components/Slider';
import ItemDetails from '../components/ItemDetails';
import OtherItems from '../components/OtherItems';
import ShorMoreCarousel from '../components/ShorMoreCarousel';
import AddToCart from '../components/AddToCart';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from '../store/redux/appData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ProductConfigScreen({ route, navigation }) {
  const configData = useSelector((state)=>state.appData.configData)
  const configDataMore = useSelector((state)=>state.appData.configDataMore)

    const dispatch = useDispatch()

  const baseURL = 'https://testuatah.com/rest/V1/products/7159000011677'
  const baseURLForMore= 'https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=40' 
  



  useEffect(() => {
    if(configData?.length === 0){

    axios.get(baseURLForMore).then((response) => {


      const products = response.data.items.map(item => {
        const id = item.id;
        const name = item.name;

        const price = item.price;
        const image = `https://media-qatar.ahmarket.com/media/catalog/product${item.media_gallery_entries[0].file}`
        const liked = false
        return { id, name, price, image,liked };
      });
      dispatch(adddata({id:'configData', data:products}))
    });
    }
  }, []);
  
  useEffect(() => {
    if(configDataMore === null){

    
    axios.get(baseURL).then((response) => {
      const data ={
        id: response.data.id,
        sku: response.data.sku,
        name: response.data.name,
        price: response.data.price,
        imageArray: response.data?.media_gallery_entries.map(entry => {
          return `https://media-qatar.ahmarket.com/media/catalog/product${entry.file}`;
        })
      }
      dispatch(adddata({id:'configDataMore', data:data}))
    });}
  }, []);    


  if( configData?.length ===0 || configDataMore ===null ){
    return <View style={{flex :1, justifyContent:'center' , alignItems:'center'}}>
      <ActivityIndicator size="medium" color={GlobalStyles.colors.primary} />
    </View>
  }


  return (
    <View style={styles.container}>
      <ScrollView>

     <Text style={styles.heading}>{configDataMore?.name}</Text>
     <Slider images={configDataMore.imageArray}/>
     <ItemDetails data={configDataMore}/>
     <OtherItems/>
      <ShorMoreCarousel data={configData}/>
      </ScrollView>
     <AddToCart/>
    </View>
  );
}

export default ProductConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: windowWidth*0.03,
    backgroundColor:'white'
  },
  heading :{
    fontSize:windowHeight*0.03,
    padding:10,
  },
 

 
});