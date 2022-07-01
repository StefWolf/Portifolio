
export default function ButtonDark(props){
    return(
        <button href={props.url} className="text-Cor-Texto text-[14px] 
                            bg-Fundo-dark 
                            hover:text-[#949494] transition-colors rounded-sm p-1
        ">
            {props.text}
        </button>
    )
}