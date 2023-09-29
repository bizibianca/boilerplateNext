const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment menu on LandingPage {
    Menu {
      MenuItems {
        Title
        Link
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      statsItems {
        title
        number
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...menu
      ...sectionTech
    }
  }
`

export default GET_LANDING_PAGE
