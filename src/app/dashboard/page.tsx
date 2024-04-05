import React from 'react'
import LineChart from './line-chart'

// Note: Only the function with "export default" as preceed will be displayed from this "page.tsx" file.
function BarChart() {
    return (
        <div>This is a bar chart component</div>
    )
}

// NB: The other .tsx files & components will be safely collocated until they are explicitly defined inside an "export default" function located in the page.tsx file of that dir.
export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <BarChart />
            {/* Imported & displayed from collocated file */}
            <LineChart />
        </div>
    )
}
