import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setDisplay(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{display}</span>;
};

export default AnimatedNumber;