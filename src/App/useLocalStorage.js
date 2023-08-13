import React from 'react';

function useLocalStorage(itemKey, initialValue) {
  const localStorageItems = localStorage.getItem(itemKey);
  if (!localStorageItems) {
    localStorage.setItem(itemKey, JSON.stringify(initialValue));
  }
  const parsedItems = localStorageItems ? JSON.parse(localStorageItems) : initialValue;
  const [items, setItems] = React.useState(parsedItems);

  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itemKey, JSON.stringify(newItems));
  };

  return [items, saveItems];
}

export { useLocalStorage };
