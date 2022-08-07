import { gql, useQuery } from '@apollo/client'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function Projects() {
    const QUERY_INFORMACOESPROJECTS = gql`
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
            statusProject
            imagemCard {
                url
            }
            descriO
            }
        }
    `
    const{data} = useQuery(QUERY_INFORMACOESPROJECTS)
    if(!data){
        return(
            <div>
                <h1>CARREGANDO PÁGINA...</h1>
            </div>
        )
    }
  return (
    <div className="relative">
        <Header />
        <main className='w-full '>
            <br />
            <div className='lg:p-14 p-8 flex-col dark:text-Cor-Texto text-Fundo-dark w-full dark:bg-Cor-Blue/20 bg-Cor-Secundaria mb-4'>
                <h1 className='text-[40px]'>Projetos</h1>
                <p className=' pl-5 '>Bem vindo(a) à página de todos os projetos! aqui você encontrará todos os 
                    meus bens mais valiosos ^^
                </p>
            </div>
            <section className='w-full flex  lg:p-8 pl-3 justify-center flex-wrap  items-center'>
                {data.allProjetos.map(Projeto => {
                    return(
                        <Card 
                                key={Projeto.sessEs.id}
                                img_url={Projeto.imagemCard.url}
                                url={`/blog/${Projeto.slug}`}
                                descricao={Projeto.descriO}
                                title={Projeto.tTulo}
                                icons={Projeto.tecnologias}
                                url_extern={Projeto.urlextern}
                                status={Projeto.statusProject}
                            
                            />
                    )
                })}
            </section>
            
        </main>
        <Footer />
    </div>
  );
}