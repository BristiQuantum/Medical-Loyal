import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import expert from '../../../assets/img/expert.png'


const Activity = () => {
    return (
        <div className="activity">

            {/* left side  */}
            <div className=" space-y-3 lg:w-[40%] ">
                <Title
                    bar=''
                    title='Our Activity'
                ></Title>

                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics </p>

                <div className="btn-arrow">
                    <span>Learn More</span>
                    <IoIosArrowForward className="mt-1" />
                </div>
            </div>


            {/* right side  */}
            <div className="">
                <img src={expert} alt="" />
            </div>

        </div>
    );
};

export default Activity;