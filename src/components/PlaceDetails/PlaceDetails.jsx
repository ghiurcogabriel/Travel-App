import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles';

const PlaceDetails = ({place, selected, elRefs }) => {

    const classes = useStyle();

    console.log(place);

    if(selected) elRefs?.current?.scrollIntoView({ behavior: 'smooth', block: 'start'});

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                // title={title.name}
            />

            <CardContent>
                <Typography gutterButton variant="h5">
                    {place.name}
                </Typography>

                <Box style={{display: 'flex', justifyContent:'space-between'}}>
                    <Rating  value={Number(place.rating)} readOnly />
                    <Typography gutterButton variant='subtitle1'>out of {place.num_reviews}</Typography>
                </Box>
                <Box style={{display: 'flex', justifyContent:'space-between'}}>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterButton variant='subtitle1'>{place.price_level}</Typography>
                </Box>
                <Box style={{display: 'flex', justifyContent:'space-between'}}>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterButton variant='subtitle1'>{place.raking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant='subtitle2' color='textSecondary'>{award.display._name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size='small' label={name} className={classes.chip} />
                ))}

                {place?.address && (
                    <Typography gutterButton variant='body2' color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterButton variant='body2' color='textSecondary' className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
                    <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>Website</Button>
                </CardActions>
            </CardContent>

        </Card>
    );
};

export default PlaceDetails;