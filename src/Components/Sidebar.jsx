import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const QUERY_SIDEBAR = gql`
query MyQuery {
        allProjetos(orderBy: _createdAt_DESC first:5) {
        id
        descriO
        tTulo
        slug
        dataDoProjeto
        sessEs {
            categoria
            }
        }
    }
`

export default function Sidebar() {
    const { data } = useQuery(QUERY_SIDEBAR)
    if (!data) {
        return null
    }
    return (
        <>
            <div className="pt-5 bg-Cor-Blue/30 lg:mt-24 w-[85%] lg:w-full mt-6 shadow-sm ml-5 lg:ml-0 mb-5" >
                <h2 className="text-Cor-Texto w-full  text-center text-1xl py-4 font-bold">Projetos mais Recentes</h2>
                {data.allProjetos.map(Projeto => {
                    return (
                            <Link
                                to={`/blog/${Projeto.slug}`}
                                className="w-full flex flex-col gap-1 text-Cor-Texto  p-2 border-t-2 border-black/5 hover:bg-Cor-Secundaria hover:p-6 transition-all"
                                key={Projeto.id}>
                                <div className="flex gap-4 ">
                                    <strong className="text-lg ">{Projeto.tTulo}</strong>
                                    <p className="text-[12px] bg-black/50 p-1 rounded-lg">{Projeto.sessEs.categoria}</p>
                                </div>
                                <p className="text-sm">{Projeto.descriO}</p>
                                <p className="text-[10px] ">{Projeto.dataDoProjeto}</p>
                            </Link>
                    )
                })}
            </div >
        </>
    )
}