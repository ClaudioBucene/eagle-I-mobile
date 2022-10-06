import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator ();

    import Home from './Home';
    import Inventario from './Inventario';
    import Tarefas from './Tarefas';
    import Users from './Users/Index';
    import Viaturas from './Viaturas';
   

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { 
          //position: 'absolute',
          overflow:'hidden',
        },
        headerShown: false,
        tabBarActiveTintColor: '#a1c861',
        tabBarActiveBackgroundColor: '#12375C',
        tabBarItemStyle:{
          borderRadius:500,
        }
      }}>

      <Tab.Screen
        name="Home"
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
         />
      <Tab.Screen
        name="Viaturas"
        component={Viaturas}
        options={{
          tabBarLabel: 'Viaturas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Tarefas"
        component={Tarefas}
        options={{
          tabBarLabel: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Inventario"
        component={Inventario}
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="archive-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}