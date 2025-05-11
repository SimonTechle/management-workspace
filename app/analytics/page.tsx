"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ArrowUpRight, ArrowDownRight, DollarSign, Home, Percent, Download, FileText, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AnalyticsPage() {
  // Sample data for analytics
  const occupancyTrend = [
    { month: "Jan", rate: 78 },
    { month: "Feb", rate: 80 },
    { month: "Mar", rate: 79 },
    { month: "Apr", rate: 81 },
    { month: "May", rate: 82 },
    { month: "Jun", rate: 84 },
    { month: "Jul", rate: 85 },
    { month: "Aug", rate: 87 },
    { month: "Sep", rate: 86 },
    { month: "Oct", rate: 85 },
    { month: "Nov", rate: 83 },
    { month: "Dec", rate: 82 },
  ]

  const revenueData = [
    { month: "Jan", rent: 76000, maintenance: 3200, other: 1800 },
    { month: "Feb", rent: 78000, maintenance: 3500, other: 2100 },
    { month: "Mar", rent: 74000, maintenance: 3100, other: 1900 },
    { month: "Apr", rent: 79000, maintenance: 3300, other: 2200 },
    { month: "May", rent: 78450, maintenance: 3400, other: 2050 },
    { month: "Jun", rent: 80000, maintenance: 3600, other: 2300 },
  ]

  const expenseData = [
    { month: "Jan", maintenance: 12000, utilities: 8500, staff: 15000, other: 5500 },
    { month: "Feb", maintenance: 11500, utilities: 8200, staff: 15000, other: 5300 },
    { month: "Mar", maintenance: 13200, utilities: 8700, staff: 15000, other: 5800 },
    { month: "Apr", maintenance: 12800, utilities: 8400, staff: 15000, other: 5600 },
    { month: "May", maintenance: 12500, utilities: 8300, staff: 15000, other: 5400 },
    { month: "Jun", maintenance: 13000, utilities: 8600, staff: 15000, other: 5700 },
  ]

  const propertyPerformance = [
    { name: "Riverside Apartments", occupancy: 92, revenue: 32000, units: 40 },
    { name: "Oakwood Heights", occupancy: 88, revenue: 28000, units: 35 },
    { name: "Maple Business Center", occupancy: 75, revenue: 18000, units: 25 },
    { name: "Parkview Residences", occupancy: 95, revenue: 35000, units: 45 },
  ]

  const tenantDemographics = [
    { name: "Families", value: 45, color: "#0ea5e9" },
    { name: "Singles", value: 30, color: "#10b981" },
    { name: "Seniors", value: 15, color: "#f59e0b" },
    { name: "Students", value: 10, color: "#6366f1" },
  ]

  const maintenanceByType = [
    { name: "Plumbing", value: 35, color: "#0ea5e9" },
    { name: "Electrical", value: 25, color: "#10b981" },
    { name: "HVAC", value: 20, color: "#f59e0b" },
    { name: "Appliances", value: 15, color: "#6366f1" },
    { name: "Other", value: 5, color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-6 p-4 lg:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-500 mt-1">Track and analyze your property management metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="h-9">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuItem>Financial Report</DropdownMenuItem>
              <DropdownMenuItem>Occupancy Report</DropdownMenuItem>
              <DropdownMenuItem>Maintenance Report</DropdownMenuItem>
              <DropdownMenuItem>Full Analytics Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-card border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-brand-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$94,100</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+4.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Occupancy Rate</CardTitle>
            <Percent className="h-4 w-4 text-brand-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">82%</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+1.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-brand-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$41,200</div>
            <div className="flex items-center pt-1 text-xs text-red-600">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              <span>-2.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Income</CardTitle>
            <DollarSign className="h-4 w-4 text-brand-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$52,900</div>
            <div className="flex items-center pt-1 text-xs text-green-600">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+8.4% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-gray-100/80 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="financial" className="data-[state=active]:bg-white">
            Financial
          </TabsTrigger>
          <TabsTrigger value="occupancy" className="data-[state=active]:bg-white">
            Occupancy
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="data-[state=active]:bg-white">
            Maintenance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Revenue Breakdown</CardTitle>
                <CardDescription>Monthly revenue by category</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.375rem",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="rent" name="Rent" fill="#0ea5e9" />
                      <Bar dataKey="maintenance" name="Maintenance Fees" fill="#10b981" />
                      <Bar dataKey="other" name="Other Income" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Occupancy Trend</CardTitle>
                <CardDescription>12-month occupancy rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={occupancyTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[70, 90]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.375rem",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        name="Occupancy Rate %"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Property Performance</CardTitle>
                <CardDescription>Comparison across properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propertyPerformance.map((property, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Home className="mr-2 h-5 w-5 text-brand-500" />
                          <span className="font-medium text-gray-900">{property.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{property.units} units</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Occupancy: {property.occupancy}%</span>
                        <span className="text-gray-600">Revenue: ${property.revenue.toLocaleString()}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-2 rounded-full bg-brand-500" style={{ width: `${property.occupancy}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Tenant Demographics</CardTitle>
                <CardDescription>Breakdown by tenant type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tenantDemographics}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {tenantDemographics.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.375rem",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card className="shadow-card border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">Expense Breakdown</CardTitle>
              <CardDescription>Monthly expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expenseData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.375rem",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="maintenance" name="Maintenance" fill="#0ea5e9" />
                    <Bar dataKey="utilities" name="Utilities" fill="#10b981" />
                    <Bar dataKey="staff" name="Staff" fill="#f59e0b" />
                    <Bar dataKey="other" name="Other" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occupancy" className="space-y-4">
          <Card className="shadow-card border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">Occupancy Trend</CardTitle>
              <CardDescription>12-month occupancy rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={occupancyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[70, 90]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.375rem",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      name="Occupancy Rate %"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Maintenance by Type</CardTitle>
                <CardDescription>Breakdown of maintenance requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={maintenanceByType}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {maintenanceByType.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.375rem",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-gray-900">Maintenance Expenses</CardTitle>
                <CardDescription>Monthly maintenance costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={expenseData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "0.375rem",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="maintenance"
                        name="Maintenance Costs"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
