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
				{ name: 'Smit', salary: 999999, increase: false, id: nextId() },
				{ name: 'Neo', salary: 8000, increase: true, id: nextId() },
				{ name: 'Trinity', salary: 90000, increase: true, id: nextId() },
				{ name: 'Morpheus', salary: 1200000, increase: true, id: nextId() },
			],
		};
	}

	deleteItem = (id) => {
		this.setState({
			data: this.state.data.filter((element) => element.id !== id),
		});

		/* 		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		}); */
	};
	addNewEmp = (name, salary) => {
		console.log(name, salary);
		this.setState({
			data: [...this.state.data, { name, salary, id: nextId() }],
		});
	};
	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesLitst data={this.state.data} onDelete={this.deleteItem} />
				<EmployeesAddForm onSubmit={this.addNewEmp} />
			</div>
		);
	}
}
export default App;
