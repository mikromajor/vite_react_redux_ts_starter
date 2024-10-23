import React, { useEffect, useState, useRef } from "react"
import { CONSTANTS } from "constants/constants"
export const Button = () => {
  let i = 0
  const [count, setCount] = useState(0)

  useEffect(() => {
    i++
    setCount(c => c + 0.5)
    console.log("i =", i, "Count =", count)
  }, [])

  return (
    <button
      onClick={() => {
        console.log("click, i =", i)
        setCount(count + 1)
      }}
    >
      {CONSTANTS.btnLbl}
      <p>{count}</p>
      <p> {count === 0 ? Date.now() : "0"}</p>
      <p> {count === 0.5 ? Date.now() : "0.5"}</p>
      <p>{count === 1 ? Date.now() : "1"}</p>
    </button>
  )
}
