import React, { useEffect, useState } from "react"
import { CONSTANTS } from "constants/constants"
export const Button = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (typeof count === "number") {
      console.log("useEffect fired if count number")
    }
    console.log("useEffect fired")
    setCount(count + 0.5)
  }, [])

  return (
    <button
      onClick={() => {
        console.log("click")
        setCount(count + 1)
      }}
    >
      {CONSTANTS.btnLbl}
      <p>{count}</p>
    </button>
  )
}
