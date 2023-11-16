import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../constants/Styles';
import { useState } from 'react'

export default function ItemListHorizontal(props) {
    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        props.items.map((item, i) =>{
                           return <Pressable
                           android_ripple={{color :'#cccccc'}}
                           key={i}
                            style={[
                               i === props.selected ?  styles.itemContainer1 : styles.itemContainer,
                            ]}
                        >
                            <Text style={styles.item}>{item}</Text>
                        </Pressable>
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({

    itemContainer: {
        borderColor: GlobalStyles.primary,
        backgroundColor: GlobalStyles.colors.gray,
        borderRadius: 10,
        marginHorizontal: 5,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    itemContainer1: {
        borderColor: GlobalStyles.primary,
        backgroundColor: GlobalStyles.colors.blue,
        borderRadius: 10,
        marginHorizontal: 5,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    
    item: {
        padding: 8,
        color: GlobalStyles.colors.darkGray,
        fontWeight: '500',
        fontSize: 14,
    },
  
})

