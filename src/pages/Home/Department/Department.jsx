import Title from "../../../component/Title/Title";
import d1 from '../../../assets/icon/d1.png'
import d2 from '../../../assets/icon/d2.png'
import d3 from '../../../assets/icon/d3.png'
import d4 from '../../../assets/icon/d4.png'

const Department = () => {
    return (
        <div className="department">

            <div className="space-y-3 lg:w-1/2">
                <Title
                    subTitle='Practice Advice'
                    title='Our Department'
                ></Title>

                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 mx-auto gap-10 w-fit">

                <div className="d-container-iteam">
                    <figure className="px-10 pt-10">
                        <img src={d1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Cancer Care</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about </p>

                    </div>
                </div>

                <div className="d-container-iteam sm:mt-14 ">
                    <figure className="px-10 pt-10">
                        <img src={d2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Health Queries</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about  </p>

                    </div>
                </div>

                <div className="d-container-iteam">
                    <figure className="px-10 pt-10">
                        <img src={d3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Quick examination</h6>
                        <p className="text-xs">The gradual
                            information about
                            atomic behaviour... </p>

                    </div>
                </div>

                <div className="d-container-iteam sm:mt-14 ">
                    <figure className="px-10 pt-10">
                        <img src={d4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Online Appoinment</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about  </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Department;