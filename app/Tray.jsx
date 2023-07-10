import {View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Tray({ setSelectRestaurant }) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear =() => {
        setSelectRestaurant(0)
    }

    return(
        <View style={styles.tray}>
            <View style={styles.buttonList}>

            <TouchableOpacity onPress={choose} style={styles.button}>
            <Text style={styles.buttonText}>Mix it!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={clear} style={[styles.button, styles.resetButton]}>
                <Text style={styles.resetButtonText}>Reset↺</Text>
            </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonList: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },


    button: {
        backgroundColor: '#ed714d',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f79477',
        
    },
    resetButtonText: {
        color: '#777',
        fontSize: 17,
        fontWeight: 800,

    },

    resetButton: {
        backgroundColor: '#f4f5f6',
    },

    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },

    tray: {
        width: '100%',
        height: 120,
        paddingTop: 30,
        backgroundColor: '#e9eeff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: -10,
        },
        shadowOpacity: 0.09,
        shadowRadius: 9.5,
        elevation: 15,
    }
})