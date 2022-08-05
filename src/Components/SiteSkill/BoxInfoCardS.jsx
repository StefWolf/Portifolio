
export default function BoxInfoCardS ({title, desc, icon}){
    return(
        <div className=" flex flex-row m-2 gap-3 justify">
            <div>
                {icon}
            </div>
            <div className="flex-col ">
                <strong><p className='text-[20px]'>
                    {title}
                </p></strong>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}