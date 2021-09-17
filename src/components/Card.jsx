import * as React from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";


export default function BasicCard({name,description,timeEnd,timeStart}) {

    return (
        <Box sx={{ m: 3 }}>
            <Card sx={{ minWidth: 275, m: -2}} >
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {description}
                    </Typography>
                    <Typography variant="body2">
                        {`Время начала ${new Date(timeStart.seconds).toLocaleString()}`}
                        <br />
                        {`Время начала ${new Date(timeEnd.seconds).toLocaleString()}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}