import {View, Text, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Tutorial = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('login')}
      onDone={() => navigation.navigate('login')}
      pages={[
        {
          backgroundColor: '#fff',
          titleStyles: {
            fontFamily: 'Poppins-SemiBold',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Regular',
          },
          image: (
            <Image source={require('../../assets/icons/add_your_info.png')} />
          ),
          title: 'Create an account',
          subtitle: 'Create Your Account',
        },
        {
          backgroundColor: '#fff',
          titleStyles: {
            fontFamily: 'Poppins-SemiBold',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Regular',
          },
          image: (
            <Image source={require('../../assets/icons/add_to_cart.png')} />
          ),
          title: 'Find Yours',
          subtitle: 'Find your favourite furniture',
        },
        {
          backgroundColor: '#fff',
          titleStyles: {
            fontFamily: 'Poppins-SemiBold',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Regular',
          },
          image: <Image source={require('../../assets/icons/payment.png')} />,
          title: 'Payment',
          subtitle: 'Various ways of payment',
        },
      ]}
    />
  );
};

export default Tutorial;
