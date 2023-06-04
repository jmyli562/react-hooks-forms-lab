import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formText, setFormtext] = useState("");
  const [selectValue, setSelectValue] = useState("Produce");

  function createNewItem(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formText,
      category: selectValue,
    };

    onItemFormSubmit(newItem);

    setFormtext("");
    setSelectValue("");
  }

  function handleFormText(event) {
    setFormtext(event.target.value);
  }

  function handleSelectValue(event) {
    setSelectValue(event.target.value);
  }
  return (
    <form className="NewItem" onSubmit={createNewItem}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formText}
          onChange={handleFormText}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={selectValue}
          onChange={handleSelectValue}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
