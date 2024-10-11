import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
      <Section crosses className="!px-0 !py-10">
          <div className='container flex justify-center items-center sm:justify-between gap-10 max-sm:flex-col'>
              <p className='caption text-n-4'>© {new Date().getFullYear()}. All Rights Reserved.</p>

              <ul className='flex gap-5 flex-wrap'>
                  {socials.map((item) => (
                      <a href={item.url} target='_blank' key={item.title} className='bg-n-7 w-10 h-10 flex justify-center items-center rounded-full transition-colors hover:bg-n-6'>
                          <img src={item.iconUrl} alt={item.title} width={16} height={16} />
                      </a>
                  ))}
              </ul>
          </div>
    </Section>
  )
}

export default Footer