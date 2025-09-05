import BrandedGiftVouchers from '@/components/BrandedGiftVouchers'
import BuildYourOwnBox from '@/components/BuildYourOwnBox'
import CorporateGiftingSolutions from '@/components/CorporateGiftingSolutions'
import Expertise from '@/components/Expertise'
// import Footer from '@/components/Footer'

import GiftCategoriesPrices from '@/components/GiftCategoriesPrices'
import GiftingStats from '@/components/GiftingStats'
import GiftPartersBelowSection from '@/components/GiftPartersBelowSection'
import GiftechPartners from '@/components/GiftTechPartners'
import GiftTechSection from '@/components/GiftTechSection'
import HowItWorks from '@/components/HowItWorks'
import NewlyAddedProducts from '@/components/NewlyAddedProducts'
import VideoSwiper from '@/components/VideoSwiper'

import React from 'react'

const page = () => {
  return (
    <div>
      <GiftTechSection/>
      <GiftPartersBelowSection/>
      <CorporateGiftingSolutions/>
      <GiftingStats/>
      <HowItWorks/>
      <Expertise/>
      <GiftCategoriesPrices/>
      <BuildYourOwnBox/>
      <BrandedGiftVouchers/>
      <NewlyAddedProducts/>
      <VideoSwiper/>
      <GiftechPartners/>
      {/* <Footer/> */}
    
      
    </div>
  )
}

export default page
