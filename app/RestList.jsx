import { useState, useEffect } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import RestCard from "./RestCard"

export default function RestList({ selectRestaurant }) {
    const [restaurants, setRestaurants] = useState()
    const [chosenRestaurant, setChosenRestaurant] = useState()

    useEffect(() => {
        fetch('http://api.bocacode.com/api/restaurants')
        .then(res =>res.json())
        .then(setRestaurants)
        .catch(alert)
    }, [])

    useEffect(() => {
        if(selectRestaurant > 0) {        
            const index = Math.floor(selectRestaurant * restaurants.length)
            setChosenRestaurant(restaurants[index])
        }else{
            setChosenRestaurant()
        }
    },[] )
    
    return (
        <>
        <ScrollView style={styles.scrollingList}>
            {!restaurants
            ? <Text style={styles.loadingText}>Let Em Cook...</Text>
            : (chosenRestaurant)
                ? <RestCard key={chosenRestaurant._id} restaurant={chosenRestaurant} />
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