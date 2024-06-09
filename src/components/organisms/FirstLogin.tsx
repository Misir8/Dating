import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const FirstLogin = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 10,
          marginTop: 50,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            marginBottom: 60,
            position: 'relative',
            left: 10,
            top: 20,
          }}
          source={require('../../../assets/images/0f01ec1b-9715-4c91-bdf9-73f806b6e3fd.png')}
        />
        <Text style={{ fontSize: 14, fontWeight: '700' }}>Cupid Arrow</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            marginRight: 100,
            marginBottom: 0,
          }}
          source={require('../../../assets/images/4b24dddd-ccc3-417a-8a78-4b5981ae480b.jpg')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            marginLeft: 100,
            marginTop: 0,
            position: 'relative',
            bottom: 80,
          }}
          source={require('../../../assets/images/d9a1ee85-b64c-4e33-957f-4952a2fcc8ae.jpg')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            marginRight: 100,
            marginBottom: 0,
            position: 'relative',
            bottom: 130,
          }}
          source={require('../../../assets/images/d0a85e22-e3ee-4679-a56d-d67326ea6f15.jpg')}
        />
      </View>
      <View style={{ position: 'relative', bottom: 100 }}>
        <View>
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
          >
            Discover Love where your story begins.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginRight: 50,
              marginLeft: 50,
              marginTop: 30,
            }}
          >
            Join us to discover your ideal partner and ignite the sparks of
            romance in your journey.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#FF5069',
              cursor: 'pointer',
              width: 350,
              padding: 10,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => navigate('Registration' as never)}
          >
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 100,
                padding: 10,
                marginRight: 20,
              }}
            >
              <MaterialIcons name='phone' size={24} color='#FF5069' />
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'right',
                position: 'relative',
                right: 100,
              }}
            >
              Login with Phone
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
