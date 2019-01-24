import React, { Component } from 'react';

class Project extends Component {
    state = {
        angka: 3
    };
    
    render() {

        return  (
            <div>
            <span>{this.formatAngka()}</span>
            <button>Increase</button>
            </div>
        
        );
    }

    formatAngka(){
        const {angka} = this.state;
        return angka === 3 ? 'Three' : angka;
    }
}
 
export default Project;
