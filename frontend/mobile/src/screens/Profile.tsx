import React from 'react';
import { View, Text, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';


const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20, }}>
      <ScrollView>
        <View style={{ width: '100%', flex: 1, flexDirection: 'column', gap: 30, }}>
          <Text style={{ color: colors.color1, fontSize: 25, fontWeight: 'bold', }}>My Account</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Image style={{ width: 200, height: 200, borderRadius: 100, borderColor: colors.color1, borderWidth: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} source={require('../assets/images/avatar.png')} />
            <Text style={{ color: colors.black, fontSize: 20, fontWeight: 'bold', textAlign: 'center', }}>Username</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 15 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: colors.color1, borderBottomWidth: 3, padding: 5 }}>
              <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold', }}>Contact Details</Text>
              <Text style={{ backgroundColor: colors.black, color: colors.color1, borderRadius: 10, fontWeight: 'bold', paddingHorizontal: 25, paddingVertical: 8 }}>Edite</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>Username: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>Username</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>Email: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>Email</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>Phone: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>Phone</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 15 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: colors.color1, borderBottomWidth: 3, padding: 5 }}>
              <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold', }}>Password Change</Text>
              <Text style={{ backgroundColor: colors.black, color: colors.color1, borderRadius: 10, fontWeight: 'bold', paddingHorizontal: 25, paddingVertical: 8 }}>Edite</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>Password: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>Password</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>New: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>New</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Text style={{ color: colors.black, fontSize: 15, }}>Confirm: </Text>
              <Text style={{ width: '70%', color: colors.black, fontWeight: 'bold', fontSize: 15, }}>Confirm</Text>
            </View>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: colors.color1, borderBottomWidth: 3, padding: 5 }}>
            <Text style={{ color: colors.black, fontSize: 18, fontWeight: 'bold', }}>Logout</Text>
            <Text style={{ backgroundColor: colors.black, color: colors.color1, borderRadius: 10, fontWeight: 'bold', paddingHorizontal: 25, paddingVertical: 8 }} onPress={() => { navigation.navigate('Page') }}><Icon name='sign-out-alt' size={20} /></Text>
          </View>
        </View>
      </ScrollView>
    </View >
  );
}

export default Profile;