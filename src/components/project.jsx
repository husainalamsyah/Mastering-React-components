import React, { Component } from 'react';

class Project extends Component {
    state = {
        angka: 3,
        tags: ['tag1','tag2','tag3']
    };
    
    render() {
        return  (
            <div>
            <span style={{fontSize: 20}} className={this.getBadgeKelas()}> {this.formatAngka()}</span>
            <button className="btn btn-primary btn-sm">Increase</button>
            <ul>
                { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
            </ul>
            </div>
        
        );
    }

    getBadgeKelas() {
        let classes = "badge m-2 badge-";
        classes += this.state.angka === 3 ? "danger" : "warning";
        return classes;
    }

    formatAngka(){
        const {angka} = this.state;
        return angka === 3 ? 'Three' : angka;
    }
}
 
export default Project;
