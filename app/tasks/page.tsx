"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, Calendar, Plus, Search, Filter, ChevronDown, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for tasks
  const tasks = {
    upcoming: [
      {
        id: 1,
        title: "Collect rent from Riverside Apartments",
        dueDate: "May 15, 2023",
        priority: "High",
        status: "Pending",
        assignee: "John Smith",
      },
      {
        id: 2,
        title: "Schedule maintenance for Unit 3B",
        dueDate: "May 16, 2023",
        priority: "Medium",
        status: "Pending",
        assignee: "Sarah Johnson",
      },
      {
        id: 3,
        title: "Review lease renewal for John Smith",
        dueDate: "May 18, 2023",
        priority: "Medium",
        status: "Pending",
        assignee: "Michael Brown",
      },
      {
        id: 4,
        title: "Inspect vacant units at Parkview",
        dueDate: "May 20, 2023",
        priority: "Low",
        status: "Pending",
        assignee: "Emily Davis",
      },
    ],
    inProgress: [
      {
        id: 5,
        title: "Process maintenance request for Apt 304",
        dueDate: "May 12, 2023",
        priority: "High",
        status: "In Progress",
        assignee: "David Wilson",
      },
      {
        id: 6,
        title: "Update tenant information in database",
        dueDate: "May 13, 2023",
        priority: "Medium",
        status: "In Progress",
        assignee: "John Smith",
      },
    ],
    completed: [
      {
        id: 7,
        title: "Send welcome package to new tenant",
        dueDate: "May 8, 2023",
        priority: "Medium",
        status: "Completed",
        assignee: "Sarah Johnson",
      },
      {
        id: 8,
        title: "Pay utility bills for Maple Business Center",
        dueDate: "May 10, 2023",
        priority: "High",
        status: "Completed",
        assignee: "Michael Brown",
      },
      {
        id: 9,
        title: "Respond to maintenance emergency at Oakwood",
        dueDate: "May 11, 2023",
        priority: "Critical",
        status: "Completed",
        assignee: "David Wilson",
      },
    ],
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Critical
          </Badge>
        )
      case "High":
        return (
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Medium
          </Badge>
        )
      case "Low":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Low
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            {priority}
          </Badge>
        )
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "Pending":
        return <AlertCircle className="h-5 w-5 text-orange-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  // Filter tasks based on search query
  const filterTasks = (taskList: any[]) => {
    if (!searchQuery) return taskList
    return taskList.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <div className="space-y-6 p-4 lg:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Task Management</h1>
          <p className="text-gray-500 mt-1">Manage and track all your property management tasks</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>All Tasks</DropdownMenuItem>
              <DropdownMenuItem>My Tasks</DropdownMenuItem>
              <DropdownMenuItem>High Priority</DropdownMenuItem>
              <DropdownMenuItem>Due Today</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            Create Task
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search tasks by title or assignee..."
          className="pl-10 h-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="bg-gray-100/80 p-1">
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-white">
            Upcoming ({tasks.upcoming.length})
          </TabsTrigger>
          <TabsTrigger value="inProgress" className="data-[state=active]:bg-white">
            In Progress ({tasks.inProgress.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-white">
            Completed ({tasks.completed.length})
          </TabsTrigger>
          <TabsTrigger value="all" className="data-[state=active]:bg-white">
            All Tasks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card className="shadow-none border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">Upcoming Tasks</CardTitle>
              <CardDescription>Tasks that need to be completed soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filterTasks(tasks.upcoming).length > 0 ? (
                  filterTasks(tasks.upcoming).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">{getStatusIcon(task.status)}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{task.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>{task.assignee}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">{getPriorityBadge(task.priority)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tasks found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inProgress" className="space-y-4">
          <Card className="shadow-none border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">In Progress Tasks</CardTitle>
              <CardDescription>Tasks currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filterTasks(tasks.inProgress).length > 0 ? (
                  filterTasks(tasks.inProgress).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">{getStatusIcon(task.status)}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{task.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>{task.assignee}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">{getPriorityBadge(task.priority)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tasks found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card className="shadow-none border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">Completed Tasks</CardTitle>
              <CardDescription>Tasks that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filterTasks(tasks.completed).length > 0 ? (
                  filterTasks(tasks.completed).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">{getStatusIcon(task.status)}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{task.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>{task.assignee}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">{getPriorityBadge(task.priority)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tasks found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <Card className="shadow-none border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">All Tasks</CardTitle>
              <CardDescription>View and manage all tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filterTasks([...tasks.upcoming, ...tasks.inProgress, ...tasks.completed]).length > 0 ? (
                  filterTasks([...tasks.upcoming, ...tasks.in_Progress, ...tasks.completed]).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">{getStatusIcon(task.status)}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{task.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span>{task.assignee}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">{getPriorityBadge(task.priority)}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No tasks found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
