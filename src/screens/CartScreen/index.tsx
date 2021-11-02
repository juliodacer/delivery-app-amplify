import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

const CartScreen = () => {

    const navigation = useNavigation();

    const totalPrice = products.reduce((
        summedPrice, product) =>
        summedPrice + product.item.price * product.quantity, 0);

    const onConfirm = () => {
        navigation.navigate('ProfileScreen');
    }
    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>
                            Subtotal ({products.length} productos):
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                                S/. {totalPrice.toFixed(2)}
                            </Text>
                        </Text>
                        <Button
                            text={'Confirmar pedido'}
                            onPress={onConfirm}
                        />
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        marginTop: 30,
        padding: 10
    }
});

export default CartScreen
