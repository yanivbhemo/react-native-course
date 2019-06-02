import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import UserMenu from './components/UserMenu'
import EventsList from './components/EventsList'
import EventCreate from './components/EventCreate'
import FriendsList from './components/FriendsList'
import FriendsAdd from './components/FriendsAdd'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="please login" />
        </Scene>
        <Scene key="main" initial>
          <Scene key="userMenu" component={UserMenu} initial hideNavBar />
          <Scene
            rightTitle="Add Event"
            onRight={() => Actions.eventCreate()}
            key="eventsList"
            component={EventsList}
          />
          <Scene key="eventCreate" component={EventCreate} />
          <Scene
            key="friendsList"
            component={FriendsList}
            rightTitle="Add Friend"
            onRight={() => Actions.friendsAdd()}
          />
          <Scene key="friendsAdd" component={FriendsAdd} />
          {/* <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
          <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} /> */}
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
