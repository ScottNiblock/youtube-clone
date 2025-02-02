import React from 'react'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography, Box, Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetails, setVideoDetails]=  useState(null);
  const [videos, setVideos]=  useState(null);

  useEffect(() =>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetails(data?.items[0]));

    //fetching related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data?.items))

  }, [id])

  if(!videoDetails?.snippet) return 'Loading...'

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetails; //destructuring the object to extract the snippet, shortens line 29
  return (
    <Box minHeight='95vh'>
     <Stack direction={{xs:'column', md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='60vh' controls/>
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' color='#fff' py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px', color:'gray', marginLeft:'5px'}} />
              </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant='body1' sx={{opacity:'0.7'}}>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant='body1' sx={{opacity:'0.7'}}>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
          </Stack>
        </Box>

      </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems={'center'}>
      <Videos videos={videos} direction='column'/>
     </Box>
     </Stack>
  
    </Box>
  )
}

export default VideoDetail
