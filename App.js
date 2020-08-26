import React from "react"
import StackNavigator from "./src/Navigator/StackNavigator"
import { NavigationContainer } from "@react-navigation/native"

import { Provider } from "react-redux"
import store from './src/Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App


// export default () => {
//   return (
//       <App />
//   )
// }
