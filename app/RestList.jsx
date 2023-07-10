import { useState, useEffect } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import RestCard from "./RestCard"

export default function RestList() {
    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        fetch('http://api.bocacode.com/api/restaurants')
        .then(res =>res.json())
        .then(setRestaurants)
        .catch(alert)
    }, [])
    
    return (
        <>
        <ScrollView style={styles.scrollingList}>
            {!restaurants
            ? <Text style={styles.loadingText}>Let Em Cook...</Text>
            : restaurants.map(restaurants => (
                <RestCard key={restaurants.id} restaurant={restaurants} />
            ))    
            }
            


        </ScrollView>
        
        </>
    )
}

 const styles = StyleSheet.create({
    loadingText: {
        padding: 8,
        fontSize: 24,
        color: '#eee',

    },
    scrollingList : {
        borderWidth: 2,
        borderStyle: 'solid',
        width: '90%',
        marginTop: 16
    },
 })