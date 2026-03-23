// import { useState } from 'react'

import './App.css'
import HeaderSection from '@/components/sections/HeaderSection'
import YourDaySection from '@/components/sections/YourDaySection'
import FooterItem from '@/components/FooterItem'

function App() {

  return (
    // <div>halo</div>
    <div className='font-outfit space-y-28'>
    <HeaderSection/>
    <YourDaySection/>
    <FooterItem/>
    </div>
  )
}

export default App
