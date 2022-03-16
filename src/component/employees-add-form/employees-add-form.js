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
	addNewEmp = (e) => {};

	render() {
		const { onSubmit } = this.props;
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Додати нового співробітника</h3>
				<form className="add-form d-flex">
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
					<button
						type="submit"
						className="btn btn-outline-light"
						onClick={(e) => {
							e.preventDefault();
							return onSubmit(name, salary);
						}}
					>
						Додати
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
