/*
  Where we fetch from API to get actual jobs data to display.
*/

import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  
  return (
    <View style={styles.container}>
      {/* View for header section & T.O.Button top right */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* View where actual jobs wil go */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            // number placeholders here until fetch data from API
            data={[1, 2, 3, 4]}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
            // below saying each key in list should have unique job_id prop
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs