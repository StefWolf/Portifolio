
import ButtonDark from './Buttons/ButtonDark'

export default function Card({img_url, url, descricao, title, icons}){
    return(
        <>
            <div data-aos="flip-left" className="w-[20%] min-h-[100px] rounded-md bg-Fundo-Secundario flex flex-col opacity-75 shadow-md hover:opacity-100 transition">
                <div>
                    <img className="rounded-t-md" src={img_url} />
                </div>
                <div className="p-5 gap-4">
                    <h1 className="text-Cor-Texto font-bold text-lg">{title}</h1>
                    <p className="text-Cor-Texto text-[14px]">{descricao}</p>
                    <div className='flex gap-3 mt-2'>
                        <ButtonDark url = {url} text = "Read more" type="Dark" />
                        <ButtonDark url = {url} text = "Repository" type="Dark" />
                        
                    </div>
                </div>
                <div className="border-t border-Fundo-dark pl-4 text-sm">
                    <p>{icons}</p>
                </div>
            </div>
        </>
    )
}