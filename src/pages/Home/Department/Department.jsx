import Title from "../../../component/Title/Title";
import logo from '../../../assets/icon/1.png'

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

                <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5 bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Cancer Care</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about </p>

                    </div>
                </div>

                <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  sm:mt-14 py-5 bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Health Queries</h6>
                        <p className="text-xs">The gradual
                            accumulation of
                            information about  </p>

                    </div>
                </div>

                <div className="card w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5  bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="p-5">
                        <h6>Quick examination</h6>
                        <p className="text-xs">The gradual
                            information about
                            atomic behaviour... </p>

                    </div>
                </div>

                <div className="card sm:mt-14 w-fit sm:w-52 h-fit mx-7 sm:mx-0  py-5  bg-white shadow-xl rounded-none text-[#252B42] transition-all ease-in-out hover:bg-[#0E63F4] hover:text-white duration-300">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt="Shoes" className="rounded-xl" />
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