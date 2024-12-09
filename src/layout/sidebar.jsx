import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../images/icons/home-03.svg';
import Library from '../images/icons/library.svg';
import Courses from '../images/icons/courses.svg';
import Grades from '../images/icons/grades.svg';
import User from '../images/icons/users.svg';
import Logout from '../images/icons/log-out-01.svg';
import Qmark from '../images/icons/question_mark.svg';
import Setting from '../images/icons/users.svg';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Library', path: '/library', icon: Library },
    { name: 'Courses', path: '/courses', icon: Courses },
    { name: 'Grades', path: '/grades', icon: Grades },
    { name: 'Users', path: '/people', icon: User, separator: true },
    { name: 'Help Center', path: '/help', icon: Qmark },
    { name: 'Setting', path: '/setting', icon: Setting },
    { name: 'Logout', path: '/login', icon: Logout },
  ];

  return (
    <div className="pl-5 bg-white">
      <div className='w-[240px] p-6 ps-0 border border-s-0  border-b-0'>
        <ul className='gap-y-4 flex flex-col'>
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link to={item.path}>
                <li
                  className={`px-3 py-2 rounded-lg ${location.pathname === item.path ? 'bg-[#0348B7] text-white' : ''
                    }`}
                >
                  <div className='flex gap-3'>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`${location.pathname === item.path ? 'text-white' : 'text-[#475467]'
                        }`}
                    />

                    {/* <svg className={`${location.pathname === item.path ? 'fill-white' : 'fill-black'}`} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.39504 18.3711L7.97949 19.6856C8.15323 20.0768 8.43676 20.4093 8.79571 20.6426C9.15466 20.8759 9.5736 21.0001 10.0017 21C10.4298 21.0001 10.8488 20.8759 11.2077 20.6426C11.5667 20.4093 11.8502 20.0768 12.0239 19.6856L12.6084 18.3711C12.8164 17.9047 13.1664 17.5159 13.6084 17.26C14.0532 17.0034 14.5677 16.8941 15.0784 16.9478L16.5084 17.1C16.934 17.145 17.3636 17.0656 17.7451 16.8713C18.1265 16.6771 18.4434 16.3763 18.6573 16.0056C18.8714 15.635 18.9735 15.2103 18.951 14.7829C18.9285 14.3555 18.7825 13.9438 18.5306 13.5978L17.6839 12.4344C17.3825 12.0171 17.2214 11.5148 17.2239 11C17.2238 10.4866 17.3864 9.98635 17.6884 9.57111L18.535 8.40778C18.7869 8.06175 18.933 7.65007 18.9554 7.22267C18.9779 6.79528 18.8759 6.37054 18.6617 6C18.4478 5.62923 18.1309 5.32849 17.7495 5.13423C17.3681 4.93997 16.9385 4.86053 16.5128 4.90556L15.0828 5.05778C14.5722 5.11141 14.0576 5.00212 13.6128 4.74556C13.1699 4.48825 12.8199 4.09736 12.6128 3.62889L12.0239 2.31444C11.8502 1.92317 11.5667 1.59072 11.2077 1.3574C10.8488 1.12408 10.4298 0.99993 10.0017 1C9.5736 0.99993 9.15466 1.12408 8.79571 1.3574C8.43676 1.59072 8.15323 1.92317 7.97949 2.31444L7.39504 3.62889C7.18797 4.09736 6.83792 4.48825 6.39504 4.74556C5.95026 5.00212 5.43571 5.11141 4.92504 5.05778L3.4906 4.90556C3.06493 4.86053 2.63534 4.93997 2.25391 5.13423C1.87249 5.32849 1.55561 5.62923 1.34171 6C1.12753 6.37054 1.02549 6.79528 1.04798 7.22267C1.07046 7.65007 1.2165 8.06175 1.46838 8.40778L2.31504 9.57111C2.61698 9.98635 2.77958 10.4866 2.77949 11C2.77958 11.5134 2.61698 12.0137 2.31504 12.4289L1.46838 13.5922C1.2165 13.9382 1.07046 14.3499 1.04798 14.7773C1.02549 15.2047 1.12753 15.6295 1.34171 16C1.55582 16.3706 1.87274 16.6712 2.25411 16.8654C2.63548 17.0596 3.06496 17.1392 3.4906 17.0944L4.9206 16.9422C5.43127 16.8886 5.94581 16.9979 6.3906 17.2544C6.83513 17.511 7.18681 17.902 7.39504 18.3711Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.99992 14C11.6568 14 12.9999 12.6569 12.9999 11C12.9999 9.34315 11.6568 8 9.99992 8C8.34307 8 6.99992 9.34315 6.99992 11C6.99992 12.6569 8.34307 14 9.99992 14Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}


                    <h2
                      className={`text-base font-medium calibri ${location.pathname === item.path ? 'text-white' : 'text-[#475467]'
                        }`}
                    >
                      {item.name}
                    </h2>
                  </div>
                </li>
              </Link>
              {item.separator && <div className='h-[1px] bg-[#EAECF0] mt-2'></div>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
