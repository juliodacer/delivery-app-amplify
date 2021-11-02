import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Button from '../../components/Button';
import styles from './styles';
import countryList from 'country-list';

const countries = countryList.getData();

const ProfileScreen = () => {
    const [country, setCountry] = useState(countries[173].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const [city, setCity] = useState('');
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Corrija todos los errores de campo antes de enviar');
            return;
        }

        if (!fullname) {
            Alert.alert('por favor complete el campo de nombre completo');
            return;
        }

        if (!phone) {
            Alert.alert('por favor complete el campo de numero de celular');
            return;
        }

        console.warn('Guardado satisfactoriamente')

    };


    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker  selectedValue={country} onValueChange={setCountry}>
                        {countries.map(country =>
                            <Picker.Item value={country.code} label={country.name} />
                        )}
                    </Picker>
                </View>

                {/* Full name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Nombre completo (Nombre y apellido)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre Completo"
                        value={fullname}
                        onChangeText={setFullname}
                    />
                </View>

                {/* Phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Número de celular</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Número de celular"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                    />
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Direcicón</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }}
                    />
                    {!!addressError && (
                        <Text style={styles.errorLabel}>{addressError}</Text>
                    )}
                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>Ciudad</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ciudad"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Button text="Guardar" onPress={onCheckout} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileScreen;