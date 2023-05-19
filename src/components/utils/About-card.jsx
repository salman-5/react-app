import abouticon from '../../assets/about-1.svg'


export default function About_card(props) {
    return(
<div className='m-8 h-full text-white flex-col space-y-4'>
    <div className='flex flex-row space-x-3'>

<img src={props.icon} alt="" />
<b className='text-xl'>
    {props.title}
</b>
    </div>
<p className=' text-justify text-lg  font-Open-sans'>{props.content}</p>

</div>
    );
}