import HeaderDashB from "../components/ui/HeaderDashB";
import RightPanesDashB from "../components/ui/RightPanesDashB";
import LeftPanesDashB from "../components/ui/LeftPanesDashB";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1">
            <HeaderDashB/>
            
            <div className="flex">
                <RightPanesDashB/>
                <LeftPanesDashB/>
            </div>

        </div>
    );
}
export default Dashboard;