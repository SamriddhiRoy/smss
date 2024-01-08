import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { data } from "./data";
import { useDashboardContext } from "../Provider";

const style = {
  title: "mx-4 text-sm whitespace-pre",
  inactive: "text-white",
  active: "font-medium text-green-400 hover:text-green-400",
  link: "flex items-center justify-start my-2 p-4 w-full hover:text-white",
  close:
    "lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all",
  open: "lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto",

  activeBackground: "bg-white",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  const { sidebarOpen } = useDashboardContext();
  const [openSubmenu, setOpenSubmenu] = useState("");

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? "" : title);
  };

  const handleSubmenuClick = (event) => {
    event.stopPropagation();
  };

  const renderSubmenu = (submenu) => {
    return (
      <ul className="pl-4">
        {submenu.map((subitem) => (
          <li key={subitem.title}>
            <div onClick={handleSubmenuClick}>
              <Link href={subitem.link}>
                <span
                  className={`${style.link} ${
                    subitem.link === pathname ? style.active : style.inactive
                  }`}
                >
                  <span>{subitem.icon}</span>
                  <span
                    className={`${style.title} ${
                      sidebarOpen ? style.open : style.close
                    }`}
                  >
                    {subitem.title}
                  </span>
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ul className="md:pl-5">
      {data.map((item) => (
        <li key={item.title}>
          {item.submenu ? (
            <div
              onClick={() => toggleSubmenu(item.title)}
              className={`${style.link} ${
                item.link === pathname
                  ? `${style.active} ${style.activeBackground}`
                  : style.inactive
              }`}
            >
              <span>{item.icon}</span>
              <span
                className={`${style.title} ${
                  sidebarOpen ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
              {item.submenu && (
                <span className="ml-auto cursor-pointer">
                  {openSubmenu === item.title ? "▲" : "▼"}
                </span>
              )}
            </div>
          ) : (
            <Link href={item.link}>
              <div
                className={`${style.link} ${
                  item.link === pathname ? style.active : style.inactive
                }`}
              >
                <span>{item.icon}</span>
                <span
                  className={`${style.title} ${
                    sidebarOpen ? style.open : style.close
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          )}
          {item.submenu && openSubmenu === item.title && renderSubmenu(item.submenu)}
        </li>
      ))}
    </ul>
  );
}