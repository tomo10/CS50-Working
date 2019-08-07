import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
})

const App = createAppContainer(AppNavigator)


export default App