import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component {
  state={
    movies:[],
    
  };

  componentDidMount(){
    this.getMovies();
  }

  getMovies(){
    axios.get("http://localhost:3333/todos")
    .then((res)=>{
      this.setState({movies:res.data})
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map((movie)=>(
          <div key={movie.id}>
            <h1>{movie.name}</h1>
            <h2>{movie.description}</h2>

          </div>
        ))}
      </div>
    );

  }
  
}

export default App;
