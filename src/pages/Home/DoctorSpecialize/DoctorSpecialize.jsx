import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import img1 from '../../../assets/icon/d1.png'


const DoctorSpecialize = () => {
    return (
        <div className="specialize ">

            <div className="space-y-3 xl:basis-[40%]">
                <Title
                    subTitle='Courses'
                    title='Our Doctors Specialize in you'></Title>

                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics </p>

                <div className="btn-arrow">
                    <span>Learn More</span>
                    <IoIosArrowForward className="mt-1" />
                </div>
            </div>


            <div className="flex flex-col sm:flex-row items-center gap-6 ">
                <div className="space-y-6">
                    <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5 bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="p-5">
                            <h6>Cancer Care</h6>
                            <p className="text-xs">The gradual
                                accumulation of
                                information about </p>

                        </div>
                    </div>
                    <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5 bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="p-5">
                            <h6>Cancer Care</h6>
                            <p className="text-xs">The gradual
                                accumulation of
                                information about </p>

                        </div>
                    </div>
                </div>

                <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5 bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Cancer Care</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorSpecialize;