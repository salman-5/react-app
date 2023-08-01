// import abouticon from '../../assets/about-1.svg'
import '../../styles.css'


export default function Door() {
    const rval =7;
    const lval = 7;
    const initialValue = 0;
    //   0 25 50 75 100
    const RArray = Array.from({ length: rval }, (_, index) => index * 100 / (rval - 1));
    const LArray = Array.from({ length: lval }, (_, index) => index * 100 / (lval - 1));
    return (

        <div class="flex flex-row  items-center justify-center space-x-2 py-2 ">
            <div class="img_box_area w-full py-5  ">
                {LArray.map((per) => {
                    return <div class={` flex flex-grow border-2 border-blue-400 img_box bg-[${per}%_center]`}></div>;
                })}
                {/* <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div> */}
            </div>
            <div class="img_box_area w-full py-5 ">
                {RArray.map((per) => {
                    return <div class={` flex flex-grow border-2 border-blue-400 img_box bg-[${per}%_center]`}></div>;
                })}
            </div>
            {/* <div class="img_box_area ">
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
    <div class="img_box"></div>
  </div> */}


        </div>

    );
}