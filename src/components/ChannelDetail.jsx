import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} =useParams();

  console.log(channelDetail)

  useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))  
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        {/* <div style={{background: 'linear-gradient(90deg, rgba(203,0,0,1) 0%, rgba(84,13,13,1) 52%, rgba(25,12,12,1) 100%)', zIndex:10, height:'300px'}} /> */}
        
       <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl} style={{width:'100%', height:'350px', zIndex:10}}/>
  
        <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
       </Box>
       <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
         

       </Box>
     
    </Box>
  )
}

export default ChannelDetail
