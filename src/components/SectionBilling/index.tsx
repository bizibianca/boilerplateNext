import { FC } from 'react'
import { apple, bill, google } from '../../assets'
import styles, { layout } from '../../style'
import Image from 'next/image'

const SectionBilling = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <Image
            src={bill}
            alt="billing"
            // layout="" // This makes the image fill its parent container
            // objectFit="cover" // Adjust according to your needs
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <div className="w-[128.86px] h-[42.05px] mr-5 cursor-pointer">
              <Image
                src={apple}
                alt="App Store"
                className="w-[128.86px] h-[42.05px]"
                // width={128.86} // Specify width
                // height={42.05} // Specify height
                // objectFit="contain"
              />
            </div>
            <div className="w-[144.17px] h-[43.08px] cursor-pointer">
              <Image
                src={google}
                alt="Google Play"
                className="w-[144.17px] h-[43.08px"
                // width={144.17} // Specify width
                // height={43.08} // Specify height
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionBilling
