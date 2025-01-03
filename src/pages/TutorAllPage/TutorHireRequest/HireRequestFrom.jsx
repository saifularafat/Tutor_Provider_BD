import { useState } from "react";
import { useForm } from "react-hook-form";
import HirePageRequestModel from "../../../Components/Model/HirePageRequestModel";
const HireRequestFrom = () => {
    const [openModal, setOpenModal] = useState(false);

    const [districts, setDistricts] = useState();
    const [cityAreas, setCityAreas] = useState([]);

    const { register,
        formState: { errors },
        handleSubmit } = useForm();

    // location data
    const BdDistricts = [
        {
            stateName: "Dhaka", stateAreas: [
                { name: "Mirpur-1", },
                { name: "Kajipara", },
                { name: "Shahabag", },
                { name: "Bonosri", },
                { name: "Shaidabad", },
                { name: "New Market", },
                { name: "Dhaka University", },
                { name: "Baridara", },
                { name: "Kowran-Bazar", },
                { name: "Mirpur-10", },
                { name: "Mirpur-11", },
                { name: "Mirpur-12", },
                { name: "Danmondi", },
                { name: "Jatrabari", },
                { name: "Gulistan", },
                { name: "Uttora", },
            ]
        },
        {
            stateName: "Cumilla", stateAreas: [
                { name: "Kandirpar", },
                { name: "Jowtala", },
                { name: "Rajgonju", },
                { name: "Ranir-Bazar", },
                { name: "Shahsongasa", },
                { name: "polis line", },
                { name: "Chok-Bazar", },
                { name: "Bibir-Bazar", },
                { name: "Burisong", },
                { name: "B-Para", },
                { name: "Mirpur", },
                { name: "Canterman", },
                { name: "Laksam", },
            ]
        },
        {
            stateName: "Syhlet", stateAreas: [
                { name: "Syhlet", },
                { name: "Sunamgong", },
                { name: "Hobigong", },
                { name: "Mahdubpur", },
                { name: "Molebi-Bazar", },
                { name: "Srimongol", }
            ]
        }
    ]

    // LOCATION CLICK show sub location
    const handleDistricts = (e) => {
        setDistricts(e.target.value)
        setCityAreas(BdDistricts.find(areas => areas.stateName === e.target.value).stateAreas)
    }

    // all from is submit from
    const onSubmit = (data) => {
        console.log("first data", data);

    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                    <div className=" bg-[#F3F3F3] px-4 rounded-md">
                        {/* Category */}
                        <div className="md:flex items-center gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text md:text-xl text-xl font-semibold">Category *</span>
                                </label>
                                <select {...register("category")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                    <option value="Online" selected>Online</option>
                                    <option value="StudentsHome">Students Home</option>
                                    <option value="TeachersHome">Teachers Home</option>
                                    <option value="CoachingCenter">Coaching Center</option>
                                    <option value="School">School</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-lg  font-semibold">Location *</span>
                                </label>
                                <select {...register("location")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal"
                                    onChange={handleDistricts}
                                >
                                    <option value="" selected>-- select -- </option>
                                    {
                                        BdDistricts.map(district => (
                                            <option
                                                key={district?.stateName}
                                                value={district?.stateName}>
                                                {district?.stateName}
                                            </option>
                                        ))
                                    }
                                </select>
                                {errors.location?.type === "required" && (
                                    <p className="text-red-600 text-sm">Location is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-lg  font-semibold">Sub Location *</span>
                                </label>
                                <select {...register("subLocation")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                    <option selected>-- select --</option>
                                    {cityAreas.map(city => (
                                        <option
                                            key={city?.name}
                                            value={city.name}>{city?.name}</option>
                                    ))}
                                </select>
                                {errors.subLocation?.type === "required" && (
                                    <p className="text-red-600 text-sm">Sub Location is required</p>
                                )}
                            </div>

                        </div>
                        <div className="md:flex items-center mt-3 md:space-x-3">
                            <div className="md:w-1/2 w-full">
                                <label className="label ">
                                    <span className="label-text md:text-xl text-xl font-semibold">Address *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    {...register("yourAddress", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full text-base"
                                />
                                {errors.yourAddress?.type === "required" && (
                                    <p className="text-red-600 text-sm">Your Address is required</p>
                                )}
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label className="label">
                                    <span className="label-text md:text-xl text-xl font-semibold">Phone number *</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    {...register("phoneNumber", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full text-base"
                                />
                                {errors.phoneNumber?.type === "required" && (
                                    <p className="text-red-600 text-sm">Phone Number is required</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-xl  font-semibold">Additional Comments *</span>
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="20"
                                    rows="3"
                                    placeholder="Additional Comments"
                                    {...register("AdditionalComments")}
                                    className="border border-slate-300 rounded-md overflow-hidden w-full p-2"
                                >
                                </textarea>
                            </div>
                        </div>
                        {/* modal */}
                        <HirePageRequestModel actionBtn="Submit" openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                </form>
            </div>


        </>
    );
};

export default HireRequestFrom;