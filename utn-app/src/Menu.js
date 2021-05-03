import React from 'react';
import './App.css';

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
            /*let menuOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5']
        return <Menu options={menuOptions} />*/
    }
}

export default Menu;