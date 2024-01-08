import {  FaUser, FaChartBar, FaFileAlt, FaUpload, FaCog , FaHome,FaBook ,FaBalanceScale, FaListAlt, FaCircle } from 'react-icons/fa';

export const data = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    link: "/dashboard",
  },
  {
    title: "Social accounts ",
    icon: <FaChartBar />,
    link: "/admin/social",
    submenu: [
      {
        title: "Instagram",
        icon: <FaCircle />,
        link: "/insta",
      },
      {
        title: "Facebook",
        icon: <FaCircle/>,
        link: "/fb",
      },
      {
        title: "Twitter",
        icon: <FaCircle />,
        link: "/twitter",
      },
      {
        title: "Linkedin",
        icon: <FaCircle />,
        link: "/linkedin",
      },
    ],
  },
  
  
  
];


