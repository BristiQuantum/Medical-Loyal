import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import expert from '../../../assets/img/team.png'
import fac from '../../../assets/icon/Vector.png'

const Team = () => {
    return (
        <div className="expert">

            {/* left side  */}
            <div className=" space-y-3 lg:w-1/2 ">
                <Title
                    subTitle='Team'
                    title='Meet Our Experts'
                ></Title>

                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics </p>

                <div className="btn-arrow">
                    <span>Learn More</span>
                    <IoIosArrowForward className="mt-1" />
                </div>
            </div>



            <div className="flex flex-wrap jmd:flex-nowrap justify-center items-center gap-6 my-9">
                <div className="card md:w-56 bg-white text-[#737373] shadow-xl rounded-3xl">
                    <figure className=""><img src={expert} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs">Profession</p>

                        <div className="card-actions justify-center gap-3 ">
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card md:w-56 bg-white text-[#737373] shadow-xl rounded-3xl">
                    <figure className=""><img src={expert} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs">Profession</p>

                        <div className="card-actions justify-center gap-3 ">
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card md:w-56 bg-white text-[#737373] shadow-xl rounded-3xl">
                    <figure className=""><img src={expert} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs">Profession</p>

                        <div className="card-actions justify-center gap-3 ">
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card md:w-56 bg-white text-[#737373] shadow-xl rounded-3xl">
                    <figure className=""><img src={expert} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs">Profession</p>

                        <div className="card-actions justify-center gap-3 ">
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                            <img src={fac} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Team;