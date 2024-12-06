"use client";

import { useState, useEffect } from "react";
import { Plus, Send } from "lucide-react";
import { groups as initialGroups, messages } from "@/data/messages";
import { friends } from "@/data/friends";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";

export default function GroupsPage() {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [newMessage, setNewMessage] = useState("");
  const [groupMessages, setGroupMessages] = useState(messages);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const community = searchParams.get("community");

  useEffect(() => {
    if (community) {
      const group = groups.find((g) => g.name === community);
      if (group) {
        setSelectedGroup(group);
      }
    }
  }, [community, groups]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: groupMessages.length + 1,
      groupId: selectedGroup.id,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toISOString(),
      avatar: "/danae.jpg",
    };

    setGroupMessages([...groupMessages, message]);
    setNewMessage("");
  };

  const handleCreateGroup = () => {
    if (newGroupName.trim() === "") return;
    const newGroup = {
      id: `group-${groups.length + 1}`,
      name: newGroupName,
      image: "/placeholder.svg?height=100&width=100",
      members: selectedFriends.length,
    };
    setGroups([...groups, newGroup]);
    setIsCreatingGroup(false);
    setNewGroupName("");
    setSelectedFriends([]);
  };

  const toggleFriendSelection = (friendId: string) => {
    setSelectedFriends((prev) =>
      prev.includes(friendId)
        ? prev.filter((id) => id !== friendId)
        : [...prev, friendId]
    );
  };

  return (
    <div className="flex h-[calc(100vh-112px)]">
      <div className="w-16 border-r overflow-y-auto">
        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedGroup(group)}
            className={`text-left p-3 flex items-center gap-3 ${
              selectedGroup.id === group.id ? "bg-blue-50" : "hover:bg-gray-100"
            }`}
          >
            <Image
              src={group.image}
              alt={group.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
        ))}
        <Dialog open={isCreatingGroup} onOpenChange={setIsCreatingGroup}>
          <DialogTrigger asChild>
            <Button
              className="m-3 flex justify-center items-center space-x-2 rounded-full p-2 bg-blue-300 hover:bg-gray-300"
              onClick={() => setIsCreatingGroup(true)}
            >
              <Plus className="m-[4px] h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Group</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Group Name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="mb-4"
            />
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {friends.map((friend) => (
                <div key={friend.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`friend-${friend.id}`}
                    checked={selectedFriends.includes(friend.id)}
                    onCheckedChange={() => toggleFriendSelection(friend.id)}
                  />
                  <label
                    htmlFor={`friend-${friend.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {friend.name}
                  </label>
                </div>
              ))}
            </div>
            <Button onClick={handleCreateGroup} className="mt-4 bg-blue-400">
              Create Group
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">{selectedGroup.name}</h3>
          <div className="text-sm text-gray-500">
            {selectedGroup.members} members
          </div>
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
            <Button type="submit" size="icon" className="bg-blue-400">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
