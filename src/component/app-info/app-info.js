import './app-info.css';

const AppInfo = ({ employees, increased }) => {
	return (
		<div className="app-info">
			<h1>Перелік співробітників у підприємстві Matrix</h1>
			<h2>Кількість співробітників взагалі: {employees}</h2>
			<h2>Винагороду отримають: {increased}</h2>
		</div>
	);
};

export default AppInfo;
