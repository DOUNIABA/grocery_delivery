import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_STORE } from '../redux/features/store';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const Product = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [produit, setProduit] = useState(route.params.produit)

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Text style={{ position: 'absolute', zIndex: 2, margin: 15, backgroundColor: colors.white, padding: 12, textAlign: 'center', borderRadius: 100 }} onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color={colors.black} />
      </Text>
      <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, }}>
        <Image style={{ width: '100%', height: 350 }} source={{ uri: `http://192.168.221.206:5000/${produit.image}` }} />
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, }}>
          <View>
            <Text style={{ color: colors.black, fontSize: 12, }}>{produit.categorie}</Text>
            <Text style={{ color: colors.black, fontSize: 30, }}>{produit.title}</Text>
            <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold', }}>{produit.price} DH</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 2, }}>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.color1, borderBottomLeftRadius: 8, borderTopLeftRadius: 8, }}>
              <Text style={{ color: colors.black, fontSize: 20, }} onPress={() => { setProduit({ ...produit, quantite: produit.quantite - 1 }) }}>-</Text>
            </View>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.color1, }}>
              <Text style={{ color: colors.black, fontSize: 20, }}>{produit.quantite}</Text>
            </View>
            <View style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.color1, borderTopRightRadius: 8, borderBottomRightRadius: 8, }}>
              <Text style={{ color: colors.black, fontSize: 20, }} onPress={() => { setProduit({ ...produit, quantite: produit.quantite + 1 }) }}>+</Text>
            </View>
          </View>
        </View>
        <Text style={{ color: colors.black, paddingHorizontal: 20, }}>{produit.discruption}</Text>
        <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20, }}>
          <Text style={{ color: colors.black, fontSize: 20, }}>Total: {produit.price * produit.quantite} DH</Text>
        </View>
        <Text style={styles.loginBtn} onPress={() => dispatch(ADD_STORE(produit))}>Add to store</Text>
        <Text style={{ color: 'red' }}>Notice: The price is for one kilogram</Text>
      </View>
    </View>
  );
}

export default Product;