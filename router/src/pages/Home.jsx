import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto bg-gray-200 flex flex-wrap'>
        <div className='w-full md:w-1/2 h-[649px] bg-slate-200 flex items-center pl-6 md:pl-[130px]'>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" alt="" />
        </div>
        <div className='w-full md:w-1/2 h-[649px] flex flex-col justify-center pl-6 md:pl-[50px]'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            Drive when you <br />
            want, make what <br />
            you need
          </h1><br />
          <p className='text-sm md:text-base'>
            Make money on your schedule with deliveries or rides—or <br />
            both. You can use your own car or choose a rental <br />
            through Uber.
          </p><br />
          <button className='w-[150px] h-[45px] bg-gray-950 text-white rounded-lg'>Get started</button>
          <p className='mt-4 underline'>Already have an account? Sign in</p>
        </div>
      </div>

      <div className='w-full h-auto bg-gray-200 flex flex-wrap'>
        <div className='w-full md:w-1/2 h-auto flex flex-col justify-center pl-6 md:pl-[130px]'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            The Uber you<br />
            know, reimagined <br />
            for business
          </h1><br />
          <p className='text-sm md:text-base'>
            Uber for Business is a platform for managing global rides and <br />
            meals, and local deliveries, for companies of any size.
          </p><br />
          <button className='w-[150px] h-[45px] bg-gray-950 text-white rounded-lg'>Get started</button>
          <p className='mt-4 underline'>Check out our solutions</p>
        </div>
        <div className='w-full md:w-1/2 h-auto flex items-center pl-6 md:pl-[60px]'>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" alt="" />
        </div>
      </div>

      <div className='w-full h-auto bg-gray-200 flex flex-wrap'>
        <div className='w-full md:w-1/2 h-[649px] bg-slate-200 flex items-center pl-6 md:pl-[130px]'>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg" alt="" />
        </div>
        <div className='w-full md:w-1/2 h-[649px] flex flex-col justify-center pl-6 md:pl-[50px]'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            Make money by renting out <br />
            your car
          </h1><br />
          <p className='text-sm md:text-base'>
            Make money on your schedule with deliveries or rides—or <br />
            both. You can use your own car or choose a rental <br />
            through Uber.
          </p><br />
          <button className='w-[150px] h-[45px] bg-gray-950 text-white rounded-lg'>Get started</button>
          <p className='mt-4 underline'>Already have an account? Sign in</p>
        </div>
      </div>

      <div className='w-full h-auto bg-gray-100'>
        <div className='w-full h-auto bg-gray-400'>
          <div className='w-full h-[50%] bg-gray-400 flex flex-col items-center'>
            <h1 className='text-2xl md:text-3xl font-bold mt-6'>It’s easier in the apps</h1>
          </div>
          <div className='w-full h-auto bg-gray-100 flex flex-wrap items-center justify-center gap-6 p-6'>
            <div className='w-[300px] md:w-[600px] h-[230px] bg-white flex'>
              <div className='h-full w-[30%] flex items-center justify-center'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" />
              </div>
              <h1 className='text-base md:text-2xl font-bold mt-4 ml-4'>Download the Uber app <br />Scan to download</h1>
            </div>
            <div className='w-[300px] md:w-[600px] h-[230px] bg-white flex'>
              <div className='h-full w-[30%] flex items-center justify-center'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" />
              </div>
              <h1 className='text-base md:text-2xl font-bold mt-4 ml-4'>Download the Uber app <br />Scan to download</h1>
            </div>
          </div>
        </div>
        <div className='w-full h-auto bg-gray-950 p-6 md:pl-[200px]'>
          <h1 className='text-2xl md:text-4xl text-white font-bold'>Uber</h1><br />
          <ul className='flex flex-wrap gap-4 text-white'>
            <li>About us</li>
            <li>Our offerings</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Careers</li>
          </ul><br />
          <p className='font-bold text-white'>Follow our Blog</p><br />
          <div className='flex gap-4'>
            <img className='bg-white' src="https://img.icons8.com/?size=32&id=32320&format=png" alt="" />
            <img className='bg-white' src="https://img.icons8.com/?size=50&id=118467&format=png" alt="" />
            <img className='bg-white' src="https://img.icons8.com/?size=50&id=6Fsj3rv2DCmG&format=png" alt="" />
            <img className='bg-white' src="https://img.icons8.com/?size=50&id=37326&format=png" alt="" />
          </div><br />
          <div className='flex gap-4'>
            <img className='bg-white w-[100px]' src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="" />
            <img className='bg-white w-[100px]' src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="" />
          </div><br />
          <p className='text-white'>© 2024 Uber Technologies Inc.</p>
        </div>
      </div>

    </div>
  )
}
export default Home
