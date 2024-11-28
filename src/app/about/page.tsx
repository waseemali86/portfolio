import Image from "next/image";
function About() {
  return (
    <div className="bg-slate-200 text-center py-10">
      <h1 className="text-4xl md:text-6xl font-bold pt-6 text-orange-500 hover:text-black">
        About me
      </h1>
      <p className="px-12 pt-4 text-xl">
        {"I'm"} Muhammad Waseem, passionate about building sleek, responsive web
        experiences.
      </p>
      <div className="h-auto bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl text-left mx-8 md:mx-32 mt-8 ">
        <p className="text-lg mx-8 py-10 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
          debitis nam animi. Est natus qui quibusdam, ullam vero architecto eum
          obcaecati quasi, iusto laborum cum aliquam voluptas, aspernatur
          saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo placeat similique in sunt. Lorem ipsum dolor sit ipsum dolor
          sit
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold pt-8 text-orange-500 hover:text-black">
          Skills & Experties
        </h2>
        <div className="grid gap-6 mx-10 md:mx-12 grid-cols-2 md:grid-cols-4 mt-12">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/coding.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">HTML</h3>
            <p className="text-sm mx-8 pt-3"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">CSS</h3>
            <p className="text-sm mx-8 pt-2"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">JavaScript</h3>
            <p className="text-sm mx-8 pt-2"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">TypeScript</h3>
            <p className="text-sm mx-8 pt-2"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/game.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">Tailwind CSS</h3>
            <p className="text-sm mx-8 pt-2"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/Microphone.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold py-2">React.js</h3>
            <p className="text-sm mx-8"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/Photographer.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold py-2">Next.js</h3>
            <p className="text-sm mx-8"></p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl h-40 text-center ">
            <div className="w-14 md:w-16">
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              ></Image>
            </div>
            <h3 className="text-xl font-bold pt-4">Python</h3>
            <p className="text-sm mx-8 pt-2"></p>
          </div>
        </div>
        <div className="h-auto bg-white rounded-lg hover:bg-orange-500 hover:rounded-3xl text-left mx-8 md:mx-32 mt-12 ">
          <h5 className="text-4xl font-bold px-8 pt-12">Work Philosophy</h5>
          <p className="text-lg mx-8 py-6 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
            debitis nam animi. Est natus qui quibusdam, ullam vero architecto
            eum obcaecati quasi, iusto laborum cum aliquam voluptas, aspernatur
            saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo placeat similique in sunt. Est cum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
