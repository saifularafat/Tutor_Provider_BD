import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./jobCategorySliderTabs.css";

const JobCategorySliderTabs = () => {
    const tabsBoxRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);

    const cities = [
        { name: "Dhaka", number: 122, bgColor: "bg-blue-400" },
        { name: "Chittagong", number: 23, bgColor: "bg-orange-400" },
        { name: "Barisal", number: 6, bgColor: "bg-red-500" },
        { name: "online", number: 14, bgColor: "bg-pink-600" },
        { name: "Khulna", number: 11, bgColor: "bg-sky-500" },
        { name: "Syhlet", number: 5, bgColor: "bg-lime-400" },
        { name: "Rangpur", number: 34, bgColor: "bg-green-500" },
        { name: "Rashahi", number: 0, bgColor: "bg-teal-600" },
        { name: "Cumilla", number: 9, bgColor: "bg-cyan-600" },
        { name: "Maimonsing", number: 8, bgColor: "bg-pink-400" },
    ];

    useEffect(() => {
        const tabsBox = tabsBoxRef.current;
        if (tabsBox) {
            setMaxScrollWidth(tabsBox.scrollWidth - tabsBox.clientWidth);
        }

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            tabsBox.scrollLeft -= e.movementX;
            setScrollPosition(tabsBox.scrollLeft);
        };

        const handleMouseUp = () => setIsDragging(false);

        // Event listeners for dragging
        tabsBox.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            tabsBox.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    const handleScroll = (direction) => {
        const tabsBox = tabsBoxRef.current;
        const scrollAmount = direction === "left" ? -350 : 350;
        tabsBox.scrollTo({
            left: tabsBox.scrollLeft + scrollAmount,
            behavior: "smooth",
        });
        setScrollPosition(tabsBox.scrollLeft + scrollAmount);
    };

    const handleMouseDown = () => setIsDragging(true);

    const isAtStart = scrollPosition <= 0;
    const isAtEnd = scrollPosition >= maxScrollWidth;

    return (
        <div className="flex items-center justify-between w-full scroll-tars-container overflow-hidden">
            {/* Left Arrow */}
            <div
                className="left-arrow icon bg-sky-600  p-2 ml-5 rounded-full text-white hover:bg-blue-700 transition-all duration-200 hover:translate-y-0.5"
                onClick={() => handleScroll("left")}
                style={{ display: isAtStart ? "none" : "flex" }}
            >
                <FaChevronLeft className="text-2xl " />
            </div>

            {/* Tabs List */}
            <ul
                className="flex items-center gap-7 px-4 py-4 mx-10 tabs-box scroll-smooth"
                ref={tabsBoxRef}
                onMouseDown={handleMouseDown}
            >
                {cities.map((city, index) => (
                    <li key={index}>
                        <Link to="" className={`${city.bgColor} py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide flex gap-2 items-center`}>
                            {city.name} <span className="text-sm font-normal text-white">({city.number})</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right Arrow */}
            <div
                className="right-arrow icon bg-sky-600 p-2 mr-5 rounded-full text-white hover:bg-blue-700 transition-all duration-200 hover:translate-y-0.5"
                onClick={() => handleScroll("right")}
                style={{ display: isAtEnd ? "none" : "flex" }}
            >
                <FaChevronRight className="text-2xl" />
            </div>
        </div>
    );
};

export default JobCategorySliderTabs;
