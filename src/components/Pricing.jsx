import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine, RightLine} from "./design/Pricing"

const Pricing = () => {
  return (
      <Section id="pricing">
          <div className='container relative z-2'>
              <div className='hidden lg:flex justify-center relative mb-[6.5rem]'>
                  <img src={smallSphere} width={255} height={255} alt="sphere" className='relative z-1' />

                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none'>
                      <img src={stars} width={950} height={400} alt="stars" />
                  </div>
              </div>

              <Heading title="Pay once, use forever" tag="Get started with Brainwave" />

              <div className='relative'>
                  <PricingList />
                  <LeftLine />
                  <RightLine />
              </div>

              <div className='mt-10 flex justify-center'>
                  <a href="/pricing" className='font-code text-xs uppercase tracking-wider border-b font-bold'>See the full details</a>
              </div>
          </div>
    </Section>
  )
}

export default Pricing