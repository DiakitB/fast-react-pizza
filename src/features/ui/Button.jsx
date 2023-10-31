import { Link } from 'react-router-dom';

function Button({ children, disable, to, type }) {
  const className =
    'inlie-block focus:bg-sky-30 rounded-full bg-sky-500 px-4 py-3 font-semibold uppercas tracking-wide  text-stone-800 transition-colors duration-300  hover:bg-sky-300 focus:outline-none focus:ring  focus:ring-sky-300 focus:ring-offset-2 uppercase';

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disable} className={className}>
      {children}
    </button>
  );
}

export default Button;
