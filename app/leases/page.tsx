"use client"

import { useState } from "react"
import { Search, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeasesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample lease data
  const leases = [
    {
      id: 1,
      tenant: "John Smith",
      property: "Riverside Apartments",
      unit: "Apt 101",
      startDate: "2023-06-01",
      endDate: "2024-05-31",
      rentAmount: 850,
      securityDeposit: 850,
      status: "active",
      daysUntilExpiration: 386,
    },
    {
      id: 2,
      tenant: "Maria Garcia",
      property: "Oakwood Heights",
      unit: "Unit 3B",
      startDate: "2023-08-15",
      endDate: "2024-08-14",
      rentAmount: 950,
      securityDeposit: 950,
      status: "active",
      daysUntilExpiration: 461,
    },
    {
      id: 3,
      tenant: "Robert Johnson",
      property: "Maple Business Center",
      unit: "Suite 205",
      startDate: "2023-03-01",
      endDate: "2024-02-29",
      rentAmount: 1200,
      securityDeposit: 1200,
      status: "active",
      daysUntilExpiration: 294,
    },
    {
      id: 4,
      tenant: "Sarah Williams",
      property: "Riverside Apartments",
      unit: "Apt 304",
      startDate: "2023-09-01",
      endDate: "2024-08-31",
      rentAmount: 875,
      securityDeposit: 875,
      status: "active",
      daysUntilExpiration: 478,
    },
    {
      id: 5,
      tenant: "David Brown",
      property: "Parkview Residences",
      unit: "Unit 12A",
      startDate: "2023-11-15",
      endDate: "2024-11-14",
      rentAmount: 1100,
      securityDeposit: 1100,
      status: "pending",
      daysUntilExpiration: 553,
    },
    {
      id: 6,
      tenant: "Jennifer Miller",
      property: "Oakwood Heights",
      unit: "Unit 5C",
      startDate: "2022-12-01",
      endDate: "2023-11-30",
      rentAmount: 925,
      securityDeposit: 925,
      status: "expiring",
      daysUntilExpiration: 30,
    },
  ]

  // Filter leases based on search query and status filter
  const filteredLeases = leases.filter((lease) => {
    const matchesSearch =
      lease.tenant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lease.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lease.unit.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterStatus === "all" || lease.status === filterStatus

    return matchesSearch && matchesFilter
  })

  // Function to get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
      case "expiring":
        return <Badge className="bg-red-500 hover:bg-red-600">Expiring Soon</Badge>
      case "terminated":
        return <Badge className="bg-gray-500 hover:bg-gray-600">Terminated</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6 bg-gradient-to-b from-lavender-50 to-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-medium tracking-wide text-gray-800">Lease Management</h1>
          <p className="text-gray-500">Manage and track all property lease agreements</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Export Leases
          </Button>
          <Button>
            <CheckCircle className="mr-2 h-4 w-4" />
            New Lease
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium tracking-wide text-gray-800">Lease Agreements</CardTitle>
          <CardDescription>View and manage all active and upcoming lease agreements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by tenant, property or unit..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="expiring">Expiring Soon</SelectItem>
                <SelectItem value="terminated">Terminated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Tenant</th>
                  <th className="text-left py-3 px-4 font-medium">Property/Unit</th>
                  <th className="text-left py-3 px-4 font-medium">Term</th>
                  <th className="text-left py-3 px-4 font-medium">Rent</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeases.length > 0 ? (
                  filteredLeases.map((lease) => (
                    <tr key={lease.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{lease.tenant}</td>
                      <td className="py-3 px-4">
                        {lease.property}
                        <br />
                        <span className="text-sm text-gray-500">{lease.unit}</span>
                      </td>
                      <td className="py-3 px-4">
                        {new Date(lease.startDate).toLocaleDateString()} -{" "}
                        {new Date(lease.endDate).toLocaleDateString()}
                        <br />
                        <span className="text-sm text-gray-500">
                          {lease.status === "expiring" ? (
                            <span className="text-red-500">Expires in {lease.daysUntilExpiration} days</span>
                          ) : (
                            `${lease.daysUntilExpiration} days remaining`
                          )}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        ${lease.rentAmount}/month
                        <br />
                        <span className="text-sm text-gray-500">Deposit: ${lease.securityDeposit}</span>
                      </td>
                      <td className="py-3 px-4">{getStatusBadge(lease.status)}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-gray-500">
                      <AlertCircle className="mx-auto h-8 w-8 mb-2" />
                      No leases found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-medium tracking-wide text-gray-800">Lease Expiration Summary</CardTitle>
            <CardDescription>Overview of upcoming lease expirations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Expiring within 30 days</span>
                <Badge className="bg-red-500">{leases.filter((l) => l.daysUntilExpiration <= 30).length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Expiring within 90 days</span>
                <Badge className="bg-yellow-500">
                  {leases.filter((l) => l.daysUntilExpiration <= 90 && l.daysUntilExpiration > 30).length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Expiring within 180 days</span>
                <Badge className="bg-blue-500">
                  {leases.filter((l) => l.daysUntilExpiration <= 180 && l.daysUntilExpiration > 90).length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Active leases</span>
                <Badge className="bg-green-500">{leases.filter((l) => l.status === "active").length}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-medium tracking-wide text-gray-800">Quick Actions</CardTitle>
            <CardDescription>Common lease management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Create Lease Agreement
              </Button>
              <Button variant="outline" className="justify-start">
                <AlertCircle className="mr-2 h-4 w-4" />
                Send Renewal Notice
              </Button>
              <Button variant="outline" className="justify-start">
                <CheckCircle className="mr-2 h-4 w-4" />
                Process Lease Renewal
              </Button>
              <Button variant="outline" className="justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Generate Lease Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
