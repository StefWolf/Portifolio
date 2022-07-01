
import Header from "../Components/Header"
import Bitmap from "../img/Bitmap.png"
import House from '../img/House.jpg'

import Ocma from '../img/Projects/ocma.png'


import { GithubLogo, LinkedinLogo, InstagramLogo, } from 'phosphor-react'
import Card from "../Components/Card"

export default function Home() {
    return(
        <div>
            <Header />
            <main className="w-full">
                <div className="relative">
                    <img className="w-full" src={Bitmap}/>
                    <div className="absolute top-0 w-full h-full flex items-center justify-center">
                        <div className="absolute w-[801px] h-[346px] bg-Cor-Secundaria/80 rounded-[34px] flex gap-4 flex-col p-[37px] text-Cor-Texto">
                            <span className=" text-[36px]">Hello World</span>
                            <h1 className="font-bold text-[36px]">Meu nome é Stefane e sou Estudante de TI</h1>
                            <p className="text-[22px]">Como um mar de rosas preencho as pétalas da vida em meu coração, até que as gotas do mar da luxúria se transforme em chamas de ternúria</p>
                            <div className="flex gap-2">
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><GithubLogo size={32} /></a>
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><LinkedinLogo size={32} /></a>
                               <a href="" target='_black' className="hover:text-[#949494] transition-colors"><InstagramLogo size={32} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 pl-3 w-full flex gap-7 items-center">
                    <Card 
                        title="Meu Portifólio" 
                        descricao="Desenvolvimento do meu primeiro portifólio feito em ReactJS"
                        icons="React, HTML, CSS" 
                        img_url={House}
                    />
                    <Card 
                        title="Projeto OCMA" 
                        descricao="Desenvolvimento do projeto final da disciplina de Introdução a Técnicas de Programação"
                        icons="C" 
                        img_url= {Ocma}
                    />
                    <Card 
                        title="Meu Portifólio" 
                        descricao="Desenvolvimento do meu primeiro portifólio feito em ReactJS, com o intuito de 
                                    mostrar meus projetos e habilidades"
                        icons="React, HTML, CSS" 
                    />
                  
                </div>
            </main>
        </div>
    )
}