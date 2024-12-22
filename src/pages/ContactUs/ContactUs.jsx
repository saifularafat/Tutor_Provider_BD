import PageTitleShow from '../../Components/PageTitleShow/PageTitleShow';
import './../../Share/Footer/footer.css';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { serverApiUrl } from '../../../ApiSecret';

const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const idNumber = '1024560';
    // const serverApiUrl = import.meta.env.VITE_SERVER_API_URL || "http://localhost:5000";

    const onSubmit = (data) => {
        console.log("Submitted data:", data);
        const { contactName, contactEmail, message } = data;

        const createContact = {
            userId: idNumber,
            contactName,
            contactEmail,
            message
        };

        console.log("Sending data to API:", createContact);

        axios.post(`${serverApiUrl}/api/contact`, createContact)
            .then(response => {
                console.log("API Response:", response.data);
                if (response.data.success) {
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: (response.data.message),
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error("Error posting contact information:", error.message);
            });
    };

    return (
        <div className='bg-blue-100'>
            <div className="container mx-auto md:py-16 py-5">
                <PageTitleShow currentPage="Contact Us" />
                <div className='md:flex items-center justify-center md:gap-8 px-2 '>
                    <div className="w-full max-w-lg shadow-2xl shadow-blue-400 md:relative rounded-3xl md:px-10 px-5 md:pb-10 pb-6 md:pt-8 pt-4 md:mt-16 mt-6 dark:bg-zinc-900 border-sky-200 border-y">
                        <div className="md:my-6">
                            <h2 className="text-center text-3xl font-semibold tracking-tight">Contact Us</h2>
                            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:space-y-6 space-y-2 md:py-0 py-4">
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">Name</label>
                                <input
                                    {...register("contactName", { required: true })}
                                    type="text"
                                    name="contactName"
                                    placeholder="Your User Name"
                                    className="h-10 w-full bg-white rounded-lg border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                />
                                {errors.contactName && (
                                    <p className="text-red-600 text-sm">User Name is required</p>
                                )}
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="email">Email</label>
                                <input
                                    {...register("contactEmail", { required: true })}
                                    type="email"
                                    name="contactEmail"
                                    placeholder="Your Email"
                                    className="h-10 w-full bg-white rounded-lg border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                />
                                {errors.contactEmail && (
                                    <p className="text-red-600 text-sm">Email is required</p>
                                )}
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="message">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    name="message"
                                    placeholder="What's on your mind?"
                                    className="min-h-[80px] w-full bg-white rounded-lg border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                />
                                {errors.message && (
                                    <p className="text-red-600 text-sm">Message is required</p>
                                )}
                            </div>
                            <button type='submit' className="rounded-lg-md md:w-auto w-full bg-sky-400 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 rounded-lg duration-200">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
