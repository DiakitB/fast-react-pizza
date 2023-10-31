import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';
import Button from '../ui/Button';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const fromError = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const cart = fakeCart;

  return (
    <div className=" mb-5 flex  flex-col gap-2 sm:flex-row sm:items-center">
      <h2>Ready to order? Lets go!</h2>

      <Form method="POST">
        <div>
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div className=" mb-5 flex  flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {fromError?.phone && (
            <p className="rounded-md border bg-red-200 p-2 text-xs text-red-700">
              {fromError.phone}
            </p>
          )}
        </div>

        <div className=" mb-5 flex  flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400     
             placeholder:text-stone-400 focus:ring
               focus:ring-yellow-400 focus:ring-offset-2 md:px-6 md:py-3"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? 'Placing order...' : 'Place order'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// ACTION FUNCTION WITH REDIRECT ACTION
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  if (Object.keys(errors).length > 0) return errors;
  // console.log(order);
  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
  return null;
}
export default CreateOrder;
