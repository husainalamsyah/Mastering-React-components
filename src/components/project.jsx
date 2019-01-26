import React, { Component } from 'react';

class Project extends Component {
    state = {
        angka: 3,
        tags: []
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>tidak ada tags disini</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    handleIncrease(){
        console.log("Increase Clicked", this);
    }
    
    render() {
        return  (
            <div>
            <span style={{fontSize: 20}} className={this.getBadgeKelas()}> {this.formatAngka()}</span>
            <button 
            onClick={this.handleIncrease}
            className="btn btn-primary btn-sm"
            >
            Increase
            </button>
            {/* {this.state.tags.length === 0 && "buat tag baru!"}
            { this.renderTags() }
             */}
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
