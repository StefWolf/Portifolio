

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}; //Nova data
    }

    render(){ //Renderização em tempo real
        return(
            <>
                <div className="w-10 h-10 bg-Cor-Secundaria text-white">
                    <p>
                        Hora atual: {this.state.date.toLocaleDateString()}.
                    </p>
                </div>
            </>
        )
    }
}