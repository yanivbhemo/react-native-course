import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ListView, View, Text } from 'react-native'
import ListItem from './ListItem'
import { employeesFetch } from '../actions'
import _ from 'lodash'

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the future set of props that this component will be renderd with
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <View>
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })

    return { employees }
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList)