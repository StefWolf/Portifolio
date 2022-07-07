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
            <main className="min-h-screen w-full flex  justify-center">

                <section className="flex-1 flex flex-col relative items-center mt-24 text-Cor-Texto gap-4 p-16 m-6  shadow-md border-2 border-black/10 ">
                    <h1 className="text-5xl">{data.projeto.tTulo }</h1>
                    <p className="absolute left-1 text-sm bg-Cor-Secundaria p-2 rounded-sm">{dataFatura}</p>
                    <div className="blog" dangerouslySetInnerHTML={{__html: data.projeto.blog}}>
                        
                    </div>
                </section>
                <sidebar className="w-3/12">
                    <Sidebar />
                </sidebar>
            </main>
            <Footer />
        </>
    )
}