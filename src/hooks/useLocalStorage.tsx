import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(defaultValue);
  };

  return [value, setValue, removeValue];
};

export default useLocalStorage;
