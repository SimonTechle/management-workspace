"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Mail,
  Phone,
  FileText,
  Send,
  Search,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Building2,
} from "lucide-react"

export default function CommunicationPage() {
  const [messageText, setMessageText] = useState("")

  // Sample messages data
  const conversations = [
    {
      id: 1,
      tenant: "John Smith",
      property: "Riverside Apartments",
      unit: "Apt 101",
      lastMessage: "I'll check the sink tomorrow morning. Thanks for reporting the issue.",
      timestamp: "10:30 AM",
      unread: false,
      avatar: "/placeholder.svg?key=a1b2c",
    },
    {
      id: 2,
      tenant: "Maria Garcia",
      property: "Oakwood Heights",
      unit: "Unit 3B",
      lastMessage: "When will the electrician arrive to fix the outlet?",
      timestamp: "Yesterday",
      unread: true,
      avatar: "/placeholder.svg?key=d3f4g",
    },
    {
      id: 3,
      tenant: "Robert Johnson",
      property: "Maple Business Center",
      unit: "Suite 205",
      lastMessage: "I've sent the payment. Please confirm when received.",
      timestamp: "Yesterday",
      unread: false,
      avatar: "/placeholder.svg?key=h5j6k",
    },
    {
      id: 4,
      tenant: "Sarah Williams",
      property: "Riverside Apartments",
      unit: "Apt 304",
      lastMessage: "Thank you for addressing the issue so quickly!",
      timestamp: "May 8",
      unread: false,
      avatar: "/placeholder.svg?key=l7m8n",
    },
  ]

  // Sample email templates
  const emailTemplates = [
    {
      id: 1,
      name: "Welcome New Tenant",
      subject: "Welcome to Your New Home!",
      body: "Dear [Tenant Name],\n\nWelcome to [Property Name]! We're excited to have you as our new tenant...",
      lastUsed: "May 5, 2023",
    },
    {
      id: 2,
      name: "Rent Payment Reminder",
      subject: "Friendly Reminder: Rent Due Soon",
      body: "Dear [Tenant Name],\n\nThis is a friendly reminder that your rent payment of €[Amount] is due on [Due Date]...",
      lastUsed: "May 1, 2023",
    },
    {
      id: 3,
      name: "Maintenance Confirmation",
      subject: "Maintenance Request Confirmation",
      body: "Dear [Tenant Name],\n\nWe've received your maintenance request regarding [Issue]. A technician will visit your unit on [Date] between [Time Range]...",
      lastUsed: "April 28, 2023",
    },
    {
      id: 4,
      name: "Lease Renewal",
      subject: "Your Lease Renewal Information",
      body: "Dear [Tenant Name],\n\nYour current lease at [Property Name], [Unit] will expire on [Expiration Date]. We'd like to offer you the opportunity to renew...",
      lastUsed: "April 15, 2023",
    },
  ]

  // Sample document signing status
  const documentSignings = [
    {
      id: 1,
      document: "Lease Agreement - John Smith",
      tenant: "John Smith",
      property: "Riverside Apartments",
      unit: "Apt 101",
      sentDate: "2023-05-01",
      status: "completed",
      completedDate: "2023-05-03",
    },
    {
      id: 2,
      document: "Lease Agreement - Maria Garcia",
      tenant: "Maria Garcia",
      property: "Oakwood Heights",
      unit: "Unit 3B",
      sentDate: "2023-05-08",
      status: "pending",
      completedDate: null,
    },
    {
      id: 3,
      document: "Maintenance Authorization - Robert Johnson",
      tenant: "Robert Johnson",
      property: "Maple Business Center",
      unit: "Suite 205",
      sentDate: "2023-05-07",
      status: "pending",
      completedDate: null,
    },
    {
      id: 4,
      document: "Lease Renewal - Sarah Williams",
      tenant: "Sarah Williams",
      property: "Riverside Apartments",
      unit: "Apt 304",
      sentDate: "2023-04-25",
      status: "completed",
      completedDate: "2023-04-28",
    },
  ]

  // Sample messages in the current conversation
  const currentConversation = [
    {
      id: 1,
      sender: "tenant",
      text: "Hello, I wanted to report a leaking faucet in my kitchen. It's been dripping constantly.",
      timestamp: "May 10, 9:45 AM",
    },
    {
      id: 2,
      sender: "manager",
      text: "Hi John, thank you for letting us know. I'll schedule a maintenance visit. Is tomorrow morning between 9-11 AM good for you?",
      timestamp: "May 10, 10:15 AM",
    },
    {
      id: 3,
      sender: "tenant",
      text: "Yes, that works for me. I'll be home during that time.",
      timestamp: "May 10, 10:20 AM",
    },
    {
      id: 4,
      sender: "manager",
      text: "Great! I've scheduled the maintenance visit. Our technician will bring the necessary tools to fix the faucet.",
      timestamp: "May 10, 10:25 AM",
    },
    {
      id: 5,
      sender: "tenant",
      text: "Thank you for the quick response!",
      timestamp: "May 10, 10:28 AM",
    },
    {
      id: 6,
      sender: "manager",
      text: "I'll check the sink tomorrow morning. Thanks for reporting the issue.",
      timestamp: "May 10, 10:30 AM",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Communication Center</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Phone className="mr-2 h-4 w-4" />
            Call
          </Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            New Email
          </Button>
        </div>
      </div>

      <Tabs defaultValue="messaging" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messaging">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messaging
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="mr-2 h-4 w-4" />
            Email Templates
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText className="mr-2 h-4 w-4" />
            Document Signing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="messaging">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Conversations</CardTitle>
                <CardDescription>Recent tenant communications</CardDescription>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search conversations..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 rounded-lg cursor-pointer ${
                        conversation.id === 1 ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={conversation.avatar || "/placeholder.svg"}
                              alt={conversation.tenant}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="font-medium truncate">{conversation.tenant}</div>
                            <div className="text-xs text-gray-500">{conversation.timestamp}</div>
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {conversation.property} - {conversation.unit}
                          </div>
                          <div className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</div>
                        </div>
                        {conversation.unread && (
                          <div className="flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={conversations[0].avatar || "/placeholder.svg"}
                        alt={conversations[0].tenant}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-gray-800 font-medium">{conversations[0].tenant}</CardTitle>
                      <CardDescription>
                        {conversations[0].property} - {conversations[0].unit}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto p-2">
                  {currentConversation.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "manager" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "manager" ? "bg-purple-100 text-purple-900" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="text-sm">{message.text}</div>
                        <div className="text-xs mt-1 text-right text-gray-500">{message.timestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Type your message..."
                      className="flex-1"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <Button className="self-end">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</div>
                    <div className="text-xs text-gray-500">{messageText.length} / 500</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="email">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Email Templates</CardTitle>
                <CardDescription>Reusable email templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {emailTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-3 rounded-lg cursor-pointer ${
                        template.id === 1 ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-medium">{template.name}</div>
                      <div className="text-sm text-gray-500 mt-1">Subject: {template.subject}</div>
                      <div className="text-xs text-gray-500 mt-2">Last used: {template.lastUsed}</div>
                    </div>
                  ))}
                  <Button className="w-full mt-2">
                    <Plus className="mr-2 h-4 w-4" />
                    New Template
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Edit Template</CardTitle>
                <CardDescription>Customize your email template</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="templateName">Template Name</Label>
                    <Input id="templateName" defaultValue={emailTemplates[0].name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject Line</Label>
                    <Input id="subject" defaultValue={emailTemplates[0].subject} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="body">Email Body</Label>
                    <Textarea id="body" rows={10} defaultValue={emailTemplates[0].body} />
                  </div>
                  <div className="space-y-2">
                    <Label>Available Variables</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Tenant Name]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Property Name]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Unit]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Amount]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Due Date]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Date]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Time Range]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Issue]
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                        [Expiration Date]
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Preview</Button>
                    <Button>Save Template</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 font-medium">Document Signing Status</CardTitle>
              <CardDescription>Track document signatures through SignRequest</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Document
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tenant
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Property/Unit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Sent Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {documentSignings.map((doc) => (
                      <tr key={doc.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-2" />
                            <div className="text-sm font-medium text-gray-900">{doc.document}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <User className="h-4 w-4 text-gray-400 mr-2" />
                            <div className="text-sm text-gray-900">{doc.tenant}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                            <div className="text-sm text-gray-900">
                              {doc.property} - {doc.unit}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(doc.sentDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {doc.status === "completed" ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <Clock className="h-4 w-4 text-amber-500 mr-2" />
                            )}
                            <Badge
                              className={`${
                                doc.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                              {doc.status === "completed" &&
                                doc.completedDate &&
                                ` on ${new Date(doc.completedDate).toLocaleDateString()}`}
                            </Badge>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="mr-2 h-3 w-3" />
                              View
                            </Button>
                            {doc.status === "pending" && (
                              <Button size="sm">
                                <AlertCircle className="mr-2 h-3 w-3" />
                                Remind
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Document Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
