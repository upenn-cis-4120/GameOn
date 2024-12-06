export interface Highlight {
    id: string;
    videoUrl: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
    user: {
      name: string;
      avatar: string;
    };
  }
  
  export const highlights: Highlight[] = [
    {
      id: '1',
      videoUrl: 'https://www.youtube.com/embed/u_mazHGvjHc',
      title: "Cold Celebration",
      description: "Lebron Does the Silencer!",
      likes: 1500,
      comments: 230,
      user: {
      name: "BasketballFan23",
      avatar: "/Groups/Antwon.png"
      }
    },
    {
      id: '2',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Football+Highlight',
      title: "Game-Winning Touchdown",
      description: "This last-second touchdown secured the victory!",
      likes: 2300,
      comments: 450,
      user: {
        name: "FootballLegend",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    },
    {
      id: '3',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Soccer+Highlight',
      title: "Incredible Free Kick Goal",
      description: "You won't believe this free kick that found the top corner!",
      likes: 3100,
      comments: 520,
      user: {
        name: "SoccerStar10",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    },
    {
      id: '4',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Tennis+Highlight',
      title: "Unbelievable Rally",
      description: "This 30-shot rally had everyone on the edge of their seats!",
      likes: 1800,
      comments: 310,
      user: {
        name: "TennisAce",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    },
    {
      id: '5',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Golf+Highlight',
      title: "Hole-in-One on Par 4",
      description: "Watch this incredible hole-in-one on a par 4!",
      likes: 2700,
      comments: 480,
      user: {
        name: "GolfPro",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    },
    {
      id: '6',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Swimming+Highlight',
      title: "Record-Breaking Freestyle",
      description: "New world record set in the 100m freestyle!",
      likes: 2100,
      comments: 390,
      user: {
        name: "SwimChamp",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    },
    {
      id: '7',
      videoUrl: '/placeholder.svg?height=800&width=450&text=Athletics+Highlight',
      title: "Spectacular Long Jump",
      description: "This jump might have broken the Olympic record!",
      likes: 1900,
      comments: 280,
      user: {
        name: "TrackStar",
        avatar: "/placeholder.svg?height=50&width=50"
      }
    }
  ]
  