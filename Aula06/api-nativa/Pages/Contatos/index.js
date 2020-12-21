import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList} from 'react-native';
import * as Contacts from 'expo-contacts';

    
    const styles = StyleSheet.create({
        container : {
            flex : 1,
            marginTop : StatusBar.currentHeight || 0
        }

    })

    const ItemContato = ({nome}) => {
       return(
        <View>
        <Text>{nome}</Text>
        </View>
       )
    }
    
    const Contatos = () => {

        const [contatos, setContatos] = useState([]);

        // Ciclo de vida, assim que aparecer a página passa pelo useEffect
        useEffect(() => {
            (async () => {

              // Requisita a permissão do usuário para obter os contatos
              const { status } = await Contacts.requestPermissionsAsync();
              // Permissão concedida pelo usuário
              if (status === 'granted') {
               // Pega todos os contatos   
                const { data } = await Contacts.getContactsAsync({
                  fields: [Contacts.Fields.Emails],
                });
        
                //Vefifica se existe contatos cadastrados
                if (data.length > 0) {
                    console.log(data);
                  setContatos(data);
                }
              }
            })();
          }, []);

          const renderItem = ({item}) => {
                return (
                <ItemContato nome = {item.name} />
                )
                    
          }

        return(
            <View style = {styles.container}>
                <Text>Contatos</Text>
                <FlatList
                    data =          {contatos}
                    keyExtractor =  {item => item.id}
                    renderItem =    {renderItem}
                    />
            </View> 
        )
    }

    export default Contatos;