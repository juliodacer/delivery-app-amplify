import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'

import products from '../../data/products'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={({ id }) => id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 30,
        padding: 10
    }
})

export default HomeScreen
