import "./Checkout.css";
import payment from '../../assets/bg-image/popular-brad/payment.png'
const Checkout = () => {
  return (
    <div className="max-w-[1299px] pb-[30px] mx-auto">
           <div className=" flex-col flex lg:flex-row justify-between ">
       
            <div className="bg-white">
            <div className="text-neutral-700 text-4xl font-bold border-b-2  mx-4 b border-neutral-400 pb-[16px] ">Shipping Details</div>
            <div className="max-w px-4 lg:px-0 w-full">
              <form className="grid grid-cols-12 gap-4 w-full pt-10">
                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="FirstName"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    className="mt-1 w-full rounded border-gray-300 border p-2 shadow-sm sm:text-base"
                    placeholder="First Name"
                  />
                </div>

                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="LastName"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="Address"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    id="Address"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                    placeholder="Type your address"
                  />
                </div>
                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="Phone Number"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    id="PhoneNumber"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                    placeholder="Please Enter Your Phone Number"
                  />
                </div>
                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="Country"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    Country
                  </label>

                  <select
                    name="Country"
                    id="Country"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                  >
                    <option value="">Select Country</option>
                    <option value="JM">John Mayer</option>
                    <option value="SRV">Stevie Ray Vaughn</option>
                    <option value="JH">Jimi Hendrix</option>
                    <option value="BBK">B.B King</option>
                    <option value="AK">Albert King</option>
                    <option value="BG">Buddy Guy</option>
                    <option value="EC">Eric Clapton</option>
                  </select>
                </div>
                <div className="col-span-6 pb-5">
                  <label
                    htmlFor="City"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    City
                  </label>

                  <select
                    name="City"
                    id="City"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                  >
                    <option value="">Select City</option>
                    <option value="JM">John Mayer</option>
                    <option value="SRV">Stevie Ray Vaughn</option>
                    <option value="JH">Jimi Hendrix</option>
                    <option value="BBK">B.B King</option>
                    <option value="AK">Albert King</option>
                    <option value="BG">Buddy Guy</option>
                    <option value="EC">Eric Clapton</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="State"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    State
                  </label>

                  <select
                    name="State"
                    id="State"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                  >
                    <option value="">Select State</option>
                    <option value="JM">NYC</option>
                    <option value="SRV">New Mexico</option>
                    <option value="JH">Florida</option>
                    <option value="BBK">Arizona</option>
                    <option value="AK">Washington DC</option>
                    <option value="BG">Texas</option>
                    <option value="EC">LA</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="ZipCode"
                    className="text-neutral-700 text-lg font-normal"
                  >
                    Zip Code
                  </label>

                  <input
                    type="text"
                    id="ZipCode"
                    className="mt-1 w-full rounded border border-gray-300 p-2 shadow-sm sm:text-base"
                    placeholder="Type your address"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-[35%] bg-white rounded-2xl border p-5 mt-5 lg:mt-8">
            <div className="text-neutral-700 text-base font-medium py-6">
              Orders Summery
            </div>
            <div className="flex-col justify-center items-center ">
              <div className="w-full flex items-center justify-between pb-2">
                <div className=" text-neutral-400 text-lg font-normal">
                  1x Brand Winter Coat
                </div>
                <div className="text-right text-gray-800 text-base font-normal">
                  $320.00
                </div>
              </div>
              <div className="flex items-center justify-between pb-2">
                <div className=" text-neutral-400 text-lg font-normal">
                  1x White Stylish Shirt
                </div>
                <div className=" text-right text-gray-800 text-base font-normal">
                  $250.00
                </div>
              </div>
              <div className="flex items-center justify-between pb-5">
                <div className=" text-neutral-400 text-base font-normal">
                  1x Winter Black Jacket
                </div>
                <div className="text-right text-gray-800 text-base font-normal">
                  $190.00
                </div>
              </div>
              <div className="border border-neutral-400"></div>
              <div className="flex items-center justify-between py-5">
                <div className=" text-neutral-400 text-base font-normal">
                  Subtotal
                </div>
                <div className=" text-right text-gray-800 text-base font-normal">
                  $760.00
                </div>
              </div>
              <div className="flex items-center justify-between pb-5">
                <div className=" text-neutral-400 text- font-normal">
                  Shipping Fee
                </div>
                <div className=" text-right text-gray-800 text-base font-normal">
                  $120.00
                </div>
              </div>
              <div className=" opacity-50 border border-neutral-400"></div>
              <div className="flex items-center justify-between py-5">
                <div className=" text-gray-800 text-base font-medium">
                  Total
                </div>
                <div className="text-right text-orange-600 text-base font-medium">
                  $880.00
                </div>
              </div>
              <div className=" opacity-50 border border-neutral-400"></div>

              <div className="text-neutral-700 text-xl font-medium py-5">Payment Method</div>

              <img src={payment} />

              <div className=" p-4 bg-orange-600 rounded-lg justify-center text-white text-center mt-6 items-center gap-2.5">Checkout</div>
              <div className="text-center text-orange-600 text-lg font-medium">Back to Cart</div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Checkout;
