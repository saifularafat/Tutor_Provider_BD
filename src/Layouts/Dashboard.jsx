import { useState } from 'react';
import { FaCalendarAlt, FaChartBar, FaChevronRight, FaCog, FaComment, FaHome, FaUser, FaWallet } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
import logo from './../assets/leaf.jpg'
import { MdHomeWork } from 'react-icons/md';
import { FaClipboardQuestion } from 'react-icons/fa6';
import { RiLiveFill } from 'react-icons/ri';
import { AiFillNotification } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [open, setOpen] = useState(true);



    // user identity
    const isAdmin = false;
    const isTutor = true;
    const isParent = false;

    const iconMappings = {
        RoleHome: MdHomeWork,
        Users: FaUser,
        Schedule: FaCalendarAlt,
        Question: FaClipboardQuestion,
        Analytics: FaChartBar,
        Home: FaHome,
        Setting: FaCog,
        Payment: FaWallet,
        Live: RiLiveFill,
        Blog: FaComment,
        Notice: AiFillNotification,
        BookAdd: BiBookAdd
    }

    const Menus = [
        {
            title: 'Admin Home',
            path: '/dashboard/adminHome',
            icon: iconMappings.RoleHome,
            role: 'admin',
            gap: true
        },
        {
            title: 'Users',
            path: '/dashboard/manageUsers',
            icon: iconMappings.Users,
            role: 'admin'
        },
        {
            title: 'All Payments',
            path: '/dashboard/allPayments',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'All Request Job',
            path: '/dashboard/allRequestJob',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'All Tutor Request',
            path: '/dashboard/allTutorRequest',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'Create Notice',
            path: '/dashboard/createNotice',
            icon: iconMappings.Notice,
            role: 'admin'
        },
        {
            title: 'All Job Tuition',
            path: '/dashboard/allJobTuition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Tutor',
            path: '/dashboard/allTutor',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'Post Download Zone',
            path: '/dashboard/postDownloadZone',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Download Zone',
            path: '/dashboard/allDownloadZone',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'inbox',
            path: '/dashboard/adminInbox',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'Add Terms And Condition',
            path: '/dashboard/addTermsAndCondition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Terms And Condition',
            path: '/dashboard/allTermsAndCondition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        // Admin router END

        // Tutor router END
        {
            title: 'Tutor Home ',
            path: '/dashboard/TutorHome',
            icon: iconMappings.RoleHome,
            role: 'isTutor',
            gap: true
        },
        {
            title: 'Apply Job',
            path: '/dashboard/applyJob',
            icon: iconMappings.Question,
            role: 'isTutor'
        },
        {
            title: 'Update Profile',
            path: '/dashboard/UpdateProfile',
            icon: iconMappings.Live,
            role: 'isTutor'
        },
        {
            title: 'Add Blog',
            path: '/dashboard/addBlog',
            icon: iconMappings.Blog,
            role: 'isTutor'
        },
        {
            title: 'Join Meeting',
            path: '/dashboard/addMeeting',
            icon: iconMappings.Blog,
            role: 'isTutor'
        },
        {
            title: 'Notice Board',
            path: '/dashboard/noticeBoard',
            icon: iconMappings.Notice,
            role: 'isTutor'
        },
        // tutor router END
        // parent router START
        {
            title: 'Parent Home',
            path: '/dashboard/ParentHome',
            icon: iconMappings.RoleHome,
            role: 'isParent',
            gap: true
        },
        {
            title: 'Job Request History',
            path: '/dashboard/jobRequestHistory',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Enrol Premium History',
            path: '/dashboard/paymentHistory',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Notice Board',
            path: '/dashboard/parentNoticeBoard',
            icon: iconMappings.Notice,
            role: 'isParent'
        },
        {
            title: 'Add Meeting',
            path: '/dashboard/addMeeting',
            icon: iconMappings.Live,
            role: 'isParent'
        },
        {
            title: 'Student Analytics',
            path: '/dashboard/studentAnalytics',
            icon: iconMappings.Analytics,
            role: 'isParent'
        },

        {
            title: 'Home ',
            path: '/',
            icon: iconMappings.Home,
            role: 'general',
            gap: true
        }
    ]

    const isAdminMenus = Menus.filter(menu => menu.role === 'admin')
    const isTutorMenus = Menus.filter(menu => menu.role === 'isTutor')
    const isParentMenus = Menus.filter(menu => menu.role === 'isParent')
    const generalMenus = Menus.filter(menu => menu.role === 'general')

    return (
        <div className="flex gap-x-5 overflow-x-hidden overflow-y-auto">
            <div className={`${open ? 'md:w-64 p-3' : 'w-16 p-1 text-center'} duration-200 fixed transition-all bg-slate-500 relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-500'} absolute top-9 -right-3 md:w-8 md:h-8 w-7 h-7 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />

                <div className={`flex gap-x-4 items-center`}>
                    <div className='text-center w-full'>
                        <img src={logo} alt="" className={`${open ? 'w-16 h-16 mx-auto' : ' w-9 h-9 mx-auto'} cursor-pointer duration-500 bg-white rounded-xl`} />
                        {
                            open ? <>
                                <h2 className={`${!open && 'scale-0'} text-white text-xl font-medium origin-left duration-300`}>Home Tutor Provider<sup>BD</sup></h2>
                                <Link to="/"
                                    className='text-xs text-white text-center py-[2px] px-2 hover:bg-orange-700 hover:underline transition-all duration-300 bg-orange-500 rounded-full w-1/2 mx-auto '>
                                    visit website
                                </Link>
                            </>
                                :
                                ''
                        }
                    </div>
                </div>

                {/* dashboard Nav Ber */}
                <ul
                    className={`${open ? '' : ''}  flex flex-col text-center`}>
                    {isAdmin
                        ? isAdminMenus.map((Menu, index) => (
                            <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                                } ${index === 0 && ' hover:bg-primary'}`}>
                                <li

                                    className='flex items-center gap-x-4'
                                >

                                    <IconContext.Provider value={{ className: 'react-icon' }}>
                                        <Menu.icon />
                                    </IconContext.Provider>
                                    <span
                                        className={`${!open && 'hidden'
                                            } origin-left duration-200`}
                                    >
                                        {Menu.title}
                                    </span>

                                </li>
                            </Link>
                        ))
                        : //  Instructor menus
                        isTutor
                            ? isTutorMenus.map((Menu, index) => (
                                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-primary'}`}>
                                    <li

                                        className='flex items-center gap-x-4'
                                    >

                                        <IconContext.Provider value={{ className: 'react-icon' }}>
                                            <Menu.icon />
                                        </IconContext.Provider>
                                        <span
                                            className={`${!open && 'hidden'
                                                } origin-left duration-200`}
                                        >
                                            {Menu.title}
                                        </span>

                                    </li>
                                </Link>
                            ))
                            : // User menus
                            isParentMenus.map((Menu, index) => (
                                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer text-white hover:bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-primary'}`}>
                                    <li

                                        className='flex items-center gap-x-3'
                                    >

                                        <IconContext.Provider value={{ className: 'react-icon text-lg' }}>
                                            <Menu.icon />
                                        </IconContext.Provider>
                                        <span
                                            className={`${!open && 'hidden'
                                                } origin-left duration-200`}
                                        >
                                            {Menu.title}
                                        </span>

                                    </li>
                                </Link>
                            ))}
                    {generalMenus.map((Menu, index) => (
                        <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                            } ${index === 0 && ' hover:bg-blue-500'}`}>
                            <li

                                className='flex items-center gap-x-4'
                            >

                                <IconContext.Provider value={{ className: 'react-icon text-lg' }}>
                                    <Menu.icon />
                                </IconContext.Provider>
                                <span
                                    className={`${!open && 'hidden'} origin-left duration-200 text-base`}
                                >
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='px-3 flex-1 h- h-[100vh] overflow-x-hidden'>
                <div className='w-full sticky top-0 z-50'>
                    <DashboardHeader open={open} setOpen={setOpen} />
                </div>
                <Outlet />
            </div>
            {/* Dashboard main content */}
            {/* <div
                className={` ${open ? 'pl-60 pr-4' : 'pl-16 pr-2'
                    }  flex-1  overflow-y-auto  duration-500 transition-all h-[100vh] ${isAdmin
                        ? ''
                        : isTutor
                            ? ''
                            : ''
                    }`}
            >
                <Outlet></Outlet>
            </div> */}
        </div>
    );
};

export default Dashboard;