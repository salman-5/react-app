export default function Button(props) {
    return (
        // <button class="rounded-full text-wrap p-4 font-bold text-white bg-blue-500 ">{props.text}</button>
        <button class={props.class}>{props.text}</button>
    
        );
}