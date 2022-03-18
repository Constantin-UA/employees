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
				{ name: 'Smit', salary: 800, increase: false, rise: false, id: nextId() },
				{ name: 'Neo', salary: 3000, increase: true, rise: false, id: nextId() },
				{ name: 'Trinity', salary: 750, increase: true, rise: false, id: nextId() },
				{ name: 'Morpheus', salary: 1200, increase: true, rise: false, id: nextId() },
			],
			term: '',
			filter: 'all',
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

	searchEmp = (items, term) => {
		if (term.length === 0) return items;

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter((item) => item.rise);
			case 'moreThen1000':
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	onFilterSearch = (filter) => {
		this.setState({ filter });
	};

	onChangeSalary = (salary, id) => {
		console.log(salary, id);
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary };
				}
				return item;
			}),
		}));
	};

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;
		const visibleDate = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSearch={this.onFilterSearch} />
				</div>

				<EmployeesLitst
					data={visibleDate}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
