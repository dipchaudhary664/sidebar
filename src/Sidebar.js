import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const handleProductClick = () => {
    setProductDropdownOpen(!isProductDropdownOpen);
  };
  const handleUserClick = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };
  const handleStatusClick = () => {
    setStatusDropdownOpen(!isStatusDropdownOpen);
  };

  return (
    <div className="w-1/6 h-screen text-gray-700 p-6 shadow-md border-r-2 border-blue-500">
      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg"
          alt="Company Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <ul className="list-none text">
        <li className="mb-2 cursor-pointer flex items-center bg-green-500 text-white p-2 rounded">
          <Icon
            icon="ion:home"
            color="white"
            width="20"
            height="20"
            className="mr-2"
          />
          หน้าแรก
        </li>
        <li className="mb-2 cursor-pointer flex items-center hover:bg-gray-200 p-2 rounded">
          <Icon
            icon="fa-solid:folder"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          หมวดหมู่
        </li>
        <li
          className="mb-2 cursor-pointer flex items-center relative hover:bg-gray-200 p-2 rounded"
          onClick={handleProductClick}
        >
          <Icon
            icon="mdi:cart"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          สินค้า
          <Icon
            icon="iconamoon:arrow-down-2-thin"
            color="gray"
            width="25"
            height="25"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
          />
          {isProductDropdownOpen && (
            <ul className="absolute right-0 w-full mt-24 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Service 1
              </li>
            </ul>
          )}
        </li>
        <li
          className="mb-2 cursor-pointer flex items-center relative hover:bg-gray-200 p-2 rounded"
          onClick={handleUserClick}
        >
          <Icon
            icon="bx:bxs-user"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          User
          <Icon
            icon="iconamoon:arrow-down-2-thin"
            color="gray"
            width="25"
            height="25"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
          />
          {isUserDropdownOpen && (
            <ul className="absolute right-0 w-full mt-24 bg-white border border-gray-300 rounded-md shadow-lg z-20">
              <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Service 1
              </li>
            </ul>
          )}
        </li>

        <li
          className="mb-2 cursor-pointer flex items-center relative hover:bg-gray-200 p-2 rounded"
          onClick={handleStatusClick}
        >
          <Icon
            icon="ic:baseline-local-shipping"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          สาถานะขนส่ง
          <Icon
            icon="iconamoon:arrow-down-2-thin"
            color="gray"
            width="25"
            height="25"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
          />
          {isStatusDropdownOpen && (
            <ul className="absolute right-0 w-full mt-24 bg-white border border-gray-300 rounded-md shadow-lg z-30">
              <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Service 1
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2 cursor-pointer flex items-center hover:bg-gray-200 p-2 rounded">
          <Icon
            icon="fa-solid:tag"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          สินค้าโปรโมชั่น
        </li>
        <li className="mb-2 cursor-pointer flex items-center hover:bg-gray-200 p-2 rounded">
          <Icon
            icon="ph:bell-ringing-fill"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          การแจ้งเตือน
        </li>
        <li className="mb-2 cursor-pointer flex items-center hover:bg-gray-200 p-2 rounded">
          <Icon
            icon="ion:pricetag"
            color="gray"
            width="20"
            height="20"
            className="mr-2"
          />
          ราคาขนส่ง
        </li>
      </ul>
      <div className="flex items-center mx-2 mt-24">
        <Icon
          icon="bi:box-arrow-right"
          color="gray"
          width="20"
          height="20"
          className="mr-2"
        />
        <button className="text-gray-700 py-2">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
