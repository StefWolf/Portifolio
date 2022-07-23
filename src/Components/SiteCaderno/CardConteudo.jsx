import { useState } from "react"
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import ButtonCont from "./ButtonCont";

export default function CardConteudo({title, descricao}){
    const [hoverCard, setHoverCard] = useState(false)


    return(
        <div className="flex w-[100%] mt-3">
            <button 
                className="bg-Fundo-dark w-[30%] h-[100px] flex shadow-md border-2 border-Cor-Secundaria "
                onMouseEnter={() => setHoverCard(true)}
                onMouseLeave={() => setHoverCard(false)}
                >

                <div className=
                {hoverCard ? 'h-full transition-all w-[100px] border-r-2 border-Cor-Secundaria text-Cor-Secundaria p-3'
                : 'h-full w-[100px] transition-all border-r-2 border-Cor-Secundaria text-black/20 p-3'
            }>
                    <BsFillJournalBookmarkFill size={70}  />
                </div>
                <div className="flex-col p-3">
                    <p 
                        className='text-[20px] text-Cor-Texto' >
                        {title }
                    </p>
                    <ButtonCont />
                </div>
            </button>
            {hoverCard && (
                <div data-aos="fade-left" className=" p-3 text-[12px] text-Cor-Texto bg-Fundo-dark w-[60%] h-[100px] flex shadow-md border-2 border-l-0 border-Cor-Secundaria rounded-r-lg">
                    {descricao}
                </div>
            )}
                
           
        </div>
        
    )
}