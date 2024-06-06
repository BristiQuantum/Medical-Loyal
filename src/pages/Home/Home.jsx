import Activity from "./Activity/Activity";
import Department from "./Department/Department";
import DoctorSpecialize from "./DoctorSpecialize/DoctorSpecialize";
import Hero from "./Hero/Hero";
import LeadingMedicine from "./LeadingMedicine/LeadingMedicine";
import Update from "./Update/Update";
import Team from "./Team/Team";
import Newsletter from "./Newsletter/Newsletter";


const Home = () => {
    return (
        <div>

            <Hero></Hero>
            <Activity></Activity>
            <Update></Update>
            <Department></Department>
            <LeadingMedicine></LeadingMedicine>
            <DoctorSpecialize></DoctorSpecialize>
            <Team></Team>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default Home;