
import Header from "../Components/Header"
import Bitmap from "../img/Bitmap.png"

import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react'

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
            </main>
        </div>
    )
}