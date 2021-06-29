import React, { Component } from 'react'
import Mui  from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Button, Tab,Tabs} from "@material-ui/core"

export class FormUserDetails extends Component {
   continue=(e)=>{
       e.preventDefault()
       this.props.nextStep()
   }
   state={hover:false}
   toggleHover=()=> {
	this.setState({hover: !this.state.hover})
}

    render() {
        const {values,handleChange}=this.props
        const routes=["/form","/imageFinder"]
        let linkStyle
        if(!this.state.hover){
        linkStyle={ backgroundColor: "white",
        color: "black",
        border: "2px solid #555555",
        marginTop:"6px"}}
        else{
            linkStyle={
                backgroundColor: "#555555",
                color: "white",
                marginTop:"6px"
            }
        }
        return (
            <Mui>
                <>
                <AppBar onLeftIconButtonClick={()=>console.log("help")} title="Enter User Details">
                 <Tabs textColor="primary" indicatorColor="primary">
                     <Tab onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover} style={linkStyle} label="Image Finder"></Tab>
                 </Tabs>
                 </AppBar>
                <TextField defaultValue={values.firstName} onChange={handleChange("firstName")} hintText="Enter your First Name" floatingLabelText="First Name"  >

                </TextField>
                <br/>
                <TextField defaultValue={values.lastName} onChange={handleChange("lastName")} hintText="Enter your Last Name" floatingLabelText="Last Name"  >
                      
                </TextField>
                <br/>
                <TextField defaultValue={values.email} onChange={handleChange("email")} hintText="Enter your Email" floatingLabelText="Email"  >
                      
                </TextField>
                <br/>
                <RaisedButton onClick={this.continue} label="Continue" primary={true} style={styles.button} />
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
