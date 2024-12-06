export interface Highlight {
    id: string;
    videoUrl: string;
    videoId: string;
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
      videoId: 'u_mazHGvjHc',
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
      videoUrl: 'https://www.youtube.com/shorts/l8MdkZ0_KLI',
      videoId: 'l8MdkZ0_KLI',
      title: "Game-Winning Touchdown",
      description: "This last-second touchdown secured the victory!",
      likes: 2300,
      comments: 450,
      user: {
        name: "FootballLegend",
        avatar: "/Groups/Marvin.png"
      }
    },
    {
      id: '3',
      videoUrl: 'https://www.youtube.com/shorts/F9sVL8FJlYg',
      videoId: 'F9sVL8FJlYg',
      title: "Incredible Free Kick Goal",
      description: "You won't believe this free kick that found the top corner!",
      likes: 3100,
      comments: 520,
      user: {
        name: "SoccerStar10",
        avatar: "/Groups/George.png"
      }
    },
    {
      id: '4',
      videoUrl: 'https://www.youtube.com/shorts/PedZ0gFGsgQ',
      videoId: 'PedZ0gFGsgQ',
      title: "Unbelievable Rally",
      description: "This 30-shot rally had everyone on the edge of their seats!",
      likes: 1800,
      comments: 310,
      user: {
        name: "TennisAce",
        avatar: "/Groups/Peyton.png"
      }
    },
    {
      id: '5',
      videoUrl: 'https://www.youtube.com/shorts/15obkNu4-38',
      videoId: '15obkNu4-38',
      title: "Hole-in-One on Par 4",
      description: "Watch this incredible hole-in-one on a par 4!",
      likes: 2700,
      comments: 480,
      user: {
        name: "GolfPro",
        avatar: "/Groups/Ryan.png"
      }
    },
    {
      id: '6',
      videoUrl: 'https://www.youtube.com/shorts/dm4aux9nmik',
      videoId: 'dm4aux9nmik',
      title: "Record-Breaking Freestyle",
      description: "New world record set in the 100m freestyle!",
      likes: 2100,
      comments: 390,
      user: {
        name: "SwimChamp",
        avatar: "/Groups/Jamie.png"
      }
    },
    {
      id: '7',
      videoUrl: 'https://www.youtube.com/shorts/Gsd4AWqzJvw',
      videoId: 'Gsd4AWqzJvw',
      title: "Spectacular Long Jump",
      description: "This jump might have broken the Olympic record!",
      likes: 1900,
      comments: 280,
      user: {
        name: "TrackStar",
        avatar: "/Groups/Marvin.png"
      }
    }
  ]
  