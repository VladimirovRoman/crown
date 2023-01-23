import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartComponent = () => {
	const { cartItems } = useContext(CartContext);

	
	return (
		<div>
			{cartItems.map((item) => (
				<CartItem key='item.id' cartItem={item} />
			))}
		</div>
	);
};

export default CartComponent;
