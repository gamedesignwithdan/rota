// get employees
export const getEmployees = () => {
	return [
		'Andy',
		'Ben',
		'Carol',
		'Denise',
		'Eddie',
		'Francesca',
		'Geraint',
		'Helen',
		'Ivor',
		'Jacqueline',
	];
};

export const getRandomOrderEmployees = () => {
	const employees = getEmployees();
	return employees.sort(() => Math.random() - 0.5);
};
