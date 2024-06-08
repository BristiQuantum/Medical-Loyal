import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import vdo from '.././../../assets/vdo/vdo.mp4'


const Activity = () => {
    return (
        <div id="activity" className="activity">

            {/* left side  */}
            <div className=" activity-left ">
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
            <div className="activity-righht">
                <video controls autoPlay className="rounded-3xl ">
                    <source src={vdo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    );
};

export default Activity;