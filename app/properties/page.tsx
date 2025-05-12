"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Home, Users, DollarSign, Wrench, ChevronRight, Edit, Trash2 } from "lucide-react"

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample property data
  const properties = [
    {
      id: 1,
      name: "Riverside Apartments",
      address: "123 River St, Vilnius",
      image: "/placeholder.svg?key=o1vtz",
      type: "Residential",
      totalUnits: 24,
      occupiedUnits: 20,
      occupancyRate: 83,
      monthlyRevenue: 17500,
    },
    {
      id: 2,
      name: "Oakwood Heights",
      address: "45 Oak Avenue, Vilnius",
      image: "/placeholder.svg?key=j2wcw",
      type: "Residential",
      totalUnits: 18,
      occupiedUnits: 16,
      occupancyRate: 89,
      monthlyRevenue: 15200,
    },
    {
      id: 3,
      name: "Maple Business Center",
      address: "78 Maple Road, Vilnius",
      image: "/placeholder.svg?key=m2jm6",
      type: "Commercial",
      totalUnits: 12,
      occupiedUnits: 9,
      occupancyRate: 75,
      monthlyRevenue: 10800,
    },
    {
      id: 4,
      name: "Parkview Residences",
      address: "15 Park Lane, Vilnius",
      image: "/placeholder.svg?key=zc6tj",
      type: "Residential",
      totalUnits: 30,
      occupiedUnits: 27,
      occupancyRate: 90,
      monthlyRevenue: 24300,
    },
  ]

  // Sample unit data for the first property
  const units = [
    {
      id: 101,
      propertyId: 1,
      unitNumber: "Apt 101",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 65,
      rentAmount: 850,
      status: "occupied",
      tenant: "John Smith",
      leaseEnd: "2024-05-31",
    },
    {
      id: 102,
      propertyId: 1,
      unitNumber: "Apt 102",
      bedrooms: 1,
      bathrooms: 1,
      sqm: 45,
      rentAmount: 650,
      status: "available",
      tenant: null,
      leaseEnd: null,
    },
    {
      id: 103,
      propertyId: 1,
      unitNumber: "Apt 103",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 85,
      rentAmount: 1100,
      status: "occupied",
      tenant: "Emily Johnson",
      leaseEnd: "2024-08-15",
    },
    {
      id: 104,
      propertyId: 1,
      unitNumber: "Apt 104",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 68,
      rentAmount: 875,
      status: "maintenance",
      tenant: null,
      leaseEnd: null,
    },
  ]

  // Filter properties based on search query
  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Property Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Property
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 font-medium">Properties</CardTitle>
          <CardDescription>Manage your properties and units</CardDescription>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search properties..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="h-40 w-full object-cover"
                />
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{property.name}</CardTitle>
                      <CardDescription>{property.address}</CardDescription>
                    </div>
                    <Badge variant={property.type === "Residential" ? "default" : "outline"}>{property.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Home className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{property.totalUnits} Units</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{property.occupancyRate}% Occupied</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>€{property.monthlyRevenue.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>0 Pending</span>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 font-medium">Units at Riverside Apartments</CardTitle>
          <CardDescription>Manage units for this property</CardDescription>
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
                    Unit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Details
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
                    Tenant
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
                {units.map((unit) => (
                  <tr key={unit.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{unit.unitNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {unit.bedrooms} bed, {unit.bathrooms} bath
                      </div>
                      <div className="text-sm text-gray-500">{unit.sqm} sqm</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">€{unit.rentAmount}/month</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          unit.status === "occupied"
                            ? "bg-green-100 text-green-800"
                            : unit.status === "available"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {unit.tenant ? (
                        <div>
                          <div className="text-sm font-medium text-gray-900">{unit.tenant}</div>
                          <div className="text-sm text-gray-500">
                            Until {new Date(unit.leaseEnd).toLocaleDateString()}
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">No tenant</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-purple-600 hover:text-purple-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add Unit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
