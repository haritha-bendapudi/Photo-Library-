 import React from 'react';
 import './SearchBar.css';

    class SearchBar extends React.Component {
        state = {val: ''}

        onInputChange = (event) =>{
            this.setState({val: event.target.value})
        }

        onFormSubmit = (event) =>{
            event.preventDefault();
            this.props.userSubmit(this.state.val);
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit} className="SearchBox">
                        <label><h3> Search:     </h3></label>
                        <input 
                            className="inputStyle" 
                            type="text"
                            value={this.state.val}
                            onChange = {this.onInputChange} />
                    </form>
                </div>
            )
        }
    }

    export default SearchBar;
