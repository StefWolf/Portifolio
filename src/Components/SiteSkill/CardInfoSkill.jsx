import screenWolf from '../../img/WolfGirl.jpg'
import BoxInfoCardS from './BoxInfoCardS'
import { FiUser, FiEdit3, FiCoffee } from "react-icons/fi";

export default function CardInfoSkill(){
    return(
        <section className="dark:bg-Fundo-dark bg-Cor-Texto shadow-lg dark:text-Cor-Texto text-Fundo-dark border-black/50 border-2 ml-[5%] mt-[2%]  w-[90%] h-[600px] lg:w-[25%] flex-col">
            <div>
                <div className='w-full justify-center pl-14 pt-7'>
                    <img src={screenWolf} />
                </div>
                <div className="text-[32px] w-full pl-[30%] ">
                    <p className='mt-4'>StefWolf</p>
                </div>
                <div className='w-full'>
                    <BoxInfoCardS 
                        icon={<FiEdit3 size={40} />}
                        title="Designer + Creative"
                        desc="Habilidades de designer"
                    />
                    <BoxInfoCardS 
                        icon={<FiCoffee size={40} />}
                        title="Programmer"
                        desc="Habilidades no meio profissional"
                    />
                    <BoxInfoCardS 
                        icon={<FiUser size={40} />}
                        title="Personality"
                        desc="Personalidade pessoal"
                    />
                    
            
                </div>
            </div>
        </section>
    )
}