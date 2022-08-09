import { PhosphorLogo, List } from 'phosphor-react'
import { useState } from 'react'
import icone from '../img/icone.png'
import Wolf_black from '../img/Wolf_black.png'
import Wolf_white from '../img/Wolf_white.png'
import { GithubLogo, LinkedinLogo, InstagramLogo} from 'phosphor-react'
import {FiMoon} from "react-icons/fi";
import { useTheme } from '../Hooks/useTheme'
import { BiSun } from "react-icons/bi";

export default function Header(){
    const {theme, setTheme} = useTheme();

    const [menuMobile, setMenuMobile] = useState(false)
    function menuBaile(){
        setMenuMobile(!menuBaile)
    }
    return (
        <>
            <header className="lg:w-full p-3 transition-all lg:flex lg:p-0 hidden lg:h-16 justify-around items-center py-8 absolute lg:bg-Cor-Texto lg:dark:bg-Fundo-dark border-b-2 border-black/20 shadow-md  z-20">
                <img className='w-16  h-16' src={Wolf_white} alt="Icone site" />
                <nav className="lg:flex-row flex-col flex gap-20 dark:text-Cor-Texto text-Fundo-dark text-1xl">
                    <div className='flex gap-4 pt-2'>
                        <a  className="hover:text-Cor-Secundaria transition-colors" href="/">Inicio</a>
                        <a className="hover:text-Cor-Secundaria transition-colors" href="/Projects/">Projetos</a>
                        <a className="hover:text-Cor-Secundaria transition-colors" href='/Skills'>Skills</a>
                    </div>
                    {theme === "ligth" ? (
                        <button className=' text-[14px] w-[100px] flex gap-2 bg-Fundo-dark/10 p-2 rounded-md text-Fundo-dark hover:bg-Fundo-dark/30 transition-all' onClick={()=> setTheme("dark")}>
                            <FiMoon size={20} className="text-Fundo-dark" />
                            Escuro
                        </button>
                    ) : (
                        <button className=' flex gap-2 w-[100px] text-[14px] bg-Cor-Texto/10  p-2 rounded-md text-Cor-Texto  hover:bg-Cor-Texto/20 transition-all ' onClick={()=> setTheme("ligth")}>
                            <BiSun size={20} className="text-Cor-Texto" />
                            Claro
                        </button>
                    )}
                    

                </nav>
            </header>

            
            { menuMobile ? <div className="bg-Fundo-dark/50 w-full h-full z-30 fixed top-0" onClick={menuBaile}>
                <header data-aos="fade-right" className=" w-[50%] z-20 h-screen fixed border-r-2 border-black/40 top-0 bg-Cor-Secundaria ">
                        {theme === "ligth" ? (
                            <button className=' m-2 text-[14px] w-[100px] flex gap-2 bg-Fundo-dark/30 p-2 rounded-md text-Cor-Texto hover:bg-Fundo-dark/30 transition-all' onClick={()=> setTheme("dark")}>
                                <FiMoon size={20} className="text-Cor-Texto" />
                                Escuro
                            </button>
                        ) : (
                            <button className=' m-2 flex gap-2 w-[100px] text-[14px] bg-Cor-Texto/10  p-2 rounded-md text-Cor-Texto  hover:bg-Cor-Texto/20 transition-all ' onClick={()=> setTheme("ligth")}>
                                <BiSun size={20} className="text-Cor-Texto" />
                            Claro
                        </button>
                        )}
                    <nav className="pt-20 gap-4 text-white/80 text-[20px] w-full h-screen flex flex-col text-center">
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/">Inicio</a>
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/Projects/">Projetos</a>
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/Skills">Skills</a>
                        <br />
                        <div className='flex gap-3 justify-center'>
                            <a href="https://www.linkedin.com/in/stefane-orichuela-0036871b4/"><LinkedinLogo size={40} /></a>
                            <a href="https://www.instagram.com/_stefwolf_/"><InstagramLogo size={40} /></a>
                            <a href="https://github.com/StefWolf"><GithubLogo size={40} /></a>
                        </div>
                    </nav>
                </header>
            </div> : <List size={64} onClick={setMenuMobile} className="fixed top-2 right-8 z-40 text-slate-200 lg:invisible" />}
    
        </>
        
    )
}

