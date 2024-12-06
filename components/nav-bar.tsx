'use client'

import { useState } from 'react'

type SocialPlatform = 'Instagram' | 'X' | 'Facebook'

interface NavBarProps {
  onFilterChange: (platform: SocialPlatform) => void
}

export function NavBar({ onFilterChange }: NavBarProps) {
  const [activePlatform, setActivePlatform] = useState<SocialPlatform>('Instagram')

  const handleClick = (platform: SocialPlatform) => {
    setActivePlatform(platform)
    onFilterChange(platform)
  }

  return (
    <nav className="flex justify-center space-x-4 mb-6">
      {['Instagram', 'X', 'Facebook'].map((platform) => (
        <button
          key={platform}
          onClick={() => handleClick(platform as SocialPlatform)}
          className={`px-4 py-2 rounded-md ${
            activePlatform === platform
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {platform}
        </button>
      ))}
    </nav>
  )
}

