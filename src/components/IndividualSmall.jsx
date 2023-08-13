export default function IndividualSmall({data,length}) {
    function doDisplayCheck(){
        if(length < 3){
            return "flex"
        }
        else{
            return "hidden"
        }
    }
    return (
        <div className={`w-[95%]rounded-lg bg-primary-color text-primary-complementary mt-4 ${doDisplayCheck()}`}>
            <div  className="w-[55%] ml-[3%] flex flex-col justify-center mt-4 mb-4">
                <h1 className='text-xl font-semibold'>{data.title}</h1>
                {/* <p className="max-h-[20rem] overflow-hidden">{data.description}</p> */}
                <div className='max-w-[6rem] px-4 flex justify-center items-center rounded text-center  bg-accent-color text-accent-complementary'><span>{data.category}</span></div>
            </div>
            {
                data.img !== null ?
                <div className="w-[40%] flex justify-center items-center mt-4 mb-4">
                    <img className='w-80' src={data.img} alt="" />
                </div>
                :
                null
            }
        </div>
    )
  }
  