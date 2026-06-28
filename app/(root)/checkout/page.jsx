"use client"

import React from 'react'
import Container from '../../components/Container'

const page = () => {


  return (
    <div>
      <Container>
        <div className="pt-20">
        <h2 className='text-4xl font-bold' >Checkout</h2>
      </div>
      <div className="py-20">
        <main>
  <h1 className="sr-only">Checkout</h1>
  <div className="bg-gray-50 px-4 py-6 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-y-12 gap-8 lg:grid-cols-2">
        {/* Delivery Details form */}
        <section className="w-full h-max">
          <form>
            <fieldset>
              <legend className="text-xl text-slate-900 font-semibold mb-6">
                Delivery Details
              </legend>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fname"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="John"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Doe"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@readymadeui.com"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="123-456-7890"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="123 Main Street"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="NY"
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postal-code"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    placeholder={10001}
                    required=""
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
            </fieldset>
            {/* Payment methods */}
            <fieldset className="mt-12">
              <legend className="text-xl text-slate-900 font-semibold mb-6">
                Payment method
              </legend>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="method"
                    id="card"
                    className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="visa"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="american-express"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="master"
                    />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="method"
                    id="paypal"
                    className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                    />
                  </label>
                </div>
              </div>
            </fieldset>
            {/* billing address checkbox */}
            <label className="inline-flex items-center group has-[input:checked]:text-slate-900 mt-6">
              <input
                id="billing-address"
                name="billing-address"
                type="checkbox"
                required=""
                className="sr-only"
                defaultChecked=""
              />
              {/* Custom box */}
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                aria-hidden="true"
              >
                {/* Checkmark */}
                <svg
                  className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M1 5l3 3 7-7" />
                </svg>
              </span>
              <span className="ml-3 text-sm text-slate-700">
                Billing address is the same as shipping address
              </span>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Pay $139.00
              </button>
            </div>
          </form>
        </section>
        {/* Order Summary */}
        <section className="max-lg:-order-1">
          <h2 className="text-xl text-slate-900 font-semibold mb-6">
            Order Summary
          </h2>
          <div className="relative bg-white border border-slate-300 rounded-md">
            <div className="p-6 md:overflow-auto">
              <div className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-24 h-24 shrink-0 bg-gray-50 p-2 rounded-md">
                    <img
                      src="https://readymadeui.com/images/product14.webp"
                      className="w-full h-full object-contain"
                      alt="velvet sneaker"
                    />
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Velvet Sneaker
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-2">
                        Black/White
                      </p>
                      <p className="text-sm text-slate-900 font-semibold mt-4">
                        $18.00
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-end gap-4">
                      {/* remove button */}
                      <button
                        type="button"
                        aria-label="Remove sunscreen from cart"
                        className="text-red-600 w-max shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 fill-current inline"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      {/* Quantity Selector */}
                      <div className="flex items-center w-max mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 124 124"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                        <span className="mx-3">1</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 42 42"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-slate-300" />
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-24 h-24 shrink-0 bg-gray-50 p-2 rounded-md">
                    <img
                      src="https://readymadeui.com/images/watch5.webp"
                      className="w-full h-full object-contain"
                      alt="watch"
                    />
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Smart Watch Timex
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-2">
                        Gray
                      </p>
                      <p className="text-sm text-slate-900 font-semibold mt-4">
                        $90.00
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-end gap-4">
                      {/* remove button */}
                      <button
                        type="button"
                        aria-label="Remove sunscreen from cart"
                        className="text-red-600 w-max shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 fill-current inline"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      {/* Quantity Selector */}
                      <div className="flex items-center w-max mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 124 124"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                        <span className="mx-3">1</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 42 42"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-slate-300" />
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-24 h-24 shrink-0 bg-gray-50 p-2 rounded-md">
                    <img
                      src="https://readymadeui.com/images/dark-green-tshirt-2.webp"
                      className="w-full h-full object-contain"
                      alt="dark green tshirt"
                    />
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        T-shirt
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-2">
                        Dark Green
                      </p>
                      <p className="text-sm text-slate-900 font-semibold mt-4">
                        $20.00
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-end gap-4">
                      {/* remove button */}
                      <button
                        type="button"
                        aria-label="Remove sunscreen from cart"
                        className="text-red-600 w-max shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 fill-current inline"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      <div className="flex items-center w-max mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 124 124"
                            aria-hidden="true"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                        <span className="mx-3">1</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 42 42"
                            aria-hidden="true"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-slate-300 my-6" />
              <div>
                <ul className="text-slate-500 font-medium space-y-4">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Subtotal{" "}
                    <span className="ml-auto font-semibold text-slate-900">
                      $128.00
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Shipping{" "}
                    <span className="ml-auto font-semibold text-slate-900">
                      $6.00
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Tax{" "}
                    <span className="ml-auto font-semibold text-slate-900">
                      $5.00
                    </span>
                  </li>
                  <hr className="border-slate-300" />
                  <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                    Total <span className="ml-auto">$139.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</main>

      </div>
      </Container>
    </div>
  )
}

export default page
