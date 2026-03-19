import { useState } from "react";
import CategoryCard from "./CategoryCard";
import withPopularLabel from "./PopularAccordion";

const MenuAccordion = ({ categories }) => {

  const [showItems, setShowItems] = useState("");

  const handleClick = (title) => {
    setShowItems((prev) => (prev === title ? "" : title));
  };

  const CategoryWithLabel = withPopularLabel(CategoryCard);

  return (
    <div className="mt-4">

      {categories.map((category) => (

        <CategoryWithLabel
          key={category.title}
          category={category}
          showItems={showItems}
          handleClick={handleClick}
          isPopular={category.isPopular}
        />

      ))}

    </div>
  );
};

export default MenuAccordion;