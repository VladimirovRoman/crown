import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUp from '../../sign-up-form/sign-up-form';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};    

	return (
		<div>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUp/>
		</div>
	);
};

export default SignIn;
