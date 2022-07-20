import { Copyright } from "phosphor-react"
import Wolf_white from '../img/Wolf_white.png'
import { GithubLogo, LinkedinLogo, InstagramLogo, Folder, Alarm, HeartStraight } from 'phosphor-react'

export default function Footer(){
    return(
        <footer className="flex items-center justify-around bg-[#252525] border-t-2 border-Cor-Texto lg:p-2">
            <div className="flex flex-sol items-center">
                <img className="w-[64px]" src={Wolf_white} alt="Logo" />
                <div className="flex text-Cor-Texto items-center">
                    <Copyright size={32} /><strong>Todos os direitos Reservados 2022</strong>
                </div>
            </div>
            <div className="flex gap-2 text-Cor-Texto">
                <a href="https://github.com/StefWolf" target='_black' className="hover:text-[#949494] transition-colors"><GithubLogo size={48} /></a>
                <a href="https://www.linkedin.com/in/stefane-orichuela-0036871b4/" target='_black' className="hover:text-[#949494] transition-colors"><LinkedinLogo size={48} /></a>
                <a href="https://www.instagram.com/_stefwolf_/" target='_black' className="hover:text-[#949494] transition-colors"><InstagramLogo size={48} /></a>
            </div>
            <nav className="flex flex-col items-center gap-4 text-Cor-Texto text-1xl ">
                <a className="hover:text-Cor-Secundaria transition-colors" href="/">Inicio</a>
                <a className="hover:text-Cor-Secundaria transition-colors" href="/">Habilidades</a>
                <a className="hover:text-Cor-Secundaria transition-colors" href="/Projects/">Projetos</a>
            </nav>
        </footer>
    )
}