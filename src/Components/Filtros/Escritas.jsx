import { gql, useQuery } from '@apollo/client'
import Card from '../Card'

export default function Escritas(){
    const QUERY_INFORMACOESGERAISESCRITA = gql`
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

    const {data} = useQuery(QUERY_INFORMACOESGERAISESCRITA)
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
                if(Projeto.sessEs.categoria == 'Escritas'){
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