
export default function ButtonProgress({title}){
    return(
        <>
            <div className="flex flex-row">
                <div className="w-[60px] h-[60px] rounded-full bg-Cor-Secundaria hover:text-white ">

                </div>
                <button className="bg-Cor-Secundaria min-w-[100px] h-[40px] mt-2 text-Cor-Texto -ml-4 rounded-lg">
                    {title}
                </button>
            </div> 
        </>
    )
}