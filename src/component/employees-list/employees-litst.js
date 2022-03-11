import EmployeesLitstItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesLitst = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesLitstItem />
			<EmployeesLitstItem />
			<EmployeesLitstItem />
		</ul>
	);
};

export default EmployeesLitst;
