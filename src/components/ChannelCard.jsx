import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (


        <Box sx={{
            boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            width: {
                xs: '356px',
                md: '320px'
            },
            height: '326px',
            margin: 'auto',
            marginTop
        }}>
            {/*The following line takes that channel id and passes it to the call in app.js
            then we can use useParams in other components to extract the value and use it elsewhere */}
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',
                    textAlign: 'center', color: '#fff'
                }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippter?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}>
                    </CardMedia>
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>

    )
}

export default ChannelCard
