import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../component/Title/Title";
import medicin from '../../../assets/img/f.png'

const LeadingMedicine = () => {
    return (
        <div>
            <div className="medicin">

                {/* left side  */}
                <div className="">
                    <img src={medicin} alt="" />
                </div>


                {/* right  side  */}
                <div className=" space-y-3 xl:basis-[40%]">
                    <Title
                        bar=''
                        title='Leading Medicine'
                    ></Title>

                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics:
                        Newtonian mechanics </p>

                    <div className="btn-arrow">
                        <span>Learn More</span>
                        <IoIosArrowForward className="mt-1" />
                    </div>
                </div>




            </div>
        </div>
    );
};

export default LeadingMedicine;