/** @format */
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/seach-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employers-list/emloyers-list";
import EmployeesAddForm from "../employers-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
    };
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary, id) => {
    let newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  onToggleProp = (id, prop) => {
    //  this.setState(({ data }) => {
    // const index = data.findIndex((elem) => elem.id === id);
    // const old = data[index];
    // const newItem = { ...old, increase: !old.increase };
    // const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)];

    // return{
    // 	data:newArr
    // }
    //  });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  serchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

onUpdateSearch = (term)=>{
	this.setState({term});
}
  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increase = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.serchEmp(data, term);
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increase={increase}
        />

        <div className="search-panel">

          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
