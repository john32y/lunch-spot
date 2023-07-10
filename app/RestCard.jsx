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
        borderWidth: 3,
        borderColor: '#cccccc',
        borderStyle: 'solid',
    },

    card: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginBottom: 12,
        },

    title: {
        color: '#203040',
        fontSize: 28,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 12,
    },
})