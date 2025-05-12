"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Clock,
  Copy,
  Edit,
  FileText,
  Mail,
  MessageSquare,
  Plus,
  Play,
  Settings,
  Sparkles,
  Trash2,
  Zap,
  Calendar,
  Bell,
  CheckSquare,
  Building2,
  Wrench,
  Users,
} from "lucide-react"

export default function WorkflowAutomation() {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: "Rent Payment Reminder",
      description: "Automatically send reminders for upcoming rent payments",
      trigger: "Schedule",
      actions: ["Email", "Notification"],
      status: "Active",
      lastRun: "Today, 9:00 AM",
      runs: 24,
      success: 22,
      property: "All Properties",
    },
    {
      id: 2,
      name: "Maintenance Request Workflow",
      description: "Route maintenance requests to appropriate staff and send updates to tenants",
      trigger: "Maintenance Request",
      actions: ["Task Creation", "Notification", "Email"],
      status: "Active",
      lastRun: "Yesterday",
      runs: 15,
      success: 15,
      property: "All Properties",
    },
    {
      id: 3,
      name: "Tenant Onboarding",
      description: "Create necessary documents and tasks when a new tenant is added",
      trigger: "New Tenant",
      actions: ["Document Generation", "Task Creation", "Email"],
      status: "Inactive",
      lastRun: "May 1, 2023",
      runs: 8,
      success: 7,
      property: "All Properties",
    },
    {
      id: 4,
      name: "Property Inspection Follow-up",
      description: "Send follow-up emails and create action items after property inspections",
      trigger: "Calendar Event",
      actions: ["Email", "Task Creation"],
      status: "Active",
      lastRun: "Today, 2:30 PM",
      runs: 32,
      success: 30,
      property: "Multiple Properties",
    },
  ])

  const templates = [
    {
      id: 1,
      name: "Tenant Welcome Sequence",
      description: "Automated welcome emails and task creation for new tenants",
      category: "Tenant Management",
      complexity: "Medium",
    },
    {
      id: 2,
      name: "Rent Collection Process",
      description: "Generate and send invoices, track payments, and send reminders",
      category: "Finance",
      complexity: "Simple",
    },
    {
      id: 3,
      name: "Maintenance Request Workflow",
      description: "Route maintenance requests through approval process with reminders",
      category: "Property Management",
      complexity: "Complex",
    },
    {
      id: 4,
      name: "Property Listing Automation",
      description: "Create listings and notify team when new properties are added",
      category: "Marketing",
      complexity: "Medium",
    },
  ]

  const getTriggerIcon = (trigger) => {
    switch (trigger) {
      case "Schedule":
        return <Clock className="h-4 w-4" />
      case "Maintenance Request":
        return <Wrench className="h-4 w-4" />
      case "New Tenant":
        return <Users className="h-4 w-4" />
      case "Calendar Event":
        return <Calendar className="h-4 w-4" />
      default:
        return <Zap className="h-4 w-4" />
    }
  }

  const getActionIcon = (action) => {
    switch (action) {
      case "Email":
        return <Mail className="h-4 w-4" />
      case "Notification":
        return <Bell className="h-4 w-4" />
      case "Task Creation":
        return <CheckSquare className="h-4 w-4" />
      case "Document Generation":
        return <FileText className="h-4 w-4" />
      default:
        return <Zap className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-700">Workflow Automation</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Suggestions
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Workflow
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Active Workflows
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Templates
          </TabsTrigger>
          <TabsTrigger value="builder" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Workflow Builder
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Active Workflows</CardTitle>
              <CardDescription>Your automated property management processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workflows.map((workflow) => (
                  <div
                    key={workflow.id}
                    className="flex flex-col p-4 border rounded-lg hover:bg-violet-50/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            workflow.status === "Active" ? "bg-green-100" : "bg-slate-100"
                          }`}
                        >
                          <Zap
                            className={`h-4 w-4 ${workflow.status === "Active" ? "text-green-600" : "text-slate-600"}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{workflow.name}</h3>
                          <p className="text-xs text-muted-foreground">{workflow.description}</p>
                        </div>
                      </div>
                      <Badge
                        variant={workflow.status === "Active" ? "default" : "outline"}
                        className={
                          workflow.status === "Active"
                            ? "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900"
                        }
                      >
                        {workflow.status}
                      </Badge>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-xs text-violet-600">
                      <Building2 className="h-3 w-3" />
                      <span>{workflow.property}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 text-xs bg-violet-100 text-violet-800 px-2 py-1 rounded-md">
                        {getTriggerIcon(workflow.trigger)}
                        <span>Trigger: {workflow.trigger}</span>
                      </div>

                      {workflow.actions.map((action, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md"
                        >
                          {getActionIcon(action)}
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>Last run: {workflow.lastRun}</span>
                      </div>
                      <div>
                        <span className="text-green-600">{workflow.success}</span>/{workflow.runs} successful runs
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <Play className="mr-2 h-3 w-3" />
                        Run Now
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        <Trash2 className="mr-2 h-3 w-3" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Workflow Templates</CardTitle>
              <CardDescription>Pre-built automation templates for property management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="flex flex-col p-4 border rounded-lg hover:bg-violet-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                        <Sparkles className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-xs text-muted-foreground">{template.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-violet-100 text-violet-800 border-violet-200">
                          {template.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            template.complexity === "Simple"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : template.complexity === "Medium"
                                ? "bg-amber-100 text-amber-800 border-amber-200"
                                : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {template.complexity === "Simple" && "Easy Setup"}
                          {template.complexity === "Medium" && "Moderate Setup"}
                          {template.complexity === "Complex" && "Advanced Setup"}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <Copy className="mr-2 h-3 w-3" />
                        Use Template
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                      >
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Preview
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builder">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Workflow Builder</CardTitle>
              <CardDescription>Create custom automated workflows for your property management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-violet-50/50 border-violet-100">
                  <h3 className="font-medium mb-2 text-violet-800">1. Name Your Workflow</h3>
                  <Input placeholder="Workflow name" className="mb-2 border-violet-200 focus-visible:ring-violet-400" />
                  <Input
                    placeholder="Description (optional)"
                    className="border-violet-200 focus-visible:ring-violet-400"
                  />
                </div>

                <div className="p-4 border rounded-lg bg-indigo-50/50 border-indigo-100">
                  <h3 className="font-medium mb-2 text-indigo-800">2. Select Trigger</h3>
                  <p className="text-sm text-muted-foreground mb-4">Choose what starts your workflow</p>

                  <div className="grid gap-2 md:grid-cols-3">
                    <div className="flex items-center gap-2 p-3 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100/50">
                      <Clock className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm font-medium">Schedule</p>
                        <p className="text-xs text-muted-foreground">Run at specific times</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100/50">
                      <FileText className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm font-medium">Document Event</p>
                        <p className="text-xs text-muted-foreground">When documents change</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100/50">
                      <MessageSquare className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm font-medium">Communication</p>
                        <p className="text-xs text-muted-foreground">Email or message received</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-blue-50/50 border-blue-100">
                  <h3 className="font-medium mb-2 text-blue-800">3. Add Actions</h3>
                  <p className="text-sm text-muted-foreground mb-4">What should happen when the workflow runs?</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border border-blue-200 rounded-lg hover:bg-blue-100/50">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Send Email</p>
                          <p className="text-xs text-muted-foreground">Send automated emails to tenants or staff</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-blue-200 rounded-lg hover:bg-blue-100/50">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Create Document</p>
                          <p className="text-xs text-muted-foreground">Generate documents automatically</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-blue-200 rounded-lg hover:bg-blue-100/50">
                      <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Update Records</p>
                          <p className="text-xs text-muted-foreground">
                            Modify data in your property management system
                          </p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-emerald-50/50 border-emerald-100">
                  <h3 className="font-medium mb-2 text-emerald-800">4. Set Conditions (Optional)</h3>
                  <p className="text-sm text-muted-foreground mb-4">Add logic to control when actions run</p>

                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Condition
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
                Save as Draft
              </Button>
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                Create Workflow
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
