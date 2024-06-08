import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa6";


const DoctorSpecialize = () => {
    return (
        <div id="specialize" className="specialize ">

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


            <div className="ds-container">
                <div className="space-y-6">
                    <div className="ds-container-iteam">

                        <div className="ds-icon">
                            <FaHandHoldingHeart className="text-4xl text-white" />
                        </div>

                        <div className="p-5 sp">
                            <p className="h6">Book now</p>
                            <p className="text-xs">The gradual
                                accumulation of
                                information about  </p>

                        </div>
                    </div>
                    <div className="ds-container-iteam">
                        <div className="ds-icon">
                            <BsFillFileEarmarkMedicalFill className="text-4xl text-white" />
                        </div>
                        <div className="p-5">
                            <p className="h6">Online Appoinment</p>
                            <p className="text-xs">The gradual
                                accumulation of
                                information about  </p>

                        </div>
                    </div>
                </div>

                <div className="ds-container-iteam">
                    <div className="ds-icon">
                        <FaNotesMedical className="text-4xl text-white" />
                    </div>
                    <div className="p-5">
                        <p className="h6">Painless procedures</p>
                        <p className="text-xs">The gradual
                                accumulation of
                                information about  </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorSpecialize;