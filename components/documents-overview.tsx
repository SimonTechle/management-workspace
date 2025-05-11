"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, Download, File, FileText, Filter, FolderOpen, Plus, Search, Share2, Star, Upload } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DocumentsOverview() {
  const recentDocuments = [
    {
      id: 1,
      name: "Lease Agreement - Sunset Apartments 3B",
      type: "pdf",
      size: "2.4 MB",
      modified: "Today, 10:30 AM",
      shared: true,
      starred: true,
    },
    {
      id: 2,
      name: "Property Financial Report Q1 2023",
      type: "xlsx",
      size: "1.8 MB",
      modified: "Yesterday",
      shared: true,
      starred: false,
    },
    {
      id: 3,
      name: "Property Photos - Riverside Condos",
      type: "folder",
      items: "12 items",
      modified: "May 3, 2023",
      shared: false,
      starred: false,
    },
    {
      id: 4,
      name: "Tenant Onboarding Presentation",
      type: "pptx",
      size: "5.2 MB",
      modified: "May 2, 2023",
      shared: true,
      starred: true,
    },
    {
      id: 5,
      name: "Maintenance Policy Document",
      type: "docx",
      size: "320 KB",
      modified: "April 28, 2023",
      shared: false,
      starred: false,
    },
  ]

  const folders = [
    { id: 1, name: "Lease Agreements", items: 24, modified: "Today" },
    { id: 2, name: "Financial Reports", items: 18, modified: "Yesterday" },
    { id: 3, name: "Property Documents", items: 32, modified: "May 1, 2023" },
    { id: 4, name: "Marketing Materials", items: 15, modified: "April 25, 2023" },
  ]

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-6 w-6 text-red-500" />
      case "docx":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "xlsx":
        return <FileText className="h-6 w-6 text-green-500" />
      case "pptx":
        return <FileText className="h-6 w-6 text-orange-500" />
      case "folder":
        return <FolderOpen className="h-6 w-6 text-amber-500" />
      default:
        return <File className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-700">Document Management</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-violet-200 text-violet-700 hover:bg-violet-50">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search documents..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Documents</SelectItem>
            <SelectItem value="pdf">PDF Files</SelectItem>
            <SelectItem value="docx">Word Documents</SelectItem>
            <SelectItem value="xlsx">Excel Spreadsheets</SelectItem>
            <SelectItem value="pptx">Presentations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="recent" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Recent
          </TabsTrigger>
          <TabsTrigger value="folders" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Folders
          </TabsTrigger>
          <TabsTrigger value="shared" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Shared
          </TabsTrigger>
          <TabsTrigger value="starred" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Starred
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>Files you've recently accessed or modified</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-violet-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getFileIcon(doc.type)}
                      <div>
                        <p className="text-sm font-medium">{doc.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{doc.type === "folder" ? doc.items : doc.size}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {doc.modified}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.shared && (
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                          <Share2 className="mr-1 h-3 w-3" />
                          Shared
                        </Badge>
                      )}
                      {doc.starred && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="folders">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Folders</CardTitle>
              <CardDescription>Organized document collections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-violet-50/30 transition-colors cursor-pointer"
                  >
                    <FolderOpen className="h-12 w-12 text-amber-500 mb-2" />
                    <p className="text-sm font-medium text-center">{folder.name}</p>
                    <p className="text-xs text-muted-foreground">{folder.items} items</p>
                    <p className="text-xs text-muted-foreground">Modified: {folder.modified}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shared">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Shared Documents</CardTitle>
              <CardDescription>Files shared with you or by you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentDocuments
                  .filter((doc) => doc.shared)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-violet-50/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <p className="text-sm font-medium">{doc.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{doc.type === "folder" ? doc.items : doc.size}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {doc.modified}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                          <Share2 className="mr-1 h-3 w-3" />
                          Shared
                        </Badge>
                        {doc.starred && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="starred">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Starred Documents</CardTitle>
              <CardDescription>Your important files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentDocuments
                  .filter((doc) => doc.starred)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-violet-50/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <p className="text-sm font-medium">{doc.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{doc.type === "folder" ? doc.items : doc.size}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {doc.modified}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.shared && (
                          <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                            <Share2 className="mr-1 h-3 w-3" />
                            Shared
                          </Badge>
                        )}
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
