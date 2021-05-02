import React from 'react'

class App extends React.Component {
    constructor () {
        super ()
    }

    render () {
        let menuOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5']
        return <Menu options={menuOptions} />
    }
}