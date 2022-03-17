import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		// enter validation here!!???
		if (this.state.name.length > 3 && this.state.salary > 0) {
			this.props.onAdd(this.state.name, this.state.salary);
			this.setState({
				name: '',
				salary: '',
			});
		}
	};

	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Додати нового співробітника</h3>
				<form className="add-form d-flex" onSubmit={this.onSubmit}>
					<input
						type="text"
						name="name"
						value={name}
						className="form-control new-post-label"
						placeholder="Яке в нього імя?"
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						name="salary"
						value={salary}
						className="form-control new-post-laber"
						placeholder="З/П у $?"
						onChange={this.onValueChange}
					/>
					<button type="submit" className="btn btn-outline-light">
						Додати
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
