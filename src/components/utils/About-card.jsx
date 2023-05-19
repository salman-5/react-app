import abouticon from '../../assets/about-1.svg'


export default function About_card(props) {
    return(
<div className='m-5 w-[300px] text-white flex-col space-y-4'>
    <div className='flex flex-row space-x-3'>

<img src={props.icon} alt="" />
<b>
    {props.title}
</b>
    </div>
<p className='text-left text-xs justify font-Open-sans'>{props.content}</p>

</div>
    );
}