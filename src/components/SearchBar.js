import React from 'react';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

            term: []
        };
        
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this); 
        this.pressEnter = this.pressEnter.bind(this);
    }
    
    handleTermChange(event) {
        
       this.setState({term: event.target.value}); 
    }
    
    search() {
        
        this.props.onSearch(this.state.term);
        console.log('this is ')
       
    }
    
    pressEnter = (event) => {
        
        if (event.key === 'Enter') {            
          this.search();
        };
    }
    
    
    render(){
        return(
        <div className="SearchBar" type="submit">
            <input  placeholder="Enter A Song, Album, or Artist" onKeyPress={this.pressEnter} onChange={this.handleTermChange}  />
            <a onClick={this.search}></a>
        </div>
        );
        
    }
}

export default SearchBar;