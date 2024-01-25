import Image from "next/image";
import contactImage from "../../../public/contact.png";

function Contact() {
  return (
    <main className="flex flex-col-reverse md:flex-row md:text-left text-center items-center justify-between gap-8 md:gap-3 md:mt-0 mt-10">
      <div className="flex-1 items-center flex justify-center">
        <Image src={contactImage} width={350} height={350} alt="About Image" />
      </div>
      <form className="mt-4 flex-1">
        <input
          className="border-0 outline-none placeholder:text-gray-500 py-2.5 px-3 rounded-md w-full mb-3 bg-slate-800"
          type="text"
          placeholder="Name and Surname"
        />
        <input
          className="border-0 outline-none placeholder:text-gray-500 py-2.5 px-3 rounded-md w-full mb-3 bg-slate-800"
          type="text"
          placeholder="Email address"
        />
        <input
          className="border-0 outline-none placeholder:text-gray-500 py-2.5 px-3 rounded-md w-full mb-3 bg-slate-800"
          type="text"
          placeholder="Phone Number (optional)"
        />
        <textarea
          className="border-0 outline-none placeholder:text-gray-500 py-2.5 px-3 rounded-md w-full mb-3 bg-slate-800"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
          Send
        </button>
      </form>
    </main>
  );
}

export default Contact;
