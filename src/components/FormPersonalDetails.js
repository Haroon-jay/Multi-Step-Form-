import React, { Component } from 'react'
import Mui  from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class FormPersonalDetails extends Component {
   continue=(e)=>{
       e.preventDefault()
       this.props.nextStep()
   }
   back=(e)=>{
       e.preventDefault()
       this.props.prevStep()
   }
   
    render() {
        const {values,handleChange}=this.props
        return (
            <Mui>
                <>
                <AppBar title="Enter Personal Details">
                </AppBar>
                <TextField defaultValue={values.occupation} onChange={handleChange("occupation")} hintText="Enter your occupation" floatingLabelText="occupation"  >

                </TextField>
                <br/>
                <TextField defaultValue={values.city} onChange={handleChange("city")} hintText="Enter your City" floatingLabelText="City"  >
                      
                </TextField>
                <br/>
                <TextField defaultValue={values.bio} onChange={handleChange("bio")} hintText="Enter your bio" floatingLabelText="bio"  >
                      
                </TextField>
                <br/>
                <RaisedButton onClick={this.continue} label="Continue" primary={true} style={styles.button} />
                </>
                <RaisedButton onClick={this.back} label="Back" primary={false} style={styles.button} />
                
            </Mui>
        )
    }
}
const styles={
    button:{
margin:15
}}

export default FormPersonalDetails
