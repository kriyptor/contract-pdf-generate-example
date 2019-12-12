import React, { Component } from 'react';
import {
    FormControl, 
    InputLabel, 
    Input,
    Container,
    Grid,
    Button } from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    } from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GeneratePdf from './GeneratePdf';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
          selectedDate: new Date(),
          sign1: null,
          sign2: null,
          venueName: '_____',
          name1: '_____',
          name2: '_____',
          title1: '_____',
          title2: '_____',
          generate: false
        }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleSign = this.handleSign.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.toggleGenerate = this.toggleGenerate.bind(this)
    }
    
    handleDateChange = date => {
        console.log(date)
        this.setState({
            selectedDate: date,
            generate: false
        })
    };
    handleSign = (e) => {
        const reader = new FileReader();
        const signState = [e.target.id]
        reader.onload = (e) => {
            this.setState({
                [signState]: [e.target.result],
                generate: false
              });
        }
        reader.readAsDataURL(e.target.files[0])
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            generate: false
        })
    }
    toggleGenerate = () => {
        this.setState({
            generate: !this.state.generate
        })
    }

    render() { 
        return (
            <div>
                <Container maxWidth="lg" >
                    <Grid container>
                        <Grid item sx={6}>
                            <Container maxWidth="sm" boxShadow="3">
                                <h1>Contract Generator</h1>
                                <form  noValidate autoComplete="off">
                                    <Grid container>
                                        
                                        <Grid container item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="Name">Venue Name</InputLabel>
                                                <Input onChange={this.handleInput} id="venueName" />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container>
                                                    <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Date picker dialog"
                                                    format="dd/MM/yyyy"
                                                    value={this.state.selectedDate}
                                                    onChange={this.handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    fullWidth
                                                    />
                                                </Grid>
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                        <Grid container item xs={12} direction="column" alignItems="center">
                                            <h4>For Behalf VenueMonk</h4>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="Name">Name</InputLabel>
                                                <Input onChange={this.handleInput} id="name1" />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="Name">Title</InputLabel>
                                                <Input onChange={this.handleInput} id="title1" />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <span className="signature">Signature</span>
                                            <FormControl fullWidth>
                                                <input type="file" onChange={this.handleSign} id="sign1" />
                                                <img className="signature-preview" src={this.state.sign1} />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12} direction="column" alignItems="center">
                                            <h4>For Behalf Venue</h4>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="Name">Name</InputLabel>
                                                <Input onChange={this.handleInput} id="name2" />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="Name">Title</InputLabel>
                                                <Input onChange={this.handleInput} id="title2" />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            <span className="signature">Signature</span>
                                            <FormControl fullWidth>
                                                <input type="file" onChange={this.handleSign} id="sign2" />
                                                <img className="signature-preview" src={this.state.sign2} />
                                            </FormControl>
                                        </Grid>
                                        <Grid container item xs={12} direction="column" alignItems="center">
                                            <FormControl margin="normal">
                                                <Button size="large" variant="contained" color="primary" startIcon={<PictureAsPdfIcon />}
                                                    onClick={this.toggleGenerate}
                                                >
                                                Generate PDF
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        </Grid>
                        <Grid item sx={6}>
                            <h1>Preview</h1>
                            <GeneratePdf details={this.state} makeGeneratable={this.toggleGenerate} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
