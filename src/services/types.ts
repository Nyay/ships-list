export interface ILangCollection {
  ru: string
  fr: string
  en: string
  nl: string
  th: string
  pt_br: string
  zh_cn: string
  ko: string
  de: string
  tr: string
  it: string
  zh_sg: string
  uk: string
  es: string
  cs: string
  es_mx: string
  ja: string
  pl: string
  zh_tw: string
}

export interface IShip {
  level: number
  name: string
  icons: {
    local_contour: string
    contour_alive: string
    default: string
    local_small: string
    contour_dead: string
    large: string
    local_contour_dead: string
    local_contour_alive: string
    small: string
    contour: string
  }
  tags: string[]
  localization: {
    shortmark: ILangCollection
    description: ILangCollection
    mark: ILangCollection
  }
  nation: string
}

export interface IShipResponse {
  status: string
  data: Record<string, IShip>
}
