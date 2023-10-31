import HeaderDashB from "../components/ui/HeaderDashB";
import RightPanesDashB from "../components/ui/RightPanesDashB";
import LeftPanesDashB from "../components/ui/LeftPanesDashB";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderDashB/>
            
            <div className="flex flex-grow">
                <RightPanesDashB/>
                <LeftPanesDashB/>
            </div>

        </div>
    );
}
export default Dashboard;