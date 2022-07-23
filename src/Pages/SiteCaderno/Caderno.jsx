import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import CardConteudo from "../../Components/SiteCaderno/CardConteudo"

export default function Caderno(){
    return (
        <div>
            <Header />
            <br /><br /><br />
            <main>
                <div className='lg:p-14 p-8 flex-col text-white w-full bg-Cor-Secundaria mb-4'>
                    Bem vindo(a) à página de Caderno! aqui eu listo todos os conteúdos/assuntos que venho explorando 
                    nessa jornada tenebrosa do conhecimento. 
                </div>
                <div className="flex-col p-[5%] w-full">
                    <CardConteudo title="Titulo" 
                                descricao="Uma descricao qualquer como teste" 
                                icon="Icon"
                    />
                </div>
            </main>
            <Footer />
        </div>
        
    )
}