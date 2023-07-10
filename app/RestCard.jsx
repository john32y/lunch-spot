import {View, Image, Text, StyleSheet} from "react-native"

export default function RestCard({ restaurant }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} src={restaurant.photo_url} />
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        bordrRadius: 6,
    },
    card: {
        margin: 8,
        borderRadius: 12,
        backgroundColor: '#c0d0e0'
    },

    title: {
        color: '#203040',
        fontSize: 28,
        textAlign: 'center',
    },
})