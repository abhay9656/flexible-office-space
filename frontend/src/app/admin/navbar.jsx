import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div>
      <div>
        <header className="flex  flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
          <nav
            className="max-w-[85rem] text-xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
            aria-label="Global"
          >
            <Link
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
            >
              Office<span className="text-blue-700">Space</span>
            </Link>
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
              <Link
                className="font-medium text-blue-500"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/admin/dashboard"
              >
                Dashboard
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/admin/space"
              >
                AddSpace
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='/admin/manageSpace'
              >
                ManageSpace
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='/admin/manageuser'
              >
                ManageUser
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='/admin/viewFeedback'
              >viewFeedback
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='/admin/manageBooking'
              >manageBooking
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='/admin/profile'
              >Profile
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default AdminNavbar;
