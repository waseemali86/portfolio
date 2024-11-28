import Image from "next/image";
import Link from "next/link";
function Project() {
  return (
    <div className="bg-slate-200 py-36 md:max-w-7xl cursor-pointer select-none ">
      <div className="text-center text-4xl font-bold md:hover:text-orange-500">
        <h2>Recent Projects</h2>
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
          <h3 className="text-xl font-bold pt-4">Resume Builder</h3>
          <p className="text-sm mx-8 pt-3">Html, Css, JS </p>
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
          <h3 className="text-xl font-bold pt-4">Simple Calculator</h3>
          <p className="text-sm mx-8 pt-2">Html, Css, JS</p>
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
          <h3 className="text-xl font-bold pt-4">Number Guessing Game</h3>
          <p className="text-sm mx-8 pt-2"></p>
          Html, Css, JS
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
          <h3 className="text-xl font-bold py-2"><Link href="www.google/github.com">Currency Converter</Link></h3>
          <p className="text-sm mx-8"></p>
          Html, Css, JS
        </div>
      </div>
    </div>
  );
}

export default Project;
