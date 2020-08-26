import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useRoute } from "@react-navigation/native"
import Icon from "react-native-ionicons"


const ShowTodo = ({ navigation }) => {
    const route = useRoute()
    const id = route.params.id


    return (
        <View>
            <View style={styles.Viewshowtodo}>

                <Text  >{route.params.title}</Text>
                <Text style={styles.title}>عنوان کار :</Text>
            </View>

            <View style={styles.Viewshowtodo}>


                <Text >{route.params.content}</Text>
                <Text style={styles.content}>توضیحات :</Text>
            </View>



            <View style={styles.penIcon}>

                <Icon name="create" onPress={() => {
                    navigation.navigate("EditTodo", { id })
                }} />

            </View>
            <View style={styles.Button}>
                <Button
                    title="بازگشت به صفحه اصلی"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        fontFamily: 'Sans'
    },
    content: {
        fontSize: 30,
        fontWeight: "bold",

    },
    Button: {
        marginTop: 30,
        marginHorizontal: 25,
    },
    Viewshowtodo: {
        marginRight: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    penIcon: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default ShowTodo