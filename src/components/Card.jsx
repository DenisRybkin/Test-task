import * as React from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";


export default function BasicCard({name,description,timeEnd,timeStart,type}) {

    const generateType = (type) => {
        switch (type) {
            case 1 :
                return 'Динамическая медитация'
            case 2 :
                return 'Йога'
            case 3 :
                return 'Аум'
        }
    }

    return (
        <Box sx={{ m: 3 }}>
            <Card sx={{m: -2}} style={{maxWidth: 350, minWidth: 275}}>
                <CardContent >
                    <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                        {name} : {generateType(type)}
                    </Typography>
                    <Typography variant="h6">
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