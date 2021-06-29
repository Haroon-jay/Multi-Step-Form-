import React, { Component } from 'react'
import Mui  from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
export class Success extends Component {
   
    render() {
        return (
            <Mui>
                <>
                <AppBar title="Success">
                </AppBar>
              
                <h1>Thank you for your Response</h1>
                <p>You will get an email with further instructions!</p>
                </>
            </Mui>
        )
    }
}


export default Success
