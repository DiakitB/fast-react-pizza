import { Link } from 'react-router-dom';
import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = fakeCart;

  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-700 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-5 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <button className="inlie-block focus:bg-sky-30 uppercas rounded-full bg-red-500 px-4 py-3 font-semibold uppercase  tracking-wide text-stone-800 transition-colors  duration-300 hover:bg-sky-300 focus:outline-none  focus:ring focus:ring-sky-300 focus:ring-offset-2">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
