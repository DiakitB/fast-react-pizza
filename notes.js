////TAILWING STYLING CRASH COURSE

/// In order to make a element absolute we use use the "absolute className" and to make the element straich accross the entire view port we need to set left,
///// right, top bottom to zero. We can easyly achieve that in tailwing by using this class name "inset-0" we can also set the opacity of the bg color by just adding
//// a backslach to the bg exp: bg-slate-200/20  the 20 is the opacity we can  blur the background by using this class name "backdrop-blur-sm
// we can use flex className to push the element to the center

///BOX MODEL: SPACING, BORDER, AND DISPLAY
/// SPACING CLASS
// MARGING THE MUST USEFULL ONCES ARE "mb-", mt-
/// Padding Must use classNames are : px- py- pr- we can also use "border-" "border-b-, border-t-" we can also add color to our border "border-blue-200"

/// Spacing between elements:  we have to add this class name to the parent elements of the elements that we want to space out
/// ClassNames: "space-y-2" space-x-3

//// Responsive Design we prefixed break points by using these classes sm:values md: values, lg:values, xl:
//// EXP: sm: w-20

//// Using Flex box

/// we can use react Form element which allows us to get all the data from the form in our action function
/// by accessing the request object in our form. in our action function
/// we then conver that data into an object
// we can also add any data to our form that we can acces in the request object
// Exple:
///
// export async function action({ request }) {
//   console.log(request);
//   const formData = await request.formData();
//   console.log(formData);
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   const order = {
//     ...data,
//     cart: JSON.parse(data.cart),
//     priority: data.priority === 'on',
//   };
//   const errors = {};
//   if (!isValidPhone(order.phone))
//     errors.phone =
//       'Please give us your correct phone number. We might need it to contact you.';
//   if (Object.keys(errors).length > 0) return errors;
//   // console.log(order);
//   // const newOrder = await createOrder(order);

//   // return redirect(`/order/${newOrder.id}`);
//   return null;
// }

///
