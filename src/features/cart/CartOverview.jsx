import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartCart, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../utils/helpers';

function CartOverview() {
  const totatlCartQuantity = useSelector(getTotalCartCart);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totatlCartQuantity) return null;
  return (
    <div
      className="flex items-center justify-between
     bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totatlCartQuantity}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
