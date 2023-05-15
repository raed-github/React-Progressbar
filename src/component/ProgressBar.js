import { useEffect, useState } from "react";

const ProgressBar = ()=>{
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])
    return (
        <div>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "#0734e974",
                    transition:"width 0.5s"
                }}></div>
                <span className="progressPercent">{ filled }%</span>
            </div>
            <button className="btn" onClick={() => {setIsRunning(true)}}>Test</button>
    </div>
    )
}

export default ProgressBar