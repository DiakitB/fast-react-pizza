import { formatCurrency } from "../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="bg-gray-200 text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-red-500">
              Sold out
            </p>
          )}
          <button>Add to Cart</button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
