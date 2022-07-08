import ButtonProgress from "./Buttons/ButtonProgress"

export default function ProgressHistory(){

    return(
        <>
            <div data-aos="fade-down" className=" w-full p-[5%] lg:flex justify-center gap-32 mt-14">
                <div>
                    <ButtonProgress title="Ensino" />
                    <div className="border-l-2 lg:border-b-2 border-Cor-Secundaria min-h-[200px] ml-7 lg:max-w-[190px] text-white">
                        <div>
                            <ul>
                                <li className=" border-Cor-Secundaria pt-4 flex">
                                    <div className="bg-Cor-Texto-Secundaria h-[20px] w-[20px] rounded-full -ml-1"></div>
                                    <p className="ml-2"><strong>Centro Estadual de Educação Profissional Professora Lourdinha Guerra</strong> (2018-2020)</p>
                                </li>
                                <li className=" border-Cor-Secundaria pt-4 flex">
                                    <div className="bg-Cor-Texto-Secundaria h-[20px] w-[20px] rounded-full -ml-1"></div>
                                    <p className="ml-2"><strong>UFRN - Bacharelado em Tecnologia da Informação</strong> (2021)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <ButtonProgress title="Experiência" />
                    <div className="border-l-2  border-Cor-Secundaria h-[200px] ml-7">

                    </div>
                </div>

                <div>
                    <ButtonProgress title="Habilidades" />
                    <div className="border-l-2  border-Cor-Secundaria h-[200px] ml-7">

                    </div>
                </div>
            </div>
        </>
    )
}