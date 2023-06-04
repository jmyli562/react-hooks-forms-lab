import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputText, setInputText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setInputText(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItemsToDisplay = items.filter((item) => {
    if (inputText === item.name || item.name.includes(inputText)) return true;

    return item.name === inputText;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={inputText}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {inputText === ""
          ? itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : filteredItemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
