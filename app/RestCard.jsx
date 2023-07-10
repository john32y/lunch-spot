import {View, Image, Text, StyleSheet} from "react-native"

export default function RestCard({ restaurant }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} src={restaurant.photo_url} />
            <Text style={styles.rating}>
                {
                (restaurant.rating.length > 0)
                ?<Text style={styles.rating}>{"🌟".repeat(restaurant.rating[0])}</Text>
                : null
                }
            </Text>
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 9,
    },
    
    
    image: {
        width: '100%',
        height: 200,
        bordrRadius: 6,
        borderWidth: 3,
        borderColor: '#cccccc',
        borderStyle: 'solid',
    },

    card: {
        backgroundColor: 'white',
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