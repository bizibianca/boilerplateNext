import { GetStaticProps } from 'next'
import SectionHero from 'components/SectionHero'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

import styles from '../style'

const Index = ({ logo }: LandingPageProps) => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <SectionHero logo={logo} />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
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
