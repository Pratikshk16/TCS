import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin }from 
"react-icons/fa6";
import FooterBg from "../../assets/website/coffee-Footer.png";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];
const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3
        pb-20 pt-5">
            {/*company details */}
            <div className='py-8 px-4'>
                <a href="#" className="font-semibold track-widest text-2xl 
                sm:text-3xl fomt-cursive"> Total Security Control</a>
                <p className='pt-4'>
                    {" "}
                    Z Type Security, Y Type Security, Trained Professionally
                </p>
                <a href = "https://www.youtube.com/watch?v=VU2rjKwhY_s"
                target="_blank"
                className='inline-block bg-[#3d2517] py-2
                px-4 mt-5 text-sm rounded-full'>
                    Visit Out YouTube Channel
                </a>
            </div>
            {/*Footer Links*/}
            <div className='col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10'>
                {/* First Col Links*/}
                <div className="py-8 px-4">
                    <h1 className='text-xl font-semibold
                    sm:text-left mb-3'>Quick Links</h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data, index)=> (
                                <li key={index}>
                                    <a href={data.link}
                                    className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                </li>
                            ))}
                    </ul>
                </div>
                {/*Company Address sec*/}
                <div className='py-8 px-4 col-span-2
                sm:col-auto'>
                    <h1 className='text-xl font-semibold
                    sm:text-left mb-3'>
                        Address
                    </h1>
                    <p className='mb-4'>Chattisgarh, India</p>
                    <p>+91 2378237041</p>
                    {/*Social Links*/}
                    <div className='space-x-3 mt-6'>
                        <a href="#">
                            <FaFacebook className='text-3xl
                            inline-block hover:scale-105
                            duration-200' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl
                            inline-block hover:scale-105
                            duration-200' />
                        </a>
                        <a href="#">
                            <FaInstagram className='text-3xl
                            inline-block hover:scale-105
                            duration-200' />
                        </a>
                    </div>
                </div>
                    


                    
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
