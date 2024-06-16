export interface Wedding {
  id: number
  date: string

  message: {
    intro: string
    invitation: string
  }

  galleryImages: string[]
  attendCount: number

  groom: Person & { parent: Person[] }
  bride: Person & { parent: Person[] }

  location: Location
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

export interface Account {
  bankName: string
  accountNumber: string
}

export interface Person {
  name: string
  phoneNumber: string
  account: Account
}
