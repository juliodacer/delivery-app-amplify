import React, { useState } from 'react'
import { Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductDetailScreen = () => {
    const [selectedOption, setselectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    console.log(selectedOption)

    const route = useRoute();
    console.log(route.params);

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setselectedOption(itemValue)}>
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker>

            <Text style={styles.price}>
                from S/.{product.price}
                {product.oldPrice &&
                    (<Text style={styles.oldPrice}>S/.{product.oldPrice}</Text>
                    )}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button
                text={'Agregar al carrito'}
                onPress={() => { console.warn('Agregar al carrito') }} 
                containerStyle={{
                    backgroundColor: '#C8F000'
                }}
                />
            <Button
                text={'Pedir ahora'}
                onPress={() => { console.warn('Pedir ahora') }} />

        </ScrollView>
    )
}

export default ProductDetailScreen;
