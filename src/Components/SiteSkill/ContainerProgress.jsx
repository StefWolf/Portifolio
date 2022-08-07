import { FiUser, FiEdit3, FiCoffee } from "react-icons/fi";


export default function ContainerProgress(){
    return(
        <section className="w-[90%] min-h-[100px] lg:w-[50%] lg:ml-[10%] ml-[5%] flex-col mt-[2%]">
            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiCoffee size={30} />
                </div>
                <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 text-Cor-Texto rounded-full w-[75%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            HTML
                        </div>
                        <p className="pl-2  text-sm">
                            75%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiCoffee size={30} />
                </div>
                <div class="w-full bg-gray-200 text-Cor-Texto rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[60%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            CSS
                        </div>
                        <p className="pl-2  text-sm">
                            60%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiCoffee size={30} />
                </div>
                <div class="w-full bg-gray-200 text-Cor-Texto rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[35%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            Jscript
                        </div>
                        <p className="pl-2  text-sm">
                            35%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiCoffee size={30} />
                </div>
                <div class="w-full bg-gray-200 text-Cor-Texto rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[40%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            React
                        </div>
                        <p className="pl-2  text-sm">
                            40%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiCoffee size={30} />
                </div>
                <div class="w-full bg-gray-200 text-Cor-Texto rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[60%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            SQL
                        </div>
                        <p className="pl-2  text-sm">
                            60%
                        </p>
                    </div>
                </div>
            </div>
            <br />


            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiEdit3 size={30} />
                </div>
                <div class="w-full bg-gray-200 text-Cor-Texto  rounded-full h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[25%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            Figma
                        </div>
                        <p className="pl-2 text-sm">
                            25%
                        </p>
                    </div>
                </div>
            </div>
            <br />

            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiUser size={30} />
                </div>
                <div class="w-full bg-gray-200 rounded-full text-Cor-Texto h-5 dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[80%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            Creative
                        </div>
                        <p className="pl-2 text-sm">
                            80%
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row dark:text-Cor-Texto text-Fundo-dark">
                <div className="mt-2 mr-2">
                    <FiUser size={30} />
                </div>
                <div class="w-full bg-gray-200 rounded-full h-5 text-Cor-Texto  dark:bg-gray-700 flex mt-4">
                    <div class="bg-blue-600 h-5 rounded-full w-[70%] flex rlex-row" >
                        <div className="w-[60px] p-0.5 h-[100%] text-[12px] rounded-bl-lg rounded-tl-lg bg-Cor-Texto-Secundaria">
                            Proative
                        </div>
                        <p className="pl-2  text-sm">
                            70%
                        </p>
                    </div>
                </div>
            </div>

            
        </section>
    )
}