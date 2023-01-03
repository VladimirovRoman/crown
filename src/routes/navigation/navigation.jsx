import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	console.log(currentUser);
	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/authentication'>
						SignIn
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
