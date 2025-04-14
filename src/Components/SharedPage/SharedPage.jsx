import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import YoutubeVideos from '../YoutubeVideos/YoutubeVideos'

function SharedPage() {
  return (
    <div>
<Header/>
<Outlet/>    
< YoutubeVideos/>
<Footer/>

      
    </div>
  )
}

export default SharedPage
