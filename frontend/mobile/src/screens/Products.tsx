import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';

import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';


const Products = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [produits, setProduits] = useState(data);
  let [searsh, setSearsh] = useState({ title: '', categorie: '' });

  const getAllProducts = async () => {
    await axios.get(`http://192.168.221.206:5000/api/produit/get-all-Product`)
      .then((res) => {
        setData(res.data.Products)
        setProduits(res.data.Products)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onChangeText={(value: any) => setSearsh({ ...searsh, title: value })} />
      <Categories
        select={searsh.categorie}
        onPress={(event: any) => setSearsh({
          ...searsh,
          categorie: (
            event._dispatchInstances.memoizedProps.children !== 'All'
              ? event._dispatchInstances.memoizedProps.children
              : ''
          )
        })
        }
      />
      <ScrollView>
        <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, padding: 20, }}>
          {produits.map((produit, i) => (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Product', { produit })} style={{ width: 160, minHeight: 200, alignItems: 'center', backgroundColor: colors.white, borderRadius: 12, shadowColor: colors.black, elevation: 1, }} key={i}>
              <Image style={{ width: '100%', height: 130, borderTopLeftRadius: 12, borderTopRightRadius: 12, }} source={{ uri: `http://192.168.221.206:5000/${produit.image}` }} />
              <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 10, shadowColor: colors.black, elevation: 3, padding: 10 }}>
                <Text style={{ color: colors.black, fontSize: 10 }}>{produit.categorie}</Text>
                <Text style={{ color: colors.black, fontSize: 20 }}>{produit.name}</Text>
                <View style={{ width: 140, flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Text style={{ color: colors.black, fontSize: 15, fontWeight: 'bold' }}>{produit.price} DH</Text>
                  <Icon name="shopping-cart" size={20} color={colors.black} ></Icon>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View >
  );
}

export default Products;