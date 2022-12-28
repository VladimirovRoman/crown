const App = () => {
	const categories = [
		{
			title: 'Hats',
			id: 1,
		},
		{
			title: 'Jackets',
			id: 2,
		},
		{
			title: 'Sneakers',
			id: 1,
		},
		{
			title: 'Womens',
			id: 1,
		},
		{
			title: 'Mans',
			id: 1,
		},
	];

	return (
		<div className='categories-container'>
			{categories.map(({ title }) => (
				<div className='category-container'>
					<div className='background-image' />
					<div className='category-body-container'>
						<h2>{title}</h2>
						<p>Shop now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
