import {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () => {
   const router = useRouter();

   return (
      // SafeAreaView (over View) display considers device hardware locations
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
         <Stack.Screen
            options={{
               headerStyle: { backgroundColor: COLORS.lightWhite},
               headerShadowVisible: false,
               // adds top left menu button
               headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
               ),
               // adds top right profile button
               headerRight: () => (
                  <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
               ),
               headerTitle: "" // makes original center text empty
            }}
         />

         <ScrollView showsVerticalScrollIndicator={false}>
            <View 
               style={{
                  flex: 1,
                  padding: SIZES.medium
               }}
            >
            <Welcome/>

            {/* TODO: PopularJobs, NearbyJobs */}
            <Popularjobs /> 
            <Nearbyjobs />
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

export default Home;