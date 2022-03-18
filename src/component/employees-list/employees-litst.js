import { Component } from 'react';

import EmployeesLitstItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesLitst extends Component {
	//
	constructor(props) {
		super(props);
		this.state = {
			salary: '',
			id: '',
		};
	}

	onSalaryUpdate = (e, id) => {
		const salary = e.target.value.replace(/\D/g, '');
		this.props.onChangeSalary(salary, id);
	};

	render() {
		const { data, onDelete, onToggleProp } = this.props;

		const elements = data.map((item) => {
			const { id, ...itemProps } = item;
			return (
				<EmployeesLitstItem
					key={id}
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
					onSalaryUpdate={(e) => this.onSalaryUpdate(e, id)}
				/>
			);
		});
		return <ul className="app-list list-group">{elements}</ul>;
	}
}

export default EmployeesLitst;
