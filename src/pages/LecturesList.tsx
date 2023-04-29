import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

import { RadioGroup } from "@headlessui/react";

const settings = [
  {
    name: "EC3102",
    description: "Computer Systems Theory...",
  },
  {
    name: "EC1111",
    description: "Programming Languages",
  },
  {
    name: "GS1234",
    description: "Computer Programming",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LectureList() {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-96 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-light-Gray1 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
            <h2 className="mt-6 ml-2 text-center text-md font-light italic leading-9 tracking-tight text-light-Gray3">
              Want Attendance
            </h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <div>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={profile}
                  alt="profile"
                />
                <div className="mx-auto text-center mt-5">Suman Pandey</div>
              </div>

              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  Privacy setting
                </RadioGroup.Label>
                <div className="-space-y-px rounded-2xl bg-white shadow-lg">
                  {settings.map((setting, settingIdx) => (
                    <RadioGroup.Option
                      key={setting.name}
                      value={setting}
                      className={({ checked }) =>
                        classNames(
                          settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                          settingIdx === settings.length - 1
                            ? "rounded-bl-md rounded-br-md"
                            : "",
                          checked
                            ? "z-10 border-indigo-200 bg-gradient-to-r to-purpleBlue/25 from-cyanBlue/25 bg-opacity-100"
                            : "border-gray-200",
                          "relative flex cursor-pointer border p-4 focus:outline-none"
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <span className="ml-3 flex flex-col">
                            <RadioGroup.Label
                              as="span"
                              className={classNames(
                                checked ? "text-indigo-900" : "text-gray-900",
                                "block text-sm font-medium"
                              )}
                            >
                              {setting.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={classNames(
                                checked ? "text-indigo-700" : "text-gray-500",
                                "block text-sm"
                              )}
                            >
                              {setting.description}
                            </RadioGroup.Description>
                          </span>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              <button
                type="submit"
                className=" mt-10 mb-5 bg-gradient-to-r py-4 px-6 shadow-lg to-purpleBlue from-cyanBlue w-full flex justify-center border border-transparent rounded-3xl text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Lecture
              </button>
            </ul>
          </nav>
        </div>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
    </>
  );
}
