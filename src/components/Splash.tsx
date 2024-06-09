import { Image, Text, View } from 'react-native';
import React from 'react';

export const Splash = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingRight: 40,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            marginBottom: 60,
            position: 'relative',
            left: 40,
          }}
          source={require('./../../assets/images/0f01ec1b-9715-4c91-bdf9-73f806b6e3fd.png')}
        />
        <Text style={{ fontSize: 32, fontWeight: '700' }}>Cupid Arrow</Text>
      </View>
    </>
  );
};
