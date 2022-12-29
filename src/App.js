import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.jsx';

const App = () => {
	return (
		<Routes>
			<Route pat='/' element={Home} />
		</Routes>
	);
};

export default App;
