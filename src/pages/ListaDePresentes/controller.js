import React, { useMemo, useState } from "react";
import presentes from "../../data/gitfs-data.json";

function useController() {
  const [showCount, setShowCount] = useState(5);

  const onSeeMoreHandle = () => {
    setShowCount(showCount + 4);
  };

  const slicedGifts = useMemo(() => {
    if (showCount >= presentes.length) {
      setShowCount(presentes.length);
      return presentes;
    }

    return presentes.slice(0, showCount);
  }, [showCount]);

  return {
    onSeeMoreHandle,
    slicedGifts,
    showCount,
    totalCount: presentes.length,
  };
}

export default useController;
