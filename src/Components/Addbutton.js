import React from "react"
import { View, StyleSheet } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native"

const AddButton = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Button}>
            <FontAwesome name="plus-square-o"
                onPress={() => navigation.navigate("createTodo")}
                size={27}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        marginRight: 10,
    },
})

export default AddButton