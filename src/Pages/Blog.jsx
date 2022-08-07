import {gql, useQuery} from "@apollo/client";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR' 

const QUERY_PROJETOBLOG = gql`
query MyQuery($in: [String] = "") {
    projeto(filter: { slug: { in: $in } }) {
        blog(markdown: true)
        descriO
        dataDoProjeto
        tTulo
    }
}
`
export default function Blog(){
    const { blogURL } = useParams()
    const { data } = useQuery(QUERY_PROJETOBLOG, {
        variables: {
            in: blogURL
        }
    })
    if(!data){
        return null
    }
    const date = new Date(data.projeto.dataDoProjeto)
    const dataFatura = format(date, "'Dia' dd 'de' MMMM yyyy", {
        locale: ptBR,
    })

    return(
        <>
            <Header />
            <br /> <br /> <br />
            <main className="min-h-screen  w-full lg:flex lg:flex-row flex-col  justify-center">

                <section className="flex-1 flex flex-col relative lg:items-center lg:mt-24 dark:text-Cor-Texto text-Fundo-dark gap-4 lg:p-16 p-4 lg:m-6  shadow-md border-2 border-black/10 ">
                    <h1 className="text-5xl">{data.projeto.tTulo }</h1>
                    <p className="lg:absolute lg:left-1  lg:right-auto text-sm bg-Cor-Secundaria p-2 rounded-sm">{dataFatura}</p>
                    <div className="blog" dangerouslySetInnerHTML={{__html: data.projeto.blog}}>
                        
                    </div>
                </section>
                <sidebar className="w-3/12 ">
                    <Sidebar />
                </sidebar>
            </main>
            <Footer />
        </>
    )
}