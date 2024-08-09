import { useEffect, useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 767,
    height: 0,
  });

  useLayoutEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set size at the first client-side load
    handler();

    window.addEventListener("resize", handler);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useWindowSize;
