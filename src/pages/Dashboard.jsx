import HeaderDashB from "../components/ui/HeaderDashB";
import DashBItems from "../components/ui/DashBItems";
import SubjectsPane from "../components/ui/SubjectsPane";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderDashB/>
            
            <div className="flex flex-grow">
                <DashBItems/>
                <SubjectsPane/>
            </div>

        </div>
    );
}
export default Dashboard;