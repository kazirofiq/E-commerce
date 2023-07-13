import sm from "../assets/bg-image/best-sels/sosmedia.png";
import email from "../assets/bg-image/best-sels/Email.png";
import call from "../assets/bg-image/best-sels/Call.png";
import loc from "../assets/bg-image/best-sels/Location.svg";

export default function Contactus() {
  return (
    <div className="max-w-[1299px] mx-auto py-[30px] px-[30px]">
        <div className="text-center text-neutral-700 text-5xl font-bold leading-[64px] mb-5">Contact Us</div>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
        <div className=" rounded-2xl border border-neutral-300 mx-auto">
          <form
            noValidate=""
            className="w-full lg:-w-[600px] flex flex-col py-[30px] px-5"
          >
            <div className="pb-5">
              <span className="mb-1">Name*</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm p-2 border border-neutral-40"
              />
            </div>
            <div className="block pb-5">
              <span className="mb-1">Email*</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm p-2 border border-neutral-40"
              />
            </div>
            <div className="block pb-5">
              <span className="mb-1">Message*</span>
              <textarea
                rows="3"
                className="block w-full rounded-md p-2 border border-neutral-40"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-3">
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                Accept Terms & Condition
              </div>
              <div className="py-2 mt-3 lg:mt-0 px-5 text-center text-neutral-50 text-lg font-medium  bg-orange-600 rounded-lg ">
                Send Message
              </div>
            </div>
          </form>
        </div>
        <div className="mt-6 lg:mt-0 flex-col  gap-8 inline-flex">
          <div className="h-40 flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-8 h-8 "><img src={loc}/></div>
              <div className=" text-gray-500 text-xl font-normal">
                       404 New York, Marriott at the Brooklyn Bridge

              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-8 h-8 "><img src={call}/></div>
              <div className="w-[211px] text-gray-500 text-xl font-normal">
                +0034567890
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-8 h-8 "><img src={email}/></div>
              <div className="text-gray-500 text-xl font-normal">
                stylehut@support.com
              </div>
            </div>
          </div>
          <div className=" opacity-50 border border-neutral-400"></div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-gray-500 text-2xl font-bold leading-[31.20px]">
              Follow Us
            </div>
            <div className="justify-start items-start gap-6 inline-flex">
              <img src={sm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
