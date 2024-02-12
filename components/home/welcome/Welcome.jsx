import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import {useRouter} from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello USER</Text>
          <Text style={styles.welcomeMessage}>Find the job for you!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      {/* for Flatlist, where we show job. FlatList useful when
        have more data to render */}
      <View style={styles.tabsContainer}>
        {/* data declared above, and renderItem should include callback
          that specifies how data should look when rendered */}
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            // render each as TouchableOpacity so we can click them
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          // since FlatList, can move the items around (FT, PT, Cont.) and 
          //  if had more could scroll horizontally to see them
        />

      </View>
    </View>
  )
}

export default Welcome