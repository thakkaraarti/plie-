import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../redux/slices/userSlice';

const EventCard = ({ item }: any) => {
     const dispatch = useDispatch();

  const favourites = useSelector(state => state.user.favourites);

  const isFavourite = favourites.some(
    fav => fav.event_id === item.event_id
  );
    return (
        <View style={styles.card}>
            {/* Left Image */}
            <Image source={{ uri: item.event_profile_img }} style={styles.image} />

            {/* Middle Content */}
            <View style={styles.content}>
                <Text style={styles.title}>{item.event_name}</Text>

                <Text style={styles.date}>{`${item.readable_from_date} - ${item.readable_to_date}`}</Text>
                <Text style={styles.price}>{`${item.event_price_from} - ${item.event_price_to}`}</Text>

                <View style={styles.tagRow}>
                    {item?.keywords?.map(tag => (
                        <View key={tag} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Right Actions */}
            <View style={styles.actions}>
                <TouchableOpacity

                    onPress={() => {
                        Linking.openURL(item?.event_url)
                            .catch(err => console.error('Failed to open URL:', err));
                    }}><Text style={{ fontSize: 18 }}>↗</Text></TouchableOpacity>

                <View>
                    <Text style={styles.location}>{item.city}, {item.country}</Text>
                </View>
                <TouchableOpacity
                onPress={()=>dispatch(toggleFavourite(item))}
                >
                    <Text style={{ fontSize: 18 }}>
                        {item.isFavorite||isFavourite ? '💚' : '🤍'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
    },
    date: {
        color: '#3CB371',
        fontSize: 12,
        marginTop: 2,
    },
    price: {
        color: '#999',
        fontSize: 12,
        marginTop: 2,
    },
    tagRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 6,
    },
    tag: {
        backgroundColor: '#EDEDED',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
        marginRight: 6,
        marginTop: 4,
    },
    tagText: {
        fontSize: 11,
        color: '#444',
    },
    actions: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    location: {
        fontSize: 11,
        color: '#999',
    },
});
