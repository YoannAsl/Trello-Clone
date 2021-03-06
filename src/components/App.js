import React from "react";
import List  from "./List";

class App extends React.Component {
    state = { term:"", items:[] }

    onChange = event => {
        this.setState({term: event.target.value});
    }
    
    onSubmit = event => {
        event.preventDefault();
        if (this.state.term !== "") {
            this.setState({
                term: "",
                items: [...this.state.items, this.state.term]
            }); 
        }
    }

    removeItem= e => {
        this.setState({items: this.state.items.filter(item => item !== e.target.innerHTML)});
    }
        
    
    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <div className="ui input">
                        <input value={this.state.term} onChange={this.onChange} />
                    </div>
                    <button className="ui button">Submit</button>
                </form>
                <List items={this.state.items} onClick={this.removeItem} />
            </div>
        );
    }
}

export default App;