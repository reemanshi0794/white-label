import { useState } from "react"
import { useAnimation, useCycle } from "framer-motion"

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavToggler() {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const [x, cycleX] = useCycle("0%", "150%")
  const animation = useAnimation()

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks)
    animation.start({
      x: x,
      display: "block",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "10",
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      borderRadius: "0.5rem",
      borderWidth: "1px",
      backgroundColor: "white",
      padding: "2rem",
      textAlign: "center",
      color: "black",
    })
    cycleX()
  }

  return { showNavLinks, animation, toggleNavbar }
}
