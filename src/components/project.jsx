import React, { Component } from 'react';

class Project extends Component {
    state = {
        angka: 0,
        tags: []
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>tidak ada tags disini</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    
    // constructor() {
    //     super();
    //     this.handleIncrease = this.handleIncrease.bind(this);
    // }

    handleIncrease = () => {
        this.setState({angka: this.state.angka + 1})
    };
    
    render() {
        return  (
            <div>
            <span style={{fontSize: 20}} className={this.getBadgeKelas()}> {this.formatAngka()}</span>
            <button 
            onClick={this.handleIncrease}
            className="btn btn-primary btn-lg"
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
        classes += this.state.angka === 0 ? "danger" : "warning";
        return classes;
    }

    formatAngka(){
        const {angka} = this.state;
        return angka === 0 ? 'zero' : angka;
    }
}
 
export default Project;
