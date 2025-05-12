"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Home, Users, DoorOpen, Wallet, Clock, Wrench } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Pie, PieChart, Cell } from "recharts"

export default function Dashboard() {
  // Sample data for charts and metrics
  const propertyMetrics = {
    totalProperties: 40,
    totalUnits: 120,
    occupiedUnits: 98,
    vacantUnits: 22,
    occupancyRate: 82,
  }

  const financialMetrics = {
    rentCollected: 78450,
    pendingPayments: 12450,
    latePayments: 3200,
    totalRevenue: 94100,
  }

  const maintenanceData = [
    { name: "Emergency", value: 3, color: "#EF4444" },
    { name: "High", value: 8, color: "#F97316" },
    { name: "Medium", value: 15, color: "#F59E0B" },
    { name: "Low", value: 12, color: "#10B981" },
  ]

  const leaseExpirations = [
    { tenant: "John Smith", unit: "Apt 101, Riverside", property: "Riverside Apartments", daysLeft: 12 },
    { tenant: "Maria Garcia", unit: "Unit 3B, Oakwood", property: "Oakwood Heights", daysLeft: 15 },
    { tenant: "Robert Johnson", unit: "Suite 205, Maple", property: "Maple Business Center", daysLeft: 23 },
    { tenant: "Sarah Williams", unit: "Apt 304, Riverside", property: "Riverside Apartments", daysLeft: 30 },
    { tenant: "David Brown", unit: "Unit 12A, Parkview", property: "Parkview Residences", daysLeft: 45 },
  ]

  const recentActivity = [
    { type: "payment", tenant: "John Smith", details: "Rent payment received", time: "10 minutes ago" },
    { type: "maintenance", tenant: "Maria Garcia", details: "Maintenance request completed", time: "1 hour ago" },
    { type: "communication", tenant: "Robert Johnson", details: "Lease renewal email sent", time: "3 hours ago" },
    { type: "payment", tenant: "Sarah Williams", details: "Late fee applied", time: "Yesterday" },
    { type: "maintenance", tenant: "David Brown", details: "New maintenance request", time: "Yesterday" },
  ]

  const rentCollectionData = [
    { name: "Jan", collected: 76000, target: 80000 },
    { name: "Feb", collected: 78000, target: 80000 },
    { name: "Mar", collected: 74000, target: 80000 },
    { name: "Apr", collected: 79000, target: 80000 },
    { name: "May", collected: 78450, target: 80000 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Property Management Dashboard</h1>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Refresh
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            New Workflow
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{propertyMetrics.totalProperties}</div>
            <p className="text-xs text-muted-foreground">Managing {propertyMetrics.totalUnits} units total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupied Units</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{propertyMetrics.occupiedUnits}</div>
            <p className="text-xs text-muted-foreground">{propertyMetrics.occupancyRate}% occupancy rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacant Units</CardTitle>
            <DoorOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{propertyMetrics.vacantUnits}</div>
            <p className="text-xs text-muted-foreground">Available for new tenants</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{propertyMetrics.occupiedUnits}</div>
            <p className="text-xs text-muted-foreground">Across {propertyMetrics.totalProperties} properties</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Financial Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={rentCollectionData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="collected" name="Rent Collected" fill="#9370DB" />
                    <Bar dataKey="target" name="Target" fill="#E6E6FA" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Maintenance Requests</CardTitle>
                <CardDescription>Current status of maintenance requests</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={maintenanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {maintenanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Upcoming Lease Expirations</CardTitle>
                <CardDescription>Leases expiring in the next 60 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaseExpirations.map((lease, i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4">
                        <Clock className={`h-8 w-8 ${lease.daysLeft < 15 ? "text-amber-500" : "text-blue-500"}`} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{lease.tenant}</p>
                        <p className="text-sm text-muted-foreground">{lease.unit}</p>
                      </div>
                      <div className="text-sm font-medium">{lease.daysLeft} days left</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800 font-medium">Recent Activity</CardTitle>
                <CardDescription>Latest updates from your properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4">
                        {activity.type === "payment" && <Wallet className="h-8 w-8 text-green-500" />}
                        {activity.type === "maintenance" && <Wrench className="h-8 w-8 text-blue-500" />}
                        {activity.type === "communication" && <Users className="h-8 w-8 text-purple-500" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.tenant}</p>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
