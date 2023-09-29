import * as React from 'react'

import { FC } from 'react'
import Image from 'next/image'
import { clients } from '../../constants'
import styles from '../../style'

interface Client {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any
}

const SectionClients = () => {
  return (
    <>
      <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client: Client) => (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
            >
              {/* The 'as string' assertion could sometimes help if images are URLs */}
              <Image
                src={client.logo as string}
                alt="client_logo"
                width={192}
                height={192}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default SectionClients
