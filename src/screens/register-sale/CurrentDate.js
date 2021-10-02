import React from 'react';

let options = { year: 'numeric', month: 'long', day: 'numeric'};

class CurrentDate extends React.Component {
    state={
        currentTime : new Date().toLocaleString('es-ES', options),
    }
    render(){
        return(
            <div className="justify-content-end">
                <spam>FECHA DE VENTA: {this.state.currentTime}</spam>
            </div>
        );
    }
}

export default CurrentDate;