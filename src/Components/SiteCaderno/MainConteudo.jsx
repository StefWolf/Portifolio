import CardConteudo from "./CardConteudo";


export default function MainConteudo(){
    return(
        <div className="flex-col p-[5%] w-full">
            <CardConteudo title="Titulo" 
                                descricao="Uma descricao qualquer como teste" 
                                icon="Icon"
            />
            <CardConteudo title="Titulo" 
                                descricao="Uma descricao qualquer como teste" 
                                icon="Icon"
            />
            <CardConteudo title="Titulo" 
                                descricao="Uma descricao qualquer como teste" 
                                icon="Icon"
            />
            
        </div>
    )
}