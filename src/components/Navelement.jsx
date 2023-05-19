export default function MenuElement (props){
    return(
    <p onClick={() => props.funx(props.s)} className="font-bold p-4 font-Poppins text-stone-400 cursor-pointer ">{props.name}
    
    </p>);
}