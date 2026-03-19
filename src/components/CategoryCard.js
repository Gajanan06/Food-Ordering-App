const CategoryCard = ({ category, showItems, handleClick }) => {

  return (
    <div className="mb-3 border rounded-lg">

      <div
        className="p-3 bg-gray-100 cursor-pointer flex justify-between"
        onClick={() => handleClick(category.title)}
      >
        <span>{category.title}</span>
        <span>{showItems === category.title ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems === category.title && (
        <div className="p-3">
          {category.itemCards.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <span>₹{item.price / 100}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CategoryCard;