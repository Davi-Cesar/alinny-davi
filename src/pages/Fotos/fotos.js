import { useState } from "react";
import "./fotos.css";
const quadro1 = ["pw1.jpg", "pw2.jpg", "pw3.jpg"];
export default function Fotos() {
  const [image, setImage] = useState(0);

  // function interval(quadro) {
  //   setImage((index) => {
  //     if (index === quadro.length - 1) {
  //       return 1;
  //     } else {
  //       return index + 1;
  //     }
  //   }, 3000);
  // }

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     interval(quadro1);
  //   }, 3000);
  // }, [interval]);

  return (
    <>
      <div className="container-fotos">
        <div className="box-image">
          <img src={quadro1[image]} alt="" />
        </div>
        <div className="box-image">
          <img src="/pw2.jpg" alt="" />
        </div>
        <div className="box-image">
          <img src="/pw3.jpg" alt="" />
        </div>
        {/* <div className="box">
          <img src="https://source.unsplash.com/1000x808" alt="" />
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/1000x801" alt="" />
        </div> */}
      </div>
    </>
  );
}
