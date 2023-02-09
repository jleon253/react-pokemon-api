import { useEffect, useState } from "react";

export const useMatchMedia = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const [isMatchMedia, setIsMatchMedia] = useState(false);

  useEffect(() => {
    setIsMatchMedia(mediaQuery.matches);
    window.addEventListener('resize', () => setIsMatchMedia(mediaQuery.matches))
  }, []);

  return { isMatchMedia };
};