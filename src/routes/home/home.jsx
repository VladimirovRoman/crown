import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory';

const Home = () => {
	return (
		<div>
			<Outlet />
			<Directory />
		</div>
	);
};

export default Home;
