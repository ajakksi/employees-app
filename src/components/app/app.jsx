import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
            {name: 'Alex M.', salary: 800, increase: true,  rise:true, id:1},
            {name: 'Jan K.', salary: 2000, increase: true, rise:false, id:2},
            {name: 'Kate B.', salary: 5000, increase: false, rise:false, id:3},
            {name: 'Michael R.', salary: 1500, increase: false, rise:false, id:4}
            ]
        }
        this.maxId= 5;
    }

    deleteItem = (id) => {
        this.setState(({data})=>{
            return{
                data: data.filter(item=> item.id !== id)
            }

        })
    }

    AddEmployees = (name,salary) =>{
        if(name.trim().length>=2 && salary){
            const newItem ={
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

         this.setState(({data}) => {
            return{
                data: [...data, newItem ]
            }
        })
        }
       
    }

    onToggleProp = (id,prop) =>{
        this.setState(({data})=>({

            data: data.map(item=>{
                if(item.id===id){
                   return {...item,[prop]: !item[prop]}
                }
                return item;
                
            })
        }))

    }

   render(){

    const totalEmployees = this.state.data.length;
    const increaseEmployees = this.state.data.filter(item => item.increase).length;

        return(
            <div className = "app">  
                <AppInfo totalEmployees = {totalEmployees}
                 increaseEmployees = {increaseEmployees} />

                <div className="search-panel">
                    <SearchPanel />  
                    <AppFilter/>   
                </div>
                
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm
                onAddEmployees={this.AddEmployees}/>     

            </div>
        );
    }
    
}

export default App;