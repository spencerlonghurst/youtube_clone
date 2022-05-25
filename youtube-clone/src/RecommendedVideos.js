import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos_videos'>
        <VideoCard
          title='React JS Crash Course for Beginners - Build 4 Apps in 12 Hours'
          views='373K views'
          timestamp='10 months ago'
          channelImage='https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/vi/tbvguOj8C-o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcPVE-RVpYtyfWwc1yAFZVb7Qe-Q'
        />
        <VideoCard 
          title='Protein Oatmeal Cups Recipe'
          views='202K views'
          timestamp='5 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLTvk6Z48bbxWCOfO63qR419_gvdd7eNqm2tJbtHvfY=s176-c-k-c0x00ffffff-no-rj'
          channel='Buff Dudes'
          image='https://i.ytimg.com/vi/QxwtAl-J8TQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYHsar0naTePlNaHbsCPl5v0hkkQ'
        />
        <VideoCard
          title='Javascript Tutorial for Beginners'
          views='7.4M views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj'
          channel='Programming with Mosh'
          image='https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCkR7TSCkuN8PX89nX4u3LBl4Pfw'
        />
        <VideoCard 
          title='CARBS. Evil or Misunderstood?'
          views='632k views'
          timestamp='6 months ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLTjp_KOXGeedyOg83nFrPmRos_NEp68uGI0ndyxog=s176-c-k-c0x00ffffff-no-rj'
          channel='Noel Deyzel'
          image='https://i.ytimg.com/vi/h7mHopDIvjs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApD2IsqzNTcPrN2hLq-GQXB3524A'
        />
        <VideoCard 
          title='How to SUPER CLEAN your Engine Bay'
          views='43M views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLRTzB3CdYXefOWhsz0qmewBZ8f4647M4QYwWqWWfw=s176-c-k-c0x00ffffff-no-rj'
          channel='ChrisFix'
          image='https://i.ytimg.com/vi/PRSoRkM8GcM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-XdRwySP-JJJATw3kPKCTQkBAFg'
        />
        <VideoCard 
          title='I started as Level 1 in 2021...'
          views='3.4M views'
          timestamp='1 year ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLQBs9YSN15Wh9xzZ5J6J-Brq9LL1KQtEtFJnyzMkw=s176-c-k-c0x00ffffff-no-rj'
          channel='TGG'
          image='https://i.ytimg.com/vi/lLgz0HJZ5NI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDaWyX6yPqk6nVozxdep9C-WCynQ'
        />
        <VideoCard 
          title='Javascript Promises in 10 Minutes'
          views='1.1M views'
          timestamp='3 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s176-c-k-c0x00ffffff-no-rj'
          channel='Web Dev Simplified'
          image='https://i.ytimg.com/vi/DHvZLI7Db8E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkpF_K7JyCSr3_nAl0nKN_acLf-Q'
        />
        <VideoCard 
          title='1 Year of Coding in 5 Minutes (Computer Science First Year)'
          views='2.6M views'
          timestamp='11 months ago'
          channelImage='https://yt3.ggpht.com/j_mNgsMUaWTdTL3Y9YgRLj2CwWBrWSnzPOneOoTYK-TVL1_ahx1k2ic7aO_Bb-yH9F1tM-HFgw=s176-c-k-c0x00ffffff-no-rj'
          channel='Frying Pan'
          image='https://i.ytimg.com/vi/GwT6gGMRr9s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnhRPM7srWHCGM5Mdzpb_M9rjisw'
        />
        <VideoCard 
          title='Optional Chaining Operator in Javascript'
          views='38k views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLT0CbWENhZMG9TzCOViR7rDMeiUqDrmCc-MtqpKEA=s176-c-k-c0x00ffffff-no-rj'
          channel='Fun Fun Function'
          image='https://i.ytimg.com/vi/FKRVqtP8o48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh85Cl_pbjZIsQpL8Gns5vIeDPBw'
        />
        <VideoCard 
          title='for...of loop - Topics of Javascript/ES6'
          views='98k views'
          timestamp='5 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLS9pkMZ_w6xiWfV0k0waHGZLMbOVQMS3YgqYA7OoA=s176-c-k-c0x00ffffff-no-rj'
          channel='The Coding Train'
          image='https://i.ytimg.com/vi/Y8sMnRQYr3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0NMIFfV9fUw8UMHYuPZXGEgzqdg'
        />


<VideoCard
          title='React JS Crash Course for Beginners - Build 4 Apps in 12 Hours'
          views='373K views'
          timestamp='10 months ago'
          channelImage='https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/vi/tbvguOj8C-o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcPVE-RVpYtyfWwc1yAFZVb7Qe-Q'
        />
        <VideoCard 
          title='Protein Oatmeal Cups Recipe'
          views='202K views'
          timestamp='5 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLTvk6Z48bbxWCOfO63qR419_gvdd7eNqm2tJbtHvfY=s176-c-k-c0x00ffffff-no-rj'
          channel='Buff Dudes'
          image='https://i.ytimg.com/vi/QxwtAl-J8TQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYHsar0naTePlNaHbsCPl5v0hkkQ'
        />
        <VideoCard
          title='Javascript Tutorial for Beginners'
          views='7.4M views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj'
          channel='Programming with Mosh'
          image='https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCkR7TSCkuN8PX89nX4u3LBl4Pfw'
        />
        <VideoCard 
          title='CARBS. Evil or Misunderstood?'
          views='632k views'
          timestamp='6 months ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLTjp_KOXGeedyOg83nFrPmRos_NEp68uGI0ndyxog=s176-c-k-c0x00ffffff-no-rj'
          channel='Noel Deyzel'
          image='https://i.ytimg.com/vi/h7mHopDIvjs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApD2IsqzNTcPrN2hLq-GQXB3524A'
        />
        <VideoCard 
          title='How to SUPER CLEAN your Engine Bay'
          views='43M views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLRTzB3CdYXefOWhsz0qmewBZ8f4647M4QYwWqWWfw=s176-c-k-c0x00ffffff-no-rj'
          channel='ChrisFix'
          image='https://i.ytimg.com/vi/PRSoRkM8GcM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-XdRwySP-JJJATw3kPKCTQkBAFg'
        />
        <VideoCard 
          title='I started as Level 1 in 2021...'
          views='3.4M views'
          timestamp='1 year ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLQBs9YSN15Wh9xzZ5J6J-Brq9LL1KQtEtFJnyzMkw=s176-c-k-c0x00ffffff-no-rj'
          channel='TGG'
          image='https://i.ytimg.com/vi/lLgz0HJZ5NI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDaWyX6yPqk6nVozxdep9C-WCynQ'
        />
        <VideoCard 
          title='Javascript Promises in 10 Minutes'
          views='1.1M views'
          timestamp='3 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s176-c-k-c0x00ffffff-no-rj'
          channel='Web Dev Simplified'
          image='https://i.ytimg.com/vi/DHvZLI7Db8E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkpF_K7JyCSr3_nAl0nKN_acLf-Q'
        />
        <VideoCard 
          title='1 Year of Coding in 5 Minutes (Computer Science First Year)'
          views='2.6M views'
          timestamp='11 months ago'
          channelImage='https://yt3.ggpht.com/j_mNgsMUaWTdTL3Y9YgRLj2CwWBrWSnzPOneOoTYK-TVL1_ahx1k2ic7aO_Bb-yH9F1tM-HFgw=s176-c-k-c0x00ffffff-no-rj'
          channel='Frying Pan'
          image='https://i.ytimg.com/vi/GwT6gGMRr9s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnhRPM7srWHCGM5Mdzpb_M9rjisw'
        />
        <VideoCard 
          title='Optional Chaining Operator in Javascript'
          views='38k views'
          timestamp='4 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLT0CbWENhZMG9TzCOViR7rDMeiUqDrmCc-MtqpKEA=s176-c-k-c0x00ffffff-no-rj'
          channel='Fun Fun Function'
          image='https://i.ytimg.com/vi/FKRVqtP8o48/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh85Cl_pbjZIsQpL8Gns5vIeDPBw'
        />
        <VideoCard 
          title='for...of loop - Topics of Javascript/ES6'
          views='98k views'
          timestamp='5 years ago'
          channelImage='https://yt3.ggpht.com/ytc/AKedOLS9pkMZ_w6xiWfV0k0waHGZLMbOVQMS3YgqYA7OoA=s176-c-k-c0x00ffffff-no-rj'
          channel='The Coding Train'
          image='https://i.ytimg.com/vi/Y8sMnRQYr3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0NMIFfV9fUw8UMHYuPZXGEgzqdg'
        />
      </div>
    </div>
  )
}

export default RecommendedVideos