import React, { useEffect,useState } from 'react';
import { View, Text, FlatList, StyleSheet,  } from 'react-native';
import EventCard from '../../components/EventCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApiServiceGet } from '../../globalFunctions/apiService';
import IndicatorModal from '../../components/IndicatorModal';
import { useDispatch, useSelector } from 'react-redux';
import {styles} from '../Favourites/FavouritesStyle';
const EventScreen = () => {
    const [events, setEvents] = useState<any>([]);
          const [isAnimate, setAnimate] = useState(false);
      const username = useSelector(state => state.user.username);
    

const getEvents = async () => {
   
    setAnimate(true);
    let api_url = 'events-listing' ;
    const data1 = await ApiServiceGet(api_url);
    console.log(data1,'data---');
    if(data1.success){
      setEvents(data1.data.events);
    }
    setAnimate(false)

    
  };
useEffect(()=>{
getEvents();
},[])
  return (
    <SafeAreaView style={styles.container}>
    <IndicatorModal isLoading={isAnimate} />
       <View style={styles.header}>
        <Text style={styles.hello}>Hello {username}!</Text>
        <Text style={styles.subText}>Are you ready to dance?</Text>
      </View>

      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EventCard item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default EventScreen;


