import React, { useMemo, useState } from "react";
import presentes from "../../data/gitfs-data.json";
import { useMediaQuery } from "react-responsive";

function useController() {
  const is1200px = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const is1400px = useMediaQuery({
    query: "(min-width: 1400px)",
  });

  const sliceAmount = useMemo(() => {
    if (is1400px) return 6;
    if (is1200px) return 4;

    return 4;
  }, [is1200px, is1400px]);

  const [showCount, setShowCount] = useState(sliceAmount);

  const onSeeMoreHandle = () => {
    setShowCount(showCount + sliceAmount);
  };

  const slicedGifts = useMemo(() => {
    if (showCount >= presentes.length) {
      setShowCount(presentes.length);
      return presentes;
    }

    return presentes
      .sort((a, b) => a.reservado - b.reservado)
      .slice(0, showCount);
  }, [showCount]);

  return {
    onSeeMoreHandle,
    slicedGifts,
    showCount,
    totalCount: presentes.length,
  };
}

export default useController;
