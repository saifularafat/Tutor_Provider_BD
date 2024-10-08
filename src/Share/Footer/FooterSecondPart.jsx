import { Link } from "react-router-dom";

const FooterSecondPart = () => {
    return (
        <div className="col-span-2 pl-3">
            <h2 className="text-2xl font-semibold text-slate-900">Quick Links</h2>
            <div className="pt-6 space-y-2">
                <div>
                    <Link to="tutor-profile" className="text-base font-medium text-orange-600 hover:underline">Hire Tutor</Link>
                </div>
                <div>
                    <Link to="login" className="text-base font-medium text-orange-600 hover:underline">Login</Link>
                </div>
                <div>
                    <Link to="registration" className="text-base font-medium text-orange-600 hover:underline">Registration</Link>
                </div>
                <div>
                    <Link to="about-us" className="text-base font-medium text-orange-600 hover:underline">About us</Link>
                </div>
                <div>
                    <Link to="#" className="text-base font-medium text-orange-600 hover:underline">Terms of User</Link>
                </div>
                <div>
                    <Link to="#" className="text-base font-medium text-orange-600 hover:underline">Join Our Team</Link>
                </div>
            </div>
        </div>
    );
};

export default FooterSecondPart;