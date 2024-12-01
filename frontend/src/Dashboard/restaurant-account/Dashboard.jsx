import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx'
import useGetProfile from '../../hooks/useFetchData.jsx'
import { BASE_URL } from '../../config.js'
import Tabs from './Tabs.jsx'
import { useState } from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import starIcon from '../../assets/images/Star.png'
import RestaurantAbout from './../../pages/Restaurants/RestaurantAbout.jsx'
import Profile from './Profile.jsx'
import { FaMapMarkerAlt } from "react-icons/fa";
import Appointments from './Appointments.jsx'

const Dashboard = () => {

  const {data, loading, error} = useGetProfile(`${BASE_URL}/restaurants/profile/me`)
  const [tab, setTab] = useState('overview')

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader/>}
        {error && !loading && <Error/>}

        {
          !loading && !error && 
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab}/>
              <div className='lg:col-span-2'>
                {data.isApproved === 'pending' && (
                  <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>
                    <BsFillInfoCircleFill className='flex-shrink-0 w-5 h-5'/>
                    <span className='sr-only'>Info</span>
                    <div className='ml-3 text-sm font-medium'>
                      To get approval please complete your profile. We&apos;ll review manually and approve within 3 days.
                    </div>
                  </div>)}
                  
                  <div>
                    {tab === 'overview' && 
                    <div>
                      <div className='flex items-center gap-4 mb-10'>
                        <figure className='max-w-[200px] max-h-[200px]'>
                          <img src={data?.photo} alt="" className='w-full'/>
                        </figure>

                        <div>
                          <span className='bg-[#c5f7c5] text-[#2a9e2b] py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>{data.specialization}</span>
                          <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>{data.name}</h3>
                          <div className='flex items-center gap-[6px]'>
                            <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              <img src={starIcon} alt="" /> {data.averageRating}
                            </span>
                            <span className='text-[#2a9e2b] text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              ({data.totalRating})
                            </span>
                          </div>
                          <br/>
                          <div className='flex items-center gap-x-2 text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                          <FaMapMarkerAlt className="text-[#2a9e2b]" />
                          <span>{data.bio}</span>
                        </div>
                        </div>
                      </div>
                      <RestaurantAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences}/>
                    </div>}
                    {tab === 'appointments' && <Appointments/>}
                    {tab === 'settings' && <Profile restaurantsData={data}/>}
                  </div>
              </div>
            </div>
        }
      </div>
    </section>
  )
}

export default Dashboard