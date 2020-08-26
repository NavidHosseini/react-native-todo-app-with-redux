import React from "react"

import { createStackNavigator } from "@react-navigation/stack"


import AddButton from "../Components/Addbutton"
import Home from "../Screens/Home"
import CreateTodo from "../Screens/CreateTodo"
import ShowTodo from "../Screens/ShowTodo"
import EditTodo from "../Screens/EditTodo"

const Stack = createStackNavigator()

const SwitchNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            options={({ navigation }) => ({
               title: "لیست کارهای روزانه",
               headerTitleAlign: "center",
               headerRight: () => <AddButton />,

               headerTitleStyle: {
                  fontFamily: 'Sans'
               }
            })}
            component={Home}
         />
         <Stack.Screen
            name="createTodo"
            options={() => ({
               title: "ایجاد کار ",
               headerTitleAlign: "center",
               headerTitleStyle: {
                  fontFamily: 'Sans'
               }

            })}
            component={CreateTodo}
         />
         <Stack.Screen
            name="ShowTodo"
            options={() => ({
               title: "مشاهده کار ",
               headerTitleAlign: "center",
               headerTitleStyle: {
                  fontFamily: 'Sans'
               }

            })}
            component={ShowTodo}
         />

         <Stack.Screen
            name="EditTodo"
            options={() => ({
               title: "اصلاح کار ",
               headerTitleAlign: "center",
               headerTitleStyle: {
                  fontFamily: 'Sans'
               }

            })}
            component={EditTodo}
         />

      </Stack.Navigator>
   )
}

export default SwitchNavigator