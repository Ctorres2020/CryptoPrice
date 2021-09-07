import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View style={style.containerItem}>
            <View style={style.coinName}>
                <Image
                    style={style.image}
                    source={{uri: coin.image}}
                />
                <View style={style.containerName}>
                    <Text style={style.text}>{coin.name}</Text>
                    <Text style={style.textsym}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={style.textPrice}>${coin.current_price}</Text>
                <Text
                    style={[style.pricePercent,
                            coin.price_change_percentage_24h > 0 ? style.priceUp :
                                style.priceDown]}
                >{coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#ffffff'
    },
    image: {
        width: 30,
        height: 30
    },
    coinName: {
        flexDirection: 'row'
    },
    textsym: {
        color: '#434343',
        textTransform: 'uppercase'
    },
    containerName: {
        marginLeft: 10
    },
    pricePercent: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00b5b9'
    },
    priceDown: {
        color: '#fc4422'
    },
    textPrice: {
        color: '#fff',
        textAlign: 'right'
    }
})

export default CoinItem
