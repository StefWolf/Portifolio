import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const QUERY_SIDEBAR = gql`
query MyQuery {
        allProjetos(orderBy: _createdAt_DESC first:5) {
        id
        descriO
        tTulo
        slug
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
            < div className="pt-24" >
                <h2 className="text-Cor-Texto w-full text-center text-1xl py-4 font-bold">Projetos mais Recentes</h2>
                {data.allProjetos.map(Projeto => {
                    return (
                            <Link
                                to={`/blog/${Projeto.slug}`}
                                className="w-full flex flex-col gap-1 text-Cor-Texto border p-2 border-transparent hover:border-Cor-Secundaria"
                                key={Projeto.id}>
                                <strong className="text-lg underline ">{Projeto.tTulo}</strong>
                                <p>{Projeto.descriO}</p>
                            </Link>
                    )
                })}
            </div >
        </>
    )
}