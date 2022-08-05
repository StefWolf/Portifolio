import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CardInfoSkill from "../Components/SiteSkill/CardInfoSkill";
import ContainerProgress from "../Components/SiteSkill/ContainerProgress";

export default function Skills(){
    return(
        <>
            <Header />
            <br /><br /><br />
            <main className="h-[1050px] lg:h-[850px]">
                <div className=" flex lg:flex-row flex-col w-full">
                    <CardInfoSkill />
                   <ContainerProgress />
                </div>
            </main>
            <Footer />
        </>
    )
}