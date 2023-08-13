import React, { useContext } from 'react'
import IndividualNotice from '../components/IndividualNotice'
import Modal from '../components/Modal'
import GlobalContext from '../context/GlobalContext'
import IndividualSmall from '../components/IndividualSmall'
export default function Notice() {
    const { isModalOpen , setIsModalOpen,notice, displayNotice , selectedCategory, setSelectedCategory} = useContext(GlobalContext)

    const handleClickAddNotice = ()=>{
        setIsModalOpen(true)
    }

    const handleClass = (data)=>{
        if(data === selectedCategory){
            return "bg-accent-color text-accent-complementary"
        }
        else{
            return "bg-primary-color text-primary-complementary hover:bg-[#E8E9EB] hover:text-black"
        }
    }
    // console.log("NOTICE" , notice);
    // console.log("DISPLAY NOTICE", displayNotice)
    // console.log("CATEGORY", selectedCategory)

  return (
    <>
    {
        isModalOpen === false ?
        <div className='w-full h-full flex justify-center bg-secondary-color'>
            <div className='w-[95%] '>
                <div className='w-full flex justify-between 
                                sm:flex-col sm:items-center'>
                    <h1 className='text-xl font-bold'>NOTICE</h1>
                    <div className='flex gap-4 items-center
                                    sm:flex-col sm:items-center'>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1 bg-primary-color w-56">Category : {selectedCategory}</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                                <button onClick={()=>{setSelectedCategory('All')}} className={`w-full h-10 rounded-lg  ${handleClass('All')}`}>All</button>
                                <button onClick={()=>{setSelectedCategory('Notice')}} className={`w-full h-10 rounded-lg  ${handleClass('Notice')}`}>Notice</button>
                                <button onClick={()=>{setSelectedCategory('Examination')}} className={`w-full h-10 rounded-lg ${handleClass('Examination')}`}>Examination</button>
                                <button onClick={()=>{setSelectedCategory('Assignment')}} className={`w-ful h-10 rounded-lg  ${handleClass('Assignment')}`}>Assignment</button>
                                <button onClick={()=>{setSelectedCategory('Holiday')}} className={`w-full h-10 rounded-lg  ${handleClass('Holiday')}`}>Holiday</button>
                            </ul>
                        </div>
                        <button onClick={handleClickAddNotice} className='w-40 h-10 rounded bg-accent-color text-accent-complementary'>
                            ADD NOTICE
                        </button>
                    </div>
                </div>

                <div className='w-full flex flex-wrap mt-4 justify-center 
                                md:flex-col'>
                    <div className='w-[30%] md:w-full'>
                        <h1 className='text-xl font-semibold mb-4'>Recents</h1>
                        {
                            notice ?
                            notice.map((data,i)=>
                            <IndividualSmall
                                data={data}
                                key={i}
                                length={i}
                            />
                            )
                            :null
                        }
                    </div>
                    <div className="w-[70%] flex flex-col gap-4 mt-4 items-center md:w-full">
                        <h1 className='text-xl font-semibold mb-4'>All Notices</h1>
                        {
                            displayNotice?
                            displayNotice.map((data,i)=>
                                <IndividualNotice
                                    data={data}
                                    key={i}
                                />
                            )
                            :null
                        }
                    </div>

                </div>
            </div>
        </div>
        : 
        <Modal/>
    }

    
    </>
  )
}
