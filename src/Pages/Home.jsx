
import Header from "../Components/Header"
import Bitmap from "../img/Bitmap.png"
import House from '../img/House.jpg'
import { useState } from "react"
import { DiUnitySmall, DiBootstrap, DiCss3, DiHtml5, DiJsBadge, DiMysql, DiReact} from "react-icons/di";

import Ocma from '../img/Projects/ocma.png' 


import { GithubLogo, LinkedinLogo, InstagramLogo} from 'phosphor-react'
import Card from "../Components/Card"
import Footer from "../Components/Footer";
import ProgressHistory from "../Components/ProgressHistory";
import Informacoes from "../Components/Informacoes";
import Site from "../Components/Filtros/Site";
import Jogos from "../Components/Filtros/Jogos";
import Escritas from "../Components/Filtros/Escritas";

export default function Home() {
    const [site, setSite] = useState(true)
    const [jogos, setJogos] = useState(false)
    const [escritas, setEscritas] = useState(false)

    function taglesSite(){
        setSite(true)
        setJogos(false)
        setEscritas(false)
    }
    function tagleJogos(){
        setSite(false)
        setJogos(true)
        setEscritas(false)
    }
    function tagleEscritas(){
        setSite(false)
        setJogos(false)
        setEscritas(true)
    }
    return(
        <div>
            <Header />
            <main className="w-full mb-8">
                <div className="relative">
                    <img className="w-full" src={Bitmap}/>
                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <div className="lg:absolute w-[801px] h-[346px] bg-Cor-Secundaria/80  lg:rounded-[34px] flex gap-4 flex-col p-[37px]  text-Cor-Texto">
                            <span className=" text-[36px]">Hello World</span>
                            <h1 className="font-bold lg:text-[36px] text-[25px]">Meu nome é Stefane e sou Estudante de TI</h1>
                            <p className="lg:text-[22px]">Como um mar de rosas preencho as pétalas da vida em meu coração, até que as gotas do mar da luxúria se transforme em chamas de ternúria</p>
                            <div className="flex gap-2">
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><GithubLogo size={32} /></a>
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><LinkedinLogo size={32} /></a>
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><InstagramLogo size={32} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-around">
                    <div className="flex gap-3 text-white mt-7 ml-20">
                        <div className="flex flex-col items-center">
                            <DiUnitySmall className="text-white" size={50} />
                            <span>Unity</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiBootstrap className="text-purple-800" size={50}/>
                            <span>Bootstrap</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiCss3 className="text-blue-400" size={50} />
                            <span>CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiHtml5 className="text-orange-400" size={50} />
                            <span>HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiJsBadge className="text-yellow-400" size={50} />
                            <span>Js</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiMysql className="text-blue-400" size={50} />
                            <span>Mysql</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiReact className="text-blue-700" size={50} />
                            <span>React</span>
                        </div>
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/61637759?v=4" alt="Stefane" className="lg:w-[250px] lg:h-[250px] w-[150px] lg:ml-0 -ml-80 h-[150px] lg:-mt-36  lg:z-20 rounded-lg drop-shadow-lg" />
                </div>

                <ProgressHistory /> 
                <Informacoes />

                <div className="pt-10 pl-3 w-full flex flex-col gap-7 items-center">
                    <nav className="w-full flex items-center justify-center gap-8 text-Cor-Texto font-2xl">
                        <button onClick={taglesSite} className="sm:text-sm hover:underline hover:text-[#949494]">Sites</button>
                        <button onClick={tagleJogos} className="hover:underline hover:text-[#949494]">Jogos</button>
                        <button onClick={tagleEscritas} className="hover:underline hover:text-[#949494]">Escritas</button>
                    </nav>
                    {site  ? 
                        <div className="w-full lg:flex gap-5 justify-center">
                            <Site />
                        </div>
                        
                    : null}
                    {jogos ? 
                        <div className="w-full lg:flex gap-5 justify-center">
                            <Jogos />
                        </div>
                    : null}
                    {escritas ? <Escritas /> : null}
                </div>
            </main>
            <Footer />
        </div>
    )
}