"use client";

import { useEffect, useState } from "react";

export function useDebounce(value: string) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  return debounce;
}
