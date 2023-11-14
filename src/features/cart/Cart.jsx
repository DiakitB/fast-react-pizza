import { Link } from 'react-router-dom';
import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  // const cartitems = useSelector(getCartItems);
  // console.log(cartitems);

  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;
  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-700 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-5 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <button
          className="inlie-block focus:bg-sky-30 uppercas rounded-full bg-red-500 
        px-4 py-3 font-semibold uppercase  tracking-wide text-stone-800 transition-colors 
         duration-300 hover:bg-sky-300 focus:outline-none  focus:ring focus:ring-sky-300 focus:ring-offset-2"
          onClick={handleClear}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
