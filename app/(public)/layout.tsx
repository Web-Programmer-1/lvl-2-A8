import React from "react"

interface IChildren {
    children:React.ReactNode
}


export default function PublicLayout({children}:IChildren) {
  return (
    <div>
      {children}
    </div>
  )
}
