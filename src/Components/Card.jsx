import House from '../img/House.jpg'

export default function Card(props){
    return(
        <>
            <div className="w-[20%] h-[300px] rounded-2xl bg-Fundo-Secundario flex flex-col">
                <div>
                    <img className="" src={House} />
                </div>
                <div className="p-5 gap-4">
                    <h1 className="text-Cor-Texto">{props.title}</h1>
                    <p className="text-Cor-Texto text-[12px]">{props.descricao}</p>
                    <a className=" hover:text-[#949494] transition-colors" href={props.url}>Read more</a>
                </div>
            </div>
        </>
    )
}