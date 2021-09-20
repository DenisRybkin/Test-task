import React from 'react';
import { Container, Grid} from "@material-ui/core";
import '../App.css';

export const Loader = () => {

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 48}}
                  alignItems={'center'} justifyContent={'center'}>
                <Grid container alignItems={'center'} direction={'column'}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};