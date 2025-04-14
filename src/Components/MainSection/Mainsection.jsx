import React from 'react'
import SectionFive from '../SectionFive/SectionFive'
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionThree from '../SectionThree/SectionThree'
import SectionFour from '../SectionFour/SectionFour'
import SectionSix from '../SectionSix/SectionSix'
import AlertSection from './AlertSection'

function mainsection() {
  return (
    <div>
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default mainsection
