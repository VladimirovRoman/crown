import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
