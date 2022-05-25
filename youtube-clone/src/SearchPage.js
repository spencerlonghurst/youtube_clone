import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://yt3.ggpht.com/ytc/AKedOLTvk6Z48bbxWCOfO63qR419_gvdd7eNqm2tJbtHvfY=s176-c-k-c0x00ffffff-no-rj-mo'
        channel='Buff Dudes'
        verified
        subs='2.57M'
        noOfVideos={660}
        description='Healthy Food Recipes & Gym Workout Routines. Lose Fat, Gain Muscle. B.U.F.F. DUDES are brothers Hudson & Brandon White.'
      />

      <hr />

      <VideoRow
        views='37k'
        subs='2.57M'
        description='Barbells, Dumbells, Mobility Bands and Bodyweight.'
        timestamp='2 days ago'
        channel='Buff Dudes'
        title='Barbell vs Dumbbell vs Resistance Bands vs Bodyweight | Which Workout Training Style Is Best?'
        image='https://i.ytimg.com/vi/UkvYLGzW4uM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsQj7jF7i7se3WzDIiTjvbnIifkA'
      />
    </div>
  )
}

export default SearchPage