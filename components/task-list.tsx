"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Building2, Calendar, Clock, Filter, Plus, Search, User } from "lucide-react"

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review tenant lease renewal",
      priority: "high",
      assignee: "John Doe",
      dueDate: "Today",
      status: "In Progress",
      tags: ["Leasing", "Tenant"],
      property: "Sunset Apartments",
    },
    {
      id: 2,
      title: "Prepare monthly financial report",
      priority: "medium",
      assignee: "Jane Smith",
      dueDate: "Tomorrow",
      status: "Not Started",
      tags: ["Finance"],
      property: "All Properties",
    },
    {
      id: 3,
      title: "Schedule property viewing",
      priority: "high",
      assignee: "Mike Johnson",
      dueDate: "May 10",
      status: "In Progress",
      tags: ["Property", "Tenant"],
      property: "Riverside Condos",
    },
    {
      id: 4,
      title: "Update tenant database",
      priority: "low",
      assignee: "Sarah Williams",
      dueDate: "May 12",
      status: "Not Started",
      tags: ["Database"],
      property: "All Properties",
    },
    {
      id: 5,
      title: "Send rent payment reminders",
      priority: "medium",
      assignee: "John Doe",
      dueDate: "May 15",
      status: "Not Started",
      tags: ["Finance", "Tenant"],
      property: "Oakwood Townhomes",
    },
    {
      id: 6,
      title: "Coordinate maintenance for Unit 3B",
      priority: "high",
      assignee: "Mike Johnson",
      dueDate: "Today",
      status: "In Progress",
      tags: ["Maintenance", "Property"],
      property: "Sunset Apartments",
    },
  ])

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-amber-500"
      case "low":
        return "text-green-500"
      default:
        return ""
    }
  }

  const getTagColor = (tag) => {
    switch (tag) {
      case "Finance":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
      case "Tenant":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Property":
        return "bg-violet-100 text-violet-800 hover:bg-violet-200"
      case "Maintenance":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200"
      case "Leasing":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
      case "Database":
        return "bg-slate-100 text-slate-800 hover:bg-slate-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-violet-700">Task Management</CardTitle>
            <CardDescription>Manage and track all your property management tasks</CardDescription>
          </div>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tasks..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tasks</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-2 p-3 border rounded-lg hover:bg-violet-50/30 transition-colors"
            >
              <Checkbox id={`task-${task.id}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <label htmlFor={`task-${task.id}`} className="text-sm font-medium cursor-pointer">
                    {task.title}
                  </label>
                  <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {task.assignee}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {task.dueDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {task.status}
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="h-3 w-3" />
                    {task.property}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-end">
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className={`text-xs ${getTagColor(tag)}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">Showing 6 of 24 tasks</div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 hover:bg-violet-50">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 hover:bg-violet-50">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
