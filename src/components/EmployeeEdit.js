import _ from 'lodash'
import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'
import Communication from 'react-native-communications'

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }
    onButtonPress() {
        const {name, phone, shift} = this.props
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTextPress() {
        const { name, phone, shift } = this.props
        Communication.text(phone, `${name}, Your upcoming shift is on ${shift}`)
    }
    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

mapStateToProps = (state) => {
    const {name, phone, shift } = state.employeeForm
    
    return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit)