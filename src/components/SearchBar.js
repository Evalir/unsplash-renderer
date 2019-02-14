import React from 'react'

class SearchBar extends React.Component {
    
    state = {term: "Type your search query..."}
    //transform to arrow function to fix this binding problem, or pass callback to keep this as a normal function
    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.term) //this calls a callback function passed by its parent, with the parameter that it wants
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Label search</label>
                        <input 
                        type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                        {/* onChange is a built-in event*/}
                    </div>
                </form>
            </div>
        )
    }
}

// Search bar flow: user types, onChange triggers, component re-renders, value gets state
export default SearchBar