import SignIn from '../sign-in-form/sign-in-form';
import SignUp from '../sign-up-form/sign-up-form';
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Authentication;
