import { Copyright } from "phosphor-react"
import Wolf_white from '../img/Wolf_white.png'
import { GithubLogo, LinkedinLogo, InstagramLogo, Folder, Alarm, HeartStraight } from 'phosphor-react'

export default function Footer(){
    return(
        <footer className="flex flex-col lg:flex-row items-center justify-around dark:bg-[#252525] shadow-lg bg-Cor-Secundaria lg:p-2 p-4">
            <div className="flex flex-sol items-center">
                <div className="flex text-[14px] text-Cor-Texto items-center">
                <Copyright size={20} className="mr-1" />2022 - Todos os direitos Reservados 
                </div>
            </div>
            <div className="flex lg:mt-0 mt-2 gap-2 text-Cor-Texto">
                <a href="https://github.com/StefWolf" target='_black' className="hover:text-[#949494] transition-colors"><GithubLogo size={38} /></a>
                <a href="https://www.linkedin.com/in/stefane-orichuela-0036871b4/" target='_black' className="hover:text-[#949494] transition-colors"><LinkedinLogo size={38} /></a>
                <a href="https://www.instagram.com/_stefwolf_/" target='_black' className="hover:text-[#949494] transition-colors"><InstagramLogo size={38} /></a>
            </div>
            
        </footer>
    )
}