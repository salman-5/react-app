import FooterElement from "../Navelement copy";

export default function Footer() {

  const data_social=[

    {link: "https://www.emital.com",
    icon: "./social-media/Whatsapp.svg"}
    ,
    {link: "https://www.emital.com",
    icon: "./social-media/X.png"}
    ,
    {link: "https://www.instagram.com/emitalaluminiumworks/",
    icon: "./social-media/Instagram.svg"}
    ,
    {link: "https://www.linkedin.com/company/emital-aluminium/",
    icon: "./social-media/LinkedIn.png"}
    ,
    {link: "https://www.emital.com",
    icon: "./social-media/Facebook.png"}
    ,
  ];
  
  return (
    <>
      <div className="py-5 px-4 justify-between place-items-center mx-0 flex lg:flex-row flex-col  bg-black">
        <p className="text-white">© Copyright EMITAL. All Rights Reserved</p>
        <div className="flex items-center justify-between flex-row">
          {data_social.map((data) => (
            <FooterElement key={data.icon} link={data.link} icon={data.icon} />
          ))}
        </div>
      </div>
    </>
  );
}
