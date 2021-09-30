import React from 'react';

class CurrentDate extends React.Component {
    state={
        currentTime : new Date().toLocaleString('en-GB'),
    }
    render(){
        return(
            <div className="justify-content-end">
                <spam>FECHA VENTA: {this.state.currentTime}</spam>
            </div>
        );
    }
}

// const CurrentDate = () => {
//     state={
//         currentTime : new Date().toLocaleString(),
//     }
//     return(
//         <div>
//             <spam>FECHA VENTA {this.state.currentTime} </spam>
//         </div>
//     )
// };

export default CurrentDate;