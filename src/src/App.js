import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      items : [],
      currentList :{
        text : '',
        key : ''
      }
    }
    this.handleinput = this.handleinput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleinput (e) {
    this.setState({
      currentList :{
        text : e.target.value,
        key : Date.now()
      }
    })
  }

  addItem (e) {
    e.preventDefault();
    const newItem = this.state.currentList;
    //console.log(newitem);
    if (newItem.text !==" "){
       const items = [...this.state.items,newItem];
       this.setState ({
         items : items,
         currentList :{
           text :'',
           key : ''
         }
       })
    }

  }

  deleteItem (key) {
    const filteredItems = this.state.items.filter (item =>
      item.key!==key);
      this.setState({
        items :filteredItems
      })
  }

  setUpdate (text,key) {
    const items = this.state.items;
    items.map(item => {
      if (item,key === key)
      {item.text = text;}
    })
    this.setState({
      items : items
    })
  }
  render() {
    return (
      <div>
      <h1>TASK MANAGER</h1>
      <div className="App">
       <header>
         <form id ="todolist" onSubmit ={this.addItem}>
           <input type="text" placeholder="List your work here ..." value= {this.state.currentList.text} onChange= {this.handleinput}></input>
           <button type="submit">List</button>
           
         </form>  
       </header> 
       <ListItems items = {this.state.items} deleteItem = {this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
      </div>
    )
  }
}



export default App;
