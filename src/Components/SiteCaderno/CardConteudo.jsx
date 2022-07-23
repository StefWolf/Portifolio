import { useState } from "react"

export default function CardConteudo({title, icon, descricao}){
    const [hoverCard, setHoverCard] = useState(false)


    return(
        <div className="flex w-[100%]">
            <button 
                className="bg-Fundo-dark w-[30%] h-[100px] flex shadow-md border-2 border-Cor-Secundaria "
                onMouseEnter={() => setHoverCard(true)}
                onMouseLeave={() => setHoverCard(false)}
                >

                <div className="h-full w-[100px] border-r-2 border-Cor-Secundaria">
                    {icon}
                </div>
                <div className="flex-col">
                    {title}
                </div>
            </button>
            {hoverCard && (
                <div className=" p-5 text-white bg-Fundo-dark w-[30%] h-[100px] flex shadow-md border-2 border-l-0 border-Cor-Secundaria rounded-r-lg">
                    {descricao}
                </div>
            )}
                
           
        </div>
        
    )
}