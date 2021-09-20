import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";


export const Login = () => {

    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user)
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 48}}
                alignItems={'center'} justifyContent={'center'}>
                <Grid style={{width:400, background: 'lightgray',borderRadius:10}} container
                    alignItems={'center'} direction={'column'}>
                    <Box p={5}>
                        <Button onClick={login} variant={'contained'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};