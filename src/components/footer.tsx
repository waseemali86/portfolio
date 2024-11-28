import Image from "next/image";
function Footer() {
  return (
    <footer className="md:max-w-7xl bg-slate-200 pt-8 ">
      <div className="w-full h-auto cursor-pointer bg-white rounded-xl text-lg ">
        <div className="text-center">
          <p className="text-3xl font-bold pt-4 ">Portfolio</p>
        </div>
        <div>
        <div className="flex justify-center gap-5 pt-2 ">
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Facebook.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Instagram.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Twitter.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Linkeding.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Youtube.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Dribbble.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
      </div>
        </div>
        <div className="md:flex md:justify-evenly hidden  mx-16 mb-6">
          <div>
            <p className="font-semibold md:mt-6 pb-4">About us</p>
            <p>Home</p>
            <p>Portfolio</p>
            <p>Projects</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className="font-semibold mt-6 pb-4">contact us</p>
            <p>WhatsApp +92-3113045250</p>
            <p>Phone +92-3093314935</p>
            <p>Email waseemjunejo1890@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold mt-6 pb-2">Skills</p>
            <p>Html</p>
            <p>Css</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Next.js</p>
            <p>Full-stack Developer</p>
          </div>
          <div>
            <p className="font-semibold md:pr-4 mt-6 pb-4">Social Media</p>
            <p>Linkdin</p>
            <p>Youtube</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Tiktok</p>
          </div>
        </div>
        <div className="text-center text-lg py-4">
            <p>
                @2024 Muhammad Waseem 
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
