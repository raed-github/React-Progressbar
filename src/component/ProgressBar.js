import { useEffect, useState } from "react";

const ProgressBar = ()=>{
	const [precentage, setPercentage] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (precentage < 100 && isRunning) {
			setTimeout(() => setPercentage(prev => prev += 2), 50)
		}
	},[precentage, isRunning])
    return (
        <div>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${precentage}%`,
                    background: "linear-gradient(200deg, rgb(50, 60, 254) 0%,rgba(85, 102, 253, 0.942) 32%,rgba(63, 72, 253, 0.736) 100%)",
                    transition:"width 0.5s"
                }}></div>
                <span className="progressPercent">{ precentage }%</span>
            </div>
            <button className="btn" onClick={() => {setIsRunning(true)}}>Test</button>
    </div>
    )
}

export default ProgressBar