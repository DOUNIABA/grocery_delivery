import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';
import { useSelector } from 'react-redux';

const Store = () => {
  const [mystore, setMystore] = useState([])
  const [state, setState] = useState(0);
  const [totale, setTotale] = useState(0);

  const store = useSelector((state: any) => state.Store.products)
  console.log(store)

  useEffect(() => {
    if (store !== null) setMystore(store)
    // console.log(mystore)

    // AsyncStorage.clear()

    var e = 0;
    mystore.forEach(produit => {
      e += (produit.price * produit.quantite)
      setTotale(e)
    });
  }, [mystore])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'column', gap: 20, padding: 15, }}>
        <View>
          <Text style={{ color: colors.color1, fontWeight: 'bold', fontSize: 25, }}>Store</Text>
        </View>
        <ScrollView>
          <View style={{ gap: 10, }}>
            {mystore.map((produit, i) => (
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', gap: 25, backgroundColor: colors.white, padding: 10, borderRadius: 10, position: 'relative' }} key={i}>
                <Image style={{ width: '20%', height: 100 }} source={require('../assets/images/grocery.png')} />
                <View>
                  <Text style={{ color: colors.black, fontSize: 20, fontWeight: 'bold' }}>{produit.name}</Text>
                  <Text style={{ color: colors.black, fontSize: 15, }}>Quantite: {produit.quantite}</Text>
                  <Text style={{ color: colors.black, fontSize: 15, }}>Price Total: {produit.price * produit.quantite} DH</Text>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0, padding: 8 }}>
                  <Icon name='close' size={20} color={colors.black} onPress={() => { mystore.splice(i, 1), setState(state + 1) }}></Icon>
                </View>
              </View>
            ))}
            <View style={{ flex: 1, height: 2, backgroundColor: colors.black, margin: 10 }}></View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold' }}>Totale payement: </Text>
              <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold' }}>{totale} DH</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.authHomeBtn}>Pay Now</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View >
  );
}

export default Store;