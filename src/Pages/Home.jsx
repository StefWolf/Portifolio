
import Header from "../Components/Header"
import Bitmap from "../img/Bitmap.png"
import House from '../img/House.jpg'
import Wallpaper from '../img/WorldWallpaper.jpg'
import ScreenWolf from '../img/WolfGirl.jpg'
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
            <main className="w-full mb-8 ">
                <div className="relative h-screen md:h-auto">
                    <img className="w-full h-screen md:h-auto" src={Wallpaper}/>
                    <div className="absolute top-0  w-full h-full flex items-center justify-center">
                        <div className="lg:absolute w-[801px] h-[390px] bg-Cor-Secundaria/80  lg:rounded-[34px] flex gap-4 flex-col p-[37px]  text-Cor-Texto">
                            <div>
                                <span className=" text-[36px]">Hello World</span>
                                
                            </div>
                            <h1 className="font-bold lg:text-[36px] text-[25px]">My name is Stefane</h1>
                            <p className="lg:text-[22px] ">Estudante de TI, apaixonada pelos estudos que gosta de explorar o mundo de forma criativa. De minha vida eu faço arte, de minha profissão quero me tornar uma excelente programadora, e de meu projeto de vida, realizar meus sonhos.</p>
                            <div className="flex gap-2">
                               <a href="https://github.com/StefWolf" target='_black' className="hover:text-[#949494] transition-colors"><GithubLogo size={32} /></a>
                               <a href="https://www.linkedin.com/in/stefane-orichuela-0036871b4/" target='_black' className="hover:text-[#949494] transition-colors"><LinkedinLogo size={32} /></a>
                               <a href="https://www.instagram.com/_stefwolf_/" target='_black' className="hover:text-[#949494] transition-colors"><InstagramLogo size={32} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex  justify-around pt-[20%] flex-wrap-reverse lg:pt-0">
                    <div className="flex gap-3 text-[10px] lg:w-auto w-full justify-center lg:text-sm text-white mt-7 lg:ml-20">
                        <div className="flex flex-col items-center">
                            <DiUnitySmall className="text-white" size={40} />
                            <span>Unity</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiBootstrap className="text-purple-800" size={40}/>
                            <span>Bootstrap</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiCss3 className="text-blue-400" size={40} />
                            <span>CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiHtml5 className="text-orange-400" size={40} />
                            <span>HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiJsBadge className="text-yellow-400" size={40} />
                            <span>Js</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiMysql className="text-blue-400" size={40} />
                            <span>Mysql</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiReact className="text-blue-700" size={40} />
                            <span>React</span>
                        </div>
                    </div>
                    <img src={ScreenWolf} alt="Stefane" className=" lg:w-[250px] lg:h-[250px] w-[300px] lg:ml-0   h-[300px] lg:-mt-36   lg:z-20 rounded-lg drop-shadow-lg" />
                </div>

                <ProgressHistory /> 
                <Informacoes />

                <div className="pt-10 pl-3 w-full flex flex-col gap-7 items-center">
                    <nav className="w-full lg:w-auto flex items-center justify-center gap-8 text-Cor-Texto font-2xl">
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