import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProducutItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    }
}

const ProductItem = ({ item }: ProducutItemProps) => {

    const navigation = useNavigation();

    const onPress= () => {
        console.log('item pressed');
        navigation.navigate('ProductDetailScreen', {id: item.id});
    }

    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image
                style={styles.image}
                source={{ uri: item.image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={4}>{item.title}</Text>
                <View style={styles.ratingsContainer}>

                    {/* <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name="star-half-full" size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name="star-o" size={18} color={'#e47911'} /> */}

                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <FontAwesome
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={18}
                            color={'#e47911'} 
                        />
                    ))}

                    <Text>{item.ratings}</Text>
                </View>

                <Text style={styles.price}>
                    from ${item.price}
                    {item.oldPrice &&
                        (<Text style={styles.oldPrice}>${item.oldPrice}</Text>
                        )}
                </Text>
            </View>
        </Pressable >
    )
};

export default ProductItem;
