import House from '../img/House.jpg'
import ButtonDark from './Buttons/ButtonDark'

export default function Card(props){
    return(
        <>
            <div className="w-[20%] min-h-[100px] rounded-md bg-Fundo-Secundario flex flex-col opacity-75 shadow-md hover:opacity-100 transition">
                <div>
                    <img className="rounded-t-md" src={House} />
                </div>
                <div className="p-5 gap-4">
                    <h1 className="text-Cor-Texto">{props.title}</h1>
                    <p className="text-Cor-Texto text-[14px]">{props.descricao}</p>
                    <div className='flex gap-3'>
                        <ButtonDark url = {props.url} text = "Read more" />
                        <ButtonDark url = {props.url} text = "Repository" />
                        
                    </div>
                </div>
                <div className="border-t border-Fundo-dark pl-4 text-sm">
                    <p>{props.icons}</p>
                </div>
            </div>
        </>
    )
}