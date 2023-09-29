import { GetStaticProps } from 'next'
import SectionHero from 'components/SectionHero'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

import styles from '../style'
import { Business, Stats } from 'components'

import {
  SectionStats,
  SectionBusiness,
  SectionBilling,
  SectionCardDeal,
  SectionTestimonials,
  SectionClients,
  SectionCTA,
  SectionFooter
} from '../components/index'

const Index = ({ logo }: LandingPageProps) => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <SectionHero logo={logo} />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionStats />
        <SectionBusiness />
        <SectionBilling />
        <SectionCardDeal />
        <SectionTestimonials />
        <SectionClients />
        <SectionCTA />
        <SectionFooter />
      </div>
    </div>
  </>
)
export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  console.log(landingPage)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
