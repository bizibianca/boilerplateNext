import React, { useState } from 'react'

import Image from 'next/image'

import { close, menu } from '../../assets'
import { discount, robot } from '../../assets'
import { navLinks } from '../../constants'

import styles from '../../style'

import { LogoProps } from 'types/api'

import Logo from 'components/Logo'
import GetStarted from 'components/GetStarted/GetStarted'

type Props = {
  logo: LogoProps
}

const SectionHero = ({ logo }: Props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar ">
            <Logo {...logo} />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />

              <div
                className={`${
                  toggle ? 'flex' : 'hidden'
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                      } text-white`}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <Image
                  src={discount}
                  alt="discount"
                  className="w-[32px] h-[32px]"
                />
                <p className={`${styles.paragraph} ml-2`}>
                  <span className="text-white">20%</span> Discount For{' '}
                  <span className="text-white">1 Month</span> Account
                </p>
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  The Next <br className="sm:block hidden" />
                  <span className="text-gradient">Generation</span>
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                  <GetStarted />
                </div>
              </div>

              <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                Payment Method.
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>

            <div
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              <Image
                src={robot}
                alt="billing"
                className="w-[100%] h-[100%] relative z-[5]"
              />

              {/* gradient start */}
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
              <GetStarted />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SectionHero
