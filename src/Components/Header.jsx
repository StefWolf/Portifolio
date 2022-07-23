import { PhosphorLogo, List } from 'phosphor-react'
import { useState } from 'react'
import icone from '../img/icone.png'
import Wolf_black from '../img/Wolf_black.png'
import Wolf_white from '../img/Wolf_white.png'

export default function Header(){
    const [menuMobile, setMenuMobile] = useState(false)
    function menuBaile(){
        setMenuMobile(!menuBaile)
    }
    return (
        <>
            <header className="lg:w-full p-3 lg:flex lg:p-0 hidden lg:h-16 justify-around items-center py-8 absolute bg-Fundo-dark lg:bg-Fundo-dark/80 z-20">
                <img className='w-16  h-16' src={Wolf_white} alt="Icone site" />
                <nav className="lg:flex-row flex-col flex gap-4 text-Cor-Texto text-1xl">
                    <a  className="hover:text-Cor-Secundaria transition-colors" href="/">Inicio</a>
                    <a className="hover:text-Cor-Secundaria transition-colors" href="/Caderno">Meu caderno</a>
                    <a className="hover:text-Cor-Secundaria transition-colors" href="/Projects/">Projetos</a>
                </nav>
            </header>

            
            { menuMobile ? <div className="bg-Fundo-dark/50 w-full h-full z-30 fixed top-0" onClick={menuBaile}>
                <header data-aos="fade-right" className=" w-[50%] z-20 h-screen fixed border-r-2 border-black/40 top-0 bg-Fundo-dark ">
                    <nav className="pt-20 gap-4 text-white/80 text-[20px] w-full h-screen flex flex-col text-center">
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/">Inicio</a>
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/Caderno">Meu Caderno</a>
                        <a onClick={setMenuMobile} className="hover:text-Cor-Secundaria transition-colors" href="/Projects/">Projetos</a>
                    </nav>
                </header>
            </div> : <List size={64} onClick={setMenuMobile} className="fixed top-2 right-8 z-40 text-slate-200 lg:invisible" />}
    
        </>
        
    )
}