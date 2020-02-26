import React, { forwardRef, useRef, useState } from "react"
import { useFrame } from "react-three-fiber"
import lerp from "lerp"
import "../materials/CustomMaterial"
import { useBlock } from "./Block"
import state from "../../data/store"

const Plane = forwardRef(
  ({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
    const { viewportHeight, offsetFactor } = useBlock()
    const material = useRef()
    let last = state.top.current

    useFrame(() => {
      const { pages, top } = state
      material.current.scale = lerp(
        material.current.scale,
        offsetFactor - top.current / ((pages - 1) * viewportHeight),
        0.05
      )
      material.current.shift = lerp(
        material.current.shift,
        (top.current - last) / shift,
        0.05
      )
      last = top.current
    })

    const [hovered, setHover] = useState(false)

    return (
      <mesh
        {...props}
        ref={ref}
        onWheel={e => console.log("wheel spins")}
        onPointerEnter={e => console.log("enter")}
        onPointerLeave={e => console.log("leave", e)}
        onUpdate={self => console.log("props have been updated")}
      >
        <planeBufferGeometry attach="geometry" args={args} />
        <customMaterial
          ref={material}
          attach="material"
          color={color}
          map={map}
          transparent
          opacity={opacity}
        />
      </mesh>
    )
  }
)

export default Plane
