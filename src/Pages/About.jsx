import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ullam molestiae commodi aperiam laborum ducimus facilis soluta iure aliquid error, cumque optio at voluptatum quo saepe consectetur impedit voluptatibus dolorem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem eaque quibusdam commodi dolorum iste mollitia doloribus quasi nisi, magnam dolorem provident libero possimus illo! Eligendi saepe cumque earum quas!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus dicta quae doloremque eveniet ducimus tempora, consequatur fuga nihil accusantium laborum mollitia assumenda, rerum iste magnam placeat sunt quos recusandae!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates tenetur quia! Vel eos asperiores iusto, facilis perspiciatis dolorem.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates tenetur quia! Vel eos asperiores iusto, facilis perspiciatis dolorem.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates tenetur quia! Vel eos asperiores iusto, facilis perspiciatis dolorem.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
