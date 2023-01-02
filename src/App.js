import { Routes, Route } from 'react-router-dom';

import SignIn from './components/sign-in/Sign-in';
import Home from './routes/home/home.jsx';
import Navigation from './routes/navigation/navigation';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
