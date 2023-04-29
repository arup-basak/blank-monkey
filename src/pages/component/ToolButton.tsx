import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ToolButtonProps {
  onClick: (toolName: string) => void
  icon: StaticImageData
  toolName: string,
  activeTool: string
}

const ToolButton = (props: ToolButtonProps) => {
  return (
    <div
      onClick={() => props.onClick(props.toolName)}
      className={`
          cursor-pointer p-2 m-1 rounded
          ${props.toolName === props.activeTool ? `bg-red-500` : ''}
        `}>
      <Image
        src={props.icon}
        alt={props.toolName}
        height={24}
        width={24} />
    </div>
  )
}

export default ToolButton