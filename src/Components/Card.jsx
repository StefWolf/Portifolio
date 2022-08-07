
import ButtonDark from './Buttons/ButtonDark'
//bg-purple-700/50
export default function Card({img_url, url, descricao, title, icons, url_extern, status}){
    function statusProj(){
        if(status == true){
            return <p className='text-green-700'>Projeto finalizado!</p>
        } else {
            return <p className='text-red-700'>Projeto em desenvolvimento...</p>
        }
    }
    return(
        <>
            <div data-aos="flip-left" className=" mb-3 lg:w-[20%] w-[80%] min-h-[300px] lg:h-[300px] rounded-md dark:bg-Fundo-Secundario bg-Cor-Texto flex flex-col border-2 border-Fundo-dark/50 opacity-75 shadow-md hover:opacity-100 transition ml-10">
                <div>
                    <img className="rounded-t-md" src={img_url} />
                </div>
                <div className="w-full  bg-[#303030]/60 justify-center items-center pl-2 pr-2 shadow-sm text-[11px]">
                   {statusProj()}
                </div>
                <div className="p-2 pl-4 gap-4 dark:text-Cor-Texto text-Fundo-dark ">
                    <h1 className=" font-bold text-lg">{title}</h1>
                    <p className="text-[14px]">{descricao}</p>
                    <div className='flex gap-3 mt-2'>
                        <ButtonDark url = {url} text = "Read more" type="Dark" />
                        <ButtonDark url = {url_extern} text = "Repository" type="Dark" />
                        
                    </div>
                </div>
            </div>
        </>
    )
}