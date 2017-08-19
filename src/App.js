import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
            super(props);
            
            this.state = {
                value: 'Teal'
            }
            this.handleChange = this.handleChange.bind(this);
        }
        

        handleChange(e) {
            var val = e.target.value
            this.setState({value: val });
            this.bgColorUpdate(val);
        }
    
        componentDidMount() {
            var body = document.querySelector('body');
            body.style.background = this.state.value
        }
    
        bgColorUpdate(val) {
            var body = document.querySelector('body');
            body.style.background = val
        }


    render() {

        return(
            <div>
                <h1>Choose your bg color:</h1>
                <select defaultValue={this.state.value} onChange={this.handleChange}>
                    <option value="Teal">Teal</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
                <p>{this.state.value}</p>
            </div>
        )
    }
};

export default App;