"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Info,
  Layers,
  LayoutDashboard,
  ListChecks,
  Settings,
  Users,
  Database,
  MessageSquare,
  Calculator,
} from "lucide-react"

export default function ImplementationGuide() {
  return (
    <div className="space-y-6">
      <Card className="border-none bg-gradient-to-r from-violet-50 to-indigo-50 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-violet-600" />
            <CardTitle className="text-xl text-violet-700">SMB Workspace Implementation Guide</CardTitle>
          </div>
          <CardDescription className="text-base">
            A comprehensive guide to implementing the integrated workspace solution for small and medium-sized
            businesses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-medium text-violet-700 mb-2">Objective</h3>
            <p className="text-sm text-slate-600 mb-4">
              Develop a centralized, multi-function, integrated, and automated workspace to streamline administrative
              tasks for Small and Medium-sized Businesses (SMBs), initially focusing on property management, with rapid
              scalability using customizable open-source tools.
            </p>

            <h3 className="text-lg font-medium text-violet-700 mb-2">Key Administrative Inefficiencies in SMBs</h3>
            <div className="space-y-3 mb-4">
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Manual Data Entry and Duplication</p>
                  <p className="text-sm text-slate-600">
                    Leads to errors and wasted time, especially when managing property listings, tenant information, and
                    financial records across multiple non-integrated systems.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Inefficient Client/Tenant Communication & Management</p>
                  <p className="text-sm text-slate-600">
                    Handling numerous inquiries from potential tenants, current residents, and service providers without
                    a centralized system can be overwhelming and lead to missed opportunities or dissatisfaction.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Complex Financial Management</p>
                  <p className="text-sm text-slate-600">
                    Tracking rent payments, managing expenses, and generating financial reports often involve cumbersome
                    manual processes that are prone to inaccuracies.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Disorganized Maintenance Tracking</p>
                  <p className="text-sm text-slate-600">
                    Managing maintenance requests, scheduling repairs, and coordinating with vendors can be chaotic
                    without a streamlined system, impacting tenant satisfaction and property upkeep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tools" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="tools" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Recommended Tools
          </TabsTrigger>
          <TabsTrigger value="approach" className="data-[state=active]:bg-white data-[state=active]:text-violet-700">
            Implementation Approach
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tools">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-emerald-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <Database className="h-4 w-4 text-emerald-600" />
                  </div>
                  <CardTitle>Odoo (Python-based)</CardTitle>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 w-fit">Core Backend</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Comprehensive ERP suite. Excellent for core backend: accounting, CRM (tenant management),
                  project/maintenance tracking, and document management.
                </p>
                <div className="bg-slate-50 p-3 rounded-md border border-slate-100">
                  <h4 className="text-sm font-medium mb-2">Implementation Action:</h4>
                  <p className="text-sm text-slate-600">
                    Start with essential modules (Accounting, CRM, Project). Customize workflows for property
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <CardTitle>SuiteCRM (PHP-based)</CardTitle>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 w-fit">Client Management</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Powerful and flexible CRM. Ideal for dedicated client/tenant lifecycle management and targeted
                  communication.
                </p>
                <div className="bg-slate-50 p-3 rounded-md border border-slate-100">
                  <h4 className="text-sm font-medium mb-2">Implementation Action:</h4>
                  <p className="text-sm text-slate-600">
                    Integrate with Odoo for seamless data flow. Use for managing tenant interactions and marketing
                    efforts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                    <Calculator className="h-4 w-4 text-purple-600" />
                  </div>
                  <CardTitle>Akaunting (PHP-based)</CardTitle>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 w-fit">Accounting</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Free, user-friendly accounting software. Good for SMBs needing a simpler accounting solution or as a
                  supplementary tool.
                </p>
                <div className="bg-slate-50 p-3 rounded-md border border-slate-100">
                  <h4 className="text-sm font-medium mb-2">Implementation Action:</h4>
                  <p className="text-sm text-slate-600">
                    Consider for businesses with less complex financial needs or as an initial step before migrating to
                    Odoo's accounting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approach">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Implementation Approach</CardTitle>
              <CardDescription>A step-by-step guide to implementing the workspace solution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">Identify Core Needs</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Begin by pinpointing the most critical administrative pain points within the specific SMB context
                      (e.g., rent collection, maintenance requests, tenant communication for a property management
                      company).
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-violet-50 rounded-md border border-violet-100">
                      <ListChecks className="h-5 w-5 text-violet-600" />
                      <p className="text-sm">
                        Focus on high-impact areas that cause the most friction in daily operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">Select Appropriate Tools</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Choose open-source tools that best address these core needs. For instance, Odoo could be the
                      primary system for overall business management, while SuiteCRM could be used for more specialized
                      client engagement, and Akaunting for simpler financial tasks.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-violet-50 rounded-md border border-violet-100">
                      <Settings className="h-5 w-5 text-violet-600" />
                      <p className="text-sm">
                        Match tools to specific business requirements rather than forcing processes to fit tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">Prioritize Customization and Integration</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Leverage the open-source nature of these tools to customize them according to the unique workflows
                      and business processes of the SMB. Ensure seamless integration between different tools to maintain
                      data consistency and improve efficiency.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-violet-50 rounded-md border border-violet-100">
                      <Layers className="h-5 w-5 text-violet-600" />
                      <p className="text-sm">
                        Build API connections between systems to ensure data flows seamlessly across platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">Focus on User Experience (UX)</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Design the user interface to be intuitive and easy to use for both internal staff and external
                      stakeholders (e.g., tenants using a portal). A good UX can significantly improve adoption and
                      overall productivity.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-violet-50 rounded-md border border-violet-100">
                      <LayoutDashboard className="h-5 w-5 text-violet-600" />
                      <p className="text-sm">
                        Create consistent, intuitive interfaces that require minimal training for users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">Iterative Development and Feedback</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Start with a Minimum Viable Product (MVP) targeting the most critical functionalities and
                      gradually expand. Regularly gather feedback from users and adapt the solution accordingly.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-violet-50 rounded-md border border-violet-100">
                      <Users className="h-5 w-5 text-violet-600" />
                      <p className="text-sm">
                        Implement feedback loops to continuously improve the system based on real user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-medium text-indigo-700">Goal</h3>
                </div>
                <p className="text-sm text-slate-700">
                  To create a powerful, adaptable, and cost-effective workspace that streamlines administrative tasks,
                  improves efficiency, and supports the growth of SMBs in various sectors, starting with property
                  management.
                </p>
                <div className="mt-4">
                  <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                    Begin Implementation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
