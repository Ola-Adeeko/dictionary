import React from "react";

import SearchBox from "./component/searchbox/searchbox.component";
import Display from "./component/display/display.component";
import CustomButton from "./component/button/button.component";
import WORD_DATA from './component/words';

import './App.css';


var words = WORD_DATA;

var randomWord = words[Math.floor(Math.random()*words.length)]

console.log(randomWord)


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dictionary:[],
      searchField: '',
    };
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  getWord = () => {
    console.log(this.state.searchField)
}

  componentDidMount() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
    .then((res) => {
      return res.json()
    })
    .then((word) => {
      this.setState({dictionary: word})
    })
  }

  apiGet = () =>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchField}`)
    .then((res) => {
      return res.json()
    })
    .then((word) => {
      this.setState({dictionary: word})
    })
  }

  apiClose = () => {
    this.setState({dictionary: ''})
  }

  render() {
  
      

      console.log(this.state.searchField)
      const { dictionary } = this.state
     
      return (
        <div className='app'>
            <div className="box-container">
              <div className='box'>
                  <SearchBox placeholder='Enter Word' onSearchChange={this.onSearchChange} className="search-box" />
              </div>
              
              <CustomButton  onClick={this.apiGet}>SEARCH</CustomButton>
              <Display word={dictionary} onClick={this.apiClose} className='display'/>
            </div>
        
        </div>
        
      );
    }
  }


export default App;