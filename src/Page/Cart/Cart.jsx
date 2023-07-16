import { useState } from "react";
import fav from '../../assets/bg-image/best-sels/favdelete.png'
import { Link } from "react-router-dom";


const Cart = () => {
    const [counter, setCounter] = useState(0);
 
  
  const increase = () => {
    setCounter(count => count + 1);
  };
 

  const decrease = () => {
    setCounter(count => count - 1);
  };
  return (
    <div className="lg:w-[1299px] mx-auto flex flex-col lg:flex-row gap-5 justify-between py-[30px]">
      <div className="flex-col justify-start items-start gap-[50px] inline-flex px-5 mx-auto">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-end items-center  inline-flex">
            <div className="justify-start items-center gap-[22px] flex">
              <div className="w-[19.48px] h-[19.48px] relative">
                <input type="checkbox" className="accent-orange-500 w-5 h-5 text-white" checked></input>
              </div>
              <div className="text-neutral-400 text-lg font-medium">
                Select All
              </div>
            </div>
            <div className="justify-end items-center gap-5 flex">
              <div className="w-[16.50px] h-[18px] relative">
                <div className="w-[16.50px] h-[18px] left-0 top-0 absolute"></div>
                <div className="w-[4.17px] h-[6.26px] left-[6.67px] top-[7.33px] absolute"></div>
              </div>
              <div className="text-right text-orange-600 text-lg font-normal">
              
                Remove all selected
              </div>
            </div>
          </div>
          <div className="w-full h-[0px] opacity-50 border border-neutral-400"></div>
        </div>
        <div className="max-w-[700px] flex-col justify-start items-start gap-8 flex">
          <div className="flex-col lg:flex-row items-center lg:gap-[39px] lg:inline-flex">
            <div className="justify-start items-center lg:gap-[30px] flex">
              <div className="justify-start items-center lg:gap-[22px] flex">
                <div className="w-[19.48px] h-[19.48px] relative mr-5px lg:mr-5px">
                <input type="checkbox" className="accent-orange-500 w-5 mr-[5px] lg-mr-0 h-5 text-white" checked></input>

                </div>
                <img
                  className="w-[120.97px] h-[122px] rounded-md"
                  src="https://via.placeholder.com/121x122"
                />
              </div>
              <div className="flex-col ps-[18px] justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-800 text-2xl font-bold leading-[31.20px]">
                  Brand Winter Coat
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Size:
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      {" "}
                      M
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Color:
                    </span>
                    <span className="text-neutral-700 text-base font-medium leading-normal">
                      {" "}
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      Cream
                    </span>
                  </div>
                </div>
                <div className="text-orange-600 text-2xl font-bold leading-[31.20px]">
                  $320.00
                </div>
              </div>
            </div>
            <div className="flex-col mt-3 ms-[21px] lg:ms-0 lg:mt-0 justify-start items-end gap-5 inline-flex">
              <div className="w-[121px] h-[34px] relative">
                <div className="w-[34px] h-[34px] p-4 left-[87px] top-0 absolute bg-orange-600 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={decrease}>-</div>
                <div className="w-[34px] h-[34px] p-4 left-0 top-0 absolute bg-zinc-100 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={increase}>+</div>
                <div className="w-[9px] h-[30px] left-[56px] top-[2px] absolute text-orange-600 text-2xl font-medium">
                  {counter}
                </div>
              </div>
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="w-full ">
                    <img src={fav} className="w-[50px]"/>
                    
                 
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[0px] opacity-50 border border-neutral-400"></div>
          <div className="justify-start items-center lg:gap-[39px] lg:inline-flex">
            <div className="justify-start items-center lg:gap-[30px] flex">
              <div className="justify-start items-center lg:gap-[22px] flex">
                <div className="w-[19.48px] h-[19.48px] relative">
                <input type="checkbox" className="accent-orange-500 w-5 h-5  text-white" checked></input>
                </div>
                <img
                  className="w-[120.97px] h-[122px] rounded-md ms-[5px] lg:mr[0px]"
                  src="https://via.placeholder.com/121x122"
                />
              </div>
              <div className="ps-[18px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-800 text-2xl font-bold leading-[31.20px]">
                  White Stylish Shirt
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Size:
                    </span>
                    <span className="text-neutral-700 text-base font-medium leading-normal">
                      {" "}
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      XL
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Color:
                    </span>
                    <span className="text-neutral-700 text-base font-medium leading-normal">
                      {" "}
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      White
                    </span>
                  </div>
                </div>
                <div className="text-orange-600 text-2xl font-bold leading-[31.20px]">
                  $250.00
                </div>
              </div>
            </div>
            <div className="flex-col mt-3 ms-[21px] lg:ms-0 lg:mt-0 justify-start items-end gap-5 inline-flex">
              <div className="w-[121px] h-[34px] relative">
                <div className="w-[34px] h-[34px] p-4 left-[87px] top-0 absolute bg-orange-600 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={decrease}>-</div>
                <div className="w-[34px] h-[34px] p-4 left-0 top-0 absolute bg-zinc-100 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={increase}>+</div>
                <div className="w-[9px] h-[30px] left-[56px] top-[2px] absolute text-orange-600 text-2xl font-medium">
                  {counter}
                </div>
              </div>
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="w-full ">
                    <img src={fav} className="w-[50px]"/>
                    
                 
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[0px] opacity-50 border border-neutral-400"></div>
          <div className="justify-start items-center lg:gap-[39px] lg:inline-flex">
            <div className="justify-start items-center lg:gap-[30px] flex">
              <div className="justify-start items-center lg:gap-[22px] flex">
                <div className="w-[19.48px] h-[19.48px] relative">
                <input type="checkbox" className="accent-orange-500 w-5 h-5 text-white" checked></input>
                </div>
                <img className="w-[120.97px] ms-[5px] lg:mr[0px] h-[122px] rounded-md" src="https://via.placeholder.com/121x122" />
              </div>
              <div className="ps-[18px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-800 text-2xl font-bold leading-[31.20px]">
                  White Stylish Jacket
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Size:
                    </span>
                    <span className="text-neutral-700 text-base font-medium leading-normal">
                      {" "}
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      L
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-800 text-base font-medium leading-normal">
                      Color:
                    </span>
                    <span className="text-neutral-700 text-base font-medium leading-normal">
                      {" "}
                    </span>
                    <span className="text-gray-500 text-base font-medium leading-normal">
                      Black
                    </span>
                  </div>
                </div>
                <div className="text-orange-600 text-2xl font-bold leading-[31.20px]">
                  $190.00
                </div>
              </div>
            </div>
            <div className="flex-col mt-3 ms-[21px] lg:ms-0 lg:mt-0 justify-start items-end gap-5 inline-flex">
              <div className="w-[121px] h-[34px] relative">
                <div className="w-[34px] h-[34px] p-4 left-[87px] top-0 absolute bg-orange-600 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={decrease}>-</div>
                <div className="w-[34px] h-[34px] p-4 left-0 top-0 absolute bg-zinc-100 rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={increase}>+</div>
                <div className="w-[9px] h-[30px] left-[56px] top-[2px] absolute text-orange-600 text-2xl font-medium">
                  {counter}
                </div>
              </div>
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="w-full ">
                    <img src={fav} className="w-[50px]"/>
                    
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[400px] h-[350px] mx-auto p-6 bg-neutral-50 rounded-2xl border border-neutral-200 flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="flex-col justify-start items-start gap-8 flex">
        <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-neutral-700 text-2xl font-medium">My Orders</div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[356px] h-9 relative">
                    <div className="left-0 top-[4px] absolute text-neutral-400 text-lg font-normal">Subtotal</div>
                    <div className="left-[262px] top-0 absolute text-right text-gray-800 text-2xl font-normal">$760.00</div>
                </div>
                <div className="w-[356px] h-9 relative">
                    <div className="left-0 top-[4.50px] absolute text-neutral-400 text-lg font-normal">Shipping Fee</div>
                    <div className="left-[269px] top-0 absolute text-right text-gray-800 text-2xl font-normal">$120.00</div>
                </div>
                <div className="w-[356px] h-[0px] opacity-50 border border-neutral-400"></div>
                <div className="w-[356px] h-9 relative">
                    <div className="left-0 top-[4px] absolute text-neutral-400 text-lg font-medium">Total</div>
                    <div className="left-[257px] top-0 absolute text-right text-orange-600 text-2xl font-medium">$880.00</div>
                </div>
            </div>
        </div>
        <div className="flex-col justify-start items-center gap-5 flex">
            <div className="w-[356.09px] h-[50px] p-4 bg-orange-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <Link to='/checkout'>
                <div className="text-neutral-50 text-lg font-medium cursor-pointer">Checkout</div>
                </Link>
            </div>
            <div className="text-orange-600 text-lg font-medium">Continue Shopping</div>
        </div>
    </div>
</div>3
    </div>
  );
};

export default Cart;
