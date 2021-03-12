import { useState, useEffect } from "react"
import ProgressBar from './ProgressBar'

function CardProgress() {
  const [value, updateValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      updateValue(oldValue => {
        const newValue = oldValue + 0.25
        if (newValue === 100) {
          return () => clearInterval(interval)
        }
        return newValue
      })
    }, 25)
  }, [])
  return (
  <ProgressBar value={value} />
  )
}

export default CardProgress