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
