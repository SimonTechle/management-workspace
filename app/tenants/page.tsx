"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Mail, FileText, MessageSquare } from "lucide-react"

export default function TenantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterProperty, setFilterProperty] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample tenant data
  const tenants = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+370 612 34567",
      property: "Riverside Apartments",
      unit: "Apt 101",
      leaseStart: "2023-06-01",
      leaseEnd: "2024-05-31",
      rentAmount: 850,
      paymentStatus: "current",
      maintenanceRequests: 1,
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+370 623 45678",
      property: "Oakwood Heights",
      unit: "Unit 3B",
      leaseStart: "2023-08-15",
      leaseEnd: "2024-08-14",
      rentAmount: 950,
      paymentStatus: "late",
      maintenanceRequests: 2,
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "+370 634 56789",
      property: "Maple Business Center",
      unit: "Suite 205",
      leaseStart: "2023-03-01",
      leaseEnd: "2024-02-29",
      rentAmount: 1200,
      paymentStatus: "current",
      maintenanceRequests: 0,
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      phone: "+370 645 67890",
      property: "Riverside Apartments",
      unit: "Apt 304",
      leaseStart: "2023-09-01",
      leaseEnd: "2024-08-31",
      rentAmount: 875,
      paymentStatus: "current",
      maintenanceRequests: 1,
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      phone: "+370 656 78901",
      property: "Parkview Residences",
      unit: "Unit 12A",
      leaseStart: "2023-11-15",
      leaseEnd: "2024-11-14",
      rentAmount: 1100,
      paymentStatus: "pending",
      maintenanceRequests: 3,
    },
  ]

  // Filter tenants based on search query and filters
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.unit.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesProperty = filterProperty === "all" || tenant.property === filterProperty
    const matchesStatus = filterStatus === "all" || tenant.paymentStatus === filterStatus

    return matchesSearch && matchesProperty && matchesStatus
  })

  // Get unique properties for filter
  const properties = [...new Set(tenants.map((tenant) => tenant.property))]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Tenant Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Tenant
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 font-medium">Tenant Directory</CardTitle>
          <CardDescription>Manage and view all tenant information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search tenants..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-[180px]">
                  <Select value={filterProperty} onValueChange={setFilterProperty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      {properties.map((property) => (
                        <SelectItem key={property} value={property}>
                          {property}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[180px]">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="current">Current</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="rounded-md border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
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
                      Lease Period
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rent
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
                  {filteredTenants.map((tenant) => (
                    <tr key={tenant.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-700">
                              {tenant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{tenant.name}</div>
                            <div className="text-sm text-gray-500">{tenant.email}</div>
                            <div className="text-sm text-gray-500">{tenant.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{tenant.property}</div>
                        <div className="text-sm text-gray-500">{tenant.unit}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(tenant.leaseStart).toLocaleDateString()} -{" "}
                          {new Date(tenant.leaseEnd).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€{tenant.rentAmount}/month</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            tenant.paymentStatus === "current"
                              ? "bg-green-100 text-green-800"
                              : tenant.paymentStatus === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {tenant.paymentStatus.charAt(0).toUpperCase() + tenant.paymentStatus.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-purple-600 hover:text-purple-900">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">
                            <FileText className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 font-medium">Tenant Onboarding</CardTitle>
          <CardDescription>Add a new tenant to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
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
                <Label htmlFor="leaseStart">Lease Start Date</Label>
                <Input id="leaseStart" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leaseEnd">Lease End Date</Label>
                <Input id="leaseEnd" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rentAmount">Monthly Rent (€)</Label>
                <Input id="rentAmount" type="number" placeholder="Enter monthly rent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="securityDeposit">Security Deposit (€)</Label>
                <Input id="securityDeposit" type="number" placeholder="Enter security deposit" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Add Tenant</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
