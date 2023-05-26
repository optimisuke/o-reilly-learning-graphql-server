export type PhotoCategory = 'SELFIE' | 'PORTRAIT' | 'ACTION' | 'LANDSCAPE' | 'GRAPHIC'

export interface Photo {
  id: string
  name: string
  description?: string
  category: PhotoCategory
  githubUser: string
  created: Date
}

export type PhotoInput = Omit<Photo, 'id'>
