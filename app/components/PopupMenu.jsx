"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function PopUpMenu() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-myblack/20 px-4 py-2 text-sm font-medium text-white hover:bg-myblack/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <i className="fa-solid fa-bars cursor-pointer text-xl"></i>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-myblack/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-myblack text-white" : "text-myblack"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Presentation
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-myblack text-white" : "text-myblack"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Login
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-myblack text-white" : "text-myblack"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Free Trial
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
