"use client"

import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign,
  Download,
  Plus,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Clock,
  AlertCircle,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function FinancePage() {
  // Sample financial data
  const financialSummary = {
    totalRent: 42500,
    collected: 36200,
    pending: 4800,
    late: 1500,
    collectionRate: 85,
  }

  // Sample recent transactions
  const recentTransactions = [
    {
      id: 1,
      date: "2023-05-10",
      tenant: "John Smith",
      property: "Riverside Apartments",
      unit: "Apt 101",
      amount: 850,
      type: "income",
      method: "Paysera",
      status: "completed",
    },
    {
      id: 2,
      date: "2023-05-09",
      tenant: "Maria Garcia",
      property: "Oakwood Heights",
      unit: "Unit 3B",
      amount: 950,
      type: "income",
      method: "Bank Transfer",
      status: "completed",
    },
    {
      id: 3,
      date: "2023-05-08",
      tenant: null,
      property: "Maple Business Center",
      unit: null,
      amount: 350,
      type: "expense",
      method: "Credit Card",
      status: "completed",
      description: "Plumbing repairs",
    },
    {
      id: 4,
      date: "2023-05-07",
      tenant: "Robert Johnson",
      property: "Maple Business Center",
      unit: "Suite 205",
      amount: 1200,
      type: "income",
      method: "Paysera",
      status: "pending",
    },
    {
      id: 5,
      date: "2023-05-06",
      tenant: null,
      property: "All Properties",
      unit: null,
      amount: 500,
      type: "expense",
      method: "Credit Card",
      status: "completed",
      description: "Insurance payment",
    },
  ]

  // Sample tenants with outstanding balances
  const outstandingBalances = [
    {
      id: 1,
      tenant: "David Brown",
      property: "Parkview Residences",
      unit: "Unit 12A",
      amount: 1100,
      dueDate: "2023-05-01",
      daysPastDue: 10,
      lateFee: 55,
    },
    {
      id: 2,
      tenant: "Robert Johnson",
      property: "Maple Business Center",
      unit: "Suite 205",
      amount: 1200,
      dueDate: "2023-05-05",
      daysPastDue: 5,
      lateFee: 0,
    },
    {
      id: 3,
      tenant: "Emily Davis",
      property: "Oakwood Heights",
      unit: "Unit 5C",
      amount: 925,
      dueDate: "2023-05-03",
      daysPastDue: 7,
      lateFee: 45,
    },
  ]

  // Chart data
  const monthlyRevenueData = [
    { name: "Jan", revenue: 38000, expenses: 12000 },
    { name: "Feb", revenue: 39500, expenses: 13500 },
    { name: "Mar", revenue: 41000, expenses: 12800 },
    { name: "Apr", revenue: 42000, expenses: 14200 },
    { name: "May", revenue: 42500, expenses: 13500 },
  ]

  const expenseBreakdownData = [
    { name: "Maintenance", value: 45 },
    { name: "Utilities", value: 20 },
    { name: "Insurance", value: 15 },
    { name: "Taxes", value: 10 },
    { name: "Other", value: 10 },
  ]

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide text-gray-800">Financial Management</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Total Monthly Rent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{financialSummary.totalRent.toLocaleString()}</div>
            <div className="mt-1 flex items-center text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              3% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Rent Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{financialSummary.collected.toLocaleString()}</div>
            <div className="mt-1 text-xs text-muted-foreground">{financialSummary.collectionRate}% collection rate</div>
            <div className="mt-2">
              <Progress value={financialSummary.collectionRate} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{financialSummary.pending.toLocaleString()}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {Math.round((financialSummary.pending / financialSummary.totalRent) * 100)}% of total rent
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Late Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">€{financialSummary.late.toLocaleString()}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {Math.round((financialSummary.late / financialSummary.totalRent) * 100)}% of total rent
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-800">Monthly Revenue vs Expenses</CardTitle>
            <CardDescription>Financial overview for the past 5 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `€${value}`} />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#8884d8" />
                  <Bar dataKey="expenses" name="Expenses" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-800">Expense Breakdown</CardTitle>
            <CardDescription>Distribution by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {expenseBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="outstanding">Outstanding Balances</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-800">Recent Transactions</CardTitle>
              <CardDescription>Recent financial activity across all properties</CardDescription>
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
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
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
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Method
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(transaction.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                              }`}
                            >
                              {transaction.type === "income" ? (
                                <ArrowUpRight className="h-4 w-4 text-green-600" />
                              ) : (
                                <ArrowDownRight className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {transaction.type === "income"
                                  ? `Rent payment - ${transaction.tenant}`
                                  : transaction.description}
                              </div>
                              <div className="text-xs text-gray-500">
                                {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.property}
                          {transaction.unit && ` - ${transaction.unit}`}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            transaction.type === "income" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "-"}€{transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4 text-gray-400" />
                            {transaction.method}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            className={`${
                              transaction.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outstanding">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-800">Outstanding Balances</CardTitle>
              <CardDescription>Tenants with pending or late payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {outstandingBalances.map((balance) => (
                  <div
                    key={balance.id}
                    className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{balance.tenant}</h3>
                        <p className="text-sm text-gray-500">
                          {balance.property} - {balance.unit}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-red-500">€{balance.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">
                          Due: {new Date(balance.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-amber-500" />
                        <span className="text-sm">{balance.daysPastDue} days past due</span>
                      </div>
                      {balance.lateFee > 0 && (
                        <div className="text-sm">
                          Late fee: <span className="font-medium">€{balance.lateFee}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <AlertCircle className="mr-2 h-3 w-3" />
                        Send Reminder
                      </Button>
                      <Button size="sm">
                        <DollarSign className="mr-2 h-3 w-3" />
                        Record Payment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-800">Financial Reports</CardTitle>
              <CardDescription>Generate and download financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reportType">Report Type</Label>
                    <Select>
                      <SelectTrigger id="reportType">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income Statement</SelectItem>
                        <SelectItem value="rent">Rent Collection</SelectItem>
                        <SelectItem value="expense">Expense Report</SelectItem>
                        <SelectItem value="property">Property Performance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateRange">Date Range</Label>
                    <Select>
                      <SelectTrigger id="dateRange">
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current Month</SelectItem>
                        <SelectItem value="previous">Previous Month</SelectItem>
                        <SelectItem value="quarter">Current Quarter</SelectItem>
                        <SelectItem value="year">Year to Date</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property">Property</Label>
                    <Select>
                      <SelectTrigger id="property">
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Properties</SelectItem>
                        <SelectItem value="riverside">Riverside Apartments</SelectItem>
                        <SelectItem value="oakwood">Oakwood Heights</SelectItem>
                        <SelectItem value="maple">Maple Business Center</SelectItem>
                        <SelectItem value="parkview">Parkview Residences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>

                <div className="border rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <FileText className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium">No Report Generated Yet</h3>
                  <p className="text-sm text-gray-500 max-w-md mt-1">
                    Select your report parameters above and click "Generate Report" to create a financial report.
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
