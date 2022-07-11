import { gql, useQuery } from '@apollo/client'
import { Folder, Alarm, HeartStraight } from 'phosphor-react'

const QUERY_INFORMACOES = gql`
query informacoesGerais {
    informaOGeral {
        certificados
        horasDeEstudos
        nMeroDeProjetos
    }
}
`

export default function Informacoes(){
    const {data} = useQuery(QUERY_INFORMACOES)
    if(!data){
        return(
            <div className="flex w-full justify-center">
                <div className=" w-full md:w-5/6 h-[200px] bg-[#424242] lg:rounded-lg border-2 border-Cor-Secundaria flex text-Cor-Texto py-5 justify-around mt-16">
                   <strong>Carregando...</strong> 
                </div>   
            </div>
        )
    }
    return(
        <div className="flex w-full justify-center">
                    <div className=" w-full md:w-5/6 h-[200px] bg-[#424242] lg:rounded-lg border-2 border-Cor-Secundaria flex text-Cor-Texto py-5 justify-around mt-16">
                        <div className="flex flex-col">
                            <div className="flex items-center flex-col lg:flex-row">
                                <Folder className="text-Cor-Secundaria" size={94} />
                                <strong className="text-5xl">{data.informaOGeral.nMeroDeProjetos}</strong>
                            </div>
                            <span>N° de Projetos</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center flex-col lg:flex-row">
                                <Alarm className="text-Cor-Secundaria" size={94} />
                                <strong className="text-5xl">1{data.informaOGeral.horasDeEstudos}</strong>
                            </div>
                            <span>Horas de estudo</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center flex-col lg:flex-row">
                                <HeartStraight className="text-Cor-Secundaria" size={94} />
                                <strong className="text-5xl">{data.informaOGeral.certificados}</strong>
                            </div>
                            <span>Certificados</span>
                        </div>
                    </div>
                </div>
    )
}