import { Component } from 'react';
import nextId from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesLitst from '../employees-list/employees-litst';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Smit', salary: 999999, increase: false, rise: false, id: nextId() },
				{ name: 'Neo', salary: 8000, increase: true, rise: false, id: nextId() },
				{ name: 'Trinity', salary: 90000, increase: true, rise: false, id: nextId() },
				{ name: 'Morpheus', salary: 1200000, increase: true, rise: false, id: nextId() },
			],
		};
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	deleteItem = (id) => {
		this.setState(({ data }) => ({
			data: data.filter((element) => element.id !== id),
		}));

		/* 		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		}); */
	};

	addItem = (name, salary) => {
		this.setState({
			data: [...this.state.data, { name, salary, increase: false, rise: false, id: nextId() }],
		});
	};

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesLitst
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
