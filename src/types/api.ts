export type StatsItem = {
  title: string
  number: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type MenuItem = {
  Title: string
  Link: string
  Order?: number
}

export type MenuData = {
  MenuItems: MenuItem[]
}

export type MenuProps = {
  MenuItems: MenuItem[]
}

export type SectionTechProps = {
  title: string
  statsItems: StatsItem[]
}

export type LandingPageProps = {
  logo: LogoProps
  Menu: MenuProps
}
