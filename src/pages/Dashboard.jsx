import { useState } from "react";

import HeaderDashB from "../components/ui/HeaderDashB";
import DashBItems from "../components/ui/DashBItems";
import SubjectsPane from "../components/ui/SubjectsPane";
import CalendarPane from "../components/ui/CalendarPane";
import AnalysisPane from "../components/ui/AnalysisPane";

const Dashboard = () => {
    const [activePane, setActivePane] = useState('Subjects');

    return (
        <div className="flex flex-col h-screen">
            <HeaderDashB/>
            
            <div className="flex flex-grow">
                <DashBItems activePane={activePane} 
                            setActivePane={setActivePane}/>
                { activePane === 'Subjects' && <SubjectsPane/>}
                { activePane === 'Calendar' && <CalendarPane/>}
                { activePane === 'Analysis' && <AnalysisPane/>}
            </div>

        </div>
    );
}
export default Dashboard;