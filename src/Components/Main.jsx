import React, { Component } from 'react';
import {
    TextField, 
    FormControl, 
    InputLabel, 
    Input,
    Container,
    Grid,
    Button } from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    } from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {DropzoneArea} from 'material-ui-dropzone'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
          signOne: null,
          signTwo: null,
          selectedDate: Date.now(),
          files: [],
          sign1: null,
          sign2: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleChange(event, signType) {
        const file = signType;
        console.log(signType)
        this.setState({
            [file]: URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state)
    }
    
    handleDateChange = date => {
        this.setState({
            selectedDate: date
        })
    };
    handleFile(files){
        this.setState({
          files: files
        });
      }
    fileSelectedHandler(event) {
        console.log(event.target.files[0])
    }
    render() {   
        return (
            <div>
                <Container maxWidth="sm">
                    <form  noValidate autoComplete="off">
                        <Grid container>
                            <h3>Contract Generator</h3>
                            <Grid container item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="Name">Place Name</InputLabel>
                                    <Input id="venueName" />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container>
                                        <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Signing Date" 
                                        value={this.state.selectedDate}
                                        onChange={this.handleDateChange}
                                        fullWidth
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid container item xs={12} direction="column" alignItems="center">
                                <h4>For Behalf Side1</h4>
                            </Grid>
                            <Grid container item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="Name">Name</InputLabel>
                                    <Input id="venueName" />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="Name">Title</InputLabel>
                                    <Input id="venueName" />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <p>Signature:</p>
                                {/* <DropzoneArea 
                                filesLimit={1}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                onChange={this.handleFile.bind(this)}
                                /> */}
                                <input type = "file" onChange = {this.fileSelectedHandler} />
                            </Grid>
                            <Grid container item xs={12} direction="column" alignItems="center">
                                <h4>For Behalf Side 2</h4>
                            </Grid>
                            <Grid container item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="Name">Name</InputLabel>
                                    <Input id="venueName" />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="Name">Title</InputLabel>
                                    <Input id="venueName" />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <p>Signature:</p>
                                <DropzoneArea 
                                filesLimit={1}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                onChange={this.handleFile.bind(this)}
                                />
                            </Grid>
                            <Grid container item xs={12} direction="column" alignItems="center">
                                <FormControl margin="normal">
                                    <Button size="large" variant="contained" color="primary" startIcon={<PictureAsPdfIcon />}>
                                    Generate PDF
                                    </Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}
