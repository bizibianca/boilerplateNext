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

export type LandingPageProps = {
  logo: LogoProps
  Menu: MenuProps
}
