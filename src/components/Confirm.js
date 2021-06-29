import React, { Component } from 'react'
import Mui  from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
export class FormUserDetails extends Component {
   continue=(e)=>{
       e.preventDefault()
       this.props.nextStep()
   }
   back=(e)=>{
    e.preventDefault()
    this.props.prevStep()
}
   
    render() {
        const {values:{firstName,lastName,email,occupation,city,bio}}=this.props
        return (
            <Mui>
                <>
                <AppBar title="Confirm User Data">
                </AppBar>
               <List> <ListItem secondaryText={firstName} primaryText="First Name"/>
               <ListItem secondaryText={lastName} primaryText="Last Name"/>
               <ListItem secondaryText={email} primaryText="Email"/>
               <ListItem secondaryText={occupation} primaryText="Occupation"/>
               <ListItem secondaryText={city} primaryText="city"/>
               <ListItem secondaryText={bio} primaryText="bio"/>
               
               
               
                </List>
                <RaisedButton onClick={this.continue} label="Confirm & Continue" primary={true} style={styles.button} />
                <RaisedButton onClick={this.back} label="Back" primary={false} style={styles.button} />
                
                </>
            </Mui>
        )
    }
}
const styles={
    button:{
margin:15
}}

export default FormUserDetails
