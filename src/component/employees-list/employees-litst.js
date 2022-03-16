import EmployeesLitstItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesLitst = ({ data, onDelete }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return <EmployeesLitstItem key={id} {...itemProps} onDelete={() => onDelete(id)} />;
	});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesLitst;
