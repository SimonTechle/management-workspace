"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bell, Building2, Mail, MessageSquare, Phone, Plus, Search, Send } from "lucide-react"

export default function RecentCommunications() {
  const messages = [
    {
      id: 1,
      sender: "John Smith",
      avatar: "/tenant-agreement.png",
      initials: "JS",
      content: "I've noticed a leak in the bathroom sink. Can someone come take a look at it this week?",
      time: "10:30 AM",
      unread: true,
      property: "Sunset Apartments",
      unit: "3B",
    },
    {
      id: 2,
      sender: "Sarah Johnson",
      avatar: "/tenant-agreement.png",
      initials: "SJ",
      content: "I'm interested in renewing my lease. Can we discuss the terms?",
      time: "Yesterday",
      unread: false,
      property: "Riverside Condos",
      unit: "12C",
    },
    {
      id: 3,
      sender: "Michael Brown",
      avatar: "/maintenance-worker.png",
      initials: "MB",
      content: "I've completed the repairs at Unit 5A. The tenant has confirmed everything is working properly.",
      time: "Yesterday",
      unread: false,
      property: "Sunset Apartments",
      unit: "5A",
    },
    {
      id: 4,
      sender: "Emily Davis",
      avatar: "/tenant-agreement.png",
      initials: "ED",
      content: "Just confirming our meeting tomorrow at 2 PM to discuss the lease agreement.",
      time: "Monday",
      unread: false,
      property: "Oakwood Townhomes",
      unit: "2D",
    },
  ]

  const emails = [
    {
      id: 1,
      sender: "Tenant Association",
      subject: "Monthly Community Meeting",
      preview: "We would like to invite all property managers to our monthly community meeting...",
      time: "11:45 AM",
      unread: true,
      property: "All Properties",
    },
    {
      id: 2,
      sender: "Legal Team",
      subject: "Lease Agreement Updates",
      preview: "We have completed our review of the updated lease agreement and have the following recommendations...",
      time: "Yesterday",
      unread: true,
      property: "All Properties",
    },
    {
      id: 3,
      sender: "Maintenance Company",
      subject: "Service Schedule Confirmation",
      preview: "This email confirms our scheduled maintenance visits for the following properties...",
      time: "Yesterday",
      unread: false,
      property: "Multiple Properties",
    },
    {
      id: 4,
      sender: "Marketing Agency",
      subject: "Property Listing Campaign Results",
      preview: "Please find attached the results of our April marketing campaign for vacant units...",
      time: "Monday",
      unread: false,
      property: "Vacant Units",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Maintenance Request",
      description: "New maintenance request submitted for Unit 4D at Maple Court Apartments",
      time: "1 hour ago",
      type: "maintenance",
      property: "Maple Court Apartments",
    },
    {
      id: 2,
      title: "Rent Payment Received",
      description: "Payment of $1,250 received from Tenant in Unit 3B",
      time: "3 hours ago",
      type: "payment",
      property: "Sunset Apartments",
    },
    {
      id: 3,
      title: "Lease Expiring Soon",
      description: "Lease for Unit 8B at Riverside Condos expires in 30 days",
      time: "Yesterday",
      type: "lease",
      property: "Riverside Condos",
    },
    {
      id: 4,
      title: "Inspection Reminder",
      description: "Scheduled property inspection for Oakwood Townhomes tomorrow",
      time: "Yesterday",
      type: "inspection",
      property: "Oakwood Townhomes",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-700">Communication Hub</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
            <Phone className="mr-2 h-4 w-4" />
            Call
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>
      </div>

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="messages" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="emails" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            <Mail className="h-4 w-4 mr-2" />
            Emails
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="messages">
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Your recent conversations with tenants and staff</CardDescription>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Chat
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search messages..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-3 p-3 rounded-lg ${message.unread ? "bg-violet-50" : ""}`}>
                    <Avatar className="h-10 w-10 border-2 border-violet-100">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                      <AvatarFallback>{message.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{message.sender}</div>
                        <div className="text-xs text-muted-foreground">{message.time}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-violet-600 mt-0.5">
                        <Building2 className="h-3 w-3" />
                        <span>
                          {message.property} - Unit {message.unit}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{message.content}</p>
                    </div>
                    {message.unread && (
                      <div className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button
                    size="icon"
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emails">
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Emails</CardTitle>
                  <CardDescription>Your property management inbox</CardDescription>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Compose
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search emails..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {emails.map((email) => (
                  <div key={email.id} className={`flex flex-col p-3 rounded-lg ${email.unread ? "bg-violet-50" : ""}`}>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{email.sender}</div>
                      <div className="text-xs text-muted-foreground">{email.time}</div>
                    </div>
                    <div className="text-sm font-medium">{email.subject}</div>
                    <div className="flex items-center gap-2 text-xs text-violet-600 mt-0.5">
                      <Building2 className="h-3 w-3" />
                      <span>{email.property}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{email.preview}</p>
                    {email.unread && (
                      <Badge variant="outline" className="mt-2 w-fit bg-violet-100 text-violet-800 border-violet-200">
                        Unread
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Your property management alerts</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 hover:bg-violet-50">
                  Mark All Read
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex gap-3 p-3 border rounded-lg hover:bg-violet-50/30 transition-colors"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full 
                      ${
                        notification.type === "maintenance"
                          ? "bg-amber-100"
                          : notification.type === "payment"
                            ? "bg-green-100"
                            : notification.type === "lease"
                              ? "bg-blue-100"
                              : "bg-violet-100"
                      }`}
                    >
                      <Bell
                        className={`h-5 w-5 
                        ${
                          notification.type === "maintenance"
                            ? "text-amber-600"
                            : notification.type === "payment"
                              ? "text-green-600"
                              : notification.type === "lease"
                                ? "text-blue-600"
                                : "text-violet-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-xs text-muted-foreground">{notification.time}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-violet-600 mt-0.5">
                        <Building2 className="h-3 w-3" />
                        <span>{notification.property}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
