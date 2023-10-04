import React, { useMemo, useState } from "react";
import presentes from "../../data/gitfs-data.json";
console.log({ presentes });

function useController() {
  const [showCount, setShowCount] = useState(4);

  const onSeeMoreHandle = () => {
    setShowCount(showCount + 2);
  };

  const slicedGifts = useMemo(() => {
    if (showCount >= presentes.length) return presentes;

    return presentes.slice(0, showCount);
  }, [showCount]);

  console.log({ showCount });

  return { onSeeMoreHandle, slicedGifts, showCount };
}

export default useController;
