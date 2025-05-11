"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Calendar,
  DollarSign,
  Filter,
  Home,
  MapPin,
  Plus,
  Search,
  Users,
  Wrench,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertyOverview() {
  const properties = [
    {
      id: 1,
      name: "Sunset Apartments",
      address: "123 Main St, Anytown, USA",
      units: 12,
      occupancy: "92%",
      revenue: "$24,500",
      maintenanceRequests: 3,
      status: "Active",
      type: "Apartment Building",
      image: "/modern-apartment-building.png",
    },
    {
      id: 2,
      name: "Oakwood Townhomes",
      address: "456 Oak Ave, Anytown, USA",
      units: 8,
      occupancy: "100%",
      revenue: "$18,200",
      maintenanceRequests: 1,
      status: "Active",
      type: "Townhouse Complex",
      image: "/townhouse-complex.png",
    },
    {
      id: 3,
      name: "Riverside Condos",
      address: "789 River Rd, Anytown, USA",
      units: 24,
      occupancy: "87%",
      revenue: "$42,800",
      maintenanceRequests: 5,
      status: "Active",
      type: "Condominium",
      image: "/riverside-condos.png",
    },
    {
      id: 4,
      name: "Pine Street House",
      address: "101 Pine St, Anytown, USA",
      units: 1,
      occupancy: "100%",
      revenue: "$2,200",
      maintenanceRequests: 0,
      status: "Active",
      type: "Single Family Home",
      image: "/single-family-home.png",
    },
    {
      id: 5,
      name: "Maple Court Apartments",
      address: "202 Maple Ct, Anytown, USA",
      units: 16,
      occupancy: "75%",
      revenue: "$22,500",
      maintenanceRequests: 7,
      status: "Renovation",
      type: "Apartment Building",
      image: "/modern-apartment-complex.png",
    },
  ]

  const maintenanceRequests = [
    {
      id: 1,
      property: "Sunset Apartments",
      unit: "3B",
      issue: "Leaking faucet in bathroom",
      priority: "Medium",
      status: "Scheduled",
      requestedBy: "John Smith",
      requestDate: "May 8, 2023",
      scheduledDate: "May 10, 2023",
    },
    {
      id: 2,
      property: "Sunset Apartments",
      unit: "5A",
      issue: "AC not cooling properly",
      priority: "High",
      status: "In Progress",
      requestedBy: "Sarah Johnson",
      requestDate: "May 7, 2023",
      scheduledDate: "May 9, 2023",
    },
    {
      id: 3,
      property: "Riverside Condos",
      unit: "12C",
      issue: "Broken dishwasher",
      priority: "Medium",
      status: "Pending",
      requestedBy: "Michael Brown",
      requestDate: "May 9, 2023",
      scheduledDate: "TBD",
    },
    {
      id: 4,
      property: "Riverside Condos",
      unit: "8B",
      issue: "Clogged drain in shower",
      priority: "Low",
      status: "Scheduled",
      requestedBy: "Emily Davis",
      requestDate: "May 8, 2023",
      scheduledDate: "May 12, 2023",
    },
    {
      id: 5,
      property: "Maple Court Apartments",
      unit: "4D",
      issue: "Electrical outlet not working",
      priority: "High",
      status: "In Progress",
      requestedBy: "David Wilson",
      requestDate: "May 6, 2023",
      scheduledDate: "May 9, 2023",
    },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500"
      case "Medium":
        return "text-amber-500"
      case "Low":
        return "text-green-500"
      default:
        return ""
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Pending
          </Badge>
        )
      case "Scheduled":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Scheduled
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-700">
            In Progress
          </Badge>
        )
      case "Completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-700">Property Management</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-violet-200 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
          >
            <Building2 className="mr-2 h-4 w-4" />
            View All
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search properties..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Properties</SelectItem>
            <SelectItem value="apartment">Apartments</SelectItem>
            <SelectItem value="townhouse">Townhouses</SelectItem>
            <SelectItem value="condo">Condominiums</SelectItem>
            <SelectItem value="single">Single Family</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="properties" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="properties" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Properties
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Maintenance
          </TabsTrigger>
          <TabsTrigger value="leases" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Leases
          </TabsTrigger>
        </TabsList>

        <TabsContent value="properties">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-[150px] w-full bg-slate-100 relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="h-full w-full object-cover"
                  />
                  <Badge
                    className={`absolute top-2 right-2 ${
                      property.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : property.status === "Renovation"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {property.status}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{property.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {property.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4 text-violet-500" />
                      <span>{property.units} Units</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>{property.occupancy} Occupied</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-emerald-500" />
                      <span>{property.revenue}/mo</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wrench className="h-4 w-4 text-amber-500" />
                      <span>{property.maintenanceRequests} Requests</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-violet-200 text-violet-700 hover:bg-violet-50"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Track and manage property maintenance issues</CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Request
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="flex flex-col p-4 border rounded-lg bg-white shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-full 
                          ${
                            request.priority === "High"
                              ? "bg-red-100"
                              : request.priority === "Medium"
                                ? "bg-amber-100"
                                : "bg-green-100"
                          }`}
                        >
                          <Wrench
                            className={`h-4 w-4 
                            ${
                              request.priority === "High"
                                ? "text-red-600"
                                : request.priority === "Medium"
                                  ? "text-amber-600"
                                  : "text-green-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{request.issue}</h3>
                          <p className="text-xs text-muted-foreground">
                            {request.property} - Unit {request.unit}
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span>Requested by: {request.requestedBy}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>Requested: {request.requestDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertCircle className="h-4 w-4 text-slate-400" />
                        <span className={getPriorityColor(request.priority)}>Priority: {request.priority}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span>Scheduled: {request.scheduledDate}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <CheckCircle2 className="mr-2 h-3 w-3" />
                        Update Status
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <Calendar className="mr-2 h-3 w-3" />
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leases">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Lease Management</CardTitle>
                  <CardDescription>Track and manage property leases and agreements</CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Lease
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[300px] border rounded-md bg-slate-50">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-violet-300 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-slate-700">Lease Management</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Track lease agreements, renewals, and tenant information in one centralized location.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
