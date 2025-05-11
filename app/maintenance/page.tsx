"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  AlertTriangle,
  AlertCircle,
  Clock,
  CheckCircle,
  Wrench,
  Calendar,
  MessageSquare,
  Edit,
  CheckSquare,
} from "lucide-react"

export default function MaintenancePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample maintenance request data
  const maintenanceRequests = [
    {
      id: 1,
      property: "Riverside Apartments",
      unit: "Apt 101",
      tenant: "John Smith",
      issueType: "Plumbing",
      description: "Leaking faucet in kitchen",
      priority: "medium",
      status: "new",
      reportedDate: "2023-05-10",
      scheduledDate: null,
      assignedTo: null,
    },
    {
      id: 2,
      property: "Oakwood Heights",
      unit: "Unit 3B",
      tenant: "Maria Garcia",
      issueType: "Electrical",
      description: "Power outlet not working in living room",
      priority: "high",
      status: "scheduled",
      reportedDate: "2023-05-09",
      scheduledDate: "2023-05-12",
      assignedTo: "Alex Technician",
    },
    {
      id: 3,
      property: "Riverside Apartments",
      unit: "Apt 304",
      tenant: "Sarah Williams",
      issueType: "Appliance",
      description: "Refrigerator not cooling properly",
      priority: "medium",
      status: "in progress",
      reportedDate: "2023-05-08",
      scheduledDate: "2023-05-11",
      assignedTo: "Mike Repairman",
    },
    {
      id: 4,
      property: "Parkview Residences",
      unit: "Unit 12A",
      tenant: "David Brown",
      issueType: "Structural",
      description: "Water damage on ceiling, possible leak from upstairs",
      priority: "emergency",
      status: "scheduled",
      reportedDate: "2023-05-10",
      scheduledDate: "2023-05-11",
      assignedTo: "Emergency Team",
    },
    {
      id: 5,
      property: "Maple Business Center",
      unit: "Suite 205",
      tenant: "Robert Johnson",
      issueType: "HVAC",
      description: "Air conditioning not working",
      priority: "high",
      status: "completed",
      reportedDate: "2023-05-05",
      scheduledDate: "2023-05-08",
      assignedTo: "HVAC Specialists Inc.",
    },
  ]

  // Filter maintenance requests based on search query and filters
  const filteredRequests = maintenanceRequests.filter((request) => {
    const matchesSearch =
      request.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.tenant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPriority = filterPriority === "all" || request.priority === filterPriority
    const matchesStatus = filterStatus === "all" || request.status === filterStatus

    return matchesSearch && matchesPriority && matchesStatus
  })

  // Get unique properties for form
  const properties = [...new Set(maintenanceRequests.map((request) => request.property))]

  // Priority icon mapping
  const priorityIcon = {
    emergency: <AlertTriangle className="h-5 w-5 text-red-500" />,
    high: <AlertCircle className="h-5 w-5 text-orange-500" />,
    medium: <Clock className="h-5 w-5 text-yellow-500" />,
    low: <CheckCircle className="h-5 w-5 text-green-500" />,
  }

  // Status badge styling
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "scheduled":
        return "bg-purple-100 text-purple-800"
      case "in progress":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Maintenance Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Request
        </Button>
      </div>

      <Tabs defaultValue="tracking" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tracking">Request Tracking</TabsTrigger>
          <TabsTrigger value="submission">Request Submission</TabsTrigger>
        </TabsList>

        <TabsContent value="tracking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 font-medium">Maintenance Requests</CardTitle>
              <CardDescription>Track and manage all maintenance requests</CardDescription>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search requests..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex space-x-2">
                  <div className="w-[150px]">
                    <Select value={filterPriority} onValueChange={setFilterPriority}>
                      <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Priorities</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[150px]">
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="in progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">{priorityIcon[request.priority]}</div>
                        <div>
                          <h3 className="font-medium">{request.issueType}</h3>
                          <p className="text-sm text-gray-500">
                            {request.property} - {request.unit}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusBadgeClass(request.status)}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm">{request.description}</p>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>Reported: {new Date(request.reportedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>
                          {request.scheduledDate
                            ? `Scheduled: ${new Date(request.scheduledDate).toLocaleDateString()}`
                            : "Not scheduled yet"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                        <span>Tenant: {request.tenant}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wrench className="h-4 w-4 text-gray-400" />
                        <span>{request.assignedTo ? `Assigned to: ${request.assignedTo}` : "Not assigned yet"}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Update
                      </Button>
                      {request.status !== "completed" && (
                        <Button variant="outline" size="sm">
                          <CheckSquare className="mr-2 h-3 w-3" />
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submission">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800 font-medium">Submit Maintenance Request</CardTitle>
              <CardDescription>Report a maintenance issue for a property</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="property">Property</Label>
                    <Select>
                      <SelectTrigger id="property">
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent>
                        {properties.map((property) => (
                          <SelectItem key={property} value={property}>
                            {property}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Input id="unit" placeholder="Enter unit number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issueType">Issue Type</Label>
                    <Select>
                      <SelectTrigger id="issueType">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="appliance">Appliance</SelectItem>
                        <SelectItem value="structural">Structural</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the issue in detail" rows={4} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photos">Photos (optional)</Label>
                  <Input id="photos" type="file" multiple />
                  <p className="text-xs text-gray-500">Upload photos of the issue (max 5 files, 5MB each)</p>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
