import { useEffect, useState } from "react"
import {AiOutlineDelete} from 'react-icons/ai'
import uploadImageToCloudinary from "../../utils/uploadCloudinary"
import { BASE_URL, token } from "../../config"
import { toast } from "react-toastify"

const Profile = ({restaurantsData}) => {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
        phone: '',
        specialization: '',
        price: 0,
        qualifications: [],
        timeSlots: [],
        about: '',
        photo: null
    })

    useEffect(() => {
        setFormData({
            name: restaurantsData?.name,
            email: restaurantsData?.email,
            address: restaurantsData?.address,
            password: restaurantsData?.password,
            phone: restaurantsData?.phone,
            specialization: restaurantsData?.specialization,
            price: restaurantsData?.price,
            qualifications: restaurantsData?.qualifications,
            timeSlots: restaurantsData?.timeSlots,
            about: restaurantsData?.about,
            photo: restaurantsData?.photo
        })
    }, [restaurantsData])

    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleFileInputChange = async event => {
        const file = event.target.files[0]
        const data = await uploadImageToCloudinary(file);

        setFormData({...formData, photo: data?.url})
    };

    const updateProfileHandler = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/restaurants/${restaurantsData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })

            const result = await res.json();

            if(!res.ok){
                throw Error(result.message)
            }

            toast.success(result.message)

        } catch (error) {
            toast.error(err.message)
        }
    }

    const addItem = (key, item) => {
        setFormData(prevFormData => ({...prevFormData, [key]:[...prevFormData[key], item]}))
    }

    const handleReusableInputChangeFunc = (key, index, event) => {
        const {name, value} = event.target

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]]

            updateItems[index][name] = value

            return{
                ...prevFormData,
                [key]: updateItems,
            }
        })
    }

    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({...prevFormData, [key]:prevFormData[key].filter((_, i) => i != index)}))
    }

    const addQualifications = e => {
        e.preventDefault();

        addItem('qualifications', {
            startingDate: '', endingDate: '', degree: '', university: ''
        })
    }

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', index, event)
    }

    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem('qualifications', index)
    }

    const addTimeSlots = e => {
        e.preventDefault();

        addItem('timeSlots', {day: '', startingTime: '00:00', endingTime: '00:00'})
    }

    const handleTimeSlotsChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', index, event)
    }

    const deleteTimeSlots = (e, index) => {
        e.preventDefault()
        deleteItem('timeSlots', index)
    }

    return (
    <div>
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
            Profile Information
        </h2>

        <form>
            <div className="mb-5">
                <p className="form__label">Name*</p>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="form__res__input"/>
            </div>
            <div className="mb-5">
                <p className="form__label">Email*</p>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="form__res__input" readOnly aria-readonly disabled='true'/>
            </div>
            <div className="mb-5">
                <p className="form__label">Phone*</p>
                <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number" className="form__res__input"/>
            </div>
            <div className="mb-5">
                <p className="form__label">Address*</p>
                <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Address of the place" className="form__res__input" maxLength={100}/>
            </div>
            <div className="mb5">
                <div className="grid grid-cols-3 gap-5 mb-[30px]">
                    <div>
                        <p className="form__label">Type of place*</p>
                        <select name="specialization" value={formData.specialization} onChange={handleInputChange} className="form__res__input py-3.5">
                            <option value="">Select</option>
                            <option value="traditional">Traditional</option>
                            <option value="store">Store</option>
                            <option value="businesses">Small businesses</option>
                            <option value="international">International</option>
                            <option value="bakery">Bakery</option>
                            <option value="cofe">Coffee</option>
                            <option value="coffee">Coffee bar</option>
                            <option value="bar">Bar</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="artisanal">Artisanal</option>
                        </select>
                    </div>
                </div>

                <div>
                    <p className="form__label">Estimated price*</p>
                    <input type="number" placeholder="1" name="price" value={formData.price} className="form__res__input" onChange={handleInputChange}/>
                </div>
            </div>
                <br/>
            <div className="mb-5">
                <p className="form__label">Information about*</p>
                {formData.qualifications?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input type="date" name="startingDate" value={item.startingDate} className="form__res__input" onChange={e => handleQualificationChange(e, index)}/>
                                </div>
                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input type="date" name="endingDate" value={item.endingDate} className="form__res__input" onChange={e => handleQualificationChange(e, index)}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Name of dish*</p>
                                    <input type="text" name="degree" value={item.degree} className="form__res__input" onChange={e => handleQualificationChange(e, index)}/>
                                </div>
                                <div>
                                    <p className="form__label">Information on the dish*</p>
                                    <input type="text" name="university" value={item.university} className="form__res__input" onChange={e => handleQualificationChange(e, index)}/>
                                </div>
                            </div>

                            <button onClick={e => deleteQualification(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor pointer">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                    </div>
                ))}
                <button onClick={addQualifications} className="bg-[#4bc34b] py-2 px-5 rounded text-white h-fit cursor-pointer">Add more information</button>
            </div>
            <br/>
            <div className="mb-5">
                <p className="form__label">Time Slots*</p>
                {formData.timeSlots?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                <div>
                                    <p className="form__label">Day*</p>
                                    <select name="day" value={item.day} className="form__res__input py-3.5" onChange={e => handleTimeSlotsChange(e, index)}>
                                        <option value="">Select</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="form__label">Starting Time*</p>
                                    <input type="time" name="startingTime" value={item.startingTime} className="form__res__input" onChange={e => handleTimeSlotsChange(e, index)}/>
                                </div>
                                <div>
                                    <p className="form__label">Ending Time*</p>
                                    <input type="time" name="endingTime" value={item.endingTime} className="form__res__input" onChange={e => handleTimeSlotsChange(e, index)}/>
                                </div>
                                <div onClick={e => deleteTimeSlots(e, index)} className=" flex items-center">
                                    <button className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor pointer mt-6">
                                        <AiOutlineDelete/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={addTimeSlots} className="bg-[#4bc34b] py-2 px-5 rounded text-white h-fit cursor-pointer">Add TimeSlot</button>
            </div>
            <div className="mb-5">
                <p className="form__label">About*</p>
                <textarea name="about" rows={5} value={formData.about} placeholder="Write about your place" onChange={handleInputChange} className="form__res__input"></textarea>
            </div>
            <div className="mb-5 flex items-center gap-3">
            {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                <img src={formData.photo} alt="" className='w-full  rounded-full'/>
              </figure>}
              <div className='relative w-[130px] h-[50px]'>
                <input type="file" name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg, .png' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#9fe79f] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
              </div>
            </div>
            <div className="mt-7">
                <button type="submit" onClick={updateProfileHandler} className="bg-[#4bc34b] text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">Update Profile</button>
            </div>
        </form>
    </div>
  )
}

export default Profile