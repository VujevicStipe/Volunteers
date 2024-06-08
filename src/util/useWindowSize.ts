import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDeviceType = (windowSize: number) => {
    if (windowSize < 720) {
      return "mobile";
    } else if (windowSize < 1123) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  return getDeviceType(windowSize.width);
}

export default useWindowSize;
