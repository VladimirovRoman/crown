import SignIn from '../../components/sign-in-form/sign-in-form.component';
import SignUp from '../../components/sign-up-form/sign-up-form.component';

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
