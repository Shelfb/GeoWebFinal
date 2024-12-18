import { useState } from 'react'
import starIcon from '../../assets/images/Star.png'
import RestaurantAbout from './RestaurantAbout'
import Feedback from './Feedback'
import SidePanels from './SidePanels'
import {BASE_URL} from './../../config'
import useFetchData from './../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useParams } from 'react-router-dom'

const RestaurantDetails = () => {
  const [tab, setTab] = useState('about')
  const {id} = useParams()
  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/restaurants/${id}`)

  const {
    name,
    address,
    specialization,
    price,
    qualifications,
    about,
    photo
  } = doctors;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

      {loading && <Loader/>}
      {error && <Error/>}

        { !loading && !error && (<div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={photo} alt="Restaurant Image" className='w-full'/>
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  {specialization}
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  {name}
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 g:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="Star Icon" /> {qualifications}
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]'>
                    {price}
                  </span>
                </div>
                <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                  {address}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button onClick={() => setTab('about')} className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                {about}
              </button>
              <button onClick={() => setTab('feedback')} className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {
                tab==='about' && <RestaurantAbout name={name} about={about} qualifications={qualifications}/>
              }
              {
                tab==='feedback' && <Feedback/>
              }
            </div>

          </div>
          <div>
              <SidePanels/>
          </div>
        </div>)}
      </div>
    </section>
  )
}

export default RestaurantDetails