import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import t1 from '../../../assets/img/team1.png'
import t2 from '../../../assets/img/team2.png'
import t3 from '../../../assets/img/team3.png'
import t4 from '../../../assets/img/team4.png'
import fa from '../../../assets/icon/f.png'
import ins from '../../../assets/icon/i.png'
import tw from '../../../assets/icon/t.png'

const Team = () => {
    return (
        <div id="expert" className="expert">

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



            <div className="team-container">
                <div className="team-container-iteam">
                    <figure className=""><img src={t1} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs text-[#30c3da]">Profession</p>

                        <div className="team-icon">
                            <img src={fa} alt="" />
                            <img src={ins} alt="" />
                            <img src={tw} alt="" />
                        </div>
                    </div>
                </div>

                <div className="team-container-iteam">
                    <figure className=""><img src={t2} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs text-[#30c3da]">Profession</p>

                        <div className="team-icon">
                            <img src={fa} alt="" />
                            <img src={ins} alt="" />
                            <img src={tw} alt="" />
                        </div>
                    </div>
                </div>

                <div className="team-container-iteam">
                    <figure className=""><img src={t3} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs text-[#30c3da]">Profession</p>

                        <div className="team-icon">
                            <img src={fa} alt="" />
                            <img src={ins} alt="" />
                            <img src={tw} alt="" />
                        </div>
                    </div>
                </div>

                <div className="team-container-iteam">
                    <figure className=""><img src={t4} alt="Shoes" className=""/></figure>
                    <div className="card-body text-center">
                        <h5>Julian Jameson</h5>
                        <p className="text-xs text-[#30c3da]">Profession</p>

                        <div className="team-icon">
                            <img src={fa} alt="" />
                            <img src={ins} alt="" />
                            <img src={tw} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Team;