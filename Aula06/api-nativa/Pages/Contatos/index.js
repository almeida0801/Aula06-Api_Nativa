import React from 'react';
import {View, Text, } from 'react-native';

    
    const style = StyleSheet.create({
        container : {
            flex : 1,
            margintop : StatusBar.currentHeight || 0
        }

    })

    
    const Contatos = () => {
        return(
            <View style = {styles.container}>
                <Text>Contatos</Text>
            </View>
        )
    }

    export default Contatos;