import { Outlet } from "react-router-dom";
import NavBer from "../Share/NavBer/NavBer";
import Footer from "../Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className="min-h-[calc(100vh-564px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;