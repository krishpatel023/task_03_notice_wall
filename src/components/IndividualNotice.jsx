export default function IndividualNotice({data}) {
  return (
    <div className='w-[50rem] rounded-lg bg-primary-color text-primary-complementary flex justify-center
                    md:w-full'>
        <div className='w-[90%] mt-6 mb-6'>
            <h1 className='text-3xl font-semibold mb-4'>{data.title}</h1>
            {
                data.img !== null ?
                    <img className='w-80' src={data.img} alt="" />
                :
                null
            }
            
            <h1 className='text-xl font-semibold mb-4'>Description</h1>
            <p className="overflow-hidden">{data.description}</p>            
            <h1 className='text-xl font-semibold mb-4'>Category</h1>
            <div className='w-full flex flex-wrap gap-2'>
                <div className='max-w-[10rem] px-4 flex justify-center items-center rounded text-center  bg-accent-color text-accent-complementary'><span>{data.category}</span></div>
            </div>
        </div>
    </div>
  )
}
