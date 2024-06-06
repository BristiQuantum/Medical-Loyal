
import Title from "../../../component/Title/Title";


const Newsletter = () => {
    return (
        <div className="newsletter">

            <div className=" space-y-3  text-center">
                <Title
                    subTitle='Newsletter'
                    title='JOIN US'
                ></Title>

                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics </p>

            </div>

            <div className="mt-12">
                <div className="join text-xs w-full">
                    <input type="text" placeholder="your email" className="input input-bordered join-item w-full" />
                    <button className="btn btn-primary join-item">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;