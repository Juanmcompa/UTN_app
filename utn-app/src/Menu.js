import React from 'react'

class Menu extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        let options = this.props.options
        return (
            <ul>
                {options.map(option => <li>{option}</li>)}
            </ul>
        )
    }
}