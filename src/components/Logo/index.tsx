import Image from 'next/image'
import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'

import { LogoProps } from 'types/api'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <Image
    src={getImageUrl(url)}
    className="w-[124px] h-[32px]"
    width="224px"
    height="132px"
    alt={alternativeText}
  />
)

export default Logo
