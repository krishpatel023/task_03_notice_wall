import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Modal() {

    const [title,setTitle] = useState()
    const [description, setDescription] = useState()
    const [img, setImage] = useState()
    const [category, setCategory]=useState('Notice')
    const handleImage = (e)=>{
        var render = new FileReader()
        render.readAsDataURL(e)
        render.onload = () => {
            // console.log(render.result.length)
            setImage(render.result)
        }
        render.onerror = error => {
            console.log("ERROR : ",error)
        }
    }

    const { addNotice ,setIsModalOpen }=useContext(GlobalContext)

    const handleSubmit = ()=>{
        addNotice({
            title : title,
            description : description,
            img : (img ? img : null),
            category : category,
        })
        handleClose()
    }
    const handleClose = ()=>{
        setIsModalOpen(false)
    }
  return (
    <div className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-secondary-color'>
      <div className='w-[25rem] h-[30rem] rounded-lg bg-primary-color flex flex-col justify-center items-center'>
        <div className='w-[90%] flex justify-end'>
            <button onClick={handleClose}><i className="fa-solid fa-xmark fa-xl"></i></button>
        </div>
        <div className='w-[90%] h-[85%] flex flex-col justify-evenly items-center'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor='title'>Title</label>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className='flex flex-col w-full gap-1'>
                <span>Description</span>
                <textarea onChange={(e)=>{setDescription(e.target.value)}} className="textarea textarea-bordered w-full max-h-40" placeholder="Bio"></textarea>
            </div>
            <div className='flex flex-col w-full gap-1'>
                <span>Upload Image</span>
                <input onChange={(e)=>{handleImage(e.target.files[0])}} type="file" className="file-input file-input-bordered w-full" />
            </div>
            <div className='flex flex-col w-full gap-1'>
                <span>Category</span>
                <select onChange={(e)=>{setCategory(e.target.value)}} className="select select-bordered w-full">
                    <option value="Notice">Notice</option>
                    <option value="Examination">Examination</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Holiday">Holiday</option>
                </select>
            </div>
            <button onClick={handleSubmit} className='w-32 h-10 rounded-lg bg-accent-color text-accent-complementary'>Add Notice</button>
        </div>

      </div>
    </div>
  )
}
