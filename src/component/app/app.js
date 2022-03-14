import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesLitst from '../employees-list/employees-litst';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
	const data = [
		{ name: 'Smit', salary: 999999, increase: false, id: 1 },
		{ name: 'Neo', salary: 8000, increase: true, id: 2 },
		{ name: 'Trinity', salary: 90000, increase: true, id: 3 },
		{ name: 'Morpheus', salary: 1200000, increase: true, id: 4 },
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesLitst data={data} />
			<EmployeesAddForm />
		</div>
	);
}
export default App;
