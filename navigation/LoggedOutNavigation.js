import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigation :{
        header : null
    }
  }
});

export default LoggedOutNavigation;