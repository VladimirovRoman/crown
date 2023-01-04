import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
	const { id, name, imageUrl, price } = product;

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className=''>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted'>Add to card</Button>
		</div>
	);
};

export default ProductCard;
