import React, { Component } from 'react';

class Project extends Component {
    state = {
        angka: 3
    };
    
    render() {

        return  (
            <div>
            <span style={{fontSize: 20}} className="badge badge-danger m-2">{this.formatAngka()}</span>
            <button className="btn btn-primary btn-sm">Increase</button>
            </div>
        
        );
    }

    formatAngka(){
        const {angka} = this.state;
        return angka === 3 ? 'Three' : angka;
    }
}
 
export default Project;
