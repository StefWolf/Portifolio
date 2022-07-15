import { gql, useQuery } from '@apollo/client'
import Card from '../Card'

const QUERY_INFORMACOESGERAIS = gql`
    query informacoesGerais {
        allProjetos {
        sessEs {
            id
            categoria
        }
        tTulo
        tecnologias
        urlextern
        slug
        imagemCard {
            url
        }
        descriO
        }
    }
  
`
export default function Site(){
    const {data} = useQuery(QUERY_INFORMACOESGERAIS)
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
        <>
            {data.allProjetos.map(Projeto => {
                if(Projeto.sessEs.categoria == 'Sites'){
                    return (
                        <Card 
                            key={Projeto.sessEs.id}
                            img_url={Projeto.imagemCard.url}
                            url={`/blog/${Projeto.slug}`}
                            descricao={Projeto.descriO}
                            title={Projeto.tTulo}
                            icons={Projeto.tecnologias}
                            url_extern={Projeto.urlextern}
                        
                        />
                    )
                }
            })}
        </>
    )
}