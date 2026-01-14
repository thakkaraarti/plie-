import React, { useEffect,useState } from 'react';
import { View, Text, FlatList, StyleSheet,  } from 'react-native';
import EventCard from '../../components/EventCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApiServiceGet } from '../../globalFunctions/apiService';
import { useDispatch, useSelector } from 'react-redux';
import {styles} from '../Favourites/FavouritesStyle';
const Favourites = () => {
    const [events, setEvents] = useState<any>([]);
    const dispatch = useDispatch();
    
      const favourites = useSelector(state => state.user.favourites);
          const username = useSelector(state => state.user.username);
    

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hello}>Hello {username}!</Text>
        <Text style={styles.subText}>Are you ready to dance?</Text>
      </View>

      {/* List */}
      <FlatList
        data={favourites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EventCard item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Favourites;


