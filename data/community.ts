export interface CommunityPhoto {
  original: string
  preview: string
  width: number
  height: number
  alt: string
}

export interface CommunityMoment {
  id: string
  title: string
  year: string
  role: string
  description: string
  photos: CommunityPhoto[]
}

// Original event descriptions and photographs recovered from PortfolioWebsite,
// main at 72ef299b5c1f81fa653bed2f36d0198a590b8fc7.
export const communityMoments: CommunityMoment[] = [
  {
    id: 'sigma-mengajar',
    title: 'Sigma Mengajar',
    year: '2025',
    role: 'Volunteer educator',
    description: 'Learning, creativity, and time spent together through a community teaching programme.',
    photos: [{
      original: 'sigmamengajar.png', preview: 'sigma-mengajar', width: 2590, height: 1444,
      alt: 'Volunteers and children sharing a creative activity during Sigma Mengajar.',
    }],
  },
  {
    id: 'blockchain-workshop',
    title: 'Blockchain workshop',
    year: '2024',
    role: 'Mentor / trainer',
    description: 'Helping university students explore blockchain fundamentals and the Cardano ecosystem.',
    photos: [{
      original: 'blockchainworkshop.png', preview: 'blockchain-workshop', width: 1910, height: 1396,
      alt: 'Workshop participants using laptops while a Cardano presentation is projected at the front of the room.',
    }],
  },
  {
    id: 'secure-development-seminar',
    title: 'Secure software development',
    year: '2025',
    role: 'Speaker / presenter',
    description: 'Sharing practical lessons on software vulnerabilities and secure development in Yogyakarta.',
    photos: [
      {
        original: 'SDLC/SDLC.jpeg', preview: 'secure-development', width: 1024, height: 768,
        alt: 'Participants gathered around a table during the secure software development seminar.',
      },
      {
        original: 'SDLC/SDLC2.jpeg', preview: 'secure-development-session', width: 1024, height: 768,
        alt: 'A second view of the secure software development session, with code displayed on a screen.',
      },
    ],
  },
]
