import React from 'react';

function useLocalStorage(itemKey, initialValue) {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemKey);
        if (!localStorageItems) {
          localStorage.setItem(itemKey, JSON.stringify(initialValue));
        }
        const parsedItems = localStorageItems ? JSON.parse(localStorageItems) : initialValue;
        setItems(parsedItems);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itemKey, JSON.stringify(newItems));
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: 'Finish React course', completed: false },
  { text: 'Create a github repo for React course', completed: true },
  { text: 'Change images for webpage', completed: true },
  { text: 'Update favicon', completed: false },
  { text: 'User derived status', completed: true },
];
localStorage.setItem('TODOS_V1', defaultTodos);
localStorage.removeItem('TODOS_V1');
*/
