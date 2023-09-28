import Image from 'next/image'
import React from 'react'

interface LogoNavbarProps {
  src?: string // Made it optional
  width: number
  height: number
  onClick?: () => void
}

const LogoNavbar: React.FC<LogoNavbarProps> = ({
  src,
  width,
  height,
  onClick
}) => {
  if (!src) {
    return <div>Loading...</div> // Or render a default logo or another placeholder
  }

  return (
    <div onClick={onClick}>
      <Image src={src} alt="hoobank" width={width} height={height} />
    </div>
  )
}

export default LogoNavbar
