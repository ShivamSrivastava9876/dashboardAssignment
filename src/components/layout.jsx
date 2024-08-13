"use client";

import React, { useState } from "react";
import Image from "next/image";
import recordImg from "@/../public/ph--record-fill.png";
import accountImg from "@/../public/material-symbols--account-circle.png";
import googleIcon from "@/../public/ph--google-logo.png";
import dashboardIcon from "@/../public/ic--sharp-space-dashboard.png";
import peopleIcon from "@/../public/fluent--people-16-filled.png";
import buildingIcon from "@/../public/clarity--building-line.png";
import notepad from "@/../public/ph--notepad.png";
import searchIcon from "@/../public/tabler--search.png";
import statsIcon from "@/../public/gridicons--stats-alt.png";
import feedbackIcon from "@/../public/codicon--feedback.png";
import leavesIcon from "@/../public/material-symbols-light--person-cancel-outline.png";
import attendIcon from "@/../public/fluent--people-team-24-regular.png";
import timesheetIcon from "@/../public/simple-line-icons--calender.png";
import reimbursementsIcon from "@/../public/tdesign--money.png";
import reportsIcon from "@/../public/carbon--report-data.png";
import expensesIcon from "@/../public/arcticons--day-to-day-expenses.png";
import incomeIcon from "@/../public/hugeicons--money-bag-02.png";
import categoriesIcon from "@/../public/bx--layer.png";
import settingsIcon from "@/../public/fluent--settings-24-regular.png";
import menuIcon from "@/../public/mdi--hamburger-menu.png";
import accountSettingIcon from "@/../public/material-symbols--settings-account-box-outline-sharp.png";
import logoutIcon from "@/../public/solar--logout-outline.png";

const Layout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const icons = [
    { src: dashboardIcon, label: "Options" },
    { src: peopleIcon, label: "People" },
    { src: buildingIcon, label: "Office" },
    { src: notepad, label: "Tasks" },
    { src: timesheetIcon, label: "Daily timesheet" },
    { src: reimbursementsIcon, label: "Reimbursements" },
  ];

  const options = [
    { src: statsIcon, label: "Dashboard" },
    { src: feedbackIcon, label: "Feedback" },
    { src: leavesIcon, label: "Leaves" },
    { src: attendIcon, label: "Attendance" },
    { src: timesheetIcon, label: "Daily timesheet" },
    { src: peopleIcon, label: "Work log" },
    { src: reimbursementsIcon, label: "Reimbursements" },
  ];

  const additionalOptions = [
    { src: reportsIcon, label: "Reports" },
    { src: expensesIcon, label: "My Expenses" },
    { src: incomeIcon, label: "Income" },
    { src: categoriesIcon, label: "Categories" },
    { src: settingsIcon, label: "Settings" },
  ];

  return (
    <div className="flex w-full min-h-screen">
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-20"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        id="sidebar"
        className={`fixed flex top-0 left-0 z-30 h-full bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:min-w-max md:flex`}
      >
        <div id="logoAndIcons" className="flex flex-col w-1/4 h-full">
          <div
            id="logo"
            className="flex justify-center border border-gray-400 h-20 py-4"
          >
            <Image src={googleIcon} className="h-12 w-12" />
          </div>
          <div
            id="icons"
            className="flex flex-col items-center border border-gray-400 space-y-5 py-4 min-h-screen"
          >
            {icons.map((icon, index) => (
              <div key={index} className="relative group flex items-center p-3">
                <Image src={icon.src} className="h-8 w-8" alt={icon.label} />
                <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs p-1 rounded before:content-[''] before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-black">
                  {icon.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="searchAndContents" className="border border-gray-400">
          <div
            id="searchBox"
            className="relative flex items-center justify-center h-20 border-b-2 border-gray-400 px-4 py-4"
          >
            <Image
              src={searchIcon}
              className="h-5 w-5 absolute left-7"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow rounded-md bg-slate-100 p-2 pl-10 outline-none"
            />
          </div>

          <div id="content" className="mt-4 px-4 py-2">
            <h3 className="text-xl font-quicksand font-bold text-gray-700">
              MY OPTIONS
            </h3>
            <div className="flex flex-col mt-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 cursor-pointer hover:bg-slate-200"
                >
                  <Image
                    src={option.src}
                    className="h-7 w-7 mr-4"
                    alt={option.label}
                  />
                  <span className="mt-2 text-sm text-gray-700">
                    {option.label}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex flex-col mt-4">
              {additionalOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 cursor-pointer hover:bg-slate-200"
                >
                  <Image
                    src={option.src}
                    className="h-7 w-7 mr-4"
                    alt={option.label}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 absolute top-5 left-2 z-50 bg-white border border-gray-300 rounded-full"
        >
          <Image src={menuIcon} className="h-6 w-6" alt="Toggle Sidebar" />
        </button>

        <div id="headerAndBody" className="flex-1 pt-3">
          <div
            id="header"
            className="flex justify-end items-center w-full h-16"
          >
            <div
              id="recorder"
              className="mx-4 flex items-center justify-center bg-black p-2 rounded-md"
            >
              <span className="text-sm align-middle text-white">00:30:20</span>
              <Image src={recordImg} className="h-4 w-4 ml-3" alt="Record" />
            </div>

            <div className="text-5xl font-thin text-black flex justify-center">
              |
            </div>

            <div className="relative mx-4">
              <div
                id="profile"
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="relative">
                  <Image src={accountImg} className="h-10 w-10" alt="Profile" />
                  <span className="absolute top-1 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <span className="text-xl">{isDropdownOpen ? "▲" : "▼"}</span>
              </div>
              {isDropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
                    isDropdownOpen
                      ? "translate-y-0 opacity-100 visible"
                      : "-translate-y-full opacity-0 invisible"
                  }`}
                >
                  {" "}
                  <ul>
                    <li className="px-3 py-2 flex space-x-3 w-max hover:bg-gray-100 cursor-pointer">
                      <div className="relative">
                        <Image
                          src={accountImg}
                          className="h-8 w-8"
                          alt="Profile"
                        />
                        <span className="absolute bottom-2 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">Shivam Srivastava</div>
                        <div className="">Full Stack Developer</div>
                      </div>
                    </li>
                    <li className="px-3 py-1 flex items-center text-sm hover:bg-gray-100 cursor-pointer">
                      <Image src={accountImg} className="w-7 h-7 mr-3" />
                      Profile
                    </li>
                    <li className="px-3 py-1 flex items-center text-sm hover:bg-gray-100 cursor-pointer">
                      <Image
                        src={accountSettingIcon}
                        className="w-7 h-7 mr-3"
                      />
                      Account{" "}
                    </li>
                    <li className="px-3 py-1 flex items-center text-red-500 text-sm hover:bg-gray-100 cursor-pointer">
                      <Image src={logoutIcon} className="w-7 h-7 mr-3" />
                      Log out{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
``;
