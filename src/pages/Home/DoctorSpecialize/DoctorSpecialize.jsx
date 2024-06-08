import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import img1 from '../../../assets/icon/d1.png'
import { FaHandHoldingHeart } from "react-icons/fa";


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
                    <div className="ds-container-iteam">
                        
                        <div className="p-5 m-5 bg-[#95DBE5FF] w-fit rounded-full">
                        <FaHandHoldingHeart className="text-4xl text-white"/>
                        </div>
                        
                        <div className="p-5">
                            <h6>Cancer Care</h6>
                            <p className="text-xs">The gradual
                                accumulation of
                                information about </p>

                        </div>
                    </div>
                    <div className="ds-container-iteam">
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

                <div className="ds-container-iteam">
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