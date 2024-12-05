'use client'

import { useState } from "react"
import Image from "next/image"
import { Send } from 'lucide-react'
import { groups, messages } from "@/data/messages"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function GroupsPage() {
  const [selectedGroup, setSelectedGroup] = useState(groups[0])
  const [newMessage, setNewMessage] = useState("")
  const [groupMessages, setGroupMessages] = useState(messages)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: groupMessages.length + 1,
      groupId: selectedGroup.id,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toISOString(),
      avatar: "/placeholder.svg?height=40&width=40"
    }

    setGroupMessages([...groupMessages, message])
    setNewMessage("")
  }

  return (
    <div className="flex h-[calc(100vh-136px)]">
      <div className="w-64 border-r overflow-y-auto">
        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedGroup(group)}
            className={`w-full text-left p-4 flex items-center gap-3 ${
              selectedGroup.id === group.id ? 'bg-blue-50' : 'hover:bg-gray-100'
            }`}
          >
            <Image
              src={group.image}
              alt={group.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{group.name}</div>
              <div className="text-sm text-gray-500">{group.members} members</div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">{selectedGroup.name}</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {groupMessages
            .filter((msg) => msg.groupId === selectedGroup.id)
            .map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                <Image
                  src={message.avatar}
                  alt={message.sender}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{message.sender}</div>
                  <div className="bg-gray-100 rounded-lg p-3 mt-1">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

