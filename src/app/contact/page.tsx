import Image from "next/image";
function Contact() {
  return (
    <main className="flex flex-col md:max-w-7xl bg-slate-200 cursor-pointer ">
      <div className="md:grid md:grid-cols-12 gap-8 mx-14">
        <h4 className="md:col-span-8 text-3xl font-bold hover:text-orange-500 py-5 hidden md:block">
          Leave Us Your Info
        </h4>
        <h4 className="md:col-span-4 text-4xl text-center md:text-left hover:text-orange-500 font-bold py-5">
          Get in Touch
        </h4>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 mx-8 lg:mx-12 bg-slate-200">
        <div className="h-auto rounded-xl bg-white md:col-span-8 ">
          <div className="flex flex-col">
            <form className="flex flex-col px-8 py-6">
              <label>
                Name
                <input className="w-full h-14 rounded-sm bg-slate-200 px-8" type="text" name="name"  required />
              </label>
              <label className="pt-6">
                Email
                <input className="w-full h-14 rounded-sm bg-slate-200 px-8 " type="email" name="email" required />
              </label>
              <label className="pt-6">
                WhatsApp
                <input className="w-full h-14 rounded-sm bg-slate-200 px-8 " type="number" name="email" required />
              </label>
              <label className="pt-6">
                Your Message
                <textarea className="w-full h-72 rounded-sm bg-slate-200 px-8 "  name="message" required />
              </label>
              <button type="submit" className="text-black text-lg w-40 bg-orange-400 hover:bg-neutral-900 hover:text-white rounded-sm mt-4 py-2 px-2">
            Send Message
          </button>
            </form>
          </div>
        </div>
        <h4 className="md:col-span-8 text-3xl text-center md:text-left hover:text-orange-500 font-bold py-5 md:hidden">
          Leave Us Your Info
        </h4>
        <div className="h-auto rounded-lg bg-slate-200 md:col-span-4 ">
          <div className="flex flex-col justify-center"></div>
          <div className="bg-white md:col-span-4 h-60 rounded-xl hover:bg-orange-500 hover:rounded-3xl">
            <div className="flex justify-center pt-8">
              <div className="bg-orange-400 w-14 h-14 rounded-full flex justify-center items-center">
                <Image
                  className="w-8 h-8 "
                  src="/images/location.png"
                  alt="profile"
                  width={150}
                  height={200}
                ></Image>
              </div>
            </div>
            <div className="flex justify-between mx-6 mt-10">
              <div className="text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>Country:</p>
                <p className="pt-2">City:</p>
                <p className="pt-2">Streat:</p>
              </div>
              <div className="text-right text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>Pakistan</p>
                <p className="pt-2">Nawab Shah</p>
                <p className="pt-2">11-Kazi Ahmed</p>
              </div>
            </div>
          </div>
          <div className="bg-white md:col-span-4 h-60 mt-4 rounded-xl hover:bg-orange-500 hover:rounded-3xl ">
            <div>
              <div className="flex justify-center pt-8">
                <div className="bg-orange-400 w-14 h-14 rounded-full flex justify-center items-center">
                  <Image
                    className="w-8 h-8 "
                    src="/images/mail.png"
                    alt="profile"
                    width={150}
                    height={200}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-6 mt-4">
              <div className="text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>Email:</p>
                <p className="pt-6">Contact:</p>
                <p className="pt-2">WhatsApp:</p>
              </div>
              <div className="text-right text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>aliwaseem1906</p>
                <p>@gmail.com</p>
                <p className="pt-">03282802628</p>
                <p className="pt-2">03113045250</p>
              </div>
            </div>
          </div>
          <div className="bg-white md:col-span-4 h-60 mt-4 rounded-xl hover:bg-orange-500 hover:rounded-3xl">
            <div>
              <div className="flex justify-center pt-8">
                <div className="bg-orange-400 w-14 h-14 rounded-full flex justify-center items-center">
                  <Image
                    className="w-8 h-8 "
                    src="/images/Mobile.png"
                    alt="profile"
                    width={150}
                    height={200}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-6 mt-10">
              <div className="text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>Linkedin</p>
                <p className="pt-2">Github</p>
                <p className="pt-2">Telegram</p>
              </div>
              <div className="text-right text-lg md:text-base lg:text-lg text-black text-opacity-80">
                <p>Facebook</p>
                <p className="pt-2">Twitter</p>
                <p className="pt-2">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
