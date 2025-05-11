"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Info,
  MessageSquare,
  Plus,
  RefreshCw,
  Users,
  Zap,
  Wrench,
} from "lucide-react"
import TaskList from "@/components/task-list"
import FinanceOverview from "@/components/finance-overview"
import RecentCommunications from "@/components/recent-communications"
import DocumentsOverview from "@/components/documents-overview"
import WorkflowAutomation from "@/components/workflow-automation"
import PropertyOverview from "@/components/property-overview"
import ImplementationGuide from "@/components/implementation-guide"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-medium tracking-wide bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            SMB Workspace Dashboard
          </h1>
          <p className="text-muted-foreground">Streamlining operations for small and medium businesses.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-violet-200 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Workflow
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="border-l-4 border-l-violet-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <Calendar className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Automated Tasks</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+12% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 border-none bg-gradient-to-r from-violet-50 to-indigo-50 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-violet-600" />
            <CardTitle className="text-lg font-medium text-violet-700">SMB Workspace Solution</CardTitle>
          </div>
          <CardDescription>
            A centralized, multi-function platform to streamline administrative tasks for small and medium businesses,
            with a focus on property management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-2 text-violet-700">
                <FileText className="h-5 w-5" />
                <h3 className="font-medium">Data Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Eliminate manual data entry and duplication with centralized information management.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Client Communication</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline tenant and client interactions with integrated messaging and notifications.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-2 text-blue-600">
                <DollarSign className="h-5 w-5" />
                <h3 className="font-medium">Financial Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Track rent payments, manage expenses, and generate accurate financial reports.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-600">
                <Wrench className="h-5 w-5" />
                <h3 className="font-medium">Maintenance Tracking</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Efficiently manage maintenance requests, schedule repairs, and coordinate with vendors.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Overview
          </TabsTrigger>
          <TabsTrigger value="properties" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Properties
          </TabsTrigger>
          <TabsTrigger value="tasks" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Tasks
          </TabsTrigger>
          <TabsTrigger value="finance" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Finance
          </TabsTrigger>
          <TabsTrigger
            value="communication"
            className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
          >
            Communication
          </TabsTrigger>
          <TabsTrigger value="documents" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Documents
          </TabsTrigger>
          <TabsTrigger value="automation" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Automation
          </TabsTrigger>
          <TabsTrigger
            value="implementation"
            className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
          >
            Implementation Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-medium">Activity Overview</CardTitle>
                <CardDescription>Your workspace activity for the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md bg-slate-50">
                  <BarChart className="h-8 w-8 text-violet-400" />
                  <span className="ml-2 text-muted-foreground">Activity chart will appear here</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-medium">Upcoming Deadlines</CardTitle>
                <CardDescription>Tasks due in the next 48 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-violet-50 border border-violet-100">
                    <Clock className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Tenant lease renewal</p>
                      <p className="text-xs text-muted-foreground">Due in 4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <Clock className="mt-0.5 h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Property inspection</p>
                      <p className="text-xs text-muted-foreground">Due in 8 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <Clock className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <div>
                      <p className="text-sm font-medium">Monthly financial report</p>
                      <p className="text-xs text-muted-foreground">Due in 12 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-medium">Recent Communications</CardTitle>
                <CardDescription>Latest messages and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Tenant 1: Maintenance request</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Tenant 2: Lease inquiry</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Vendor: Service confirmation</p>
                      <p className="text-xs text-muted-foreground">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-medium">Document Updates</CardTitle>
                <CardDescription>Recently modified documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <FileText className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Lease agreement v1.2</p>
                      <p className="text-xs text-muted-foreground">Updated 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <FileText className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Property inspection report</p>
                      <p className="text-xs text-muted-foreground">Updated 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <FileText className="mt-0.5 h-4 w-4 text-violet-600" />
                    <div>
                      <p className="text-sm font-medium">Maintenance policy</p>
                      <p className="text-xs text-muted-foreground">Updated 3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="properties">
          <PropertyOverview />
        </TabsContent>

        <TabsContent value="tasks">
          <TaskList />
        </TabsContent>

        <TabsContent value="finance">
          <FinanceOverview />
        </TabsContent>

        <TabsContent value="communication">
          <RecentCommunications />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentsOverview />
        </TabsContent>

        <TabsContent value="automation">
          <WorkflowAutomation />
        </TabsContent>

        <TabsContent value="implementation">
          <ImplementationGuide />
        </TabsContent>
      </Tabs>
    </div>
  )
}
