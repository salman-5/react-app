// import abouticon from '../../assets/about-1.svg'
import "../../styles.css";

export default function Door(props) {
  const rval = props.left;
  const lval = props.right;
  const in_bool = props.in_bool;
  //   0 25 50 75 100

  const RArray = Array.from(
    { length: rval },
    (_, index) => (index * 100) / (rval - 1)
  );
  const LArray = Array.from(
    { length: lval },
    (_, index) => (index * 100) / (lval - 1)
  );
  return (
    // <div className="flex flex-row h-[80vh] lg:h-[90vh]  items-center justify-center p-2 ">
    <div
      className={`flex flex-row h-[80vh] lg:h-[90vh]  items-center justify-center p-2`}
    >
      {/* <div className="img_box_area w-full py-5  "> */}
      {LArray.map((per, i) => {
        return (
          <div
            key={i}
            className={` flex flex-grow border-2 h-1/2 ${
              in_bool === true ? "img_box" : "img_box_reverse"
            }  border-blue-400  bg-[${per}%_center]`}
          ></div>
        );
      })}
      {/* <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div> */}
      {/* </div> */}
      {/* <div className="img_box_area w-full py-5 "> */}
      <div className="w-4"></div>
      <div className="w-4"></div>
      {RArray.map((per, i) => {
        return (
          <div
            key={i}
            className={` flex flex-grow border-2 h-1/2 ${
              in_bool === true ? "img_box" : "img_box_reverse"
            }  border-blue-400  bg-[${per}%_center]`}
          ></div>
        );
      })}
      {/* </div> */}
      {/* <div className="img_box_area ">
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
    <div className="img_box"></div>
  </div> */}
    </div>
  );
}
