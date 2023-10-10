import React, { useMemo, useState } from "react";

function useController() {
  const [imgVisible, setImgVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const onPalleteImgClick = (imgElement) => {
    if (imgElement.src) {
      setImgSrc(imgElement.src);
      setImgVisible(true);
    }
  };
  const onSelectedImgClick = () => {
    setImgVisible(false);
  };

  const selectedImgClasses = useMemo(() => {
    const baseClass = "selectedPalleteImg";

    if (imgVisible) return baseClass + " palleteImgVisible";

    return baseClass;
  }, [imgVisible]);

  return { onSelectedImgClick, onPalleteImgClick, selectedImgClasses, imgSrc };
}

export default useController;
