const DashBItems = ({ setActivePane }) => {
    return (
        <div className="w-1/4 bg-rose-500">
            <div className="text-white p-4 space-y-3">
                <h1>Welcome user</h1>
                <ul className="space-y-3">
                    <li className="cursor-pointer text-lg font-semibold"
                        onClick={() => setActivePane('Subjects')}>Subjects
                    </li>
                    <li className="cursor-pointer text-lg font-semibold"
                        onClick={() => setActivePane('Calendar')}>Calendar
                    </li>
                    <li className="cursor-pointer text-lg font-semibold"
                        onClick={() => setActivePane('Analysis')}>Analysis
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default DashBItems;