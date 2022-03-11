import './employees-add-form.css';

const EmployeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Додати нового співробітника</h3>
			<form className="add-form d-flex">
				<input type="text" className="form-control new-post-label" placeholder="Яке в нього імя?" />
				<input type="text" className="form-control new-post-laber" placeholder="З/П у $?" />
				<button type="submit" className="btn btn-outline-light">
					Додати
				</button>
			</form>
		</div>
	);
};

export default EmployeesAddForm;
