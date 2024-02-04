"use client";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Flag from "@/public/icons/en.svg";
import French from "@/public/icons/french.svg";

const languages = [
  {
    id: 1,
    name: "EN",
    icon: Flag,
  },
  {
    id: 2,
    name: "FR",
    icon: French,
  },
];

export default function DropDown() {
  const [state, setState] = useState(languages[0]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={state?.icon} alt="" className="w-7 h-7 rounded-full" />
          <p className="font-semibold">{state?.name}</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </Menu.Button>
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
            {languages.map((el) => (
              <Menu.Item key={el.id}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-myblack text-white" : "text-myblack"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 cursor-pointer`}
                    onClick={() => setState(el)}
                  >
                    <Image
                      src={el.icon}
                      alt=""
                      className="w-7 h-7 rounded-full"
                    />
                    <p className="font-semibold">{el.name}</p>
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
