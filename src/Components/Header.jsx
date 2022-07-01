import icone from '../img/icone.png'
import Wolf_black from '../img/Wolf_black.png'
import Wolf_white from '../img/Wolf_white.png'

export default function Header(){
    return (
        <header className="w-full flex h-16 justify-around items-center py-8 absolute bg-Fundo-dark/80 z-20">
            <img className='w-16  h-16' src={Wolf_white} alt="Icone site" />
            <nav className="flex gap-4 text-Cor-Texto text-1xl">
                <a className="hover:text-Cor-Secundaria transition-colors" href="#">Inicio</a>
                <a className="hover:text-Cor-Secundaria transition-colors" href="#">Habilidades</a>
                <a className="hover:text-Cor-Secundaria transition-colors" href="#">Projetos</a>
            </nav>
        </header>
    )
}