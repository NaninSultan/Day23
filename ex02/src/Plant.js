import React, { Component } from 'react';

class Plant extends Component {
    constructor(props) {
        super(props);
        this.state = { type: "Flowering plant" };
    }
    render() {
        return <h2>Plant typle is {this.state.type}</h2>
    }
}

export default Plant;