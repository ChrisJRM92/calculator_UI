import { useEffect } from "react"
import { useState } from "react"
import './Header.css'
const Display = () => {
  const [getTime, setgetTime] = useState({
    hour: '',
    minutes: ''
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour1 = String(now.getHours()).padStart(2, '0');
      const minutes1 = String(now.getMinutes()).padStart(2, '0');
      setgetTime({
        hour: hour1,
        minutes: minutes1
      })
    }

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
  
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  
  
  return (
    <>
      <div className="header_content">
        <p>{getTime.hour}:</p>
        <p>{getTime.minutes}</p>
      </div>
      <div className="header_items">
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-battery-full"></i>
      </div>
    </>
  )
}

export default Display