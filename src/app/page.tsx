import Image from "next/image";
import Project from "@/app/projects/page";
import Contact from "@/app/contact/page";
import Footer from "@/components/footer";
import About from "@/app/about/page";

function Homepage() {
  return (
    <main className="bg-slate-200 md:max-w-7xl cursor-pointer ">
      <div className="flex flex-col-reverse md:flex-row md:h-96 lg:h-auto bg-white pb-10  md:pb-16 mx-1 md:mx-1 md:flex md:justify-between lg:justify-around">
        {/* left side */}
        <div className="text-center md:text-left mt-4 lg:pt-32 md:pt-20 md:pl-20 lg:pl-2">
          <h1 className="text-3xl font-bold md:text-4xl md:font-bold lg:text-5xl">
            <span className="text-white md:text-black">{"I'm"}</span>{" "}
            <span className="md:text-orange-400 hover:text-orange-500 text-3xl sm:text-4xl md:text-4xl lg:text-5xl pr-12">
              Waseem Junejo
            </span>{" "}
            <br />
            <span className="text-orange-400 text-xl md:text-4xl lg:text-5xl">
              {" "}
              Front-end{" "}
            </span>{" "}
            <span className="text-orange-400 md:text-black text-xl md:text-4xl lg:text-5xl">
              Developer
            </span>{" "}
          </h1>
          <div className="flex justify-center md:justify-start px-2 md:px-0">
            <p className="w-96 pt-3 md:pt-5 lg:pt-8 text-base md:text-lg text-black text-opacity-65">
              Experienced front end developer with a passion for developing and
              creating vissually stunning and user-friendly websites and
              applications.
            </p>
          </div>
          <div>
            <button className="text-black text-sm  bg-orange-400 hover:bg-neutral-900 hover:text-white rounded-sm mt-8 py-3 px-8 mr-1">
              HIRE ME
            </button>
            <button className="md:hidden text-black text-sm  bg-slate-100 hover:bg-neutral-900 hover:text-white rounded-sm mt-8 py-3 px-8">
              Downlowd CV
            </button>
          </div>
        </div>
        {/* right side  */}
        <div className="md:h-28 md:w-64 md:pt-6 lg:w-80 lg:h-40 lg:pt-12 ">
          <div className="flex justify-center pt-8 md:pt-0">
            <Image
              className="w-60 h-60 rounded-full md:hidden "
              src="/images/Profile.jpg"
              alt="profile"
              width={150}
              height={200}
            ></Image>
          </div>
          <Image
            className="hidden md:block"
            src="/images/profile.png"
            alt="profile"
            width={340}
            height={470}
          ></Image>
        </div>
      </div>
      <About />
      {/* section services  */}
      <div className="text-center text-4xl font-bold mt-36 hover:text-orange-500">
        <h2>My Services</h2>
      </div>
      <div className="text-center text-xl px-4 sm:px-8 md:px-48 lg:px-72 mt-5 text-black text-opacity-65">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum
          maxime a doloribus suscipit natus? Nobis expedita sed eligendi sunt
          unde earum possimus, fugit enim perspiciatis totam.
        </p>
      </div>

      <div className="grid gap-6 mx-8 md:mx-12 sm:grid-cols-2 md:grid-cols-3 mt-12">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <div className="w-14 md:w-16">
            <Image
              src="/images/coding.png"
              alt="coding"
              width={340}
              height={470}
            ></Image>
          </div>
          <h3 className="text-xl font-bold pt-4">Web Development</h3>
          <p className="text-sm mx-8 pt-3">Blog, E-Commerce</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <div className="w-14 md:w-16">
            <Image
              src="/images/illustration.png"
              alt="coding"
              width={340}
              height={470}
            ></Image>
          </div>
          <h3 className="text-xl font-bold pt-4">UI/UX Design</h3>
          <p className="text-sm mx-8 pt-2">Mobile App, Website Design</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <div className="w-14 md:w-16">
            <Image
              src="/images/game.png"
              alt="coding"
              width={340}
              height={470}
            ></Image>
          </div>
          <h3 className="text-xl font-bold pt-4">Game Design</h3>
          <p className="text-sm mx-8 pt-2"></p>
          Character Design, Props & Objects
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <div className="w-14 md:w-16">
            <Image
              src="/images/Microphone.png"
              alt="coding"
              width={340}
              height={470}
            ></Image>
          </div>
          <h3 className="text-xl font-bold py-2">Sound Design</h3>
          <p className="text-sm mx-8"></p>
          Voice Over, Beat Making
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <div className="w-14 md:w-16">
            <Image
              src="/images/Photographer.png"
              alt="coding"
              width={340}
              height={470}
            ></Image>
          </div>
          <h3 className="text-xl font-bold py-2">Photo Editing</h3>
          <p className="text-sm mx-8"></p>
          Portrait, Product Photo Editor
        </div>
        <div className="bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-60 text-center ">
          <h3 className="text-xl font-bold pt-12">Advertising</h3>
          <p className="text-sm mx-8 pt-5">
            Lorem ipsum dolor sit amet consectetur Iusto sint quam ullam, esse
            nihil pariatur. officia neque veritatis excepturi!
          </p>
        </div>
      </div>
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default Homepage;
