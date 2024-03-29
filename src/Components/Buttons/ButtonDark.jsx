import { Link } from "react-router-dom";

export default function ButtonDark({url, text, type}){
    return(
        <a 
        href={url}
            className={type === 'Dark' ? '  text-Cor-Texto text-[14px]  bg-Cor-Secundaria hover:text-[#949494] transition-colors rounded-sm p-2' : 'text-Cor-Texto text-[14px] bg-white hover:text-[#949494] transition-colors rounded-sm p-2'}>
            
            {text}
        </a>
       
    )
}