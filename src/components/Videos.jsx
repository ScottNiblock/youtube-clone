import React from 'react'
import {Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard} from './'
const Videos = ({videos, direction}) => {

  if(!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
        {videos.map((item,idx)=> (
            // {fixes issues with empty divs messing up layout, only renders if video or channel exists in dataset}
            (item.id.videoId || item.id.channelId) &&(
                <Box key={idx} sx={{ width: { xs: '100%', sm: '358px', md:'320px'} }} >
                {/* if item.id.videoId true then it must be a video card */}
                {item.id.videoId && <VideoCard video = {item}/>}
                {item.id.channelId && <ChannelCard channelDetail = {item}/>}
                </Box>
            )
       ))}
     
    </Stack>
    
  )
}

export default Videos
