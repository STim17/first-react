import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search/search';
// import { CardList } from './components/card-list/card-list';
// import { Search } from './components/search/search';

class App extends React.Component {
 
    constructor(){
      super();

      this.state = {
        usersM: [],
        userField: '',
  
      }
      
    
      // this.myOnchange = this.myOnchange.bind(this);
      
    }

    componentDidMount(){
      
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({ usersM: data }) )
    }

  // onChange = (e) => {
  //   this.setState({ userField: e.target.value })
  // }

  myOnchange = e => {
    this.setState({ userField: e.target.value })
  }


  render() {
   
    const {usersM, userField} = this.state;

    const filteredUsers = usersM.filter(fr =>
      fr.name.toLowerCase().includes(userField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className='df'>Monsters Rolodex</h1>

       <h1>smth bro</h1>
        {/* <input placeholder='search...' onChange={e=> this.setState({userField: e.target.value})} /> */}
        <Search
          selfText='search...'
          myChange={this.myOnchange}
        />
        <CardList usersM={filteredUsers} />

        {/* <button onClick={() => this.setState({ name: 'TimBro' })}>changeBy</button> */}
      </div>
    );

  }
}

 export default App;
 
{/* <Search 
          selfText = 'for search...'
          myChange={this.onChange }
          // myChange={e => this.setState({ userField: e.target.value })} L30
        /> */}
{/* <CardList usersM= {filteredUsers} /> */ }